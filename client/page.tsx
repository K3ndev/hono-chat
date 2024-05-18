/** @jsx jsx */

import { jsx } from "https://deno.land/x/hono@v4.3.7/middleware.ts";
import { Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts"

import Layout from "./component/layout.tsx";

const homeRoute = new Hono()

const mainCss = {
  flex: '1 1 0%'
}

const Home = () => {
  return (
    <Layout>
      <main style={mainCss}>
        <section x-data="{
                  todos: [],
                  async retrieveData() {
                      const response = await fetch('/api/todos');
                      const result = await response.json();
                      this.todos = result;
                  }
              }"
        x-init="retrieveData()">
          <h1>Todo App</h1>
          
          <template x-for="item in todos">
            <div>
              <p x-text="item.todo" />
            </div>
          </template>        
        </section>
      </main>
    </Layout>
  )
}

homeRoute.get('/', (c) => {   
  return c.html(<Home />)
})

export default homeRoute