import { HTMLAttributes } from "./jsx";

export type VNode<P = {}> = {
  tag: string;
  props: P;
  children: (VNode | string)[];
};

export function h<P = {}>(
  tag: string,
  props: P,
  ...children: (VNode | string)[]
): VNode<unknown> {
  return { tag, props, children };
}

function renderNode<P = {}>(node: VNode<P>): HTMLElement {
  const element = document.createElement(node.tag);

  Object.entries<string>(node.props ? node.props : {}).forEach(([key, value]) =>
    element.setAttribute(key, value),
  );

  node.children.forEach((node) => {
    const child =
      typeof node === "string"
        ? document.createTextNode(node)
        : renderNode(node);
    element.appendChild(child);
  });

  return element;
}

export function render(node: VNode<unknown>, target: HTMLElement) {
  target.appendChild(renderNode(node));
}

declare global {
  namespace JSX {
    interface Element extends VNode<unknown> {}

    interface IntrinsicElements {
      div: HTMLAttributes<HTMLDivElement>;
      span: HTMLAttributes<HTMLSpanElement>;
      h1: HTMLAttributes<HTMLHeadingElement>;
      h2: HTMLAttributes<HTMLHeadingElement>;
      h3: HTMLAttributes<HTMLHeadingElement>;
      h4: HTMLAttributes<HTMLHeadingElement>;
      h5: HTMLAttributes<HTMLHeadingElement>;
      h6: HTMLAttributes<HTMLHeadingElement>;
    }
  }
}
