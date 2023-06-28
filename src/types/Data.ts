export interface ISingIn {
	email: string,
	password: string
}
export interface ISingUp {
	fullName: string
	email: string
	password: string
}
export interface IUserData {
	_id: string
	email: string 
	fullName: string
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