import axios from "axios";

export const leetcodeApi = axios.create({
    baseURL: "https://leetcode.com/graphql",
    headers: {
        "Content-Type": "application/json",
    },
});
