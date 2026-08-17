import { leetcodeApi } from "./leetcodeApi";
import { QUESTION_LIST_QUERY } from "../../constants";

const DIFFICULTIES = ['EASY', 'MEDIUM', 'HARD'];

export async function getRandomLeetCodeQuestion(tags: string[], difficulty: string) {
    const resolvedDifficulty = difficulty || DIFFICULTIES[Math.floor(Math.random() * DIFFICULTIES.length)];

    const variables = {
        categorySlug: "",
        skip: 0,
        limit: 1000,
        filters: {
            tags,
            difficulty: resolvedDifficulty,
        }
    };

    const res = await leetcodeApi.post("", {
        query: QUESTION_LIST_QUERY,
        variables,
    });

    const list = res.data.data.problemsetQuestionList;
    return list.questions[Math.floor(Math.random() * list.questions.length)].titleSlug;
}
