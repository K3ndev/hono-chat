import { Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts"
import DATA from "../mockData/data.ts";

const apiTodo = new Hono

//
apiTodo.get('/todos', (c) => {
    return c.json(DATA)
})

export default apiTodo