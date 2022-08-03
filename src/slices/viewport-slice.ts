import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type ViewPort = 'mobile' | 'tablet' | 'desktop'

export interface ViewportState {
  viewport: ViewPort
}

const initialState: ViewportState = {
  viewport: 'desktop'
}

export const viewportSlice = createSlice({
  name: 'viewport',
  initialState,
  reducers: {
    changeViewport: (state, action: PayloadAction<ViewPort>) => {
      state.viewport = action.payload
    }
  }
})

export const { changeViewport } = viewportSlice.actions

export const selectViewport = (state: RootState) => state.viewport

export default viewportSlice.reducer
