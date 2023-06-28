import { FC, useContext } from 'react'
import { IPost } from '../../types/Data'
import { SearchContext } from '../../provider/SearchProvider'
import Post from '../../components/Post/Post'

interface IRender {
	data: IPost[] | undefined
	tags: string[] | undefined
	countTag: number
}

const RenderPost: FC<IRender> = ({ data, tags, countTag }) => {
	const { search } = useContext(SearchContext)
	return (
		<>
			{data ? (
				<>
					{data
						.filter(item => {
							return item.title.toLowerCase().includes(search.toLowerCase())
						})
						.filter(item => {
							const tag: string | undefined = tags?.[countTag - 1]
							if (countTag === 0) {
								return true
							} else if (tag === item.tag) {
								return true
							} else {
								return false
							}
						})
						.map((item: IPost, i: number) => (
							<Post {...item} key={i} />
						))}
				</>
			) : (
				<h1>Not Post</h1>
			)}
		</>
	)
}

export default RenderPost
