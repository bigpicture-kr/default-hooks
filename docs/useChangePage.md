# `useChangePage`

## Usage

```jsx
import { useChangePage } from "default-hooks";

const Demo = () => {
  // get from your server
  const TOTAL_PAGE = 10;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { handler, disabled } = useChangePage(
    currentPage,
    setCurrentPage,
    TOTAL_PAGE
  );
  return (
    <FlexCenter>
      <button
        title="go previous page"
        onClick={() => {
          handler("prev");
        }}
        disabled={disabled.prev}
      >
        {"<"}
      </button>

      <FlexBox gap={5}>
        {[...Array(10)].map((_, index) => (
          <Page
            key={index}
            selected={index === currentPage}
            onClick={() => [setCurrentPage(index)]}
          >
            {index + 1}
          </Page>
        ))}
      </FlexBox>
      <button
        title="go next page"
        onClick={() => {
          handler("next");
        }}
        disabled={disabled.next}
      >
        {">"}
      </button>
    </FlexCenter>
  );
};
```