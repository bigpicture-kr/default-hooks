import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useCallback, useState } from "react";

const useInput = (
  initialValue: string,
  validators?: {
    validator: (value: string) => boolean;
    errorText: string;
    option?: {
      hard: boolean;
    };
  }[]
): {
  value: {
    value: string;
    onChange: (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => void;
  };
  setValue: Dispatch<SetStateAction<string>>;
  error: {
    error: string;
    setError: Dispatch<SetStateAction<string>>;
  };
} => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string>("");

  const onChange = useCallback(
    (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      const {
        currentTarget: { value: _value }
      } = event;

      // 에러였던 요소들 다시 타이핑 시작하면 에러 해제
      if (error !== "") setError("");
      if (validators) {
        let _errorText = "";

        for (let index = 0; index < validators.length; index += 1) {
          const validator = validators[index];

          if (!validator.validator(_value)) {
            _errorText = validator.errorText;
            /*
           hard: true / error: true -> setValue 안 해준다.
           나머지는 걍 해준다.
          */
            if (!validator.option?.hard && _errorText !== "") setValue(_value);
            break;
          }

          setValue(_value);
        }
        if (_errorText !== "") {
          setError(_errorText);
        }
      } else {
        setValue(_value);
      }
    },
    [error]
  );

  return {
    value: { value, onChange },
    setValue,
    error: { error, setError }
  };
};

export default useInput;
