export const validators = {
  email: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  password: (password) => {
    return password.length >= 8;
  },

  username: (username) => {
    return username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(username);
  },

  url: (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  phone: (phone) => {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
  },

  required: (value) => {
    return value && value.trim().length > 0;
  },

  minLength: (value, min) => {
    return value.length >= min;
  },

  maxLength: (value, max) => {
    return value.length <= max;
  },
};

export const validate = (value, rules) => {
  for (const rule of rules) {
    const result = rule(value);
    if (result !== true) {
      return result;
    }
  }
  return true;
};
