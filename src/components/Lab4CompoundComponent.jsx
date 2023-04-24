// Lab question 4: Create a compound component that renders a form with multiple input fields. The component should manage the state of the inputs and provide a way for the parent component to submit the form.

import React, { useState } from 'react';

// Compound Component
const Form = ({ children, onSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          handleChange,
          formValues,
        })
      )}
    </form>
  );
};

// Input component
const Input = ({ name, type, handleChange, formValues }) => (
  <input
    type={type}
    name={name}
    value={formValues[name] || ''}
    onChange={handleChange}
  />
);


const Lab4CompoundComponent = () => {
  const handleSubmit = (formData) => {
    console.log(formData); // show the submitted data on the log
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="name" />
      <Input type="email" name="email" />
      <button type="submit">check log</button>
    </Form>
  );
};

export default Lab4CompoundComponent;
