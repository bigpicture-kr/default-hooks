# `useCountDown`

## Usage

```jsx
import { useCountDown } from "default-hooks";

const Demo = () => {
  const [hoverd, hoverdController] = useMouseHover();

  return (
    <div {...hoverdController}>
      <span>{hoverd ? "hovering now!" : "mouse was leaved :("}</span>
    </div>
  );
};
```
