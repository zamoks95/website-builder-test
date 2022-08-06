import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface ComponentSelectorState {
  isOpen: boolean
}

const initialState: ComponentSelectorState = {
  isOpen: false
}

export const componentSelectorSlice = createSlice({
  name: 'componentSelector',
  initialState,
  reducers: {
    openComponentSelector: (state) => {
      state.isOpen = true
    },
    closeComponentSelector: (state) => {
      state.isOpen = false
    }
  }
})

export const { openComponentSelector, closeComponentSelector } =
  componentSelectorSlice.actions

export const selectComponentSelector = (state: RootState) =>
  state.componentSelector.isOpen

export default componentSelectorSlice.reducer
