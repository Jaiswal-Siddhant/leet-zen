import { leetcodeApi } from "./leetcodeApi";
import { QUESTION_LIST_QUERY } from "../../constants";

export async function getRandomLeetCodeQuestion(tags: string[], difficulty: string) {
    const variables = {
        categorySlug: "",
        skip: 0,
        limit: 1000,
        filters: {
            tags,
            difficulty
        }
    };

    const res = await leetcodeApi.post("", {
        query: QUESTION_LIST_QUERY,
        variables,
    });

    const list = res.data.data.problemsetQuestionList;
    return list.questions[Math.floor(Math.random() * list.questions.length)].titleSlug;
}
