import {
  IconButton,
  Tooltip,
  Box,
  Card,
  CardContent,
  CardMedia,
  ListSubheader,
  Typography,
  ListItemButton,
  CardActionArea,
  Popover,
  List
} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { ComponentId, componentsList } from '../../domain/builder'
import { ComponentSelector } from './componentSelector/ComponentSelector'

import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

import { useAppDispatch } from '../../hooks'
import { addNewSection } from '../../slices/sections-slice'

type SectionSelectElementProps = {
  onElementSelect: (componentId: ComponentId) => void
}

type ElementPreviewCardProps = {
  element: Element
}

const ElementPreviewCard = ({ element }: ElementPreviewCardProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/600x140"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {element.info.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const ElementPicker = ({ onElementSelect }: SectionSelectElementProps) => {
  const handleSelectOnChange = (id: string) => {
    const selectedElement = componentsList.find((element) => element.id === id)
    if (selectedElement) onElementSelect(selectedElement.id)
  }

  const elementsTypes = [...new Set(componentsList.map(({ type }) => type))]

  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 }
      }}
      subheader={<li />}
    >
      {elementsTypes.map((type) => {
        return (
          <li key={`section-${type}`}>
            <ul>
              <ListSubheader>{type}</ListSubheader>
              {componentsList.map((element) => {
                if (type === element.type) {
                  return (
                    <ListItemButton
                      key={element.id}
                      onClick={() => handleSelectOnChange(element.id)}
                    >
                      <span>THIS IS PREVIEW FOR {element.name}</span>
                    </ListItemButton>
                  )
                }
                return null
              })}
            </ul>
          </li>
        )
      })}
    </List>
  )
}

const NewSection = () => {
  const dispatch = useAppDispatch()
  const [isComponentSelectorOpen, setIsComponentSelectorOpen] = useState(false)

  const handleComponentSelectorToggle = () => {
    setIsComponentSelectorOpen(!isComponentSelectorOpen)
  }

  const handleElementSelected = (element: ComponentId) => {
    dispatch(addNewSection(element))
    handleComponentSelectorToggle()
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} py={3}>
      <Tooltip title="Create New Section">
        <IconButton onClick={handleComponentSelectorToggle}>
          <AiOutlinePlus />
        </IconButton>
      </Tooltip>
      <ComponentSelector
        isOpen={isComponentSelectorOpen}
        toggleOpen={handleComponentSelectorToggle}
        onElementSelect={handleElementSelected}
      />
    </Box>
  )
}

export { NewSection }
