import { FC, useEffect, useState } from 'react'
import styles from './SingUp.module.scss'
import { Form, Link, useNavigate } from 'react-router-dom'
import { Button, TextField, CircularProgress } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { RegisterService } from '../../service/Auth.service'
import { useError } from '../../hook/useError'
import { AnimatePresence } from 'framer-motion'
import Message from '../../components/Message/Message'
import { useAppDispatch, useAppSelector } from '../../hook/useRedux'
import { ISingUp, IUserData } from '../../types/Data'
import { setUser } from '../../redux/Slice/User.slice'

const SingUp: FC = () => {
	const isAuth: boolean = useAppSelector(state => Boolean(state.user.user))
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ISingUp>({ mode: 'onChange' })
	const nav = useNavigate()
	useEffect(() => {
		if (isAuth) nav('/')
	}, [isAuth])
	const [error, setError] = useState<string>('')
	const dispatch = useAppDispatch()
	const { mutate, isLoading } = useMutation(
		['authR'],
		({ fullName, email, password }: ISingUp) =>
			RegisterService(fullName, email, password),
		{
			onError: (error: any) => {
				const res = useError(error)
				setError(res)
			},
			onSuccess: (data: IUserData) => {
				console.log(data)
				dispatch(setUser(data))
			}
		}
	)

	const onSubmit = (data: ISingUp) => {
		mutate(data)
	}
	return (
		<div className={styles.wrapper}>
			<AnimatePresence>
				{error && <Message onClick={() => setError('')}>{error}</Message>}
			</AnimatePresence>
			{isLoading ? (
				<CircularProgress />
			) : (
				<div className={styles.content}>
					<h2>Sing Up</h2>
					<p className={styles.helperText}>
						Create a free account with your email.
					</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.form}>
							<TextField
								error={Boolean(errors.fullName?.message)}
								helperText={errors.fullName?.message}
								{...register('fullName', { required: 'Укажите почту' })}
								id='outlined-basic'
								label='Name'
								variant='outlined'
							/>
							<TextField
								error={Boolean(errors.email?.message)}
								helperText={errors.email?.message}
								{...register('email', { required: 'Укажите почту' })}
								id='outlined-basic'
								label='Email'
								variant='outlined'
							/>
							<TextField
								error={Boolean(errors.password?.message)}
								helperText={errors.password?.message}
								{...register('password', { required: 'Укажите пароль' })}
								id='outlined-basic'
								label='Password'
								variant='outlined'
							/>
							<Button
								type='submit'
								className={styles.button}
								variant='contained'
							>
								Sing Up
							</Button>
							<Link style={{ textDecoration: 'none' }} to='/singIn'>
								<div className={styles.link}>Or Sing In</div>
							</Link>
						</div>
					</form>
				</div>
			)}
		</div>
	)
}

export default SingUp
