import { ReactElement, Dispatch } from 'react'

import { Box, ButtonGroup, Button, Typography } from '@mui/material'
import {
  ReducerActionKind,
  ReducerActionTypes
} from '../../webSiteBuilderReducer'

type ViewPort = 'mobile' | 'tablet' | 'desktop'

type AsideViewportPickerProps = {
  selectedViewPort: string
  dispatch: Dispatch<ReducerActionTypes>
}

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

const AsideViewportPicker = ({
  selectedViewPort,
  dispatch
}: AsideViewportPickerProps) => {
  const viewPorts: ViewPort[] = ['mobile', 'tablet', 'desktop']

  const handleViewPortChange = (viewPort: string) => {
    dispatch({
      type: ReducerActionKind.ViewViewPort,
      payload: viewPort
    })
  }
  return (
    <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} m={2}>
      <ButtonGroup aria-label="button group" fullWidth={true}>
        {viewPorts.map((viewport) => (
          <ViewPortItem
            isSelected={selectedViewPort === viewport}
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
