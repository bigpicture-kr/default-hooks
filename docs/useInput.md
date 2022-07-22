# `useCheckBrowser`

## Usage

```jsx
import { useInput } from "default-hooks";

const Demo = () => {
  // [{value,onChange}, setter]
  const [name, setName] = useInput("initial");

  return (
    <div>
      <input {...name} />
      <button
        onClick={() => {
          setName("");
        }}
      >
        click to clear
      </button>
    </div>
  );
};
```
