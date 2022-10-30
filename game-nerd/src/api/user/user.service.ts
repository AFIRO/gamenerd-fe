import { axios } from '..';
import { LoginDataDto } from './model/login.data.dto';
import { UserRegisterDto } from './model/user.register.dto';
import { UserUpdateDto } from './model/user.update.dto';
import config from '../../config.json';
import { UserWithToken } from './model/user.token';
import { User } from './model/user.model';


const loginUrl: string = `${config.base_url}/login`
const registerUrl: string = `${config.base_url}/register`
const baseUrl: string = `${config.base_url}/users`


export const login = async (dto:LoginDataDto): Promise<UserWithToken> => {   
  const {data} = await axios.post(loginUrl, dto);
	return data;
};

export const register = async (dto: UserRegisterDto): Promise<UserWithToken> => {
	const {data} = await axios.post(registerUrl, dto);
	return data;
};

export const update = async (id:string, dto: UserUpdateDto): Promise<User>  => {
  const {data} = await axios.put(`${baseUrl}/${id}`, dto);
  return data;
}

export const deleteById = async (id:string): Promise<User> => {
  const {data} = await axios.delete(`${baseUrl}/${id}`);
  return data;
};