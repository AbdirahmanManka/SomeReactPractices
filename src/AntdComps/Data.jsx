import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Data() {
    const [data, setData] = useState({ hits: [] });

    useEffect(async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
  
      setData(result.data);
    }, []);

  return (
    <div>
     <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
      
    </div>
  )
}

export default Data
