import React, { useEffect, useState } from 'react';
import axios from 'axios';

const withFetch = (url) => (Component) => () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return <Component data={data} />;
};

export default withFetch;