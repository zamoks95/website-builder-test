import { Section } from '../domain/builder'
import { saveAs } from 'file-saver'
import cssPath from '../../build.css'
import { renderToString } from 'react-dom/server'
import { replaceNodeWithDynamicVariables } from '../pages/components/Section'
import { ColorId } from '../domain/color'

const application = {
  exportPage: (
    sections: Section[],
    primaryColor: ColorId,
    secondaryColor: ColorId
  ) => {
    const renderedSections = sections.map((section: Section) => {
      const replacedSection = replaceNodeWithDynamicVariables({
        node: section.component.render,
        fields: section.fields,
        color: {
          primary: primaryColor,
          secondary: secondaryColor
        }
      })
      return renderToString(replacedSection)
    })
    const html = `
    <html>
      <head>
        <meta charset="UTF-8"></head>
        <title>Your page</title>
        <style>${cssPath}</style>
      </head>
      <body>
        ${renderedSections.join('')}
      </body>
    </html>`
    const blob = new Blob([html], {
      type: 'text/plain;charset=utf-8'
    })
    saveAs(blob, 'test.html')
  }
}

export { application }
