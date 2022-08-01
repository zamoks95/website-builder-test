import { ColorId } from '../domain/color'
import { FontFamilyId, FontSizeId } from '../domain/typography'
import { Section, ComponentId, getComponentById } from '../domain/builder'
import { SocialNetwork } from '../domain/social-networks'

const addNewSection = (
  sections: Section[],
  componentId: ComponentId
): Section[] => {
  const newComponent = getComponentById(componentId)
  return [
    ...sections,
    {
      id: `section-${sections.length + 1}`,
      component: newComponent,
      fields: newComponent.fields,
      order: sections.length + 1
    }
  ]
}

const addSocialNetwork = (
  socialNetworks: SocialNetwork['id'][],
  socialNetworkId: SocialNetwork['id']
) => [...socialNetworks, socialNetworkId]

const deleteSocialNetwork = (
  socialNetworks: SocialNetwork['id'][],
  socialNetworkId: SocialNetwork['id']
) => socialNetworks.filter((socialNetwork) => socialNetwork !== socialNetworkId)

type UpdateSectionFieldsPayload = {
  sectionId: string
  fieldId: string
  value: string
}
const updateSectionFields = (
  sections: Section[],
  payload: UpdateSectionFieldsPayload
): Section[] => {
  const selectedSection = sections.find(({ id }) => id === payload.sectionId)
  if (selectedSection === undefined) throw new Error('error')
  const updatedSectionFields = selectedSection.fields.map((field) => {
    if (field.id === payload.fieldId) return { ...field, value: payload.value }
    return field
  })
  const newSections = sections.map((section) => {
    if (section.id === selectedSection.id) {
      return {
        ...selectedSection,
        fields: updatedSectionFields
      }
    }
    return section
  })
  return newSections
}

type ReducerState = {
  sections: Section[]
  settings: {
    colors: {
      primary: ColorId
      secondary: ColorId
    }
    typography: {
      fontFamily: FontFamilyId
      fontSize: FontSizeId
    }
  }
  socialNetworks: SocialNetwork['id'][]
  view: {
    viewPort: string
  }
}

const ReducerActionKind = {
  SettingsColorPrimary: 'ColorPrimary',
  SettingsColorSecondary: 'ColorSecondary',
  SettingsTypographyFontFamily: 'TypographyFontFamily',
  SettingsTypographyFontSize: 'TypographyFontSize',
  ViewViewPort: 'ViewPort',
  SectionNew: 'SectionNew',
  SectionUpdateFields: 'SectionUpdateFields',
  SocialNetworkAdd: 'SocialNetworkAdd',
  SocialNetworkDelete: 'SocialNetworkDelete'
} as const

type ReducerActionKind =
  typeof ReducerActionKind[keyof typeof ReducerActionKind]

type ChangeColorPrimary = {
  type: typeof ReducerActionKind.SettingsColorPrimary
  payload: ReducerState['settings']['colors']['primary']
}
type ChangeColorSecondary = {
  type: typeof ReducerActionKind.SettingsColorSecondary
  payload: ReducerState['settings']['colors']['secondary']
}

type ChangeTypographyFontFamily = {
  type: typeof ReducerActionKind.SettingsTypographyFontFamily
  payload: ReducerState['settings']['typography']['fontFamily']
}

type ChangeTypographyFontSize = {
  type: typeof ReducerActionKind.SettingsTypographyFontSize
  payload: ReducerState['settings']['typography']['fontSize']
}

type ChangeViewPort = {
  type: typeof ReducerActionKind.ViewViewPort
  payload: ReducerState['view']['viewPort']
}

type AddNewSection = {
  type: typeof ReducerActionKind.SectionNew
  payload: ComponentId
}

type UpdateFieldsSection = {
  type: typeof ReducerActionKind.SectionUpdateFields
  payload: UpdateSectionFieldsPayload
}

type AddSocialNetwork = {
  type: typeof ReducerActionKind.SocialNetworkAdd
  payload: SocialNetwork['id']
}

type DeleteSocialNetwork = {
  type: typeof ReducerActionKind.SocialNetworkDelete
  payload: SocialNetwork['id']
}

type ReducerActionTypes =
  | ChangeColorPrimary
  | ChangeColorSecondary
  | ChangeTypographyFontFamily
  | ChangeTypographyFontSize
  | ChangeViewPort
  | AddNewSection
  | UpdateFieldsSection
  | AddSocialNetwork
  | DeleteSocialNetwork

const Reducer = (
  state: ReducerState,
  action: ReducerActionTypes
): ReducerState => {
  const { type, payload } = action
  switch (type) {
    case ReducerActionKind.SettingsColorPrimary:
      return {
        ...state,
        settings: {
          ...state.settings,
          colors: {
            ...state.settings.colors,
            primary: payload
          }
        }
      }
    case ReducerActionKind.SettingsColorSecondary:
      return {
        ...state,
        settings: {
          ...state.settings,
          colors: {
            ...state.settings.colors,
            secondary: payload
          }
        }
      }
    case ReducerActionKind.SettingsTypographyFontFamily:
      return {
        ...state,
        settings: {
          ...state.settings,
          typography: {
            ...state.settings.typography,
            fontFamily: payload
          }
        }
      }

    case ReducerActionKind.SettingsTypographyFontSize:
      return {
        ...state,
        settings: {
          ...state.settings,
          typography: {
            ...state.settings.typography,
            fontSize: payload
          }
        }
      }

    case ReducerActionKind.ViewViewPort:
      return {
        ...state,
        view: {
          ...state.view,
          viewPort: payload
        }
      }
    case ReducerActionKind.SectionNew:
      return {
        ...state,
        sections: addNewSection(state.sections, payload)
      }
    case ReducerActionKind.SectionUpdateFields:
      return {
        ...state,
        sections: updateSectionFields(state.sections, payload)
      }
    case ReducerActionKind.SocialNetworkAdd:
      return {
        ...state,
        socialNetworks: addSocialNetwork(state.socialNetworks, payload)
      }
    case ReducerActionKind.SocialNetworkDelete:
      return {
        ...state,
        socialNetworks: deleteSocialNetwork(state.socialNetworks, payload)
      }
    default:
      return state
  }
}

export { Reducer, ReducerActionKind }
export type { ReducerState, ReducerActionTypes }
