import { Component, ComponentField } from '../../../../domain/builder'

const Price1Fields: ComponentField[] = [
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

const Price1Render = () => {
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

const Price1: Component = {
  id: 'price-1',
  name: 'Price 1',
  type: 'price',
  fields: Price1Fields,
  render: <Price1Render />
}
export { Price1 }
