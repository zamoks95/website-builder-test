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
import {
  availableFontFamilies,
  FontFamilyId,
  getFontFamilyById
} from '../../../../domain/typography'

type SelectFontFamilyProps = {
  dispatch: Dispatch<ReducerActionTypes>
  selectedFamily: FontFamilyId
}

const SelectFontFamily = ({
  selectedFamily,
  dispatch
}: SelectFontFamilyProps) => {
  const handleChange = (event: SelectChangeEvent<FontFamilyId>) => {
    dispatch({
      type: ReducerActionKind.SettingsTypographyFontFamily,
      payload: event.target.value
    })
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
            <MenuItem value={fontFamily.id}>{fontFamily.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItemButton>
  )
}

export { SelectFontFamily }
