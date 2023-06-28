import { FC, useState } from 'react'
import PopularPost from '../../components/PopularPost/PopularPost'
import styles from './Home.module.scss'
import { useQuery } from '@tanstack/react-query'
import { GetAllPostService } from '../../service/Post.service'
import { useError } from '../../hook/useError'
import { CircularProgress } from '@mui/material'
import { usePopular } from '../../hook/usePopular'
import RenderPost from '../../components/RenderPost/RenderPost'
const Home: FC = () => {
	const [message, setMessage] = useState<string>('')
	const { data, isLoading } = useQuery(['getPost'], () => GetAllPostService(), {
		onError: (error: any) => {
			const res = useError(error)
			setMessage(res)
		}
	})
	const popularPost = usePopular(data)
	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<div className={styles.loader}>
					<CircularProgress />
				</div>
			) : (
				<>
					<PopularPost {...popularPost}/>
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
