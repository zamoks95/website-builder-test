import { useState } from 'react'
import { saveAs } from 'file-saver'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Switch,
  Button
} from '@mui/material'
import { AsideAccordion } from './AsideAccordion'
import { ColorPicker } from './FormComponents/ColorPicker'
import { SocialNetworkPicker } from './FormComponents/SocialNetworkPicker'
import { SelectFontFamily } from './FormComponents/SelectFontFamily'
import { SelectFontSize } from './FormComponents/SelectFontSize'

import { useAppSelector } from '../../../hooks'
import { selectSections } from '../../../slices/sections-slice'
import { Section } from '../../../domain/builder'

import { renderToString } from 'react-dom/server'
import { replaceNodeWithDynamicVariables } from '../Section'

import cssPath from '../../../../build.css'

const AsideContent = () => {
  const [expandedPanel, setExpandedPanel] = useState('')
  const { sections } = useAppSelector(selectSections)
  const handlePanelClick = (panelId: string) => {
    setExpandedPanel(panelId === expandedPanel ? '' : panelId)
  }
  const handleExportClick = () => {
    const renderedSections = sections.map((section: Section) => {
      const replacedSection = replaceNodeWithDynamicVariables(
        section.component.render,
        section.fields
      )
      return renderToString(replacedSection)
    })
    const html = `
    <html>
      <head>
        <meta charset="UTF-8"></head>
        <title>Your page</title>
        <style>${cssPath}</style>
      </head>
      <body>
        ${renderedSections.join('')}
      </body>
    </html>`
    const blob = new Blob([html], {
      type: 'text/plain;charset=utf-8'
    })
    saveAs(blob, 'test.html')
  }
  return (
    <Box>
      <AsideAccordion
        title="Colors"
        id="panel-colors"
        handleExpanded={handlePanelClick}
        expandedPanel={expandedPanel}
      >
        <List>
          <ColorPicker title="Primary Color" pick="primary" />
          <ColorPicker title="Secondary Color" pick="secondary" />
        </List>
      </AsideAccordion>
      <AsideAccordion
        title="Typography"
        id="panel-typography"
        handleExpanded={handlePanelClick}
        expandedPanel={expandedPanel}
      >
        <List>
          <SelectFontFamily />
          <SelectFontSize />
        </List>
      </AsideAccordion>
      <AsideAccordion
        title="Social Networks"
        id="panel-social-networks"
        handleExpanded={handlePanelClick}
        expandedPanel={expandedPanel}
      >
        <SocialNetworkPicker />
      </AsideAccordion>
      <AsideAccordion
        title="Extra Components"
        id="panel-extra-components"
        handleExpanded={handlePanelClick}
        expandedPanel={expandedPanel}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Scroll Top" />
              <Switch checked={true} />
            </ListItemButton>
          </ListItem>
        </List>
      </AsideAccordion>

      <Button onClick={handleExportClick} variant="contained" color="primary">
        Export shit
      </Button>
    </Box>
  )
}
export { AsideContent }
