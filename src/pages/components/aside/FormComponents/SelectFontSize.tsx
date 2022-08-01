import {
  ListItemButton,
  ListItemText,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl
} from '@mui/material'
import { Dispatch } from 'react'
import {
  ReducerActionTypes,
  ReducerActionKind
} from '../../../webSiteBuilderReducer'
import { availableFontSizes, FontSizeId } from '../../../../domain/typography'

type SelectFontSizeProps = {
  dispatch: Dispatch<ReducerActionTypes>
  selectedSize: FontSizeId
}

const SelectFontSize = ({ selectedSize, dispatch }: SelectFontSizeProps) => {
  const handleChange = (event: SelectChangeEvent<FontSizeId>) => {
    dispatch({
      type: ReducerActionKind.SettingsTypographyFontSize,
      payload: event.target.value
    })
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
            <MenuItem value={fontSize.id}>{fontSize.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItemButton>
  )
}

export { SelectFontSize }
