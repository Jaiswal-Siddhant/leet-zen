import { Options } from '../types/OptionsStateMachine';

const DIFFICULTY_OPTIONS: Options[] = [
    {
        key: 'Any',
        value: '',
    },
    {
        key: 'Easy',
        value: 'EASY',
    },
    {
        key: 'Medium',
        value: 'MEDIUM',
    },
    {
        key: 'Hard',
        value: 'HARD',
    },
];

const ALL_TAGS: Options[] = [
    { key: "Arrays", value: "array" },
    { key: "Strings", value: "string" },
    { key: "Dynamic Programming", value: "dynamic-programming" },
    { key: "Math", value: "math" },
    { key: "Two Pointers", value: "two-pointers" },
    { key: "Greedy", value: "greedy" },
    { key: "Hash Table", value: "hash-table" },
    { key: "Sorting", value: "sorting" },
    { key: "Binary Search", value: "binary-search" },
    { key: "Sliding Window", value: "sliding-window" },
    { key: "Linked List", value: "linked-list" },
    { key: "Stack", value: "stack" },
    { key: "Queue", value: "queue" },
    { key: "Heap (Priority Queue)", value: "heap-priority-queue" },
    { key: "Trees", value: "tree" },
    { key: "Binary Tree", value: "binary-tree" },
    { key: "Binary Search Tree", value: "binary-search-tree" },
    { key: "Graphs", value: "graph" },
    { key: "Backtracking", value: "backtracking" },
    { key: "Bit Manipulation", value: "bit-manipulation" },
    { key: "Prefix Sum", value: "prefix-sum" },
    { key: "Simulation", value: "simulation" },
    { key: "Matrix", value: "matrix" },
    { key: "Intervals", value: "intervals" },
    { key: "Design", value: "design" },
    { key: "Math Geometry", value: "geometry" },
    { key: "Trie", value: "trie" },
    { key: "Recursion", value: "recursion" },
    { key: "Union Find (DSU)", value: "union-find" },
    { key: "Monotonic Stack", value: "monotonic-stack" },
    { key: "Counting", value: "counting" },
    { key: "Memoization", value: "memoization" },
];


export { DIFFICULTY_OPTIONS, ALL_TAGS };
