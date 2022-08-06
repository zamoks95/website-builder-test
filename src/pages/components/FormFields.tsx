import React, { useState, useRef, useMemo } from 'react'

import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const FormFields = () => {
  /* const editor = useRef(null) */
  const [editor] = useState(() => withReact(createEditor()))
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }]
    }
  ]

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable />
    </Slate>
  )
}

export { FormFields }
