import { useState, Dispatch } from 'react'

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Switch
} from '@mui/material'
import { AsideAccordion } from './AsideAccordion'
import { ColorPicker } from './FormComponents/ColorPicker'
import { SocialNetworkPicker } from './FormComponents/SocialNetworkPicker'
import { SelectFontFamily } from './FormComponents/SelectFontFamily'
import { SelectFontSize } from './FormComponents/SelectFontSize'

import {
  ReducerState,
  ReducerActionTypes,
  ReducerActionKind
} from '../../webSiteBuilderReducer'

type AsideContentProps = {
  globalState: ReducerState
  dispatch: Dispatch<ReducerActionTypes>
}
const AsideContent = ({ globalState, dispatch }: AsideContentProps) => {
  const [expandedPanel, setExpandedPanel] = useState('')
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
          <ColorPicker
            title="Primary Color"
            selectedColor={globalState.settings.colors.primary}
            dispatch={dispatch}
            dispatchActionKind={ReducerActionKind.SettingsColorPrimary}
          />
          <ColorPicker
            title="Secondary Color"
            selectedColor={globalState.settings.colors.secondary}
            dispatch={dispatch}
            dispatchActionKind={ReducerActionKind.SettingsColorSecondary}
          />
        </List>
      </AsideAccordion>
      <AsideAccordion
        title="Typography"
        id="panel-typography"
        handleExpanded={handlePanelClick}
        expandedPanel={expandedPanel}
      >
        <List>
          <SelectFontFamily
            selectedFamily={globalState.settings.typography.fontFamily}
            dispatch={dispatch}
          />
          <SelectFontSize
            selectedSize={globalState.settings.typography.fontSize}
            dispatch={dispatch}
          />
        </List>
      </AsideAccordion>
      <AsideAccordion
        title="Social Networks"
        id="panel-social-networks"
        handleExpanded={handlePanelClick}
        expandedPanel={expandedPanel}
      >
        <SocialNetworkPicker
          selectedSocialNetworks={globalState.socialNetworks}
          dispatch={dispatch}
        />
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
    </Box>
  )
}
export { AsideContent }
