export const notificationService = {
  success: (message) => ({ type: 'success', message }),
  error: (message) => ({ type: 'error', message }),
  info: (message) => ({ type: 'info', message }),
  warning: (message) => ({ type: 'warning', message }),
};
