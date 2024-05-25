import { Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts"
import DATA from "../mockData/data.ts";

const apiTodo = new Hono

// GET DATA
apiTodo.get('/todos', (c) => {
    return c.json(DATA)
})
// POST DATA (add)
apiTodo.post('/todos', async(c) => {
    const newTodo = await c.req.json();
    DATA.push(newTodo)
    return c.status(200)
})

export default apiTodo