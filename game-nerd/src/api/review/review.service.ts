import axios from 'axios';
import { ReviewCreateDto } from './model/review.create.dto';
import { ReviewUpdateDto } from './model/review.update.dto';

const baseUrl: string = `${process.env.REACT_APP_API_URL}/reviews`

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

export const save = async (dto: ReviewCreateDto) => {
  const {data} = await axios.post(`${baseUrl}`, dto);
  return data;
};

export const update = async (id:string, dto: ReviewUpdateDto) => {
  const {data} = await axios.put(`${baseUrl}/${id}`, dto);
  return data;
}

export const deleteById = async (id:string) => {
  const {data} = await axios.delete(`${baseUrl}/${id}`);
  return data;
};