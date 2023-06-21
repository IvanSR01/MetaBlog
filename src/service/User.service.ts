import { instance } from '../axios'

export const GetUserService = async () => {
	if (window.localStorage.token) {
		const { data } = await instance.get('/auth/me')

		return data
	}
	return null
}
