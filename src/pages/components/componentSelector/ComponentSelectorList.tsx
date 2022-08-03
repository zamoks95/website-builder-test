import { Stack, Paper } from '@mui/material'
import Masonry from '@mui/lab/Masonry'

import { Component, ComponentId } from '../../../domain/builder'

type ComponentSelectorListProps = {
  componentsList: Component[]
  onElementSelect: (element: ComponentId) => void
}
const ComponentSelectorList = ({
  componentsList,
  onElementSelect
}: ComponentSelectorListProps) => {
  return (
    <Stack
      sx={{
        maxHeight: '468px',
        overflowY: 'scroll'
      }}
    >
      <Masonry columns={2} spacing={2}>
        {componentsList.map((component) => (
          <>
            <Paper onClick={() => onElementSelect(component.id)}>
              {component.render}
            </Paper>
          </>
        ))}
      </Masonry>
    </Stack>
  )
}

export { ComponentSelectorList }
