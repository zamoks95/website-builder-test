import { Component, ComponentField } from '../../../../domain/builder'

const Price2Fields: ComponentField[] = [
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

const Price2Render = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Pricing
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                Free
              </div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                £0
                <span className="text-base">for one user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full p-8 text-3xl font-bold text-center">
                Basic
              </div>
              <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul className="w-full text-center text-base font-bold">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-4xl font-bold text-center">
                £x.99
                <span className="text-base">/ per user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                Pro
              </div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                £x.99
                <span className="text-base">/ per user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Price2: Component = {
  id: 'price-2',
  name: 'Price 2',
  type: 'price',
  fields: Price2Fields,
  render: <Price2Render />
}
export { Price2 }
