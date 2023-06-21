import { FC, ReactNode, createContext, useState } from 'react'

interface IContext {
	search: string
	setSearch?: (value: string) => void
}
const defaultValue = {
	search: ''
}

export const SearchContext = createContext<IContext>(defaultValue)

interface ISearch {
	children: ReactNode
}

const SearchProvider: FC<ISearch> = ({ children }) => {
	const [search, setSearch] = useState<string>('')
	return (
		<SearchContext.Provider value={{ search, setSearch }}>
			{children}
		</SearchContext.Provider>
	)
}

export default SearchProvider
