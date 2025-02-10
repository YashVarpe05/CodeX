export interface RoadmapNode {
	id: string;
	title: string;
	description: string;
	children?: RoadmapNode[];
	status?: "required" | "recommended" | "optional";
	link?: string;
}

export const placementRoadmap: RoadmapNode = {
	id: "placement",
	title: "Placement Preparation Roadmap",
	description: "A detailed roadmap to prepare for placements",
	children: [
		{
			id: "coding",
			title: "Coding Fundamentals",
			description: "Essential coding skills for placements",
			status: "required",
			children: [
				{
					id: "datastructures",
					title: "Data Structures and Algorithms",
					description: "Master data structures and algorithms",
					status: "required",
					children: [
						{
							id: "arrays",
							title: "Arrays",
							description: "Arrays and their applications",
							status: "required",
							link: "https://www.geeksforgeeks.org/array-data-structure/",
						},
						{
							id: "linkedlist",
							title: "Linked Lists",
							description: "Singly, doubly, and circular linked lists",
							status: "required",
							link: "https://www.geeksforgeeks.org/data-structures/linked-list/",
						},
						{
							id: "stacks",
							title: "Stacks",
							description: "Stack data structure and its applications",
							status: "required",
							link: "https://www.geeksforgeeks.org/stack-data-structure/",
						},
						{
							id: "queues",
							title: "Queues",
							description: "Queue data structure and its applications",
							status: "required",
							link: "https://www.geeksforgeeks.org/queue-data-structure/",
						},
						{
							id: "trees",
							title: "Trees",
							description: "Binary trees, BSTs, and tree traversals",
							status: "required",
							link: "https://www.geeksforgeeks.org/data-structures/trees/",
						},
						{
							id: "graphs",
							title: "Graphs",
							description: "Graph representation and algorithms",
							status: "required",
							link: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
						},
						{
							id: "hashing",
							title: "Hashing",
							description: "Hashing techniques and collision resolution",
							status: "required",
							link: "https://www.geeksforgeeks.org/hashing-data-structure/",
						},
						{
							id: "heaps",
							title: "Heaps",
							description: "Heap data structure and its applications",
							status: "required",
							link: "https://www.geeksforgeeks.org/heap-data-structure/",
						},
					],
				},
				{
					id: "algorithms",
					title: "Algorithms",
					description: "Important algorithms for problem-solving",
					status: "required",
					children: [
						{
							id: "sorting",
							title: "Sorting Algorithms",
							description: "Quick Sort, Merge Sort, Heap Sort, etc.",
							status: "required",
							link: "https://www.geeksforgeeks.org/sorting-algorithms/",
						},
						{
							id: "searching",
							title: "Searching Algorithms",
							description: "Binary Search, Linear Search",
							status: "required",
							link: "https://www.geeksforgeeks.org/searching-algorithms/",
						},
						{
							id: "dynamicprogramming",
							title: "Dynamic Programming",
							description: "DP techniques and problem-solving",
							status: "recommended",
							link: "https://www.geeksforgeeks.org/dynamic-programming/",
						},
						{
							id: "greedyalgorithms",
							title: "Greedy Algorithms",
							description: "Greedy approach and its applications",
							status: "recommended",
							link: "https://www.geeksforgeeks.org/greedy-algorithms/",
						},
					],
				},
				{
					id: "oops",
					title: "Object-Oriented Programming",
					description: "OOP concepts and principles",
					status: "required",
					children: [
						{
							id: "inheritance",
							title: "Inheritance",
							description: "Inheritance and its types",
							status: "required",
							link: "https://www.geeksforgeeks.org/inheritance-in-java/",
						},
						{
							id: "polymorphism",
							title: "Polymorphism",
							description: "Polymorphism types and usage",
							status: "required",
							link: "https://www.geeksforgeeks.org/polymorphism-in-java/",
						},
						{
							id: "abstraction",
							title: "Abstraction",
							description: "Abstraction and its benefits",
							status: "required",
							link: "https://www.geeksforgeeks.org/abstraction-in-java/",
						},
						{
							id: "encapsulation",
							title: "Encapsulation",
							description: "Encapsulation and its advantages",
							status: "required",
							link: "https://www.geeksforgeeks.org/encapsulation-in-java/",
						},
					],
				},
			],
		},
		{
			id: "problemsolving",
			title: "Problem Solving",
			description: "Practice coding problems on various platforms",
			status: "required",
			children: [
				{
					id: "leetcode",
					title: "LeetCode",
					description: "Solve problems on LeetCode",
					status: "recommended",
					link: "https://leetcode.com/",
				},
				{
					id: "geeksforgeeks",
					title: "GeeksforGeeks",
					description: "Practice problems on GeeksforGeeks",
					status: "recommended",
					link: "https://www.geeksforgeeks.org/",
				},
				{
					id: "hackerrank",
					title: "HackerRank",
					description: "Solve problems on HackerRank",
					status: "recommended",
					link: "https://www.hackerrank.com/",
				},
			],
		},
		{
			id: "technicalskills",
			title: "Technical Skills",
			description: "Skills to showcase during placements",
			status: "required",
			children: [
				{
					id: "programminglanguages",
					title: "Programming Languages",
					description: "Proficiency in one or more languages",
					status: "required",
					children: [
						{
							id: "c++",
							title: "C++",
							description: "Strong knowledge of C++",
							status: "recommended",
						},
						{
							id: "java",
							title: "Java",
							description: "Strong knowledge of Java",
							status: "recommended",
						},
						{
							id: "python",
							title: "Python",
							description: "Strong knowledge of Python",
							status: "recommended",
						},
					],
				},
				{
					id: "databases",
					title: "Databases",
					description: "Knowledge of database management systems",
					status: "recommended",
					children: [
						{
							id: "sql",
							title: "SQL",
							description: "SQL database knowledge",
							status: "recommended",
						},
						{
							id: "nosql",
							title: "NoSQL",
							description: "NoSQL database knowledge",
							status: "optional",
						},
					],
				},
				{
					id: "webdevelopment",
					title: "Web Development",
					description: "Basics of web development",
					status: "optional",
					children: [
						{
							id: "frontend",
							title: "Frontend",
							description: "HTML, CSS, JavaScript",
							status: "optional",
						},
						{
							id: "backend",
							title: "Backend",
							description: "Node.js, Express.js",
							status: "optional",
						},
					],
				},
			],
		},
		{
			id: "aptitude",
			title: "Aptitude",
			description: "Aptitude preparation is crucial for placements",
			status: "required",
			children: [
				{
					id: "quantitative",
					title: "Quantitative Aptitude",
					description: "Numerical ability and problem-solving",
					status: "required",
					link: "https://www.indiabix.com/aptitude/questions-and-answers/",
				},
				{
					id: "reasoning",
					title: "Logical Reasoning",
					description: "Logical deduction and problem-solving",
					status: "required",
					link: "https://www.indiabix.com/logical-reasoning/questions-and-answers/",
				},
				{
					id: "verbal",
					title: "Verbal Ability",
					description: "English language and comprehension",
					status: "required",
					link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
				},
			],
		},
		{
			id: "interview",
			title: "Interview Preparation",
			description: "Preparing for technical and HR interviews",
			status: "required",
			children: [
				{
					id: "technicalinterview",
					title: "Technical Interview",
					description: "Prepare for coding and technical questions",
					status: "required",
					children: [
						{
							id: "codingquestions",
							title: "Coding Questions",
							description: "Practice coding questions",
							status: "required",
						},
						{
							id: "systemdesign",
							title: "System Design",
							description: "Basic system design concepts",
							status: "recommended",
						},
					],
				},
				{
					id: "hRinterview",
					title: "HR Interview",
					description: "Prepare for HR questions",
					status: "required",
					children: [
						{
							id: "commonquestions",
							title: "Common HR Questions",
							description: "Prepare answers for common HR questions",
							status: "required",
						},
						{
							id: "companyresearch",
							title: "Company Research",
							description: "Research about the company",
							status: "required",
						},
					],
				},
			],
		},
		{
			id: "projects",
			title: "Projects",
			description: "Work on personal projects to showcase skills",
			status: "recommended",
			children: [
				{
					id: "personalprojects",
					title: "Personal Projects",
					description: "Develop and showcase personal projects",
					status: "recommended",
				},
				{
					id: "opensource",
					title: "Open Source Contributions",
					description: "Contribute to open source projects",
					status: "optional",
				},
			],
		},
	],
};
