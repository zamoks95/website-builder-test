import { Header1, Header2, Header3, ProductList1 } from './website-components'
import { ReactNode } from 'react'

import { AiOutlineMinusCircle } from 'react-icons/ai'
import { GrImage, GrYoutube, GrSpotify } from 'react-icons/gr'
import { CgFormatHeading } from 'react-icons/cg'
import { FaRegHandPointer } from 'react-icons/fa'

type ElementType =
  | 'image'
  | 'button'
  | 'header'
  | 'footer'
  | 'youtube'
  | 'spotify'
type Element = {
  name: string
  id: string
  component: ReactNode
  type: ElementType
}

const ElementIconByType = (type: ElementType) => {
  switch (type) {
    case 'image':
      return <GrImage />
    case 'youtube':
      return <GrYoutube />
    case 'spotify':
      return <GrSpotify />

    case 'button':
      return <FaRegHandPointer />
    case 'header':
      return <CgFormatHeading />
    default:
      return <AiOutlineMinusCircle />
  }
}

const ElementThumbnail = ({ name, type, id }: Omit<Element, 'component'>) => {
  return (
    <button id={id} className="bg-indigo-300 p-5 flex">
      {ElementIconByType(type)}
      <label>{name}</label>
    </button>
  )
}

const elementsList: Element[] = [
  { id: 'header-1', name: 'Header 1', type: 'header', component: <Header1 /> },
  { id: 'header-2', name: 'Header 2', type: 'header', component: <Header2 /> },
  { id: 'header-3', name: 'Header 3', type: 'header', component: <Header3 /> },
  { id: 'youtube-1', name: 'YouTube', type: 'youtube', component: <Header1 /> },
  {
    id: 'el-3',
    name: 'Product List 1',
    type: 'youtube',
    component: <ProductList1 />
  }
]

export { elementsList, ElementThumbnail }
export type { Element }
