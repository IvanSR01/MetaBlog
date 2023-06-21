import { TextField } from '@mui/material'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ISingUp } from '../../types/Data'

interface IForm  {
	register: UseFormRegister<ISingUp>,
	errors: FieldErrors<ISingUp>
}
const Form: FC<IForm> = ({ register, errors }) => {

	return (
		<>
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
		</>
	)
}

export default Form
