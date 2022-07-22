# `useCheckBrowser`

## Usage

```jsx
import { useInput } from "default-hooks";

const Demo = () => {
  const name = useInput("initial");

  return (
    <div>
      <input {...name} />
    </div>
  );
};
```
