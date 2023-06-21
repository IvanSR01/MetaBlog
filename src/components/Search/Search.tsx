import { ChangeEvent, FC, useContext } from 'react'
import styles from './Search.module.scss'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../provider/SearchProvider'
const Search: FC = () => {
	const nav = useNavigate()
	const { setSearch } = useContext(SearchContext)
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch ? setSearch(e.target.value) : ''
		nav('/blog')
	}
	return (
		<>
			<input onChange={(e) => onChange(e)} className={styles.input} placeholder='Поиск...' />
			<img className={styles.img} src='http://localhost:5173/public/search-outline.png' />
		</>
	)
}

export default Search
