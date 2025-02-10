export interface CodeChallenge {
	id: number;
	title: string;
	category: "Arrays" | "Strings" | "Dynamic Programming" | "Trees" | "Graphs";
	difficulty: "Easy" | "Medium" | "Hard";
	description: string;
	starterCode: string;
	testCases: { input: string; output: string }[];
	constraints: string[];
	hints?: string[];
}

export const codeChallenges: CodeChallenge[] = [
	{
		id: 1,
		title: "Two Sum",
		category: "Arrays",
		difficulty: "Easy",
		description:
			"Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.",
		constraints: [
			"2 ≤ nums.length ≤ 104",
			"-109 ≤ nums[i] ≤ 109",
			"Only one valid answer exists",
		],
		starterCode: `function twoSum(nums: number[], target: number): number[] {
  // Your code here
}`,
		testCases: [
			{ input: "[2,7,11,15], 9", output: "[0,1]" },
			{ input: "[3,2,4], 6", output: "[1,2]" },
		],
	},
	{
		id: 2,
		title: "Longest Palindromic Substring",
		category: "Dynamic Programming",
		difficulty: "Medium",
		description:
			"Given a string s, return the longest palindromic substring in s.",
		constraints: [
			"1 ≤ s.length ≤ 1000",
			"s consist of only digits and English letters",
		],
		starterCode: `function longestPalindrome(s: string): string {
  // Your code here
}`,
		testCases: [
			{ input: "'babad'", output: "'bab'" },
			{ input: "'cbbd'", output: "'bb'" },
		],
	},
	{
		id: 3,
		title: "Binary Tree Level Order Traversal",
		category: "Trees",
		difficulty: "Medium",
		description:
			"Given the root of a binary tree, return the level order traversal of its nodes' values.",
		constraints: [
			"The number of nodes in the tree is in the range [0, 2000]",
			"-1000 ≤ Node.val ≤ 1000",
		],
		starterCode: `class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  // Your code here
}`,
		testCases: [
			{ input: "[3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" },
			{ input: "[1]", output: "[[1]]" },
		],
	},
	{
		id: 4,
		title: "Reverse Linked List",
		category: "Dynamic Programming",
		difficulty: "Easy",
		description:
			"Given the head of a singly linked list, reverse the list, and return the reversed list.",
		constraints: [
			"The number of nodes in the list is the range [0, 5000]",
			"-5000 <= Node.val <= 5000",
		],
		starterCode: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    // Your code here
}`,
		testCases: [
			{ input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" },
			{ input: "[1,2]", output: "[2,1]" },
			{ input: "[]", output: "[]" },
		],
		hints: [
			"Think about how you would reverse the list manually.",
			"Change the direction of the pointers.",
		],
	},
	{
		id: 5,
		title: "Valid Anagram",
		category: "Strings",
		difficulty: "Easy",
		description:
			"Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
		constraints: [
			"1 <= s.length, t.length <= 5 * 104",
			"s and t consist of lowercase English letters.",
		],
		starterCode: `function isAnagram(s: string, t: string): boolean {
    // Your code here
}`,
		testCases: [
			{ input: "'anagram', 'nagaram'", output: "true" },
			{ input: "'rat', 'car'", output: "false" },
		],
		hints: [
			"Use a hash map to count the frequency of each character.",
			"Compare the frequency of characters in both strings.",
		],
	},
	{
		id: 6,
		title: "Merge Intervals",
		category: "Arrays",
		difficulty: "Medium",
		description:
			"Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
		constraints: [
			"1 <= intervals.length <= 104",
			"intervals[i].length == 2",
			"0 <= starti <= endi <= 104",
		],
		starterCode: `function merge(intervals: number[][]): number[][] {
    // Your code here
}`,
		testCases: [
			{
				input: "[[1,3],[2,6],[8,10],[15,18]]",
				output: "[[1,6],[8,10],[15,18]]",
			},
			{ input: "[[1,4],[4,5]]", output: "[[1,5]]" },
		],
		hints: [
			"Sort the intervals by start time.",
			"Merge overlapping intervals iteratively.",
		],
	},
	{
		id: 7,
		title: "Clone Graph",
		category: "Graphs",
		difficulty: "Medium",
		description:
			"Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph. Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.",
		constraints: [
			"The number of nodes in the graph is in the range [0, 100].",
			"1 <= Node.val <= 100",
			"Node.val is unique for each node.",
			"There are no repeated edges and no self-loops in the graph.",
			"The graph is connected and all nodes can be visited starting from the given node.",
		],
		starterCode: `/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    // Your code here
}`,
		testCases: [
			{
				input: "[[2,4],[1,3],[2,4],[1,3]]",
				output: "[[2,4],[1,3],[2,4],[1,3]]",
			},
			{ input: "[[]]", output: "[[]]" },
		],
		hints: [
			"Use Depth First Search (DFS) or Breadth First Search (BFS) to traverse the graph.",
			"Maintain a hash map to store visited nodes and their clones.",
		],
	},
];

export const challengeCategories = [
	"Arrays",
	"Strings",
	"Dynamic Programming",
	"Trees",
	"Graphs",
];
