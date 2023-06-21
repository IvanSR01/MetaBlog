import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './provider/ThemeProvider.tsx'
import './assets/global.scss'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SearchProvider from './provider/SearchProvider.tsx'

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider>
					<QueryClientProvider client={queryClient}>
						<SearchProvider>
							<App />
						</SearchProvider>
					</QueryClientProvider>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
