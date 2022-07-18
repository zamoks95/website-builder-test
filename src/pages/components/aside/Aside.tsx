import { AsideViewportPicker, ViewPort } from './AsideViewportPicker'
import { AsideHeader } from './AsideHeader'
import { AsideContent } from './AsideContent'

type AsideProps = {
  isOpen: boolean
  toggleOpen: () => void
  selectedViewPort: ViewPort
  changeViewPort: (viewPort: ViewPort) => void
}

const Aside = ({
  isOpen,
  toggleOpen,
  selectedViewPort,
  changeViewPort
}: AsideProps) => {
  return (
    <aside
      className={`${
        isOpen ? `w-96` : `w-16`
      } h-screen overflow-x-hidden transition-all`}
      aria-label="Settings Sidebar"
    >
      <div className="h-screen overflow-y-auto overflow-x-hidden py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 flex flex-col justify-between">
        <AsideHeader isOpen={isOpen} toggleOpen={toggleOpen} />
        {isOpen && <AsideContent />}
        <AsideViewportPicker
          selectedViewPort={selectedViewPort}
          changeViewPort={changeViewPort}
          isAsideOpen={isOpen}
        />
      </div>
    </aside>
  )
}
export { Aside }
