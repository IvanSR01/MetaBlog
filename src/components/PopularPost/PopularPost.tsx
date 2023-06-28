import { FC } from 'react'
import styles from './PopularPost.module.scss'
import Tag from '../Tag/Tag'
import Description from '../Description/Description'
import { IPost } from '../../types/Data'
import { Link } from 'react-router-dom'
const PopularPost: FC<IPost> = ({ _id, tag, title, imgUrl,  user, createdAt }) => {
	const date: Date = new Date(createdAt)
	const fullDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date)
	return (
		<Link style={{textDecoration:'none'}} to={`/fullpost/${_id}`}>
			<div className={styles.wrapper}>
				<div className={styles.img}>
					<img src={`http://localhost:4444${imgUrl}`} alt='' />
				</div>
				<div className={styles.content}>
					<Tag isPopular={true}>{tag}</Tag>
					<p className={styles.title}>{title}</p>
					<Description user={user} date={fullDate} />
				</div>
			</div>
		</Link>
	)
}

export default PopularPost
