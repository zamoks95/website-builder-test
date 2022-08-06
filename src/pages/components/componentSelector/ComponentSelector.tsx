import { useState, useMemo } from 'react'
import { Dialog, Grid } from '@mui/material'
import {
  componentsList,
  Component,
  ComponentType,
  ComponentId
} from '../../../domain/builder'
import { ComponentSelectorAside } from './ComponentSelectorAside'
import { ComponentSelectorList } from './ComponentSelectorList'
import { useAppDispatch } from '../../../hooks'
import { addNewSection } from '../../../slices/sections-slice'
import { closeComponentSelector } from '../../../slices/component-selector-slice'
type ComponentSelectorProps = {
  isOpen: boolean
}
const ComponentSelector = ({ isOpen }: ComponentSelectorProps) => {
  const [selectedType, setSelectedType] = useState<ComponentType>('hero')
  const elementsTypes = [...new Set(componentsList.map(({ type }) => type))]
  const handleSelectedTypeChange = (newType: ComponentType) =>
    setSelectedType(newType)

  const componentsByType: Component[] = useMemo(() => {
    const filteredComponents = componentsList.filter(
      ({ type }) => type === selectedType
    )
    if (filteredComponents) return filteredComponents
    return []
  }, [selectedType])

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
            typesList={elementsTypes}
            selectedType={selectedType}
            onChangeSelectedType={handleSelectedTypeChange}
          />
        </Grid>
        <Grid item xs={9} py={2}>
          <ComponentSelectorList
            componentsList={componentsByType}
            onElementSelect={handleElementSelected}
          />
        </Grid>
      </Grid>
    </Dialog>
  )
}

export { ComponentSelector }
