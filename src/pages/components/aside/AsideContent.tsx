import { AiOutlineMinusCircle } from 'react-icons/ai'
import { AsideItem } from './AsideItem'

const AsideContent = () => {
  return (
    <div
      className="overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-900 scrollbar-thumb-rounded-md  scrollbar-track-rounded-full scrollbar-track-gray-100"
      style={{ height: 'inherit' }}
    >
      <div className="pr-6">
        <ul className="space-y-2">
          <AsideItem />
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700 ">
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
        </ul>
      </div>
    </div>
  )
}
export { AsideContent }
