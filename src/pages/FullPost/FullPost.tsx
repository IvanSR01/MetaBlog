import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetOnePostService } from '../../service/Post.service'
import styles from './FullPost.module.scss'
import Tag from '../../components/Tag/Tag'
const FullPost: FC = () => {
	const { id } = useParams()
	if (!id) {
		return <h1>Не найден пост</h1>
	}
	const { data } = useQuery(['getOne'], () => GetOnePostService(id))
	const [value, setValue] = useState<string>('')
	return (
		<div className={styles.wrapper}>
			<Tag isPopular={true}>{data?.tag}</Tag>
			<h2 className={styles.title}>{data?.title}</h2>
			<p>ViewsCount: {data?.viewsCount}</p>
			<div className={styles.img}>
				<img src={`http://localhost:4444${data?.imgUrl}`} alt='' />
			</div>
			<div className={styles.content}>{data?.text}</div>
		</div>
	)
}

export default FullPost
