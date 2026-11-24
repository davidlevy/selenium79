import type { APIRoute } from "astro";
import { getEmDashCollection, getSiteSettings } from "emdash";

export const GET: APIRoute = async ({ site, url }) => {
	const siteUrl = site?.toString() || url.origin;
	const settings = await getSiteSettings();
	const siteTitle = settings?.title || "Studio";
	const siteDescription = settings?.tagline || "Design & Development";

	const [projects, posts] = await Promise.all([
		getEmDashCollection("projects", {
			orderBy: { published_at: "desc" },
			limit: 20,
		}),
		getEmDashCollection("posts", {
			orderBy: { published_at: "desc" },
			limit: 20,
		}),
	]);

	const items = [
		...projects.entries.map((e) => ({
			entry: e,
			path: `/work/${e.id}`,
			description: e.data.summary,
		})),
		...posts.entries.map((e) => ({
			entry: e,
			path: `/blog/${e.id}`,
			description: e.data.excerpt,
		})),
	]
		.filter(({ entry }) => entry.data.publishedAt)
		.sort(
			(a, b) =>
				b.entry.data.publishedAt!.getTime() -
				a.entry.data.publishedAt!.getTime(),
		)
		.slice(0, 20)
		.map(({ entry, path, description }) => {
			const link = `${siteUrl}${path}`;
			return `    <item>
      <title>${escapeXml(entry.data.title || "Untitled")}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${entry.data.publishedAt!.toUTCString()}</pubDate>
      <description>${escapeXml(description || "")}</description>
    </item>`;
		})
		.join("\n");

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <description>${escapeXml(siteDescription)}</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

	return new Response(rss, {
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};

const XML_ESCAPE_PATTERNS = [
	[/&/g, "&amp;"],
	[/</g, "&lt;"],
	[/>/g, "&gt;"],
	[/"/g, "&quot;"],
	[/'/g, "&apos;"],
] as const;

function escapeXml(str: string): string {
	let result = str;
	for (const [pattern, replacement] of XML_ESCAPE_PATTERNS) {
		result = result.replace(pattern, replacement);
	}
	return result;
}
