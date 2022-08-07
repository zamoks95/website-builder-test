import {
  ListItemButton,
  ListItemText,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl
} from '@mui/material'
import {
  availableFontFamilies,
  FontFamilyId
} from '../../../../domain/typography'
import { useAppSelector, useAppDispatch } from '../../../../hooks'
import { selectFontFamily, updateFamily } from '../../../../slices'

const SelectFontFamily = () => {
  const selectedFamily = useAppSelector(selectFontFamily)
  const dispatch = useAppDispatch()

  const handleChange = (event: SelectChangeEvent<FontFamilyId>) => {
    dispatch(updateFamily(event.target.value))
  }
  return (
    <ListItemButton>
      <ListItemText primary={'Font Family'} />
      <FormControl>
        <Select
          value={selectedFamily}
          onChange={handleChange}
          sx={{ minHeight: '30px', height: '30px' }}
        >
          {availableFontFamilies.map((fontFamily) => (
            <MenuItem key={fontFamily.id} value={fontFamily.id}>
              {fontFamily.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItemButton>
  )
}

export { SelectFontFamily }
