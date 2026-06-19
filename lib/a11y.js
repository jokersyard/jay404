export const A11y = {
  announcement: (message) => {
    const el = document.createElement('div');
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'true');
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  },

  focus: (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  getAriaLabel: (text, additional = '') => {
    return additional ? `${text}, ${additional}` : text;
  },
};
