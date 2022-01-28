import rootApi from "./root-api";

export async function getAllTodos(limit) {
    return rootApi.get(`/todos?_limit=${limit}`)
}