# useForm
Ejemplo:
```
const initialForm = {
    name: '',
    age: 0,
    email: ''
};

const { formState, onInputChange, onResetForm } = useForm( initialForm );
const { name, age, email } = formState
o
const { onInputChange, onResetForm, formState, name, age, email } = useForm( initialForm );
```