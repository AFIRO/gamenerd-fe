import { axios } from '..';
import { ReviewCreateDto } from './model/review.create.dto';
import { ReviewUpdateDto } from './model/review.update.dto';
import config from '../../config.json';
import { Review } from './model/review.model';

const baseUrl: string = `${config.base_url}/reviews`

export const getAll = async (): Promise<Review[]> => {
  const {data} = await axios.get(baseUrl);

  return data;
};

export const getById = async (id:string): Promise<Review> => {
  const {data} = await axios.get(`${baseUrl}/${id}`);
  return data;
	
};

export const save = async (dto: ReviewCreateDto): Promise<Review> => {
  const {data} = await axios.post(`${baseUrl}`, dto);
  return data;
};

export const update = async (id:string, dto: ReviewUpdateDto): Promise<Review> => {
  const {data} = await axios.put(`${baseUrl}/${id}`, dto);
  return data;
}

export const deleteById = async (id:string): Promise<Review> => {
  const {data} = await axios.delete(`${baseUrl}/${id}`);
  return data;
};