import { Dispatch, FormEvent, SetStateAction, useState } from "react";

const useInput = (
  initialValue: string,
  validator?: (value: string) => boolean
): [
  {
    value: string;
    onChange: (
      event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  },
  Dispatch<SetStateAction<string>>
] => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { currentTarget } = event;
    let willUpdate = true;

    if (validator) {
      willUpdate = validator(currentTarget.value);
    }

    if (willUpdate) {
      setValue(currentTarget.value);
    }
  };

  return [{ value, onChange }, setValue];
};

export default useInput;
