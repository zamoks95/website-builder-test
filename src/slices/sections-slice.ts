import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Section, ComponentId, getComponentById } from '../domain/builder'
import { RootState } from '../store'

export interface SectionsState {
  sections: Section[]
}

const initialState: SectionsState = {
  sections: []
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
        order: state.sections.length + 1
      }
      state.sections = [...state.sections, newSection]
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

export const { addNewSection, updateSectionFields } = sectionsSlice.actions

export const selectSections = (state: RootState) => state.sections

export default sectionsSlice.reducer
