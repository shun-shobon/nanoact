type CreateEventPropName<T extends string> = `on${T}${"Capture" | ""}`;
type TargetEvent<T extends Event, U extends EventTarget> = Omit<
  T,
  "currentTarget"
> & { currentTarget: U };
type TargetEventHandler<T extends Event, U extends EventTarget> = (
  event: TargetEvent<T, U>,
) => void;

type MouseEventNames = "Click" | "MouseOver";
type MouseEventHandlers<T extends Element> = {
  [K in CreateEventPropName<MouseEventNames>]?:
    | TargetEventHandler<MouseEvent, T>
    | undefined;
};

type EventHandlers<T extends Element> = MouseEventHandlers<T>;

export interface HTMLAttributes<T extends Element> extends EventHandlers<T> {
  id?: string | undefined;
  class?: string | undefined;
}
