import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { IRouterData, RouterData } from './RouterData'

const Router: FC = () => {
	return (
		<Routes>
			{RouterData.map((item: IRouterData, i: number) => (
				<Route path={item.path} element={<item.element/>}/>
			))}
		</Routes>
	)
}

export default Router
