# `useCheckBrowser`

## Usage

```jsx
import { useInterSection } from "default-hooks";

const Demo = () => {
  const intersectionRef = React.useRef<HTMLDivElement>(null);

  const intersection = useInterSection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  return (
    <SizedBox bgColor="blue" width={500} height={1000}>
      <SizedBox height={300} />
      <h2>
        {intersection?.isIntersecting
          ? "NOW YOU SEE BIGGER THAN HALF"
          : "NOW YOU SEE SMALLER THAN HALF"}
      </h2>
      <FlexCenter ref={intersectionRef}>
        <SizedBox width={100} height={100} bgColor="red" />
      </FlexCenter>
      <h2>
        {intersection?.isIntersecting
          ? "NOW YOU SEE BIGGER THAN HALF"
          : "NOW YOU SEE SMALLER THAN HALF"}
      </h2>
    </SizedBox>
  );
};

```
