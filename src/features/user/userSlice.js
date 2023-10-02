import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        firstName: "",
        lastName: "",
        token: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = ""
            state.firstName = ""
            state.lastName = ""
            //localStorage.removeItem('token')
        },
        updateUser: (state, action) => {
            state.firstName = action.payload.userDatas.firstName
            state.lastName = action.payload.userDatas.lastName
            if(action.payload.userDatas.token){
                state.token = action.payload.userDatas.token
            }
            //localStorage.setItem('token', action.payload.token)
        }
    }
})

export const { login } = userSlice.actions

export default userSlice.reducer