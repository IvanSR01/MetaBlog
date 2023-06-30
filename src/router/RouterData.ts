import { FC } from 'react'
import Home from '../pages/Home/Home'
import SingIn from '../pages/SingIn/SingIn'
import SingUp from '../pages/SingUp/SingUp'
import Blog from '../pages/Blog/Blog'
import Created from '../pages/Created/Created'
import FullPost from '../pages/FullPost/FullPost'
import User from '../pages/User/User'
import Update from '../pages/Update/Update'
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
	{
		path: '/user/:id',
		element: User
	},
	{
		path: '/update',
		element: Update
	}
]
