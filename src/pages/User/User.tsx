import { FC, useState } from 'react'
import styles from './User.module.scss'
import UserHeader from './UserHeader/UserHeader'
import { useQuery } from '@tanstack/react-query'
import { GetAllPostUserService } from '../../service/User.service'
import { AnimatePresence } from 'framer-motion'
import { useError } from '../../hook'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { Message, RenderPost } from '../../components'
const User: FC = () => {
	const [message, setMessage] = useState<string>('')
	const { id } = useParams()
	const { data, isLoading } = useQuery(
		['getPostUser'],
		() => GetAllPostUserService(id),
		{
			onError: (err: any) => {
				const res = useError(err)
				setMessage(res)
			}
		}
	)
	return (
		<div className={styles.wrapper}>
			<AnimatePresence>
				{message && <Message onClick={() => setMessage('')}>{message}</Message>}
			</AnimatePresence>
			{isLoading ? (
				<CircularProgress />
			) : (
				<>
					<UserHeader />
					<RenderPost data={data} />
				</>
			)}
		</div>
	)
}

export default User
