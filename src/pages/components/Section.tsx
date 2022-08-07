import { useState, ReactNode } from 'react'
import { Box, Button, Stack, TextField, Popover } from '@mui/material'

import { Component, ComponentField } from '../../domain/builder'
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  openComponentSelector,
  updateSectionFields,
  updateTargetOrder,
  moveSection,
  deleteSection,
  selectPrimaryColor,
  selectSecondaryColor
} from '../../slices'

import { replaceNodeWithDynamicVariables } from '../../utils/section'

type SectionProps = {
  id: string
  component: Component
  fields: ComponentField[]
  order: number
}

type ComponentWrapperProps = {
  children: ReactNode
  fields: ComponentField[]
  sectionId: string
  order: number
}
type AddNewSectionProps = {
  position: 'top' | 'bottom'
  order: number
}

const AddNewSectionToolbar = ({ position, order }: AddNewSectionProps) => {
  const dispatch = useAppDispatch()

  const handleCreateNewSectionClick = () => {
    dispatch(openComponentSelector())
    dispatch(updateTargetOrder(order))
  }
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        top: position === 'top' ? -18 : 'auto',
        bottom: position === 'bottom' ? -18 : 'auto',
        position: 'absolute'
      }}
    >
      <Button variant="contained" onClick={handleCreateNewSectionClick}>
        Add new Section
      </Button>
    </Box>
  )
}

const EditSectionToolbar = ({
  fields,
  sectionId
}: {
  fields: ComponentField[]
  sectionId: string
}) => {
  const dispatch = useAppDispatch()

  const handleFieldChange = (
    sectionId: string,
    fieldId: string,
    value: string
  ) => {
    dispatch(updateSectionFields({ sectionId, fieldId, value }))
  }
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const popoverId = open ? 'section-popover' : undefined
  return (
    <Box
      sx={{
        right: 0,
        top: 20,
        position: 'absolute'
      }}
    >
      <Button variant="contained" onClick={handleClick}>
        Edit Section
      </Button>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Box width={'400px'} p={2} maxWidth={'100%'}>
          <Stack gap={3}>
            {fields.map((field) => (
              <TextField
                key={field.id}
                label={field.name}
                value={field.value}
                variant="outlined"
                onChange={(event) =>
                  handleFieldChange(sectionId, field.id, event.target.value)
                }
              />
            ))}
          </Stack>
        </Box>
      </Popover>

      <Button
        onClick={() => dispatch(moveSection({ sectionId, direction: 'up' }))}
      >
        UP
      </Button>
      <Button
        onClick={() => dispatch(moveSection({ sectionId, direction: 'down' }))}
      >
        DOWN
      </Button>
      <Button onClick={() => dispatch(deleteSection(sectionId))}>DELETE</Button>
    </Box>
  )
}
const ComponentWrapper = ({
  children,
  fields,
  sectionId,
  order
}: ComponentWrapperProps) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: 'center',
        py: 4,
        outline: isHover ? '3px solid #1976d2' : 'none',
        outlineOffset: '-3px'
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && <AddNewSectionToolbar position="top" order={order} />}
      {isHover && <EditSectionToolbar fields={fields} sectionId={sectionId} />}
      {children}
      {isHover && <AddNewSectionToolbar position="bottom" order={order + 1} />}
    </Box>
  )
}

const Section = ({ id, component, fields, order }: SectionProps) => {
  const primaryColor = useAppSelector(selectPrimaryColor)
  const secondaryColor = useAppSelector(selectSecondaryColor)
  return (
    <section id={id}>
      <ComponentWrapper fields={fields} sectionId={id} order={order}>
        {replaceNodeWithDynamicVariables({
          node: component.render,
          fields,
          color: {
            primary: primaryColor,
            secondary: secondaryColor
          }
        })}
      </ComponentWrapper>
    </section>
  )
}

export { Section, replaceNodeWithDynamicVariables }
export type { SectionProps }
