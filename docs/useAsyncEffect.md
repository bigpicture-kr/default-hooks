# `useAsyncEffect`

## Usage

```jsx
import { useAsyncEffect } from "default-hooks";

const Demo = () => {
  const [result, setResult] = React.useState<ItemType[]>([]);
  useAsyncEffect(async () => {
    const list = await axios.get<ItemType[]>(
      "https://picsum.photos/v2/list?page=2&limit=50"
    );

    setResult(list.data);
  }, []);

  return (
    <div>
      {result.map(item => (
        <span key={item.id} style={{ display: "inline-block" }}>
          hi I'm {item.author}
        </span>
      ))}
    </div>
  );
};
```
