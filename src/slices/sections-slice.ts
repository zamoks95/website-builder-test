import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { Section, ComponentId, getComponentById } from '../domain/builder'
import { RootState } from '../store'

export interface SectionsState {
  sections: Section[]
  targetOrder: number
}

const initialState: SectionsState = {
  sections: [],
  targetOrder: 0
}

const setNewSectionOrder = (
  sections: Section[],
  newSection: Section,
  order: 'next' | 'previous'
) => {
  const newSections: Section[] = []
  if (sections.length === 0) return [newSection]
  let isPlaced = false
  sections.forEach((section) => {
    if (section.order === newSection.order && !isPlaced) {
      if (order === 'next') {
        newSections.push(section)
        newSections.push(newSection)
      } else {
        newSections.push(newSection)
        newSections.push(section)
      }

      isPlaced = true
      return
    } else {
      newSections.push(section)
    }
  })
  return isPlaced ? newSections : [...newSections, newSection]
}
const updateSectionsOrder = (sections: Section[]): Section[] => {
  const newSections: Section[] = []
  const ordersPlaced: number[] = []
  sections.forEach((section) => {
    if (!ordersPlaced.includes(section.order)) {
      newSections.push(section)
      ordersPlaced.push(section.order)
    } else {
      const newSection = { ...section, order: section.order + 1 }
      newSections.push(newSection)
      ordersPlaced.push(newSection.order)
    }
  })

  return newSections.map((section, index) => ({ ...section, order: index }))
}

const getSectionById = (
  sections: Section[],
  sectionId: Section['id']
): Section => {
  return sections.find((section) => section.id === sectionId) ?? sections[0]
}
const moveSectionByOrder = (
  sections: Section[],
  sectionId: Section['id'],
  direction: 'up' | 'down'
) => {
  const selectedSection = getSectionById(sections, sectionId)
  const newSections = sections.filter((section) => section.id !== sectionId)

  if (direction === 'up' && selectedSection.order === 0) return sections
  const maxOrderInSections = newSections.reduce((max, section) => {
    return section.order > max ? section.order : max
  }, 0)
  if (direction === 'down' && selectedSection.order + 1 === maxOrderInSections)
    return setNewSectionOrder(
      newSections,
      { ...selectedSection, order: selectedSection.order },
      'next'
    )

  const newSectionOrder =
    direction === 'up' ? selectedSection.order - 1 : selectedSection.order + 1
  const newSection = { ...selectedSection, order: newSectionOrder }
  const newSectionsWithNewSection = setNewSectionOrder(
    newSections,
    newSection,
    direction === 'up' ? 'previous' : 'next'
  )
  return newSectionsWithNewSection
}

type MoveSectionAction = {
  sectionId: Section['id']
  direction: 'up' | 'down'
}

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addNewSection: (state, action: PayloadAction<ComponentId>) => {
      const newComponent = getComponentById(action.payload)
      const newSection = {
        id: `section-${state.sections.length + 1}`,
        component: newComponent,
        fields: newComponent.fields,
        order: state.targetOrder
      }
      state.sections = updateSectionsOrder(
        setNewSectionOrder(current(state.sections), newSection, 'previous')
      )
      state.targetOrder = 0
    },
    moveSection: (state, action: PayloadAction<MoveSectionAction>) => {
      const newSections = updateSectionsOrder(
        moveSectionByOrder(
          current(state.sections),
          action.payload.sectionId,
          action.payload.direction
        )
      )
      state.sections = newSections
    },
    deleteSection: (state, action: PayloadAction<Section['id']>) => {
      const newSections = current(state.sections).filter(
        (section) => section.id !== action.payload
      )
      state.sections = updateSectionsOrder(newSections)
    },
    updateTargetOrder: (state, action: PayloadAction<number | 'last'>) => {
      state.targetOrder =
        action.payload === 'last' ? state.sections.length + 1 : action.payload
    },
    updateSectionFields: (
      state,
      action: PayloadAction<{
        sectionId: string
        fieldId: string
        value: string
      }>
    ) => {
      const selectedSection = state.sections.find(
        ({ id }) => id === action.payload.sectionId
      )
      if (selectedSection === undefined) throw new Error('error')
      const updatedSectionFields = selectedSection.fields.map((field) => {
        if (field.id === action.payload.fieldId)
          return { ...field, value: action.payload.value }
        return field
      })
      const newSections = state.sections.map((section) => {
        if (section.id === selectedSection.id) {
          return {
            ...selectedSection,
            fields: updatedSectionFields
          }
        }
        return section
      })
      state.sections = newSections
    }
  }
})

export const {
  addNewSection,
  updateSectionFields,
  updateTargetOrder,
  moveSection,
  deleteSection
} = sectionsSlice.actions

export const selectSections = (state: RootState) => state.sections

export default sectionsSlice.reducer
