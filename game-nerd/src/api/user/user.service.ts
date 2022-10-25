import axios from 'axios';
import { LoginDataDto } from './model/login.data.dto';
import { UserRegisterDto } from './model/user.register.dto';
import { UserUpdateDto } from './model/user.update.dto';

const loginUrl: string = `${process.env.REACT_APP_API_URL}/login`
const registerUrl: string = `${process.env.REACT_APP_API_URL}/register`
const baseUrl: string = `${process.env.REACT_APP_API_URL}/users`


export const login = async (dto: LoginDataDto) => {
	const {data} = await axios.post(loginUrl, dto);
	return data;
};

export const register = async (dto: UserRegisterDto) => {
	const {data} = await axios.post(registerUrl, dto);
	return data;
};

export const update = async (id:string, dto: UserUpdateDto) => {
  const {data} = await axios.put(`${baseUrl}/${id}`, dto);
  return data;
}

export const deleteById = async (id:string) => {
  const {data} = await axios.delete(`${baseUrl}/${id}`);
  return data;
};