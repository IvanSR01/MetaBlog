export interface IAuth {
	fullName?: string
	type?: 'login' | 'register'
	email: string
	password: string
}

 
export interface IUpdate extends IAuth {
	id: string
}

export interface IUserData {
	_id: string
	email: string 
	fullName: string
	token?: string
}

export interface IPost {
	_id: string
	tag: string
	title: string
	text: string
	imgUrl: string
	user: IUserData
	createdAt: string
	viewsCount: number
}

export interface ICreatedPost {
	title: string
	imgUrl: string 
	tag: string
	text: string
}

export interface IOptions {
	spellChecker: boolean
	maxHeight: string
	autofocus: boolean
	placeholder: string
	status: boolean
	autosave: IAutoSave
}
interface IAutoSave {
	enabled: boolean
	delay: number
	uniqueId: string
}