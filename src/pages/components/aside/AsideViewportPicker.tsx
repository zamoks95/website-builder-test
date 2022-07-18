import { ReactElement } from 'react'
import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineTablet
} from 'react-icons/ai'
type ViewPort = 'mobile' | 'tablet' | 'desktop'

type AsideViewportPickerProps = {
  selectedViewPort: ViewPort
  changeViewPort: (viewPort: ViewPort) => void
  isAsideOpen: boolean
}

type ViewPortItem = {
  isSelected: boolean
  handleClick: (viewPort: ViewPort) => void
  id: ViewPort
  icon: ReactElement
}

const ViewPortItem = ({ isSelected, handleClick, icon, id }: ViewPortItem) => {
  return (
    <li>
      <button
        onClick={() => {
          handleClick(id)
        }}
        className={`p-2 text-base font-normal ${
          isSelected && `bg-gray-700`
        }  rounded-lg text-white  hover:bg-gray-700`}
      >
        {icon}
      </button>
    </li>
  )
}

const AsideViewportPicker = ({
  selectedViewPort,
  changeViewPort,
  isAsideOpen
}: AsideViewportPickerProps) => {
  const viewPorts: { id: ViewPort; icon: ReactElement }[] = [
    {
      id: 'mobile',
      icon: <AiOutlineMobile />
    },
    {
      id: 'tablet',
      icon: <AiOutlineTablet />
    },
    {
      id: 'desktop',
      icon: <AiOutlineDesktop />
    }
  ]

  const getSelectedViewPort = (
    selectedViewPort: ViewPort
  ): { id: ViewPort; icon: ReactElement } => {
    switch (selectedViewPort) {
      case 'mobile':
        return {
          id: 'mobile',
          icon: <AiOutlineMobile />
        }
      case 'tablet':
        return {
          id: 'tablet',
          icon: <AiOutlineTablet />
        }
      default:
        return {
          id: 'desktop',
          icon: <AiOutlineDesktop />
        }
    }
  }
  return (
    <ul className="flex pt-4 mt-4 space-y-2 border-t border-gray-700 items-baseline gap-2">
      {isAsideOpen &&
        viewPorts.map(({ id, icon }) => (
          <ViewPortItem
            isSelected={selectedViewPort === id}
            handleClick={changeViewPort}
            icon={icon}
            id={id}
            key={id}
          />
        ))}
      {!isAsideOpen && (
        <ViewPortItem
          isSelected={true}
          handleClick={changeViewPort}
          icon={getSelectedViewPort(selectedViewPort).icon}
          id={getSelectedViewPort(selectedViewPort).id}
        />
      )}
    </ul>
  )
}
export { AsideViewportPicker }
export type { ViewPort }
