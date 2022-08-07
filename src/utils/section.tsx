import { ReactElement } from 'react'
import { renderToString } from 'react-dom/server'
import reactStringReplace from 'react-string-replace'
import { Section } from '../domain/builder'
import { ColorId } from '../domain/color'

type replaceNodeWithDynamicVariablesProps = {
  node: ReactElement
  fields: Section['fields']
  color: {
    primary: ColorId
    secondary: ColorId
  }
}
const replaceNodeWithDynamicVariables = ({
  node,
  fields,
  color
}: replaceNodeWithDynamicVariablesProps) => {
  let newNode = renderToString(node)
  fields.forEach((field: any) => {
    newNode = reactStringReplace(newNode, field.id, () => field.value).join('')
  })
  newNode = reactStringReplace(
    newNode,
    '__colorPrimary__',
    () => color.primary
  ).join('')

  newNode = reactStringReplace(
    newNode,
    '__colorSecondary__',
    () => color.secondary
  ).join('')

  return <div dangerouslySetInnerHTML={{ __html: newNode }} />
}

export { replaceNodeWithDynamicVariables }
