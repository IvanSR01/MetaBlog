import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "../../types/Data";

interface IInitialState {
	user: IUserData | null
}
const initialState: IInitialState = {
	user: null
}

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers:{
		setUser: (state, { payload }) => {
			state.user = payload
		}
	}
})

export const { setUser } = UserSlice.actions

export default UserSlice.reducer