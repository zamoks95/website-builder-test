import { useState } from 'react'
import { Dialog, Grid } from '@mui/material'
import { ComponentId, getComponentsByType } from '../../../domain/builder'
import { ComponentTypeId } from '../../../domain/type'
import { ComponentSelectorAside } from './ComponentSelectorAside'
import { ComponentSelectorList } from './ComponentSelectorList'
import { useAppDispatch } from '../../../hooks'
import { addNewSection } from '../../../slices/sections-slice'
import { closeComponentSelector } from '../../../slices/component-selector-slice'
type ComponentSelectorProps = {
  isOpen: boolean
}
const ComponentSelector = ({ isOpen }: ComponentSelectorProps) => {
  const [selectedType, setSelectedType] = useState<ComponentTypeId>('heading')
  const handleSelectedTypeChange = (newType: ComponentTypeId) =>
    setSelectedType(newType)

  const dispatch = useAppDispatch()

  const handleElementSelected = (element: ComponentId) => {
    dispatch(addNewSection(element))
    dispatch(closeComponentSelector())
  }
  const handleClose = () => {
    dispatch(closeComponentSelector())
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
      fullWidth
    >
      <Grid container sx={{ height: '500px' }}>
        <Grid item xs={3} p={2}>
          <ComponentSelectorAside
            selectedType={selectedType}
            onChangeSelectedType={handleSelectedTypeChange}
          />
        </Grid>
        <Grid item xs={9} py={2}>
          <ComponentSelectorList
            componentsList={getComponentsByType(selectedType)}
            onElementSelect={handleElementSelected}
          />
        </Grid>
      </Grid>
    </Dialog>
  )
}

export { ComponentSelector }
