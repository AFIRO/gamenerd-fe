import { axios } from '..';
import { NewsCreateDto } from './model/news.create.dto';
import { NewsUpdateDto } from './model/news.update.dto';
import config from '../../config.json';


const baseUrl: string = `${config.base_url}/news`

export const getAll = async () => {
  const {data} = await axios.get(baseUrl);

  return data.items;
};

export const getAllByGameId = async (id:string) => {
  const {data} = await axios.get(`${baseUrl}/byGame/${id}`);
  return data;
};

export const getAllByWriterId = async (id:string) => {
  const {data} = await axios.get(`${baseUrl}/byWriter/${id}`);
  return data;
};

export const getById = async (id:string) => {
  const {data} = await axios.get(`${baseUrl}/${id}`);
  return data;
	
};

export const save = async (dto: NewsCreateDto) => {
  const {data} = await axios.post(`${baseUrl}`, dto);
  return data;
};

export const update = async (id:string, dto: NewsUpdateDto) => {
  const {data} = await axios.put(`${baseUrl}/${id}`, dto);
  return data;
}

export const deleteById = async (id:string) => {
  const {data} = await axios.delete(`${baseUrl}/${id}`);
  return data;
};