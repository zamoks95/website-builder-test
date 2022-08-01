import { ReactNode } from 'react'

import {
  Hero1,
  Footer1,
  Header1,
  Header2,
  Item1,
  Navigation1
} from '../pages/components/website-components/'

type ComponentType =
  | 'header'
  | 'item'
  | 'image'
  | 'hero'
  | 'navigation'
  | 'button'
  | 'footer'
  | 'youtube'
  | 'spotify'

type ComponentField = {
  id: string
  name: string
  type: 'string' | 'number'
  value: string
}

type ComponentId = string

type Component = {
  id: ComponentId
  name: string
  type: ComponentType
  fields: ComponentField[]
  render: ReactNode
}

type ComponentThumbnail = {
  id: ComponentId
  name: string
  type: ComponentType
  render: ReactNode
}

type Section = {
  id: string
  component: Component
  fields: ComponentField[]
  order: number
}

const componentsList: Component[] = [
  { ...Hero1 },
  { ...Footer1 },
  { ...Item1 },
  { ...Navigation1 },
  { ...Header1 },
  { ...Header2 }
]

const getComponentById = (id: ComponentId): Component =>
  componentsList.find((component) => component.id === id) ?? componentsList[0]

export type {
  Component,
  ComponentId,
  ComponentThumbnail,
  ComponentType,
  ComponentField,
  Section
}

export { componentsList, getComponentById }
