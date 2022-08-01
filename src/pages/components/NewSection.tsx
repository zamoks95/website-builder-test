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
import { ComponentId, componentsList } from '../../domain/builder'

import { ReducerActionTypes, ReducerActionKind } from '../webSiteBuilderReducer'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState, Dispatch } from 'react'

type NewSectionProps = {
  dispatch: Dispatch<ReducerActionTypes>
}
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

const NewSection = ({ dispatch }: NewSectionProps) => {
  const handleElementSelected = (element: Element) => {
    dispatch({
      type: ReducerActionKind.SectionNew,
      payload: element
    })
    handleClose()
  }
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} py={3}>
      <Tooltip title="Create New Section">
        <IconButton aria-describedby={id} onClick={handleClick}>
          <AiOutlinePlus />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Box width={'400px'} p={2} maxWidth={'100%'}>
          <ElementPicker onElementSelect={handleElementSelected} />
        </Box>
      </Popover>
    </Box>
  )
}

export { NewSection }
