import { FC } from 'react'
import styles from './Desc.module.scss'

interface IDesc {
	author: string
	date: string
}

const Description: FC<IDesc> = ({ author, date }) => {
	return (
		<div className={styles.desc}>
			<div>{author}</div>
			<div>{date}</div>
		</div>
	)
}

export default Description
