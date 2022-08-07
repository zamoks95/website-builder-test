import { ReactElement } from 'react'

import {
  FAQ1,
  FAQ2,
  Gallery1,
  Gallery2,
  Heading1,
  Heading2,
  Image1,
  Image2,
  List1,
  List2,
  Location1,
  Location2,
  Price1,
  Price2,
  Quote1,
  Quote2,
  SocialNetwork1,
  SocialNetwork2,
  Text1,
  Text2,
  Video1,
  Video2,
  Footer1,
  Footer2
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
  render: ReactElement
}

type ComponentThumbnail = {
  id: ComponentId
  name: string
  type: ComponentTypeId
  render: ReactElement
}

type Section = {
  id: string
  component: Component
  fields: ComponentField[]
  order: number
}

const componentsList: Component[] = [
  { ...FAQ1 },
  { ...FAQ2 },
  { ...Gallery1 },
  { ...Gallery2 },
  { ...Heading1 },
  { ...Heading2 },
  { ...Image1 },
  { ...Image2 },
  { ...List1 },
  { ...List2 },
  { ...Location1 },
  { ...Location2 },
  { ...Price1 },
  { ...Price2 },
  { ...Quote1 },
  { ...Quote2 },
  { ...SocialNetwork1 },
  { ...SocialNetwork2 },
  { ...Text1 },
  { ...Text2 },
  { ...Video1 },
  { ...Video2 },
  { ...Footer1 },
  { ...Footer2 }
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
