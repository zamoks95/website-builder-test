import { Component, ComponentField } from '../../../../domain/builder'

const List1Fields: ComponentField[] = [
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

const List1Render = () => {
  return (
    <div>
      <h2 className="title sm:text-4xl md:text-5xl">
        Build up the whole picture
      </h2>
      <p className="mb-16 mx-auto intro sm:max-w-xl">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum — semper quis lectus nulla
        at volutpat diam ut venenatis.
      </p>
      <ul className="flex flex-col flex-wrap justify-center mb-20 text-center border-b border-gray-900 sm:flex-row">
        <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
            <img src="img/feature-tile-icon-01.svg" alt="" />
          </span>
          <h3 className="mb-2 text-2xl font-bold text-white">
            Robust Workflow
          </h3>
          <p className="max-w-xs mx-auto text-lg text-gray-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </li>
        <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
            <img src="img/feature-tile-icon-02.svg" alt="" />
          </span>
          <h3 className="mb-2 text-2xl font-bold text-white">
            Robust Workflow
          </h3>
          <p className="max-w-xs mx-auto text-lg text-gray-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </li>
        <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
            <img src="img/feature-tile-icon-03.svg" alt="" />
          </span>
          <h3 className="mb-2 text-2xl font-bold text-white">
            Robust Workflow
          </h3>
          <p className="max-w-xs mx-auto text-lg text-gray-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </li>
        <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
            <img src="img/feature-tile-icon-04.svg" alt="" />
          </span>
          <h3 className="mb-2 text-2xl font-medium text-white">
            Robust Workflow
          </h3>
          <p className="max-w-xs mx-auto text-lg text-gray-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </li>
        <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
            <img src="img/feature-tile-icon-05.svg" alt="" />
          </span>
          <h3 className="mb-2 text-2xl font-medium text-white">
            Robust Workflow
          </h3>
          <p className="max-w-xs mx-auto text-lg text-gray-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </li>
        <li className="w-full px-8 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
            <img src="img/feature-tile-icon-06.svg" alt="" />
          </span>
          <h3 className="mb-2 text-2xl font-medium text-white">
            Robust Workflow
          </h3>
          <p className="max-w-xs mx-auto text-lg text-gray-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </li>
      </ul>
    </div>
  )
}

const List1: Component = {
  id: 'list-1',
  name: 'List 1',
  type: 'list',
  fields: List1Fields,
  render: <List1Render />
}
export { List1 }
