import { Box, Popover, ListItemButton, ListItemText, Grid } from '@mui/material'
import { useState, MouseEvent, Dispatch } from 'react'
import {
  ReducerActionTypes,
  ReducerActionKind
} from '../../../webSiteBuilderReducer'
import {
  Color,
  ColorId,
  availableColors,
  getColorById
} from '../../../../domain/color'

type ColorPickerProps = {
  title: string
  dispatch: Dispatch<ReducerActionTypes>
  selectedColor: ColorId
  dispatchActionKind:
    | typeof ReducerActionKind.SettingsColorPrimary
    | typeof ReducerActionKind.SettingsColorSecondary
}

type AvailableColorsListProps = {
  selectedColor: ColorId
  onChange: (newColor: ColorId) => void
}

const SelectedColorBadge = ({ id }: { id: Color['id'] }) => {
  return (
    <Box
      width={30}
      height={30}
      sx={{ backgroundColor: getColorById(id).hex, borderRadius: 5 }}
    />
  )
}

const AvailableColorsList = ({
  onChange,
  selectedColor
}: AvailableColorsListProps) => {
  return (
    <Grid container spacing={3}>
      {availableColors.map((color) => {
        return (
          <Grid item xs={3} key={color.id}>
            <Box
              width={30}
              height={30}
              onClick={() => onChange(color.id)}
              sx={{
                backgroundColor: `${color.hex}`,
                borderRadius: 5,
                border:
                  selectedColor === color.name ? '2px solid white' : 'none',
                boxShadow:
                  selectedColor === color.name
                    ? `0px 0px 10px ${color.hex}`
                    : 'none',
                transition: 'all 100ms ease-in-out',
                '&:hover': {
                  cursor: 'pointer',
                  boxShadow: `0px 0px 10px ${color.hex}`
                }
              }}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

const ColorPicker = ({
  title,
  selectedColor,
  dispatch,
  dispatchActionKind
}: ColorPickerProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleColorChange = (newColor: ColorId) => {
    dispatch({
      type: dispatchActionKind,
      payload: newColor
    })
    handleClose()
  }
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />
        <SelectedColorBadge id={selectedColor} />
      </ListItemButton>
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
        <Box width={'250px'} p={2} maxWidth={'100%'}>
          <AvailableColorsList
            onChange={handleColorChange}
            selectedColor={selectedColor}
          />
        </Box>
      </Popover>
    </>
  )
}

export { ColorPicker }
