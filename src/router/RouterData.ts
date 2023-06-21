import { FC } from 'react'
import Home from '../pages/Home/Home'
import SingIn from '../pages/SingIn/SingIn'
import SingUp from '../pages/SingUp/SingUp'
import Blog from '../pages/Blog/Blog'
import Created from '../pages/Created/Created'
import FullPost from '../pages/FullPost/FullPost'
export interface IRouterData {
	path: string
	element: FC
}
export const RouterData: IRouterData[] = [
	{
		path: '/',
		element: Home
	},
	{
		path: '/singIn',
		element: SingIn
	},
	{
		path: '/singUp',
		element: SingUp
	},
	{
		path: '/blog',
		element: Blog
	},
	{
		path: '/created',
		element: Created
	},
	{
		path: '/fullpost/:id',
		element: FullPost
	},
]
