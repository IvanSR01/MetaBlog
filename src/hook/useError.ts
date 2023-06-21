export const useError = (error: any) => {
	if (error.response.data) {
		const data = error.response.data
		if (Array.isArray(data)) {
			for (let i = 0; i < data.length; i++) {
				return data[i].msg
			}
		} else {
			return data.message
		}
	} else {
		return error.message
	}
}


