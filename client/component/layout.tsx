/** @jsx jsx */

import { FC, jsx } from "https://deno.land/x/hono@v4.3.7/middleware.ts";
import { Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts"

const app = new Hono()

const htmlCss = {
    margin : '0',
    padding: '0',
}

const bodyCss = {
    margin : '0',
    padding: '0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
}

const Layout: FC = (props) => {
  return (
    <html lang="en" style={htmlCss}>
        <head>
            <title>Hono Todo</title>
            {/* alpine */}
            <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" />
        </head>
      <body style={bodyCss}>
        <header>header</header>
        {props.children}
        <footer>footer</footer>
      </body>
    </html>
  )
}

export default Layout