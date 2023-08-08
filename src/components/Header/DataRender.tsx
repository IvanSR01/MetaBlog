import { FC } from 'react'
import styles from './Header.module.scss'
import { dataLinks, dataLinksNotAuth } from './Data'
import { useAppSelector } from '../../hook/hooks/useRedux'
import { Link, useLocation } from 'react-router-dom'
const DataRender: FC = () => {
	const isAuth: boolean = useAppSelector(state => Boolean(state.user.user))
	const { user } = useAppSelector(state => state.user)
	const { pathname } = useLocation()
	const obj = useLocation()
	console.log(obj)
	return (
		<div className={styles.links}>
			{isAuth ? (
				<>
					{dataLinks.map((item, i) => (
						<Link
							key={i}
							style={{ textDecoration: 'none' }}
							to={
								item.title === 'User' ? `${item.path}/${user?._id}` : item.path
							}
						>
							<button className={pathname === item.path ? styles.active : ''}>
								{item.title}
							</button>
						</Link>
					))}
				</>
			) : (
				<>
					{dataLinksNotAuth.map((item, i) => (
						<Link key={i} style={{ textDecoration: 'none' }} to={item.path}>
							<button className={pathname === item.path ? styles.active : ''}>
								{item.title}
							</button>
						</Link>
					))}
				</>
			)}
		</div>
	)
}

export default DataRender
