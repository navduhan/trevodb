import axios from 'axios';
import { env } from '../../env';

function formDataToJson(formData) {
  const json = {};
  formData.forEach((value, key) => {
      if (json[key]) {
          if (!Array.isArray(json[key])) {
              json[key] = [json[key]];
          }
          json[key].push(value);
      } else {
          json[key] = value;
      }
  });
  return json;
}

export const fetchPhylo = async (mdata)=>{
    const tdata = formDataToJson(mdata)
    const res = await axios.post(`${env.BACKEND}/api/record/phylo`, tdata, {});
    const data = res.data
    console.log(data) 
  return data;
}