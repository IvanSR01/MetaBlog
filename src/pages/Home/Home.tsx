import { FC, useState } from 'react'
import PopularPost from '../../components/PopularPost/PopularPost'
import styles from './Home.module.scss'
import Post from '../../components/Post/Post'
import { useQuery } from '@tanstack/react-query'
import { GetAllPostService } from '../../service/Post.service'
import { useError } from '../../hook/useError'
import { CircularProgress } from '@mui/material'
import { usePopular } from '../../hook/usePopular'
import { IPost } from '../../types/Data'
const Home: FC = () => {
	const [message, setMessage] = useState<string>('')
	const { data, isLoading } = useQuery(['getPost'], () => GetAllPostService(), {
		onError: (error: any) => {
			const res = useError(error)
			setMessage(res)
		}
	})
	//  todo: pohyi
	const popularPost = usePopular(data)
	console.log(popularPost)
	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<div className={styles.loader}>
					<CircularProgress />
				</div>
			) : (
				<>
					<PopularPost {...popularPost}/>
					{data.length > 0 ? (
						<>
							<h2 className={styles.title}>Latest Post</h2>
							<div className={styles.posts}>
								{data.map((item: IPost, i: number) => (
									<Post {...item} key={i} />
								))}
							</div>{' '}
						</>
					) : (
						<h2 className={styles.title}>Not Post</h2>
					)}
				</>
			)}
		</div>
	)
}

export default Home
