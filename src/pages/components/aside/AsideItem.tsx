import { AiOutlineMinusCircle } from 'react-icons/ai'

const AsideItem = () => {
  return (
    <li>
      <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
        <AiOutlineMinusCircle />
        <span className="ml-3">Dashboard</span>
      </div>
    </li>
  )
}
export { AsideItem }
