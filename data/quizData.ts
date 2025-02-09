export interface QuizQuestion {
	id: number;
	category: string;
	question: string;
	options: string[];
	correctAnswer: string;
	explanation: string;
}

export interface QuizCategory {
	id: string;
	name: string;
	description: string;
	questions: QuizQuestion[];
}

export const quizCategories: QuizCategory[] = [
	{
		id: "js-basics",
		name: "JavaScript Fundamentals",
		description: "Core concepts of JavaScript programming",
		questions: [
			{
				id: 101,
				category: "JavaScript",
				question: "What is closure in JavaScript?",
				options: [
					"A way to secure code",
					"A function with access to its outer scope",
					"A method to close browser",
					"A type of loop",
				],
				correctAnswer: "A function with access to its outer scope",
				explanation:
					"A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.",
			},
			{
				id: 102,
				category: "JavaScript",
				question: "What is the event loop?",
				options: [
					"A hardware component",
					"A mechanism to handle async operations",
					"A type of for loop",
					"A DOM event",
				],
				correctAnswer: "A mechanism to handle async operations",
				explanation:
					"The event loop is JavaScript's mechanism for handling asynchronous operations through callback queue and microtask queue.",
			},
		],
	},
	{
		id: "react-advanced",
		name: "React Advanced Concepts",
		description: "Advanced React patterns and hooks",
		questions: [
			{
				id: 201,
				category: "React",
				question: "What is the purpose of useMemo?",
				options: [
					"To memoize values",
					"To handle side effects",
					"To create refs",
					"To manage state",
				],
				correctAnswer: "To memoize values",
				explanation:
					"useMemo is used to memoize computed values to optimize performance by preventing unnecessary recalculations.",
			},
		],
	},
];

export const quizData: QuizQuestion[] = [
	{
		id: 1,
		category: "JavaScript",
		question: "What is the output of: console.log(typeof typeof 1)?",
		options: ["number", "string", "undefined", "object"],
		correctAnswer: "string",
		explanation:
			"typeof 1 returns 'number', and typeof 'number' returns 'string'",
	},
	{
		id: 2,
		category: "React",
		question: "Which hook is used for side effects in React?",
		options: ["useEffect", "useState", "useMemo", "useCallback"],
		correctAnswer: "useEffect",
		explanation:
			"useEffect is used for handling side effects like API calls, subscriptions, etc.",
	},
	{
		id: 3,
		category: "TypeScript",
		question:
			"What is the difference between 'interface' and 'type' in TypeScript?",
		options: [
			"They are exactly the same",
			"Interfaces can be extended, types cannot",
			"Types can be used with unions and intersections, interfaces cannot",
			"Interfaces are only for objects, types can be used for any type",
		],
		correctAnswer: "Interfaces can be extended, types cannot",
		explanation:
			"Interfaces are primarily used for describing object shapes and can be extended, while types are more flexible but cannot be extended after creation.",
	},
	{
		id: 4,
		category: "Data Structures",
		question:
			"What is the time complexity of inserting an element at the end of an array?",
		options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
		correctAnswer: "O(1)",
		explanation:
			"Inserting at the end of an array is constant time as it doesn't require shifting other elements.",
	},
	{
		id: 5,
		category: "React",
		question: "What is the purpose of React.memo()?",
		options: [
			"To create a memoized version of a component",
			"To create a new component",
			"To handle memory leaks",
			"To manage state",
		],
		correctAnswer: "To create a memoized version of a component",
		explanation:
			"React.memo() is a higher-order component that prevents unnecessary re-renders by memoizing the component.",
	},
];
