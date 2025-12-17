import React from 'react';

const ErrorTrigger = () => {
  throw new Error('This is a test error to trigger ErrorBoundary');
  return <div>This will not render</div>;
};

export default ErrorTrigger;
