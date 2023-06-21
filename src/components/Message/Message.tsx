import { FC, ReactNode, useContext } from 'react'
import {  motion } from 'framer-motion'
import { GrFormClose } from 'react-icons/gr'
import styles from './Message.module.scss'
import { ThemeContext } from '../../provider/ThemeProvider'
interface IMessage {
	children: ReactNode
	onClick: () => void
}

const Message: FC<IMessage> = ({ children, onClick }) => {
	const { theme } = useContext(ThemeContext)
	return (
			<motion.div transition={{duration: 0.6}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.wrapper}>
				<motion.div transition={{duration: 1}} initial={{y:'-200px'}} animate={{y:'0px'}} exit={{y:'-200px'}} className={styles.content}>
					<div className={styles.header}>
						<p>Message</p>
						<GrFormClose className={styles.img} onClick={onClick} />
					</div>
					<div className={styles.message}>{children}</div>
				</motion.div>
			</motion.div>
	)
}

export default Message
