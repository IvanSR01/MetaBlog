import { FC } from 'react'
import { IPost } from '../../types/Data'
import styles from './RenderPost.module.scss'
import Post from '../Post/Post'

interface IRender {
	data: IPost[] | undefined
}

const RenderPost: FC<IRender> = ({ data }) => {
	if(!data){
		return <h1 style={{marginTop: '20px'}}>Not posts</h1>
	}
	return (
		<div className={styles.posts} >
			{data.map((item: IPost, i: number) => (
				<Post {...item} key={i} />
			))}
		</div>
	)
}

export default RenderPost
