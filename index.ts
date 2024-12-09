import 'dotenv/config'
import { Pipe, getRunner } from "@baseai/core";
import pipeSummarizer from "./baseai/pipes/summarizer";

const pipe = new Pipe(pipeSummarizer())

const userMsg = `the job description for the Full Stack Web Developer position at Late Checkout:
Job Title: Full Stack Web Developer - Late Checkout
Company Overview:
Late Checkout is a product agency providing design and development services to clients ranging from pre-funding startups to Fortune 100 companies. They develop prototypes, MVPs, and foundational builds for their clients, with a focus on creativity and innovation.
Core Values:

Level Up
Be Surprisingly Thoughtful
Put Community First

About the Dev Team:
The development team, known as "The Enginerds," is a small, dynamic team of web developers who rely on each other while taking ownership of individual deliverables. They value clean, consistent, and readable code.
Job Responsibilities:

Collaborate with the team to develop websites and web applications from concept to completion
Write clean, maintainable, and efficient code
Develop web apps, front-end and back-end, using TypeScript/Node.js, HTML, CSS, and React
Implement responsive UI matching design files
Design, build, and maintain databases (Postgres)
Integrate various third-party services into projects via clients and APIs
Implement event-based analytics using tools like Mixpanel and Google Analytics
Collaborate with designers and clients to understand requirements and translate them into technical solutions

Required Technical Skills:

JavaScript/Node.js (TypeScript), HTML, CSS
React (TypeScript)
Tailwind CSS
Postgres + SQL
Source Control (Git)
Platforms: Next.js, Vercel, GitHub
Supabase

Preferred Experience:

Dato CMS
Framer motion for web animation
Event-based Analytics (Mixpanel, GA)
Web-based 3D
Web3 and dApps
Cross-Platform Mobile App development (React Native, Flutter, etc.)
Framer website
Generative AI applications
UI/UX Design

Soft Skills:

Excellent communication skills (written and verbal, English)
Effective time management skills for remote work
Strategic problem-solving abilities for developing prototypes and MVPs
Ability to collaborate effectively and contribute to a positive team environment`;


async function main() {
	const { stream } = await pipe.run({
		messages: [{ role: 'user', content: userMsg }],
		stream: true
	});

	const runner = getRunner(stream);

	// Method 1: Using event listeners
	runner.on('connect', () => {
		console.log('Stream started.\n');
	});

	runner.on('content', content => {
		process.stdout.write(content);
	});

	runner.on('end', () => {
		console.log('\nStream ended.');
	});

	runner.on('error', error => {
		console.error('Error:', error);
	});
}

main()