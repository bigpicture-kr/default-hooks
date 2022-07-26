# `useCheckBrowser`

## Usage

```jsx
import { useInput } from "default-hooks";

const Demo = () => {
  const LIMIT = 10;
  const name = useInput("initialName", [
    {
      validator: Validator.underLengthString(LIMIT),
      errorText: `type under ${LIMIT}`
    }
  ]);

  /*
  value : {onChange, value}
  setValue: Dispatch<SetStateAction<string>>
  error: {errorText,setError}
  */

  const { value, setValue, error } = name;
  return (
    <div>
      <div>
        <span>what's your name</span>
        <input {...value} />
      </div>

      <span>this is real state : {value.value}</span>

      <div>
        <button
          onClick={() => {
            setValue("");
          }}
        >
          click to clear
        </button>
      </div>

      <div>
        <span>this is error text: {error.error}</span>
      </div>
    </div>
  );
};
```
