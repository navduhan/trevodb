import axios from 'axios'
import { env } from '../../env';

function formDataToJSON(formData) {
  const jsonObject = {};
  
  // Iterate over the FormData entries and build the JSON object
  formData.forEach((value, key) => {
      // Handle the case where the same key exists (e.g., checkbox arrays)
      if (jsonObject[key]) {
          // Convert existing entry to array if it's not already
          if (!Array.isArray(jsonObject[key])) {
              jsonObject[key] = [jsonObject[key]];
          }
          jsonObject[key].push(value);
      } else {
          jsonObject[key] = value;
      }
  });

  return jsonObject;
}
export const fetchBlast = async (mdata)=>{

    const mmdata = formDataToJSON(mdata)
    const res = await axios.post(`${env.BACKEND}/api/blast`, mmdata, {});

    const data = res.data
    
    console.log(data)
  

  return data;
}