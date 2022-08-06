import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ColorId } from '../domain/color'
import { RootState } from '../store'

export interface ColorsState {
  primary: ColorId
  secondary: ColorId
}

const initialState: ColorsState = {
  primary: 'violet',
  secondary: 'orange'
}

export const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    updatePrimary: (state, action: PayloadAction<ColorId>) => {
      state.primary = action.payload
    },
    updateSecondary: (state, action: PayloadAction<ColorId>) => {
      state.secondary = action.payload
    }
  }
})

export const { updatePrimary, updateSecondary } = colorsSlice.actions

export const selectPrimaryColor = (state: RootState) => state.colors.primary
export const selectSecondaryColor = (state: RootState) => state.colors.secondary

export default colorsSlice.reducer
