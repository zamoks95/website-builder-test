import { Component, ComponentField } from '../../../../domain/builder'

const Image2Fields: ComponentField[] = [
  {
    id: '__highlight__',
    name: 'Highlight',
    type: 'string',
    value: 'Default Highlight'
  },
  {
    id: '__title__',
    name: 'Title',
    type: 'string',
    value: 'Default Title'
  },
  {
    id: '__subtitle__',
    name: 'Subtitle',
    type: 'string',
    value: 'Default subtitle'
  }
]

const Image2Render = () => {
  return (
    <div className="lg:text-center">
      <h2 className="text-base text-__colorPrimary__-600 font-semibold tracking-wide uppercase">
        __highlight__
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        __title__
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        __subtitle__
      </p>
    </div>
  )
}

const Image2: Component = {
  id: 'image-2',
  name: 'Image 2',
  type: 'image',
  fields: Image2Fields,
  render: <Image2Render />
}
export { Image2 }
