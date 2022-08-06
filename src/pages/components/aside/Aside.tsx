import { AsideViewportPicker } from './AsideViewportPicker'
import { AsideContent } from './AsideContent'
import { Drawer, Toolbar, Divider, Button } from '@mui/material'

const Aside = () => {
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
      <AsideContent />
      <AsideViewportPicker />
    </Drawer>
  )
}
export { Aside }
