 import axios from "axios";
 const API_FLIGHT = "http://localhost:3000/";
 const endpointseatsabc1 = "abc1";
 const endpointseatsabc2 = "abc2";
 const endpointseatsdef1="def1";
 const endpointseatsdef2="def2";
 const endpointseatsabc1r = "abc1r";
 const endpointseatsabc2r = "abc2r";
 const endpointseatsdef1r="def1r";
 const endpointseatsdef2r="def2r";

 export const getabc1r = async () => {
  try {

      const { data } = await axios.get(`${API_FLIGHT}${endpointseatsabc1r}`);
      return data;
      
  } catch (error) {
      console.log(error);
      return [];
  }
}
export const getabc2r = async () => {
  try {

      const { data } = await axios.get(`${API_FLIGHT}${endpointseatsabc2r}`);
      return data;
      
  } catch (error) {
      console.log(error);
      return [];
  }
}
export const getdef1r = async () => {
  try {

      const { data } = await axios.get(`${API_FLIGHT}${endpointseatsdef1r}`);
      return data;
      
  } catch (error) {
      console.log(error);
      return [];
  }
} 
export const getdef2r = async () => {
  try {

      const { data } = await axios.get(`${API_FLIGHT}${endpointseatsdef2r}`);
      return data;
      
  } catch (error) {
      console.log(error);
      return [];
  }
}

 export const getabc1 = async () => {
     try {
 
         const { data } = await axios.get(`${API_FLIGHT}${endpointseatsabc1}`);
         return data;
         
     } catch (error) {
         console.log(error);
         return [];
     }
 }
 export const getabc2 = async () => {
  try {

      const { data } = await axios.get(`${API_FLIGHT}${endpointseatsabc2}`);
      return data;
      
  } catch (error) {
      console.log(error);
      return [];
  }
}
export const getdef1 = async () => {
  try {

      const { data } = await axios.get(`${API_FLIGHT}${endpointseatsdef1}`);
      return data;
      
  } catch (error) {
      console.log(error);
      return [];
  }
}
export const getdef2 = async () => {
  try {

      const { data } = await axios.get(`${API_FLIGHT}${endpointseatsdef2}`);
      return data;
      
  } catch (error) {
      console.log(error);
      return [];
  }
}