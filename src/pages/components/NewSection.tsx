import { IconButton, Tooltip, Box } from '@mui/material'

import { AiOutlinePlus } from 'react-icons/ai'

import { useAppDispatch } from '../../hooks'
import { openComponentSelector, updateTargetOrder } from '../../slices'

const NewSection = () => {
  const dispatch = useAppDispatch()

  const handleCreateNewSectionClick = () => {
    dispatch(openComponentSelector())
    dispatch(updateTargetOrder('last'))
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} py={3}>
      <Tooltip title="Create New Section">
        <IconButton onClick={handleCreateNewSectionClick}>
          <AiOutlinePlus />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export { NewSection }
