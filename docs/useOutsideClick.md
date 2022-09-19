# `useCheckBrowser`

## Usage

```jsx
import { useOutsideClick } from "default-hooks";

const Demo = () => {
  const [isOpen, setIsOpen] = React.useState < boolean > false;
  const containerRef: React.RefObject<HTMLButtonElement> = React.useRef(null);
  useOutsideClick(containerRef, setIsOpen);

  return (
    <>
      <Container
        ref={containerRef}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <span>{isOpen ? "click out to close" : "open"}</span>
      </Container>
      {isOpen && (
        <OptionsWrapper direction="column">
          {["option1", "option2", "option3"].map(option => (
            <span>{option}</span>
          ))}
        </OptionsWrapper>
      )}
    </>
  );
};
```
