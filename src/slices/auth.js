import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAffiliater, logoutAffiliater, updateAffiliater, cretaeaffiliation } from "../services/AuthService";



const affiliater = JSON.parse(localStorage.getItem("affiliater"));

export const register = createAsyncThunk(
    "auth/register",
    async (formValue, thunkAPI) => {
        try {
            const resp  = await cretaeaffiliation(formValue);
            if (!resp.data.success) throw ({ error: resp.data })
            return { author: resp.data.affiliater };
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (formValue, thunkAPI) => {
        try {
            const resp = await loginAffiliater(formValue);
            if (!resp.data.success) {
                throw ({ error: resp.data })
            }
            return { affiliater: resp.data.affiliater };
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const update = createAsyncThunk(
    "auth/update",
    async (formValue, thunkAPI) => {
        try {
            const resp = await updateAffiliater(formValue);
            if (!resp.data.success) throw ({ error: resp.data })
            return { affiliater: resp.data.affiliater };
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    try {
        await logoutAffiliater();
    }
    catch (error) {

    }
});

const initialState = affiliater
    ? { isLoggedIn: true, affiliater }
    : { isLoggedIn: false, affiliater: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.affiliater = action.payload.affiliater;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.affiliater = action.payload.affiliater;
        },
        [update.fulfilled]: (state, action) => {
            state.affiliater = action.payload.affiliater;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.affiliater = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.affiliater = null;
        },
    },
});

const { reducer } = authSlice;
export default reducer;