# `useCountDown`

## Usage

```jsx
import { useCountDown } from "default-hooks";

const Demo = () => {
  const [time, finish] = useCountDown("2022-08-31T23:59");

  return (
    <ul>
      <li>days: {time.days}</li>
      <li>hours: {time.hours}</li>
      <li>minutes: {time.minutes}</li>
      <li>seconds: {time.seconds}</li>
    </ul>
  );
};
```
