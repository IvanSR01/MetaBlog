import { FC, createContext, useState, ReactNode } from 'react'

interface IContext {
	theme: string
	setTheme?: (value: string) => void
}

const defaultValue = {
	theme: 'light'
}

export const ThemeContext = createContext<IContext>(defaultValue)

type TypeThemeProvide = {
	children: ReactNode
}

const ThemeProvider: FC<TypeThemeProvide> = ({children}) => {
	const [theme, setTheme] = useState<string>('')
	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
 