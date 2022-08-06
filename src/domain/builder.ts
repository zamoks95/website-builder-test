import { ReactNode } from 'react'

import {
  FAQ1,
  Gallery1,
  Heading1,
  Image1,
  List1,
  Location1,
  Price1,
  Quote1,
  SocialNetwork1,
  Text1,
  Video1
} from '../pages/components/website-components/'

import { ComponentTypeId } from './type'

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
  type: ComponentTypeId
  fields: ComponentField[]
  render: ReactNode
}

type ComponentThumbnail = {
  id: ComponentId
  name: string
  type: ComponentTypeId
  render: ReactNode
}

type Section = {
  id: string
  component: Component
  fields: ComponentField[]
  order: number
}

const componentsList: Component[] = [
  { ...FAQ1 },
  { ...Gallery1 },
  { ...Heading1 },
  { ...Image1 },
  { ...List1 },
  { ...Location1 },
  { ...Price1 },
  { ...Quote1 },
  { ...SocialNetwork1 },
  { ...Text1 },
  { ...Video1 }
]

const getComponentById = (id: ComponentId): Component =>
  componentsList.find((component) => component.id === id) ?? componentsList[0]

const getComponentsByType = (type: ComponentTypeId): Component[] =>
  componentsList.filter((component) => component.type === type)

export type {
  Component,
  ComponentId,
  ComponentThumbnail,
  ComponentField,
  Section
}

export { componentsList, getComponentById, getComponentsByType }
