type ComponentTypeId =
  | 'heading'
  | 'list'
  | 'gallery'
  | 'image'
  | 'quote'
  | 'text'
  | 'video'
  | 'socialnetwork'
  | 'faq'
  | 'location'
  | 'price'

type ComponentType = {
  id: ComponentTypeId
  name: string
}

const componentTypeList: ComponentType[] = [
  { id: 'heading', name: 'Heading' },
  { id: 'list', name: 'List' },
  { id: 'gallery', name: 'Gallery' },
  { id: 'image', name: 'Image' },
  { id: 'quote', name: 'Quotes' },
  { id: 'text', name: 'Text' },
  { id: 'video', name: 'Video' },
  { id: 'socialnetwork', name: 'Social Network' },
  { id: 'faq', name: 'FAQ' },
  { id: 'location', name: 'Location' },
  { id: 'price', name: 'Price' }
]

const getComponentTypeById = (id: ComponentTypeId): ComponentType =>
  componentTypeList.filter((componentType) => componentType.id === id)[0] ??
  componentTypeList[0]

export type { ComponentTypeId, ComponentType }
export { componentTypeList, getComponentTypeById }
