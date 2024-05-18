import { Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts"
import api from "./server/controller/getHelloWorld.ts";
import routeTodo from "./server/controller/getTodo.ts";
import homeRoute from "./client/page.tsx";

const app = new Hono()

// client routes
app.route('/', homeRoute)

// server routes
app.route('/api', api)
app.route('/api', routeTodo)

Deno.serve(app.fetch)