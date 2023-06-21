import { FC } from 'react'
import styles from './Footer.module.scss'
import { dataLinksNotAuth } from '../Header/Data'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
const Footer: FC = () => {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.col}>
				<h2>About</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam
				</p>
				<p>
					<b>Email</b>: info@jstemplate.net
				</p>
				<span>
					<b>Phone</b>: 880 123 456 789
				</span>
			</div>
			<div className={styles.coltwo}>
				<h2>Quick Link</h2>
				{dataLinksNotAuth.map((item, i) => (
					<Link
						to={item.path}
						onClick={() =>
							window.scrollTo({
								top: 0,
								behavior: 'smooth'
							})
						}
						style={{ textDecoration: 'none' }}
					>
						<h3>{item.title}</h3>
					</Link>
				))}
			</div>
			<div className={styles.form}>
				<h2>Weekly Newsletter</h2>
				<p>Get blog articles and offers via email</p>
				<TextField id='outlined-basic' label='Email' variant='standard' />
				<Button variant='contained'>Subscribe</Button>
			</div>
		</footer>
	)
}

export default Footer
