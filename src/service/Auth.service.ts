import { instance } from '../axios.config'
import { IAuth, IUserData } from '../types/Data'

const AUTH = '/auth'

class AuthService {
	async main({ email, fullName, password, type }: IAuth): Promise<IUserData> {
		const { data } = await instance<IUserData>({
			url: `${AUTH}/${type}`,
			method: 'post',
			data: {
				email,
				fullName,
				password
			}
		})
		if(data.token) 
			window.localStorage.setItem('token', data.token)

		return data
	}
}

export default new AuthService()
