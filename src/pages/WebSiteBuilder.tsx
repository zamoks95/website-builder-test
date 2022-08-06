import { Aside } from './components/aside/Aside'
import { ViewPort } from './components/aside/AsideViewportPicker'
import { Section } from './components/Section'
import { NewSection } from './components/NewSection'
import { useAppSelector } from '../hooks'
import { selectViewport } from '../slices/viewport-slice'
import { selectSections } from '../slices/sections-slice'
import { selectComponentSelector } from '../slices/component-selector-slice'
import { Box } from '@mui/material'
import { ComponentSelector } from './components/componentSelector/ComponentSelector'

const WebSiteBuilder = () => {
  const { viewport } = useAppSelector(selectViewport)
  const { sections } = useAppSelector(selectSections)
  const isComponentSelectorOpen = useAppSelector(selectComponentSelector)

  const getMaxWidthBySelectedViewPort = (viewPort: ViewPort) => {
    switch (viewPort) {
      case 'mobile':
        return 'max-w-sm'
      case 'tablet':
        return 'max-w-screen-md'
      default:
        return 'max-w-screen-xl'
    }
  }
  return (
    <div className="flex flex-column justify-between bg-indigo-100">
      <main
        className={`w-full ${getMaxWidthBySelectedViewPort(
          viewport
        )} mx-auto border-solid border-black bg-white h-screen overflow-x-hidden`}
      >
        <Box sx={{ mt: 3 }}>
          {sections.length > 0 &&
            sections.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                component={section.component}
                fields={section.fields}
                order={section.order}
              />
            ))}
          {sections.length === 0 && <NewSection />}
        </Box>
        <ComponentSelector isOpen={isComponentSelectorOpen} />
      </main>
      <Aside />
    </div>
  )
}

export default WebSiteBuilder
