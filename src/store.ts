import { configureStore } from '@reduxjs/toolkit'
import colorsReducer from './slices/colors-slice'
import viewportReducer from './slices/viewport-slice'
import typographyReducer from './slices/typography-slice'
import sectionsReducer from './slices/sections-slice'
import socialNetworksReducer from './slices/social-networks-slice'
import componentSelectorReducer from './slices/component-selector-slice'

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
    viewport: viewportReducer,
    typography: typographyReducer,
    sections: sectionsReducer,
    socialNetworks: socialNetworksReducer,
    componentSelector: componentSelectorReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
