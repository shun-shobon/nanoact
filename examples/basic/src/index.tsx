import { render } from "nanoact";

const root = (
  // @ts-ignore
  <div class="root">
    {/* @ts-ignore */}
    <h1>Hello, world!</h1>
    {/* @ts-ignore */}
  </div>
);

render(root, document.body);

export {};
