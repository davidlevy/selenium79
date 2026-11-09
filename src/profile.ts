// Personal details that don't belong in the CMS schema.
// Name, tagline, LinkedIn and GitHub are edited in the admin (Settings).
export const profile = {
	soundcloud: "https://soundcloud.com/david-levy",
	email: "" as string, // public contact email — empty hides every email button/link
	availability: "Open to new roles · Israel / Remote",
	lede: "25 years building products with React, Node, TypeScript and Python — from 0-to-1 AI SaaS to e-commerce at 20M+ users. I lead distributed teams to ship quality at scale with agentic SDLC practices.",
	skills: [
		"TypeScript",
		"React",
		"Next.js",
		"React Native",
		"Node.js",
		"GraphQL",
		"Python",
		"PostgreSQL",
		"AWS",
		"Playwright",
		"Claude Code · MCP",
		"Tech hiring & mentoring",
	],
	education: [
		{ title: "webMethods 6 Certified Developer", school: "EAI / BPM · Vistali, Paris", year: "2004" },
		{ title: "Computer Science Engineer", school: "IMAC Engineering School, Paris", year: "2002" },
		{ title: "Classes préparatoires PSI*", school: "Lycée Jean-Baptiste Say, Paris", year: "1999" },
	],
	languages: [
		{ name: "French", level: "Native" },
		{ name: "English", level: "Fluent" },
		{ name: "Hebrew", level: "Fluent" },
		{ name: "Spanish", level: "Elementary" },
		{ name: "Russian", level: "Elementary" },
	],
	beyondCode: [
		{ label: "Piano — improvisation & composition", icon: "piano" },
		{ label: "Ecology, sustainability & low-tech", icon: "leaf" },
		{ label: "UI/UX and industrial design", icon: "design" },
		{ label: "Back to the Future — 1.21 gigawatts", icon: "timetravel" },
		{ label: "Coldplay — a sky full of stars", icon: "stars" },
	],
	community: { name: "Agentic Israel", url: "https://www.agenticisrael.com/", blurb: "Israel's English-speaking community for people building with AI" },
};
