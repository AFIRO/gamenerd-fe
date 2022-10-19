import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import GAME_DATA from '../../api/mock-data';

type gameSubmitForm = {
  gameName: string;
  boxart: string;
};

const GameCreateComponentForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    gameName: Yup.string().required('Game name is required'),
    boxart: Yup.string()
      .required('boxart is required')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<gameSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: gameSubmitForm) => {
    console.log(data);
    GAME_DATA.push(data)
  };

  return (
    <div className="register-form container-fluid">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Game name</label>
          <input
            type="text"
            {...register('gameName')}
            className={`form-control ${errors.gameName ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.gameName?.message}</div>
        </div>

        <div className="form-group">
          <label>Boxart URL</label>
          <input
            type="text"
            {...register('boxart')}
            className={`form-control ${errors.boxart ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.boxart?.message}</div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameCreateComponentForm;
