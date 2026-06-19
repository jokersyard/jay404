export const handleError = (error, context = '') => {
  console.error(`Error in ${context}:`, error);
  
  let message = 'An unexpected error occurred';
  
  if (error?.response?.data?.message) {
    message = error.response.data.message;
  } else if (error?.message) {
    message = error.message;
  }

  return {
    message,
    status: error?.response?.status || 500,
    context,
  };
};

export class AppError extends Error {
  constructor(message, status = 500, context = '') {
    super(message);
    this.status = status;
    this.context = context;
    this.name = 'AppError';
  }
}

export const ErrorBoundary = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
          <h2 className="font-bold">Something went wrong</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
};
