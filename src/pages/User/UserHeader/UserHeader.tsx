import { FC } from 'react'
import styles from './UserHeader.module.scss'
import { Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { GetUserAnyService } from '../../../service/User.service'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hook/useRedux'
import { setUser } from '../../../redux/Slice/User.slice'
const UserHeader: FC = () => {
	const { id } = useParams()
	if (!id) {
		return <h1>Нет юзера</h1>
	}
	const { data } = useQuery(['getUserPages'], () => GetUserAnyService(id))
	const { user } = useAppSelector(state => state.user)
	const nav = useNavigate()
	const dispatch = useAppDispatch()
	const onClick = () => {
		window.localStorage.removeItem('token')
		dispatch(setUser(null))
		nav('/')
	}
	return (
		<div className={styles.user}>
			<h2>{data?.fullName}</h2>
			{data?.email === user?.email ? (
				<div className={styles.buttons}>
					{/* <Button variant='contained' color='secondary'>
						Update
					</Button> */}
					<Button onClick={() => onClick()} variant='contained'>
						Logout
					</Button>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default UserHeader
