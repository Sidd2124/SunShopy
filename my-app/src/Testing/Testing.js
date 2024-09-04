import axios from 'axios';
import { useEffect, useState } from 'react';

const Testing = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const URL = 'http://localhost:5000/api/data'; 

      const response = await axios.get(URL);
      console.log(response); 
      setData(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.'); 
    }
  };

  return (
    <div>
      <h1>Hello World</h1>
      {error && <p>{error}</p>}
      <ul>
        {data.map(item => (
          <li key={item._id}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Testing;

