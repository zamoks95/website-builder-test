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

type ComponentSelectorProps = {
  isOpen: boolean
  toggleOpen: () => void
  onElementSelect: (element: ComponentId) => void
}
const ComponentSelector = ({
  isOpen,
  toggleOpen,
  onElementSelect
}: ComponentSelectorProps) => {
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

  return (
    <Dialog
      open={isOpen}
      onClose={toggleOpen}
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
            onElementSelect={onElementSelect}
          />
        </Grid>
      </Grid>
    </Dialog>
  )
}

export { ComponentSelector }
