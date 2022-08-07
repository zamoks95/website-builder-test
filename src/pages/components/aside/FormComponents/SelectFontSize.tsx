import {
  ListItemButton,
  ListItemText,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl
} from '@mui/material'
import { availableFontSizes, FontSizeId } from '../../../../domain/typography'
import { useAppSelector, useAppDispatch } from '../../../../hooks'
import { selectFontSize, updateSize } from '../../../../slices'

const SelectFontSize = () => {
  const selectedSize = useAppSelector(selectFontSize)
  const dispatch = useAppDispatch()

  const handleChange = (event: SelectChangeEvent<FontSizeId>) => {
    dispatch(updateSize(event.target.value))
  }
  return (
    <ListItemButton>
      <ListItemText primary={'Font Family'} />
      <FormControl>
        <Select
          value={selectedSize}
          onChange={handleChange}
          sx={{ minHeight: '30px', height: '30px' }}
        >
          {availableFontSizes.map((fontSize) => (
            <MenuItem key={fontSize.id} value={fontSize.id}>
              {fontSize.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItemButton>
  )
}

export { SelectFontSize }
