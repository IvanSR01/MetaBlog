import { FC, useEffect, useState } from 'react'
import styles from './SingIn.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Button, TextField, CircularProgress } from '@mui/material'
import { useForm } from 'react-hook-form'
import { ISingIn, IUserData } from '../../types/Data'
import { useMutation } from '@tanstack/react-query'
import { LoginService } from '../../service/Auth.service'
import { useError } from '../../hook/useError'
import Message from '../../components/Message/Message'
import { AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hook/useRedux'
import { setUser } from '../../redux/Slice/User.slice'
const SingIn: FC = () => {
	const isAuth: boolean = useAppSelector(state => Boolean(state.user.user))
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ISingIn>({ mode: 'onChange' })
	const nav = useNavigate()
	useEffect(() => {
		if (isAuth) nav('/')
	}, [isAuth])
	const [error, setError] = useState<string>('')
	const dispatch = useAppDispatch()
	const { mutate, isLoading } = useMutation(
		['authL'],
		({ email, password }: ISingIn) => LoginService(email, password),
		{
			onError: (error: any) => {
				const res = useError(error)
				setError(res)
			},
			onSuccess: (data: IUserData) => {
				dispatch(setUser(data))
			}
		}
	)

	const onSubmit = (data: ISingIn) => {
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
					<h2>Sing In</h2>
					<p className={styles.helperText}>Sign in to your account</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.form}>
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
								Sing In
							</Button>
							<Link style={{ textDecoration: 'none' }} to='/singUp'>
								<div className={styles.link}>Or Sing up</div>
							</Link>
						</div>
					</form>
				</div>
			)}
		</div>
	)
}

export default SingIn
