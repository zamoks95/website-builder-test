import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
type AsideHeaderProps = {
  isOpen: boolean
  toggleOpen: () => void
}

const AsideHeader = ({ isOpen, toggleOpen }: AsideHeaderProps) => {
  return (
    <div className="pb-4 mb-4 space-y-2 border-b border-gray-200 dark:border-gray-700">
      <div
        onClick={toggleOpen}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  cursor-pointer"
      >
        {isOpen ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
        {isOpen && <span className="ml-3">Close </span>}
      </div>
    </div>
  )
}
export { AsideHeader }
