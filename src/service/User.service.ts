import { instance } from '../axios.config'
import { IPost, IUserData } from '../types/Data'

export const GetUserService = async () => {
	if (window.localStorage.token) {
		const { data } = await instance.get(`/auth/me`)
		const returnData: IUserData = data
		return returnData
	}
	return null
}

export const GetUserAnyService = async (id: string) => {
	const { data } = await instance.get(`/auth/${id}`)
	const returnData: IUserData = data
	return returnData
}

export const GetAllPostUserService = async (id: string | undefined) => {
	const { data } = await instance.get(`/user/${id}`)
	const returnData: IPost[] = data
	return returnData
}

export const UpdateUserService = async (
	id: string | undefined,
	fullName: string,
	email: string,
	password: string
) => {
	const { data } = await instance.put(`/auth/update`, {
		id,
		fullName,
		email,
		password
	})
	return data
}
