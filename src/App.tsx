import { useQuery } from '@tanstack/react-query'
import { FC, useContext, useEffect } from 'react'
import Header from './components/Header/Header'
import { useAppDispatch } from './hook/hooks/useRedux'
import { ThemeContext } from './provider/ThemeProvider'
import { setUser } from './redux/Slice/User.slice'
import Router from './router/Router'
import { GetUserService } from './service/User.service'
import Footer from './components/Footer/Footer'
const App: FC = () => {
	const { theme } = useContext(ThemeContext)
	useEffect(() => {
		document.body.setAttribute('data-theme', window.localStorage.theme)
	}, [theme])
	const dispatch = useAppDispatch()
	const { data } = useQuery(['getUser'], () => GetUserService())
	dispatch(setUser(data))
	return (
		<div>
			<Header />
			<div className='body'>
				<Router />
			</div>
			<Footer />
		</div>
	)
}

export default App
