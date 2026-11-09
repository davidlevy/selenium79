// Recently starred repositories for a GitHub user, newest first.
// Edge-cached for an hour (GitHub allows 60 unauthenticated requests/hour per IP);
// any failure returns an empty list so the page still renders.

export interface StarredRepo {
	name: string; // owner/repo
	url: string;
	description: string;
	language: string | null;
	stars: number;
}

export async function getRecentStars(user: string, count = 10): Promise<StarredRepo[]> {
	try {
		const res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/starred?per_page=${count}`, {
			headers: { Accept: "application/vnd.github+json", "User-Agent": "selenium79-site" },
			signal: AbortSignal.timeout(4000),
			// Cloudflare edge cache for this subrequest
			cf: { cacheTtl: 3600, cacheEverything: true },
		} as RequestInit);
		if (!res.ok) return [];
		const repos = (await res.json()) as {
			full_name: string;
			html_url: string;
			description: string | null;
			language: string | null;
			stargazers_count: number;
		}[];
		return repos.map((r) => ({
			name: r.full_name,
			url: r.html_url,
			description: r.description ?? "",
			language: r.language,
			stars: r.stargazers_count,
		}));
	} catch {
		return [];
	}
}

/** 497405 → "497k", 7068 → "7.1k", 51 → "51" */
export function formatStars(n: number): string {
	if (n >= 100_000) return `${Math.round(n / 1000)}k`;
	if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
	return String(n);
}
