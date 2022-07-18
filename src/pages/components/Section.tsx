import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'

import { Element, elementsList } from './Elements'

type SectionProps = {
  id: string
  element: Element['component'] | undefined
  editSection: () => void
}

type NewSectionProps = {
  onElementSelected: (element: Element) => void
}

type AddNewSectionProps = {
  onClick: () => void
}

type SectionSelectElementProps = {
  onElementSelect: (element: Element) => void
}
type SectionTooltipProps = {
  editSection: () => void
}

const SectionTooltip = ({ editSection }: SectionTooltipProps) => {
  return (
    <div className="absolute bottom-0 right-0">
      <button
        onClick={editSection}
        className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <FiEdit />
        <span className="pl-2">Edit</span>
      </button>
    </div>
  )
}

const Section = ({ id, element, editSection }: SectionProps) => {
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false)
  return (
    <section
      className="w-auto block text-center hover:border-4 border-slate-600 relative"
      id={id}
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      {element}
      {isMouseHover && <SectionTooltip editSection={editSection} />}
    </section>
  )
}

const AddNewSection = ({ onClick }: AddNewSectionProps) => {
  return (
    <div
      className="w-auto block py-10 block hover:opacity-100 text-center cursor-pointer flex justify-center opacity-70"
      onClick={onClick}
    >
      <AiOutlinePlus />
    </div>
  )
}

const SectionSelectElement = ({
  onElementSelect
}: SectionSelectElementProps) => {
  const handleSelectOnChange = (event: any) => {
    const selectedElement = elementsList.find(
      ({ id }) => id === event.target.value
    )
    if (selectedElement) {
      onElementSelect(selectedElement)
    }
  }
  return (
    <div className="w-auto block py-10 block text-center flex justify-center">
      <select onChange={handleSelectOnChange} defaultValue={undefined}>
        <option value={undefined} label={'Select an element'} />
        {elementsList.map(({ name, id }) => (
          <option value={id} label={name} key={id} />
        ))}
      </select>
    </div>
  )
}

const NewSection = ({ onElementSelected }: NewSectionProps) => {
  const [isEdditing, setIsEditing] = useState<boolean>(false)
  const handleNewSectionClick = () => {
    setIsEditing(true)
  }
  const handleElementSelected = (element: Element) => {
    onElementSelected(element)
    setIsEditing(false)
  }

  return isEdditing ? (
    <SectionSelectElement onElementSelect={handleElementSelected} />
  ) : (
    <AddNewSection onClick={handleNewSectionClick} />
  )
}

export { Section, NewSection }
export type { SectionProps }
