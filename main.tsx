/** @jsx jsx */

import { Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts"
import { jsx } from "https://deno.land/x/hono@v4.3.7/middleware.ts"
import Home from "./client/page.tsx";
import api from "./server/controller/getHelloWorld.ts";

const app = new Hono()

// client routes
app.get('/', (c) => {
    return c.html(<Home />)
})
app.post('/api/clicked', (c) => {
    return c.html(<p>HTMX</p>)
});

// server routes
app.route('/api', api)

Deno.serve(app.fetch)