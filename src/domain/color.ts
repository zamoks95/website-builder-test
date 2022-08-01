type ColorId =
  | 'pink'
  | 'rose'
  | 'fuchsia'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'emerald'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'stone'
  | 'neutral'
  | 'zinc'
  | 'slate'
type Color = {
  id: ColorId
  name: string
  hex: string
}

const availableColors: Color[] = [
  {
    id: 'slate',
    name: 'Slate',
    hex: '#64748b'
  },
  {
    id: 'zinc',
    name: 'Zinc',
    hex: '#71717a'
  },
  {
    id: 'neutral',
    name: 'Neutral',
    hex: '#737373'
  },
  {
    id: 'stone',
    name: 'Stone',
    hex: '#78716c'
  },
  {
    id: 'red',
    name: 'Red',
    hex: '#ef4444'
  },
  {
    id: 'orange',
    name: 'Orange',
    hex: '#f97316'
  },
  {
    id: 'yellow',
    name: 'Yellow',
    hex: '#eab308'
  },
  {
    id: 'lime',
    name: 'Lime',
    hex: '#84cc16'
  },
  {
    id: 'green',
    name: 'Green',
    hex: '#22c55e'
  },
  {
    id: 'emerald',
    name: 'Emerald',
    hex: '#10b981'
  },
  {
    id: 'teal',
    name: 'Teal',
    hex: '#14b8a6'
  },
  {
    id: 'cyan',
    name: 'Cyan',
    hex: '#06b6d4'
  },
  {
    id: 'blue',
    name: 'Blue',
    hex: '#3b82f6'
  },
  {
    id: 'indigo',
    name: 'Indigo',
    hex: '#6366f1'
  },
  {
    id: 'violet',
    name: 'Violet',
    hex: '#8b5cf6'
  },
  {
    id: 'purple',
    name: 'Purple',
    hex: '#a855f7'
  },
  {
    id: 'fuchsia',
    name: 'Fuchsia',
    hex: '#d946ef'
  },
  {
    id: 'pink',
    name: 'Pink',
    hex: '#ec4899'
  },
  {
    id: 'rose',
    name: 'Rose',
    hex: '#f43f5e'
  }
]

const getColorById = (id: ColorId) =>
  availableColors.find((color) => color.id === id) ?? availableColors[0]

export type { Color, ColorId }
export { availableColors, getColorById }
