/** @jsx jsx */

import { jsx } from "https://deno.land/x/hono@v4.3.7/middleware.ts";
import { Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts"

import Layout from "./component/layout.tsx";

const app = new Hono()

const mainCss = {
  flex: '1 1 0%'
}

const Home = () => {
  return (
    <Layout>
      <main style={mainCss}>
        <section>
          <h1 x-data="{ message: 'Hono Chat' }" x-text="message"></h1>
          <div x-data="{ count: 0 }">
              <button x-on:click="count++">Increment</button>
          
              <span x-text="count"></span>
          </div>
          <button hx-post="/api/clicked" hx-swap="outerHTML">
            Click Me
          </button>
        </section>
      </main>
    </Layout>
  )
}

export default Home