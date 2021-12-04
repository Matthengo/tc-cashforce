import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', 
});

const USER_ORDER_URL = '/order/user';
const USER_URL = '/user';

const getAllOrdersByUserId = async (userid) => {
  const result = await api.get(`${USER_ORDER_URL}/${userid}`);
  return result;
}

const getUserById = async (userid) => {
  const result = await api.get(`${USER_URL}/${userid}`);
  return result;
}

const apiCalls = {
  getAllOrdersByUserId,
  getUserById,
}

export default apiCalls;