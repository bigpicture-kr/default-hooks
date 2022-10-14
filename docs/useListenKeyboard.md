# `useAsyncEffect`

## Usage

```jsx
import { useListenKeyboard } from "default-hooks";

const Demo = () => {
  const [clickCount, setClickCount] = React.useState < number > 0;

  useListenKeyboard({
    key: "b",
    handler: () => {
      setClickCount(clickCount + 1);
    }
  });

  return (
    <div>
      <h1>feel free and click "b" key in your keyboard</h1>
      <h2>you clicked {clickCount} now!</h2>
    </div>
  );
};
```
