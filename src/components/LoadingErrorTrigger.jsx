import React, { useEffect, useState } from 'react';

const LoadingErrorTrigger = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      // Simulate error during loading
      setError(true);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // Throw error to be caught by ErrorBoundary
    throw new Error('Simulated loading error');
  }

  return <div>Content loaded successfully</div>;
};

export default LoadingErrorTrigger;
