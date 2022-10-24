import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type loginSubmitForm = {
  username: string;
  password: string;
};

const LoginFormComponent: React.FC = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
              .required('Username name is required')
              .min(6,'Username must be at least 6 characters')
              .max(25,'Username can not be longer than 25 characters'),
    password: Yup.string()
      .required('password is required')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<loginSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: loginSubmitForm) => {
    console.log(data);
  };

  return (
    <div className="row justify-content-center p-4">
      <div className="col-2">
    <div className="register-form container-fluid">
      <h1 className='text-light'>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            {...register('username')}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-secondary m-4">
            Submit
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-danger m-4"
          >
            Reset
          </button>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;
