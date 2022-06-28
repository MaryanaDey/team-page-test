const emailRegex =
  /^(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const phoneRegex = /^\+?3?8?(0\d{9})$/;

export const validateCreateUser = (values) => {
  const errors = {};

  if (!values.name) errors.name = 'Enter your name';
  if (values.name.length > 60) errors.name = 'Must be 60 characters or less';
  if (values.name.length < 2) errors.name = 'Must be 2 characters or more';

  if (!values.email) errors.email = 'Enter your email';
  if (values.email.length > 100)
    errors.email = 'Must be 100 characters or less';
  if (values.email.length < 2) errors.email = 'Must be 2 characters or more';
  if (!emailRegex.test(values.email.toLowerCase()))
    errors.email = 'Enter correct email';

  if (!values.phone) errors.phone = 'Enter your phone number';
  if (!phoneRegex.test(values.phone))
    errors.phone = 'Enter correct phone number';

  if (!values.position_id) errors.position_id = 'Select position';

  if (!values?.photo?.name) errors.photo = 'Upload photo';

  return errors;
};
