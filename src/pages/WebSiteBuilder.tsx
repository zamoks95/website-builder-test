import { Aside } from './components/aside/Aside'
import { ViewPort } from './components/aside/AsideViewportPicker'
import { Section } from './components/Section'
import { NewSection } from './components/NewSection'
import { useAppSelector } from '../hooks'
import { selectViewport } from '../slices/viewport-slice'
import { selectSections } from '../slices/sections-slice'

const WebSiteBuilder = () => {
  const { viewport } = useAppSelector(selectViewport)
  const { sections } = useAppSelector(selectSections)

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
        <div>
          {sections.length > 0 &&
            sections.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                component={section.component}
                fields={section.fields}
              />
            ))}
          <NewSection />
        </div>
      </main>
      <Aside />
    </div>
  )
}

export default WebSiteBuilder
