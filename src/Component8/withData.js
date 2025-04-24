import React, { useEffect, useState } from 'react';

const withData = (WrappedComponent, url) => {
  return function () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(json => {setData(json);
         setLoading(false);
        });
    }, []);

    return <WrappedComponent data={data} loading={loading} />;
  };
};
export default withData;