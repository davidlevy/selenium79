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
	// "Gear I love" section — drawn as wireframes by GearArt, oldest first
	gear: [
		{ kind: "delorean", name: "DeLorean DMC-12", year: "1981", note: "Stainless steel, gull-wing doors, 1.21 gigawatts." },
		{ kind: "atari-st", name: "Atari 520 ST", year: "1985", note: "MIDI ports built in: where code and music first met." },
		{ kind: "yamaha-qx5", name: "Yamaha QX5", year: "1986", note: "A hardware sequencer — my first loops, recorded bar by bar." },
		{ kind: "korg-x5", name: "Korg X5", year: "1994", note: "My first synth. 61 keys and endless AI² presets." },
		{ kind: "3m-mouse", name: "3M Ergonomic Mouse", year: "2011", note: "A joystick for the desk: a handshake grip my wrist still thanks me for." },
		{ kind: "boox-nova3", name: "Boox Nova3 Color", year: "2021", note: "Colour e-ink and a pen: reading and sketching without the glow." },
	] as const,
};
