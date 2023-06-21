import { Switch } from '@mui/material'
import { ChangeEvent, FC, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../provider/ThemeProvider'
import Search from '../Search/Search'
import DataRender from './DataRender'
import styles from './Header.module.scss'
const Header: FC = () => {
	const [checked, setIsChecked] = useState<boolean>(false)
	const { theme, setTheme } = useContext(ThemeContext)
	useEffect(() => {
		if (window.localStorage.theme === 'dark') {
			setIsChecked(true)
		} else {
			setTheme ? setTheme('light') : ''
		}
	}, [])
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked ? true : false)
		if (checked) {
			window.localStorage.setItem('theme', 'light')
			return setTheme ? setTheme('light') : ''
		}
		window.localStorage.setItem('theme', 'dark')
		return setTheme ? setTheme('dark') : ''
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				{theme === 'light' ? (
					<img src='http://localhost:5173/public/Logo.png' alt='' />
				) : (
					<img src='http://localhost:5173/public/Union.png' alt='' />
				)}
				<p>
					Meta <b>Blog</b>
				</p>
			</div>
			<DataRender/>
			<div className={styles.switch}>
				<Search />
				<Switch
					checked={checked}
					onChange={onChange}
					inputProps={{ 'aria-label': 'controlled' }}
				/>
				<p className={styles.theme}>{theme}</p>
			</div>
		</div>
	)
}

export default Header
