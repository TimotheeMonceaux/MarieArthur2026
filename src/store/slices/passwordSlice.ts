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
        let inputHash = await strHash(pwd.payload.toUpperCase());
        if (inputHash === '5e34bc124001e6287d86e3f7abbf7c02a64be4a77de461eb01c2580c77f5aa69')  {
            state.hasError = false;
            state.profile = 'GUEST_ALL';
        }
        else if (inputHash === '21287151c6ad7b6d036ca6f7b6f0965eaf3f9440202b88f9dd5a79313e4a96d2') {
            state.hasError = false;
            state.profile = 'GUEST_DRINKS';
        }
        else {
            state.hasError = true;
        }
    }
  }
});

export const { checkPassword } = passwordSlice.actions;
export default passwordSlice.reducer;
