import { useMutation } from '@tanstack/react-query'
import 'easymde/dist/easymde.min.css'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor'
import { instance } from '../../axios.config'
import { useAppSelector, useError } from '../../hook'
import PostService from '../../service/Post.service'
import { ICreatedPost, IOptions } from '../../types/Data'
import styles from './Created.module.scss'
import { AnimatePresence } from 'framer-motion'
import { Message } from '../../components'

interface HTMLInputEvent extends Event {
	target: HTMLInputElement & EventTarget
}

const Created: FC = () => {
	const isAuth = useAppSelector(state => Boolean(state.user.user))
	const nav = useNavigate()
	useEffect(() => {
		if (!isAuth) {
			nav('/')
		}
	}, [isAuth])
	const [files, setFiles] = useState<ICreatedPost>({
		title: '',
		text: '',
		tag: '',
		imgUrl: ''
	})
	const [message, setMessage] = useState<string>('')
	const inputRef = useRef<HTMLInputElement | null>(null)
	const { mutate } = useMutation(
		['auth'],
		({ title, text, tag, imgUrl }: ICreatedPost) =>
			PostService.CreatePost({ title, text, tag, imgUrl }),
		{
			onError: (error: any) => {
				const res = useError(error)
				setMessage('Error:' + res)
			},
			onSuccess: () => {
				setFiles({ ...files, text: '', tag: '', title: '', imgUrl: '' })
				setMessage('Success: Success')
			}
		}
	)
	const handleChangeFile = async (e: HTMLInputEvent) => {
		try {
			const formData = new FormData()
			if (!e.target.files) return
			let file: any = e.target.files[0]
			formData.append('image', file)
			const { data } = await instance.post('/upload', formData)
			console.log(data)
			setFiles({ ...files, imgUrl: data.url })
		} catch (error) {
			console.log(error)
		}
	}
	const onChange = (value: string) => setFiles({ ...files, text: value })
	const onSubmit = () => {
		mutate(files)
		console.log(files)
	}
	const options: IOptions = useMemo(
		() => ({
			spellChecker: false,
			maxHeight: '400px',
			autofocus: true,
			placeholder: 'Введите текст...',
			status: false,
			autosave: {
				enabled: true,
				delay: 1000,
				uniqueId: '0'
			}
		}),
		[]
	)
	const onClickRemoveImage = () => {
		setFiles({ ...files, imgUrl: '' })
	}
	return (
		<div className={styles.wrapper}>
			<AnimatePresence>
				{message && <Message onClick={() => setMessage('')}>{message}</Message>}
			</AnimatePresence>
			<div className={styles.content}>
				{files.imgUrl ? (
					<div className={styles.img}>
						<button
							onClick={() => onClickRemoveImage()}
							className={styles.button}
						>
							Удалить картинку
						</button>
						<br />
						<img
							style={{ height: '700px' }}
							src={`http://localhost:4444${files.imgUrl}`}
							alt=''
						/>
					</div>
				) : (
					<button
						onClick={() => (inputRef.current ? inputRef.current.click() : '')}
						className={styles.button}
					>
						Добавить картинку
					</button>
				)}
				<input
					ref={inputRef}
					type='file'
					onChange={(e: any) => handleChangeFile(e)}
					hidden
				/>
				<input
					className={styles.title}
					value={files.title}
					onChange={e => setFiles({ ...files, title: e.target.value })}
					type='text'
					placeholder='Название статьи...'
				/>
				<input
					className={styles.tag}
					value={files.tag}
					onChange={e => setFiles({ ...files, tag: e.target.value })}
					type='text'
					placeholder='Название тега...'
				/>
				<SimpleMDE
					className={styles.editor}
					value={files.text}
					onChange={onChange}
					options={options}
				/>
				<div className={styles.buttons}>
					<button
						onClick={() => onSubmit()}
						className={`${styles.public} ${styles.button}`}
					>
						Опубликовать
					</button>
					<Link to='/'>
						<button className={styles.button}>Отмена</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Created
