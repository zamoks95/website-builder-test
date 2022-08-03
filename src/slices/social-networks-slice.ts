import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SocialNetworkId } from '../domain/social-networks'
import { RootState } from '../store'

export interface SocialNetworksState {
  socialNetworks: SocialNetworkId[]
}

const initialState: SocialNetworksState = {
  socialNetworks: []
}

export const socialNetworksSlice = createSlice({
  name: 'social networks',
  initialState,
  reducers: {
    addSocialNetwork: (state, action: PayloadAction<SocialNetworkId>) => {
      state.socialNetworks = [...state.socialNetworks, action.payload]
    },
    removeSocialNetwork: (state, action: PayloadAction<SocialNetworkId>) => {
      state.socialNetworks = state.socialNetworks.filter(
        (socialNetwork) => socialNetwork !== action.payload
      )
    }
  }
})

export const { addSocialNetwork, removeSocialNetwork } =
  socialNetworksSlice.actions

export const selectSocialNetworks = (state: RootState) => state.socialNetworks

export default socialNetworksSlice.reducer
