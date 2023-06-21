import { FC } from 'react'
import styles from './Post.module.scss'
import Tag from '../Tag/Tag'
import { Link } from 'react-router-dom'
import Description from '../Description/Description'
import { IPost } from '../../types/Data'
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
	const fullDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	}).format(date)
	return (
		<div className={styles.wrapper}>
			{/* <div className={styles.remove}>
				Remove
			</div> */}
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
