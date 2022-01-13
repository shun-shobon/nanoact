export type VNode<P = {}> = {
  tag: string;
  props: P;
  children: (VNode | string)[];
};

export function h<P = {}>(
  tag: string,
  props: P,
  ...children: (VNode | string)[]
): VNode<P> {
  return { tag, props, children };
}

function renderNode<P = {}>(node: VNode<P>): HTMLElement {
  const element = document.createElement(node.tag);

  Object.entries<string>(node.props ? node.props : {}).forEach(([key, value]) =>
    element.setAttribute(key, value),
  );

  node.children.forEach((node) => {
    const child = typeof node === 'string' ? document.createTextNode(node) : renderNode(node);
    element.appendChild(child);
  });

  return element;
}

export function render(node: VNode, target: HTMLElement) {
  target.appendChild(renderNode(node));
}
