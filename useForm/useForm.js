import { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onResetForm = () => {
    setValues( initialState );
  }

  const onInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [ ...values, values, onInputChange, onResetForm ];
};

export default useForm;
