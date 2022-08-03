import { useState, ReactNode } from 'react'
import { Box, Popover, Stack, TextField } from '@mui/material'
import { renderToString } from 'react-dom/server'
import reactStringReplace from 'react-string-replace'

import { Component, ComponentField } from '../../domain/builder'
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  selectPrimaryColor,
  selectSecondaryColor
} from '../../slices/colors-slice'
import { updateSectionFields } from '../../slices/sections-slice'

type SectionProps = {
  id: string
  component: Component
  fields: ComponentField[]
}

const replaceNodeWithDynamicVariables = (node: ReactNode, fields: any) => {
  const primaryColor = useAppSelector(selectPrimaryColor)
  const secondaryColor = useAppSelector(selectSecondaryColor)

  const stringifiedNode = renderToString(node)
  let newNode = stringifiedNode
  fields.forEach((field: any) => {
    newNode = reactStringReplace(newNode, field.id, () => field.value).join('')
  })
  newNode = reactStringReplace(
    newNode,
    '__colorPrimary__',
    () => primaryColor
  ).join('')

  newNode = reactStringReplace(
    newNode,
    '__colorSecondary__',
    () => secondaryColor
  ).join('')

  return <div dangerouslySetInnerHTML={{ __html: newNode }} />
}

const Section = ({ id, component, fields }: SectionProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const dispatch = useAppDispatch()

  const handleFieldChange = (
    sectionId: string,
    fieldId: string,
    value: string
  ) => {
    dispatch(updateSectionFields({ sectionId, fieldId, value }))
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const popoverId = open ? 'section-popover' : undefined
  return (
    <section
      className="w-auto block my-2 text-center cursor-pointer border-slate-600 relative hover:outline outline-4 outline-blue-500 transition-all"
      id={id}
    >
      <div aria-describedby={popoverId} onClick={handleClick}>
        {replaceNodeWithDynamicVariables(component.render, fields)}
      </div>
      <Popover
        id={popoverId}
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
        <Box width={'400px'} p={2} maxWidth={'100%'}>
          <Stack gap={3}>
            {fields.map((field) => (
              <TextField
                key={field.id}
                label={field.name}
                value={field.value}
                variant="outlined"
                onChange={(event) =>
                  handleFieldChange(id, field.id, event.target.value)
                }
              />
            ))}
          </Stack>
        </Box>
      </Popover>
    </section>
  )
}

export { Section }
export type { SectionProps }
