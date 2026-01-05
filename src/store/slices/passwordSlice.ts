import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface PasswordState {
    profile: undefined | 'GUEST_ALL' | 'GUEST_DRINKS'
}

const initialState: PasswordState = {
    profile: undefined
}

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    checkPassword: (state, pwd: PayloadAction<string>) => {
        if (pwd.payload === 'ALL INCLUSIVE') 
            state.profile = 'GUEST_ALL';
        else if (pwd.payload === 'CIAO BYE')
            state.profile = 'GUEST_DRINKS';
    }
  }
});

export const { checkPassword } = passwordSlice.actions;
export default passwordSlice.reducer;