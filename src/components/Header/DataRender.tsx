import { FC } from 'react'
import styles from './Header.module.scss'
import { TypeData, dataLinks, dataLinksNotAuth } from './Data'
import { useAppDispatch, useAppSelector } from '../../hook/useRedux'
import { setUser } from '../../redux/Slice/User.slice'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const DataRender: FC = () => {
	const isAuth: boolean = useAppSelector(state => Boolean(state.user.user))
	const { pathname } = useLocation()
	const nav = useNavigate()
	const dispatch = useAppDispatch()
	const onClick = (item: TypeData) => {
		if (item.title === 'Logout') {
			window.localStorage.removeItem('token')
			dispatch(setUser(null))
			nav('/')
		} else {
			return null
		}
	}
	return (
		<div className={styles.links}>
				{isAuth ? (
					<>
						{dataLinks.map((item, i) => (
							<Link key={i} style={{ textDecoration: 'none' }} to={item.path}>
								<button
									onClick={() => onClick(item)}
									className={pathname === item.path ? styles.active : ''}
								>
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
