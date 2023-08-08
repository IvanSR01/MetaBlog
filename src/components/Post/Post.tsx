import { FC, useState } from 'react'
import styles from './Post.module.scss'
import { Link } from 'react-router-dom'
import Description from '../Description/Description'
import { IPost } from '../../types/Data'
import { useAppSelector } from '../../hook/hooks/useRedux'
import { DeletePostService } from '../../service/Post.service'
import { Button } from '@mui/material'
import { Message, Tag } from '..'
const Post: FC<IPost> = ({
	_id,
	tag,
	title,
	text,
	imgUrl,
	user,
	createdAt
}) => {
	const date: Date = new Date(createdAt)
	const [message, setMessage] = useState<string>('')
	const fullDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	}).format(date)
	const UserData = useAppSelector(state => state.user.user)
	const onClickRemove = () => {
		const res = confirm('Точно ли хотите удалить?')
		if (res) {
			DeletePostService(_id)
			setMessage('Success')
		}
	}
	return (
		<div
			className={styles.wrapper}
			onClick={() => {
				window.scrollTo({
					top: -1000,
					behavior: 'smooth'
				})
			}}
		>
			{message && <Message onClick={() => setMessage('')}>{message}</Message>}
			<Link to={`/fullpost/${_id}`} style={{ textDecoration: 'none' }}>
				<div className={styles.img}>
					<img src={`http://localhost:4444${imgUrl}`} alt='' />
				</div>
				<Tag>{tag}</Tag>
				<h2 className={styles.title}>{title}</h2>
			</Link>
			<Description user={user} date={fullDate} />
			{UserData?.email === user.email ? (
				<div className={styles.remove}>
					<Button
						onClick={() => onClickRemove()}
						variant='contained'
						color='error'
					>
						Remove
					</Button>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default Post
