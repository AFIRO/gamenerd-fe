import { axios } from '..';
import { GameCreateDto } from './models/game.create.dto';
import { GameUpdateDto } from './models/game.update.dto';
import config from '../../config.json';

const baseUrl: string = `${config.base_url}/games`

export const getAll = async () => {
  const {data} = await axios.get(baseUrl);

  return data.items;
};

export const getById = async (id:string) => {
  const data = await axios.get(`${baseUrl}/${id}`);
  return data;
	
};

export const save = async (dto: GameCreateDto) => {
  const {data} = await axios.post(`${baseUrl}`, dto);
  return data;
};

export const update = async (id:string, dto: GameUpdateDto) => {
  const {data} = await axios.put(`${baseUrl}/${id}`, dto);
  return data;
}

export const deleteById = async (id:string) => {
  const {data} = await axios.delete(`${baseUrl}/${id}`);
  return data;
};