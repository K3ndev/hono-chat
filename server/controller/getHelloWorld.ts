import { cors } from "https://deno.land/x/hono@v4.3.7/middleware.ts";
import { Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts"

const api = new Hono

// middlewares
api.use('/hello/*', cors())

api.get('/hello', (c) => {
    return c.json({ message: 'Hello World' })
})

export default api