
import rootApi from "./root";

export function getAllTodos(){
    return rootApi.get("/todos")
}