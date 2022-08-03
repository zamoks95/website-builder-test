import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FontFamilyId, FontSizeId } from '../domain/typography'
import { RootState } from '../store'

export interface TypographyState {
  fontFamily: FontFamilyId
  fontSize: FontSizeId
}

const initialState: TypographyState = {
  fontFamily: 'roboto',
  fontSize: 'xs'
}

export const typographySlice = createSlice({
  name: 'typography',
  initialState,
  reducers: {
    updateFamily: (state, action: PayloadAction<FontFamilyId>) => {
      state.fontFamily = action.payload
    },
    updateSize: (state, action: PayloadAction<FontSizeId>) => {
      state.fontSize = action.payload
    }
  }
})

export const { updateFamily, updateSize } = typographySlice.actions

export const selectFontFamily = (state: RootState) =>
  state.typography.fontFamily
export const selectFontSize = (state: RootState) => state.typography.fontSize

export default typographySlice.reducer
