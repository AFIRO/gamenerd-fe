import { createContext, useState, useCallback, useEffect, useMemo, useContext } from 'react';
import * as userService from '../api/user/user.service';
import config from '../config.json';
import * as api from '../api';
import {Buffer} from 'buffer';
import { LoginDataDto } from '../api/user/model/login.data.dto';
import { UserRegisterDto } from '../api/user/model/user.register.dto';

const JWT_TOKEN_KEY = config.token_key;
const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

export const useSession = () => {
	const { loading, token, user, ready, error, isAuthed, hasRoles } = useAuth();
	return { loading, token, user, ready, error, isAuthed, hasRoles };
};

export const useLogin = () => {
	const { login } = useAuth();
	return login;
};

export const useRegister = () => {
	const { register } = useAuth();
	return register;
};

export const useLogout = () => {
	const { logout } = useAuth();
	return logout;
};

function parseJwt(token) {
	if (!token) return {};
	const base64Url = token.split('.')[1];
	const payload = Buffer.from(base64Url, 'base64');
	const jsonPayload = payload.toString('ascii');
	return JSON.parse(jsonPayload);
}

function parseExp(exp) {
	if (!exp) return null;
	if (typeof exp !== 'number') exp = Number(exp);
	if (isNaN(exp)) return null;
	return new Date(exp * 1000);
}


export const AuthProvider = ({
	children,
}) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
	const [isAuthed, setAuthed] = useState(false);
	const [hasRoles, setRoles] = useState([]);
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

	const setSession = useCallback((token, user) => {
		const { exp } = parseJwt(token);
		const expiry = parseExp(exp);
		const stillValid = expiry >= new Date();

		if (stillValid) {
			localStorage.setItem(JWT_TOKEN_KEY, token);
		} else {
			localStorage.removeItem(JWT_TOKEN_KEY);
			token = null;
		}

		api.setAuthToken(token);
		setToken(token);
		if (user) {
			setUser(user)
			setRoles(user.roles)
		}
		else
			setRoles([])
		setReady(stillValid);
	}, []);

	const login = useCallback(async (data: LoginDataDto) => {
		try {
			setLoading(false);
			setError('');
			const { token, user } = await userService.login(data);
			setSession(token, user);
			setAuthed(true);
			return true;
		} catch (error) {
			console.error(error);
			setError('Login failed, try again');
			return false;
		} finally {
			setLoading(false);
		}
	}, [setSession]);

	const register = useCallback(async (data:UserRegisterDto) => {
		try {
			setLoading(false);
			setError('');
			const { token, user } = await userService.register(data);
			setSession(token, user);
			setAuthed(true);
			return true;
		} catch (error) {
			console.error(error);
			setError('Register failed, try again');
			return false;
		} finally {
			setLoading(false);
		}
	}, [setSession]);

	const logout = useCallback(() => {
		setSession(null, null);
		setAuthed(false);
	}, [setSession]);

	const value = useMemo(() => ({
		token,
		user,
		ready,
		error,
		loading,
		isAuthed,
		hasRoles,
		login,
		logout,
		register
	}), [token, user, error, loading, login, logout, register, ready, isAuthed, hasRoles]);

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

