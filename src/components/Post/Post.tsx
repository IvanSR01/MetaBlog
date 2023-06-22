import { FC, useState } from 'react'
import styles from './Post.module.scss'
import Tag from '../Tag/Tag'
import { Link } from 'react-router-dom'
import Description from '../Description/Description'
import { IPost } from '../../types/Data'
import { GrFormClose } from 'react-icons/gr'
import { useAppSelector } from '../../hook/useRedux'
import { DeletePostService } from '../../service/Post.service'
import Message from '../Message/Message'
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
		if(res){
			DeletePostService(_id)
			setMessage('Success')
		}
	}
	return (
		<div className={styles.wrapper}>
			{message && <Message onClick={() => setMessage('')}>{message}</Message>}
			{UserData?.email === user.email ? (
				<div className={styles.remove}>
					<GrFormClose className={styles.svg} onClick={onClickRemove} />
				</div>
			) : (
				<></>
			)}
			<Link to={`/fullpost/${_id}`} style={{ textDecoration: 'none' }}>
				<div className={styles.img}>
					<img src={`http://localhost:4444${imgUrl}`} alt='' />
				</div>
				<Tag>{tag}</Tag>
				<h2 className={styles.title}>{title}</h2>
				<Description author={user.fullName} date={fullDate} />
			</Link>
		</div>
	)
}

export default Post
