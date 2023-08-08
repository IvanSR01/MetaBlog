import { Button, CircularProgress, TextField } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import Message from '../../components/Message/Message'
import styles from '../SingUp/SingUp.module.scss'
import { useMutation } from '@tanstack/react-query'
import { UpdateUserService } from '../../service/User.service'
import { useForm } from 'react-hook-form'
import { IUpdate } from '../../types/Data'
import { useNavigate } from 'react-router-dom'
import { useError, useAppSelector } from '../../hook'
const Update: FC = () => {
	const nav = useNavigate()
	const { user } = useAppSelector(state => state.user)
	useEffect(() => {
		if(!Boolean(user)){
			nav('/')
		}
	}, [])
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IUpdate>({ mode: 'onChange' })
	const { mutate, isLoading } = useMutation(
		['updateUser'],
		({ email, fullName, password }: IUpdate) =>
			UpdateUserService(user?._id, fullName, email, password), {
				onError: (err: any) => {
					const res = useError(err)
					setMessage(res)
				},
				onSuccess: () => {
					nav(`/`)
				}
			}
	)
	const [message, setMessage] = useState<string>('')
	const onSubmit = (data: IUpdate) => {
		mutate(data)
	}
	return (
		<div className={styles.wrapper}>
			<AnimatePresence>
				{message && <Message onClick={() => setMessage('')}>{message}</Message>}
			</AnimatePresence>
			{isLoading ? (
				<CircularProgress />
			) : (
				<div className={styles.content}>
					<h2>Update</h2>
					<p className={styles.helperText}>Update your account information.</p>
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
								Update
							</Button>
						</div>
					</form>
				</div>
			)}
		</div>
	)
}

export default Update
