import { useQuery } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'
import Message from '../../components/Message/Message'
import Tag from '../../components/Tag/Tag'
import { useError } from '../../hook/useError'
import { GetAllPostService, GetTags } from '../../service/Post.service'
import styles from './Blog.module.scss'
import RenderPost from './RenderPost'
const Blog: FC = () => {
	const [message, setMessage] = useState<string>('')
	const { data, isLoading } = useQuery(['getPost'], () => GetAllPostService(), { 
		onError: (error: any) => {
			const res = useError(error)
			setMessage(res)
		}
	})
	const tags = useQuery(['getTag'], () => GetTags())
	const [countTag, setCountTag] = useState<number>(0)
	return (
		<div className={styles.wrapper}>
			<AnimatePresence>
				{message && <Message onClick={() => setMessage('')}>{message}</Message>}
			</AnimatePresence>
			<div className={styles.tags}>
				{tags?.data?.map((item: string, i: number) => (
					<div onClick={() => setCountTag(i + 1)}>
						<Tag isBlog={true} isPopular={i + 1 === countTag ? true : false}>
							{item}
						</Tag>
					</div>
				))}
			</div>
			<div className={styles.posts}>
				<RenderPost data={data} tags={tags?.data} countTag={countTag}/>
			</div>
		</div>
	)
}

export default Blog
