/** @jsx jsx */

import { jsx } from "https://deno.land/x/hono@v4.3.7/middleware.ts";
import { Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts"

import Layout from "./component/layout.tsx";

const homeRoute = new Hono()

const mainCss = {
  flex: '1 1 0%'
}

const itemCss = {
  display: "flex",
  justifyItems: "between",
  gap: "1rem",
  marginBottom: "0.5rem"
}

const Home = () => {
  return (
    <Layout>
      <main style={mainCss}>
        <section x-data="{
                  todos: [],
                  newTodo: '',
                  async retrieveData() {
                      const response = await fetch('/api/todos');
                      const result = await response.json();
                      this.todos = result;
                  },
                  async handleAddTodo(event) {
                    event.preventDefault();
                    if (this.newTodo.trim() === '') return;

                    try {
                      const response = await fetch('/api/todos', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ todo: this.newTodo })
                      });
                      this.retrieveData();
                      this.newTodo = '';
                    } catch (error){
                      console.log(error);
                    }
                  }
              }"
        x-init="retrieveData()">
          <h1>Todo App</h1>
          
          <template x-for="item in todos">
            <div style={itemCss} x-data="{isEdit: false}">
              <input type="text" x-model="item.todo" x-text="item.todo" x-bind:disabled="isEdit ? false : true"/>
              <button x-model="item.todo">delete</button>
              <button x-on:click="isEdit = ! isEdit">Toggle Edit</button>
              <button x-show="isEdit">Submit</button>
            </div>
          </template>      

          <form x-on:submit="handleAddTodo">
            <input type="text" x-model="newTodo" placeholder="Add new todo"/>
            <button type="submit" style={{marginLeft: "1rem"}}>Add</button>
          </form>

          <button x-on:click="retrieveData()">Toggle fn</button>
          {/* effects */}
          {/* <div x-init="$watch('todos', value => console.log(value))"/> */}
        </section>
      </main>
    </Layout>
  )
}

homeRoute.get('/', (c) => {   
  return c.html(<Home />)
})

export default homeRoute