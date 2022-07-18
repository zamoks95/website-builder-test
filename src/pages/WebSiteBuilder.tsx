import { useState } from 'react'
import { Element } from './components/Elements'
import { Aside } from './components/aside/Aside'
import { ViewPort } from './components/aside/AsideViewportPicker'
import { Section, SectionProps, NewSection } from './components/Section'

const WebSiteBuilder = () => {
  const [sections, setSections] = useState<SectionProps[]>([])
  const [activeSectionId, setActiveSectionId] = useState<
    SectionProps['id'] | undefined
  >(undefined)

  const [asideIsOpen, setAsideIsOpen] = useState<boolean>(false)
  const [selectedViewport, setSelectedViewport] = useState<ViewPort>('desktop')
  const handleToggleAsideIsOpen = () => {
    setAsideIsOpen(!asideIsOpen)
  }

  const handleSelectedViewPortChange = (newViewPort: ViewPort) => {
    setSelectedViewport(newViewPort)
  }

  const updateSection = (sectionId: SectionProps['id']) => {
    setActiveSectionId(sectionId)
  }

  const addNewSection = (newElement: Element) => {
    const newSections: SectionProps[] = [
      ...sections,
      {
        id: `section-${sections.length + 1}`,
        element: newElement.component,
        editSection: () => updateSection(`section-${sections.length + 1}`)
      }
    ]
    setSections(newSections)
  }

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
          selectedViewport
        )} mx-auto border-solid border-black bg-white h-screen overflow-x-hidden`}
      >
        <div>
          {sections.length > 0 &&
            sections.map((props) => <Section {...props} key={props.id} />)}
          <NewSection onElementSelected={addNewSection} />
        </div>
      </main>
      <Aside
        isOpen={asideIsOpen}
        toggleOpen={handleToggleAsideIsOpen}
        selectedViewPort={selectedViewport}
        changeViewPort={handleSelectedViewPortChange}
      />
    </div>
  )
}

export default WebSiteBuilder
