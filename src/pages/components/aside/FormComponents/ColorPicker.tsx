import { Box, Popover, ListItemButton, ListItemText, Grid } from '@mui/material'
import { useState, MouseEvent } from 'react'
import {
  Color,
  ColorId,
  availableColors,
  getColorById
} from '../../../../domain/color'

import { useAppSelector, useAppDispatch } from '../../../../hooks'
import {
  selectPrimaryColor,
  selectSecondaryColor,
  updatePrimary,
  updateSecondary
} from '../../../../slices/colors-slice'

type ColorPickerProps = {
  title: string
  pick: 'primary' | 'secondary'
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

const ColorPicker = ({ title, pick }: ColorPickerProps) => {
  const selectedColor = useAppSelector(
    pick === 'primary' ? selectPrimaryColor : selectSecondaryColor
  )
  const dispatch = useAppDispatch()

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
    if (pick === 'primary') {
      dispatch(updatePrimary(newColor))
    } else {
      dispatch(updateSecondary(newColor))
    }
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
