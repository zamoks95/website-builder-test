import { Box, ButtonGroup, Button, Typography } from '@mui/material'

import { useAppSelector, useAppDispatch } from '../../../hooks'
import { selectViewport, changeViewport } from '../../../slices/viewport-slice'

type ViewPort = 'mobile' | 'tablet' | 'desktop'

type ViewPortItem = {
  isSelected: boolean
  handleClick: (viewPort: ViewPort) => void
  id: ViewPort
}

const ViewPortItem = ({ isSelected, handleClick, id }: ViewPortItem) => {
  return (
    <Button
      variant={isSelected ? 'contained' : 'outlined'}
      onClick={() => handleClick(id)}
      fullWidth={true}
    >
      <Typography>{id}</Typography>
    </Button>
  )
}

const AsideViewportPicker = () => {
  const viewPorts: ViewPort[] = ['mobile', 'tablet', 'desktop']
  const selectedViewport = useAppSelector(selectViewport)
  const dispatch = useAppDispatch()
  const handleViewPortChange = (viewPort: ViewPort) => {
    dispatch(changeViewport(viewPort))
  }
  return (
    <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} m={2}>
      <ButtonGroup aria-label="button group" fullWidth={true}>
        {viewPorts.map((viewport) => (
          <ViewPortItem
            isSelected={selectedViewport.viewport === viewport}
            handleClick={handleViewPortChange}
            id={viewport}
            key={viewport}
          />
        ))}
      </ButtonGroup>
    </Box>
  )
}
export { AsideViewportPicker }
export type { ViewPort }
