import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      setHasError(true);
      // Optionally log the error (e.g., with Sentry, LogRocket)
      console.error('Caught error in Error Boundary:', error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Something went wrong.</h1>
        <p>
          We&apos;re sorry, but something went wrong. Please try again later.
        </p>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
