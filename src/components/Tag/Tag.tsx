import { FC, ReactNode } from 'react'
import styles from './Tag.module.scss'

interface ITag {
	children: ReactNode
	isPopular?: boolean
	isBlog?: boolean
}

const Tag: FC<ITag> = ({
	children,
	isPopular,
	isBlog
}) => {
	return (
		<div className={`${styles.tag} ${isPopular ? styles.isPopular : ''} ${isBlog ? styles.blog : ''}`}>
			{children}
		</div>
	)
}

export default Tag
