import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { getSettings, updateSettings } from '../../../services/SettingsService';

export const get_Settings = createAsyncThunk('author/getSettings', async (data) => {
    const response = await getSettings(data)
    console.log(response);
    return response.data
})

export const update_Settings = createAsyncThunk('author/updateSettings', async (data) => {
    const response = await updateSettings(data)
    console.log(response);
    return response.data
})

const dataSlice = createSlice({
    name: 'notificationSettings',
    initialState: {
        loading : false,
        settings: [],
    },
    reducers: {
        setSettings: (state, action) => {
            state.settings = action.payload.responseData
        }
    },
    extraReducers: (builder) => {
        builder.addCase(get_Settings.fulfilled, (state, action) => {
            state.settings = action.payload.responseData
            state.loading = false
        })
        builder.addCase(get_Settings.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(get_Settings.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(update_Settings.fulfilled, (state, action) => {
            state.settings = action.payload.responseData
            state.loading = false
        })
        builder.addCase(update_Settings.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(update_Settings.rejected, (state, action) => {
            state.loading = false
        })
    }

})

export const {
    setSettings
} = dataSlice.actions

export default dataSlice.reducer