import {
  List,
  ListItemText,
  ListItemButton,
  ListItem,
  Typography,
  Stack
} from '@mui/material'

import { ComponentType } from '../../../domain/builder'
type ComponentSelectorAsideProps = {
  typesList: ComponentType[]
  selectedType: ComponentType
  onChangeSelectedType: (newType: ComponentType) => void
}
const ComponentSelectorAside = ({
  typesList,
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
          {typesList.map((type) => {
            return (
              <ListItem disablePadding key={type}>
                <ListItemButton
                  onClick={() => onChangeSelectedType(type)}
                  sx={{
                    backgroundColor: selectedType === type ? 'lime' : 'initial'
                  }}
                >
                  <ListItemText primary={type} />
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
