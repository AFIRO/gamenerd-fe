import { createContext, useState, useCallback, useEffect, useMemo, useContext } from 'react';
import * as userService from '../api/user/user.service';
import config from '../config.json';
import * as api from '../api';

const JWT_TOKEN_KEY = config.token_key;
const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

export const useSession = () => {
	const { loading, token, user, ready, error } = useAuth();
	return { loading, token, user, ready, error };
};

export const useLogin = () => {
	const  login  = useAuth();
	return login;
};

export const useLogout = () => {
	const  logout  = useAuth();
	return logout;
};


export const AuthProvider = ({
	children,
}) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
	const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

	useEffect(() => {
    setReady(Boolean(token));
    api.setAuthToken(token);
		if (token) {
			localStorage.setItem(JWT_TOKEN_KEY, token);
		} else {
			localStorage.removeItem(JWT_TOKEN_KEY)
		}
	}, [token]);

	const login = useCallback(async (name, password) => {
		try {
			setLoading(false);
			setError('');
			const { token, user } = await userService.login({name, password});
			setToken(token);
			setUser(user);
			return true;
		} catch (error) {
			console.error(error);
			setError('Login failed, try again');
			return false;
		} finally {
			setLoading(false);
		}
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUser(null);
	}, []);

	const value = useMemo(() => ({
		token,
		user,
    ready,
		error,
		loading,
		login,
		logout,
	}), [token, user, error, loading, login, logout,ready]);

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

