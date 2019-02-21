import Axios from "axios";
const API_PATH = "https://dry-falls-40595.herokuapp.com";

export const getExpiringPolicies = async () => {
  return await getAllPolicies('1week');
};

export const deletePolicy = async (policy) => {
  try {
    let response = await Axios.delete(API_PATH + "/policies/"+ policy._id, policy);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getAllPolicies = async (range = "all") => {
  try {
    let response = await Axios.get(API_PATH + "/policies?range=" + range);
    return response.data.data;
  } catch (error) {
    return [];
  }
};

export const addPolicy = async (policy, isEdit) => {
  try {
    let response = isEdit
      ? await Axios.put(API_PATH + "/policies/" + policy._id, policy)
      : await Axios.post(API_PATH + "/policies", policy);
    return response.data;
  } catch (error) {
    console.log("error", error.response.data);
    return error.response.data;
  }
};
