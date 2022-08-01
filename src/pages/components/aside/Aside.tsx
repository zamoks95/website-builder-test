import { Dispatch } from 'react'
import { AsideViewportPicker, ViewPort } from './AsideViewportPicker'
import { AsideContent } from './AsideContent'
import { Drawer, Toolbar, Divider } from '@mui/material'
import { ReducerState, ReducerActionTypes } from '../../webSiteBuilderReducer'

type AsideProps = {
  globalState: ReducerState
  dispatch: Dispatch<ReducerActionTypes>
}

const Aside = ({ globalState, dispatch }: AsideProps) => {
  const drawerWidth = 300
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        },
        position: 'relative'
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar />
      <Divider />
      <AsideContent globalState={globalState} dispatch={dispatch} />
      <AsideViewportPicker
        selectedViewPort={globalState.view.viewPort}
        dispatch={dispatch}
      />
    </Drawer>
  )
}
export { Aside }
