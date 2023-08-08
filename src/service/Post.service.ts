import { instance } from '../axios.config'
import { ICreatedPost, IPost } from '../types/Data'

const POSTS = '/posts'


export const GetAllPostService = async () => {
	const { data } = await instance.get('/posts')
	const returnData: IPost[] = data
	return returnData
}

export const GetOnePostService = async (id: string) => {
	const { data } = await instance.get(`/posts/${id}`)
	const returnData: IPost = data
	return returnData
}

export const GetTags = async () => {
	const { data } = await instance.get(`/posts/tags`)
	const returnData: string[] = data
	return returnData
}

export const UpdatePostService = async (
	id: number,
	title: string,
	text: string,
	imgUrl: string
) => {
	const { data } = await instance.put(`/posts/${id}`, { title, text, imgUrl })
	return data
}

export const DeletePostService = async (id: string) => {
	const { data } = await instance.delete(`/posts/${id}`)
	return data
}

export const GetPostComments = async (id: number) => {
	const { data } = await instance.get(`/comments/${id}`)
	return data
}

class PostService {
	async CreatePost({ title, text, tag, imgUrl }: ICreatedPost) {
		return await instance<IPost>({
			url: `${POSTS}`,
			method: 'post',
			data: {
				title,
				text,
				tag,
				imgUrl
			}
		})
	}
	async GetAllPost(){
		
	}
}

export default new PostService()
