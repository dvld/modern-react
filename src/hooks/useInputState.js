import { useState } from 'react';

const useInputState = (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, onChange, reset];
};

export default useInputState;
