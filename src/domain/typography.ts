type FontFamilyId = 'roboto' | 'open-sans' | 'montserrat' | 'lato'

type FontFamily = {
  id: FontFamilyId
  name: string
  url: string
}
const availableFontFamilies: FontFamily[] = [
  {
    id: 'roboto',
    name: 'Roboto',
    url: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">`
  },
  {
    id: 'open-sans',
    name: 'Open Sans',
    url: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">`
  },
  {
    id: 'montserrat',
    name: 'Montserrat',
    url: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">`
  },
  {
    id: 'lato',
    name: 'Lato',
    url: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">`
  }
]

const getFontFamilyById = (id: FontFamilyId) =>
  availableFontFamilies.find((fontFamily) => fontFamily.id === id) ??
  availableFontFamilies[0]

type FontSizeId = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type FontSize = {
  id: FontSizeId
  name: string
}
const availableFontSizes: FontSize[] = [
  { id: 'xs', name: 'XS' },
  { id: 'sm', name: 'SM' },
  { id: 'md', name: 'MD' },
  { id: 'lg', name: 'LG' },
  { id: 'xl', name: 'XL' }
]

const getFontSizeById = (id: FontSizeId) =>
  availableFontSizes.find((fontSize) => fontSize.id === id) ??
  availableFontSizes[0]

export type { FontFamily, FontFamilyId, FontSize, FontSizeId }
export {
  availableFontFamilies,
  availableFontSizes,
  getFontSizeById,
  getFontFamilyById
}
