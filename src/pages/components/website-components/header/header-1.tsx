import { Component, ComponentField } from '../../../../domain/builder'

const Header1Fields: ComponentField[] = [
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

const Header1Render = () => {
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

const Header1: Component = {
  id: 'header-1',
  name: 'Header 1',
  type: 'header',
  fields: Header1Fields,
  render: <Header1Render />
}
export { Header1 }
