const Validator = {
  underLengthString: (limit: number) => {
    return (value: string) => value.length <= limit;
  }
};

export default Validator;
