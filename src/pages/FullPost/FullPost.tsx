import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetOnePostService } from '../../service/Post.service'
import styles from './FullPost.module.scss'
import Tag from '../../components/Tag/Tag'
import Message from '../../components/Message/Message'
const FullPost: FC = () => {
	const { id } = useParams()
	const [message, setMessage] = useState<string>('')
	if (!id) {
		setMessage('Не найден пост')
		return (
			<Link style={{ textDecoration: 'none' }} to='/'>
				На главную
			</Link>
		)
	}
	const { data } = useQuery(['getOne'], () => GetOnePostService(id))
	return (
		<div className={styles.wrapper}>
			{message && <Message onClick={() => setMessage('')}>{message}</Message>}
			<div className={styles.post}>
				<Tag isPopular={true}>{data?.tag}</Tag>
				<h2 className={styles.title}>{data?.title}</h2>
				<p>ViewsCount: {data?.viewsCount}</p>
				<div className={styles.img}>
					<img src={`http://localhost:4444${data?.imgUrl}`} alt='' />
				</div>
				<div className={styles.content}>{data?.text}</div>
			</div>
		</div>
	)
}

export default FullPost
