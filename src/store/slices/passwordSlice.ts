import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface PasswordState {
    profile: undefined | 'GUEST_ALL' | 'GUEST_DRINKS',
    hasError: boolean
}

const initialState: PasswordState = {
    profile: undefined,
    hasError: false
}

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    checkPassword: (state, pwd: PayloadAction<string>) => {
        if (pwd.payload.toUpperCase() === 'ERREUR')  {
            state.hasError = true;
        }
        else if (pwd.payload.toUpperCase() === 'CIAO BYE') {
            state.hasError = false;
            state.profile = 'GUEST_DRINKS';
        }
        else {
            state.profile = 'GUEST_ALL';
            state.hasError = false;
        }
    }
  }
});

export const { checkPassword } = passwordSlice.actions;
export default passwordSlice.reducer;