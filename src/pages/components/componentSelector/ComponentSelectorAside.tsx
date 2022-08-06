import {
  List,
  ListItemText,
  ListItemButton,
  ListItem,
  Typography,
  Stack
} from '@mui/material'

import { ComponentTypeId, componentTypeList } from '../../../domain/type'
type ComponentSelectorAsideProps = {
  selectedType: ComponentTypeId
  onChangeSelectedType: (newType: ComponentTypeId) => void
}
const ComponentSelectorAside = ({
  selectedType,
  onChangeSelectedType
}: ComponentSelectorAsideProps) => {
  return (
    <Stack>
      <Typography variant="h5">Pick an element</Typography>
      <nav aria-label="secondary mailbox folders">
        <List
          sx={{
            height: '436px',
            overflowY: 'scroll'
          }}
        >
          {componentTypeList.map(({ id, name }) => {
            return (
              <ListItem disablePadding key={id}>
                <ListItemButton
                  onClick={() => onChangeSelectedType(id)}
                  sx={{
                    backgroundColor: selectedType === id ? 'lime' : 'initial'
                  }}
                >
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </nav>
    </Stack>
  )
}

export { ComponentSelectorAside }
