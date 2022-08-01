import { useReducer } from 'react'
import { Aside } from './components/aside/Aside'
import { ViewPort } from './components/aside/AsideViewportPicker'
import { Section } from './components/Section'
import { NewSection } from './components/NewSection'
import { Reducer, ReducerState } from './webSiteBuilderReducer'

const WebSiteBuilder = () => {
  const initialGlobalState: ReducerState = {
    sections: [],
    settings: {
      colors: {
        primary: 'violet',
        secondary: 'orange'
      },
      typography: {
        fontFamily: 'roboto',
        fontSize: 'xl'
      }
    },
    socialNetworks: ['facebook', 'twitter'],
    view: {
      viewPort: 'desktop'
    }
  }
  const [globalState, dispatch] = useReducer(Reducer, initialGlobalState)

  const getMaxWidthBySelectedViewPort = (viewPort: ViewPort) => {
    switch (viewPort) {
      case 'mobile':
        return 'max-w-sm'
      case 'tablet':
        return 'max-w-screen-md'
      default:
        return 'max-w-screen-xl'
    }
  }

  return (
    <div className="flex flex-column justify-between bg-indigo-100">
      <main
        className={`w-full ${getMaxWidthBySelectedViewPort(
          globalState.view.viewPort
        )} mx-auto border-solid border-black bg-white h-screen overflow-x-hidden`}
      >
        <div>
          {globalState.sections.length > 0 &&
            globalState.sections.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                component={section.component}
                dispatch={dispatch}
                fields={section.fields}
                settings={globalState.settings}
              />
            ))}
          <NewSection dispatch={dispatch} />
        </div>
      </main>
      <Aside globalState={globalState} dispatch={dispatch} />
    </div>
  )
}

export default WebSiteBuilder
