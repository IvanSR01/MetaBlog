import { instance } from '../axios'
import { IUserData } from '../types/Data'

export const LoginService = async (
	email: string,
	password: string
): Promise<IUserData> => {
	const { data } = await instance.post('/auth/login', { email, password })
	if (data.token) {
		window.localStorage.setItem('token', data.token)
	}
	const userDataReturn: IUserData = data
	return userDataReturn
}

export const RegisterService = async (
	fullName: string,
	email: string,
	password: string
): Promise<IUserData> => {
	const { data } = await instance.post('/auth/register', {
		fullName,
		email,
		password
	})
	if (data.token) {
		window.localStorage.setItem('token', data.token)
	}
	const userDataReturn: IUserData = data
	return userDataReturn
}

