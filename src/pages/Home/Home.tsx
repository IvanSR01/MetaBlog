import { FC, useState } from 'react'
import styles from './Home.module.scss'
import { useQuery } from '@tanstack/react-query'
import { GetAllPostService } from '../../service/Post.service'
import { CircularProgress } from '@mui/material'
import { useError, usePopular } from '../../hook'
import { PopularPost, RenderPost } from '../../components'
const Home: FC = () => {
	const [message, setMessage] = useState<string>('')
	const { data, isLoading } = useQuery(['getPost'], () => GetAllPostService(), {
		onError: (error: any) => {
			const res = useError(error)
			setMessage(res)
		}
	})
	const popularPost = data ? usePopular(data) : undefined
	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<div className={styles.loader}>
					<CircularProgress />
				</div>
			) : (
				<>
					{!!popularPost && <PopularPost {...popularPost}/> }
					{data ? (
						<>
							<h2 className={styles.title}>Latest Post</h2>
							<RenderPost data={data}/>
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
