import React, { ReactElement, useEffect, useState, ReactNode } from 'react'
import logo from './logo.svg'
import { Header1, Header2, ProductList1 } from './components'

type Element = {
  name: string
  id: string
  component: ReactNode
}

type DropZone = {
  id: string
  name: string
  children: any[]
  elements: Element[]
  onDrop: (elementId: string, dropZoneId: string) => void
}

const ComponentsList = ({ children }: any) => {
  return <div className="grid grid-cols-3  gap-4">{children}</div>
}

const DragableBox = ({ name, id }: Omit<Element, 'component'>) => {
  return (
    <div
      className="block bg-indigo-300 hover:bg-indigo-500 active:bg-red-500 active:drop-shadow-lg active:text-white text-center cursor-move rounded-md p-2 w-auto transition-all duration-100 ease-in-out"
      draggable
      onDragStart={(e) => e.dataTransfer.setData('id', id)}
    >
      {name}
    </div>
  )
}

const DropZone = ({ id, name, children, onDrop }: DropZone) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      className="w-auto block py-20 block bg-indigo-300 droppable text-center"
      style={{ background: isHover ? 'red' : '' }}
      id={id}
      onDragEnter={(e) => {
        e.preventDefault()
        setIsHover(true)
      }}
      onDragOver={(e) => {
        e.preventDefault()
      }}
      onDragLeave={(e) => {
        e.preventDefault()
        setIsHover(false)
      }}
      onDrop={(e) => {
        e.preventDefault()
        console.log(id, e.currentTarget.id)
        const dropElementId = e.dataTransfer.getData('id')
        onDrop(dropElementId, id)
      }}
    >
      {name}
      {children.map((child) => child)}
    </div>
  )
}

const App = () => {
  const [dropZones, setDropZones] = useState<DropZone[]>([])
  console.log('PAGE DROPZONES', dropZones)
  const elements: Element[] = [
    { id: 'header-1', name: 'Header 1', component: <Header1 /> },
    { id: 'header-2', name: 'Header 2', component: <Header2 /> },
    { id: 'el-3', name: 'Product List 1', component: <ProductList1 /> },
    { id: 'el-4', name: 'El 4', component: <p>THIS IS ELEMENT 4 </p> },
    { id: 'el-5', name: 'El 5', component: <p>THIS IS ELEMENT 5 </p> }
  ]

  const addNewDropzone = () => {
    const newDropZones: DropZone[] = [
      ...dropZones,
      {
        id: `drop-${dropZones.length + 1}`,
        name: `Drop Zone ${dropZones.length + 1}`,
        children: [],
        elements: elements,
        onDrop: handleOnDropElement
      }
    ]
    setDropZones(newDropZones)
  }

  const handleOnDropElement = (elementId: string, dropZoneId: string) => {
    const selectedElement = elements.filter(({ id }) => elementId === id)
    // We are loosing last DropZone Here? WTF?
    const newDropZones2 = dropZones.map((dropZone) => {
      /*  if (dropZone.id === dropZoneId) { */
      dropZone.children.push(selectedElement[0].component)
      /*  } */
      return dropZone
    })
    console.log('NEW DROP ZONES ', dropZones, newDropZones2)
    setDropZones(newDropZones2)
  }

  return (
    <div className="flex w-auto justify-between w-auto h-screen">
      <main className="w-3/4 border-solid border-black">
        {dropZones.map((props) => (
          <DropZone {...props} key={props.id} />
        ))}
        <div
          className="w-auto block py-5 block bg-green-300 hover:bg-green-500 droppable text-center cursor-pointer"
          onClick={addNewDropzone}
        >
          ADD NEW DROPZONE
        </div>
      </main>
      <aside
        className="w-1/4 border-solid border-black p-2"
        style={{ borderLeft: '1px solid red' }}
      >
        <ComponentsList>
          {elements.map((props) => (
            <DragableBox {...props} key={props.id} />
          ))}
        </ComponentsList>
      </aside>
    </div>
  )
}

export default App
