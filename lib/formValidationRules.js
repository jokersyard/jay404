export const formValidationRules = {
  required: (value) => !value ? 'This field is required' : true,
  minLength: (min) => (value) => value.length < min ? `Minimum ${min} characters required` : true,
  maxLength: (max) => (value) => value.length > max ? `Maximum ${max} characters allowed` : true,
  email: (value) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : true,
  match: (fieldValue) => (value) => value !== fieldValue ? 'Fields must match' : true,
  custom: (validator) => validator,
};

export const validateFormField = (value, rules = []) => {
  for (const rule of rules) {
    const result = rule(value);
    if (result !== true) {
      return result;
    }
  }
  return null;
};
