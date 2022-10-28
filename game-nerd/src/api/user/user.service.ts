import { axios } from '..';
import { LoginDataDto } from './model/login.data.dto';
import { UserRegisterDto } from './model/user.register.dto';
import { UserUpdateDto } from './model/user.update.dto';
import config from '../../config.json';


const loginUrl: string = `${config.base_url}/login`
const registerUrl: string = `${config.base_url}/register`
const baseUrl: string = `${config.base_url}/users`


export const login = async (dto:LoginDataDto) => {

  
  const {data} = await axios.post(loginUrl, dto);
	// const {data} = await axios.post("http://localhost:8000/login", {name,password});
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