import { useState } from 'react'
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
import {
  ColorPicker,
  SocialNetworkPicker,
  SelectFontFamily,
  SelectFontSize
} from './FormComponents'

import { useAppSelector } from '../../../hooks'
import {
  selectSections,
  selectPrimaryColor,
  selectSecondaryColor
} from '../../../slices'
import { application } from '../../../aplication'

const AsideContent = () => {
  const [expandedPanel, setExpandedPanel] = useState('')
  const { sections } = useAppSelector(selectSections)
  const primaryColor = useAppSelector(selectPrimaryColor)
  const secondaryColor = useAppSelector(selectSecondaryColor)

  const handleExportClick = () => {
    application.exportPage(sections, primaryColor, secondaryColor)
  }

  const handlePanelClick = (panelId: string) => {
    setExpandedPanel(panelId === expandedPanel ? '' : panelId)
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
