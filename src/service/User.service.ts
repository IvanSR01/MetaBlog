import { instance } from '../axios'
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

export const GetAllPostUserService = async (id: any) => {
	console.log(id)
	const { data } = await instance.get(`/user/${id}`)
	const returnData: IPost[] = data
	return returnData
}