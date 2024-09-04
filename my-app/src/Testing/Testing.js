import axios from 'axios';
import { useEffect ,useState} from 'react';

const Testing = () => {
  const [list,setList]=useState("")
  
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const URL = 'http://localhost:3000/Test'; 

      const response = await axios.get(URL);
      console.log(response.data[0].
        Location)
      setList(response.data[0])
     
    } catch (error) {
      console.error('Error fetching data:', error);

    }
  };

  return (
    <div>
      <h1>Hello World</h1>
<p>{list.Name}</p>
      <p>{list.Location}</p>
    </div>
  );
};

export default Testing;

