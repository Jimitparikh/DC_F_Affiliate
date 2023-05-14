import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'stateDrawer',
    initialState: {
        drawerOpen: false
    },
    reducers: {
        setDrawerOpen: (state) => {
            state.drawerOpen = true
        },
        setDrawerClose: (state) => {
            state.drawerOpen = false
        }
    }
})

export const { 
    setDrawerOpen, 
    setDrawerClose
} = stateSlice.actions

export default stateSlice.reducer
