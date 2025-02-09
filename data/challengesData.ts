export interface CodeChallenge {
	id: number;
	title: string;
	category: "Arrays" | "Strings" | "Dynamic Programming" | "Trees" | "Graphs";
	difficulty: "Easy" | "Medium" | "Hard";
	description: string;
	starterCode: string;
	testCases: { input: string; output: string }[];
	constraints: string[];
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
];

export const challengeCategories = [
	"Arrays",
	"Strings",
	"Dynamic Programming",
	"Trees",
	"Graphs",
];
