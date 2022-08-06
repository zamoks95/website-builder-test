import { Component, ComponentField } from '../../../../domain/builder'

const Text1Fields: ComponentField[] = [
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

const Text1Render = () => {
  return (
    <div className="pt-4 pb-14 text-center">
      <div className="container px-4 sm:px-8 xl:px-4">
        <p className="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
          Team management mobile apps don’t get better than Pavo. It’s probably
          the best app in the world for this purpose. Don’t hesitate to give it
          a try today and you will fall in love with it
        </p>
      </div>
    </div>
  )
}

const Text1: Component = {
  id: 'text-1',
  name: 'Text 1',
  type: 'text',
  fields: Text1Fields,
  render: <Text1Render />
}
export { Text1 }
