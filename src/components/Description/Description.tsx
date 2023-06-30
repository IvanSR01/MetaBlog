import { FC } from 'react'
import styles from './Desc.module.scss'
import { Link } from 'react-router-dom'
import { IUserData } from '../../types/Data'

interface IDesc {
	user: IUserData
	date: string
}

const Description: FC<IDesc> = ({ user, date }) => {
	return (
		<div className={styles.desc}>
			<Link style={{ textDecoration: 'none' }} to={`/user/${user._id}`}>
				<div>{user.fullName}</div>
			</Link>
			<div>{date}</div>
		</div>
	)
}

export default Description
