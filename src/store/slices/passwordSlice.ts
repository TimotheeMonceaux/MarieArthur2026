import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface PasswordState {
    profile: undefined | 'GUEST_ALL' | 'GUEST_DRINKS',
    hasError: boolean
}

const initialState: PasswordState = {
    profile: undefined,
    hasError: false
}

const strHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convertit en entier 32 bits
  }
  return hash.toString();
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    checkPassword: (state, pwd: PayloadAction<string>) => {
        let inputHash = strHash(pwd.payload.replaceAll(" ","").toUpperCase());
        if (inputHash === '-925831426')  {
            state.hasError = false;
            state.profile = 'GUEST_ALL';
        }
        else if (inputHash === '1353680074') {
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
