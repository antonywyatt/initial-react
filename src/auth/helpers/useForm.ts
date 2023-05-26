import { useState } from 'react';

interface FormState {
  [key: string]: any;
}

export const useForm = (initialForm: FormState = {}): FormState => {
  const [formState, setFormState] = useState<FormState>(initialForm);

  const onInputChange = ({ target }: { target: { name: string; value: any } }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
