export interface RoadmapNode {
	id: string;
	title: string;
	description: string;
	children?: RoadmapNode[];
	status?: "required" | "recommended" | "optional";
}

export const frontendRoadmap: RoadmapNode = {
	id: "frontend",
	title: "Frontend Development",
	description: "Complete path to becoming a frontend developer",
	children: [
		{
			id: "html",
			title: "HTML",
			description: "Learn the basics of HTML5",
			status: "required",
			children: [
				{
					id: "semantic",
					title: "Semantic HTML",
					description: "Understanding semantic elements",
					status: "required",
				},
			],
		},
		// Add more nodes...
	],
};

export const developmentPaths = {
	frontend: {
		id: "frontend",
		title: "Frontend Development",
		description: "Complete path to becoming a frontend developer",
		children: [
			{
				id: "html-css",
				title: "HTML & CSS",
				status: "required",
				children: [
					{
						id: "html5",
						title: "HTML5 Fundamentals",
						description: "Modern HTML elements and APIs",
						status: "required",
						children: [
							{ id: "semantic", title: "Semantic HTML", status: "required" },
							{
								id: "forms",
								title: "Forms and Validation",
								status: "required",
							},
							{
								id: "accessibility",
								title: "Web Accessibility",
								status: "required",
							},
						],
					},
					{
						id: "css3",
						title: "CSS3",
						status: "required",
						children: [
							{ id: "flexbox", title: "Flexbox", status: "required" },
							{ id: "grid", title: "CSS Grid", status: "required" },
							{ id: "animations", title: "Animations", status: "recommended" },
						],
					},
				],
			},
			{
				id: "javascript",
				title: "JavaScript",
				status: "required",
				children: [
					{ id: "es6", title: "ES6+ Features", status: "required" },
					{ id: "async", title: "Async Programming", status: "required" },
					{ id: "typescript", title: "TypeScript", status: "recommended" },
				],
			},
		],
	},
	backend: {
		id: "backend",
		title: "Backend Development",
		description: "Path to becoming a backend developer",
		children: [
			{
				id: "languages",
				title: "Programming Languages",
				status: "required",
				children: [
					{
						id: "nodejs",
						title: "Node.js",
						status: "recommended",
						children: [
							{ id: "express", title: "Express.js", status: "recommended" },
							{ id: "nestjs", title: "NestJS", status: "optional" },
						],
					},
				],
			},
			{
				id: "databases",
				title: "Databases",
				status: "required",
				children: [
					{
						id: "sql",
						title: "SQL Databases",
						status: "required",
						children: [
							{ id: "postgresql", title: "PostgreSQL", status: "recommended" },
							{ id: "mysql", title: "MySQL", status: "recommended" },
						],
					},
					{
						id: "nosql",
						title: "NoSQL Databases",
						status: "recommended",
						children: [
							{ id: "mongodb", title: "MongoDB", status: "recommended" },
							{ id: "redis", title: "Redis", status: "optional" },
						],
					},
				],
			},
		],
	},
	devops: {
		id: "devops",
		title: "DevOps",
		description: "Path to becoming a DevOps engineer",
		children: [
			{
				id: "containers",
				title: "Containerization",
				status: "required",
				children: [
					{ id: "docker", title: "Docker", status: "required" },
					{ id: "kubernetes", title: "Kubernetes", status: "recommended" },
				],
			},
		],
	},
};
