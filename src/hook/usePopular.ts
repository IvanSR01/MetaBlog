import { IPost } from '../types/Data'

export const usePopular = (data: IPost[]): IPost | null => {
	if (!data) {
		return null
	}
	let PopularPost = data[0]
	for (let i = 0; i < data.length; i++) {
		const post = data[i]
		if (PopularPost.viewsCount < post.viewsCount) {
			PopularPost = post
		}
	}
	return PopularPost
}
