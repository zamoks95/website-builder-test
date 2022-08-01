import { ReactNode } from 'react'
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails
} from '@mui/material'
import { AiOutlineArrowDown } from 'react-icons/ai'

type AsideAccordionProps = {
  id: string
  title: string
  children: ReactNode
  expandedPanel: string
  handleExpanded: (id: string) => void
}
const AsideAccordion = ({
  id,
  title,
  children,
  expandedPanel,
  handleExpanded
}: AsideAccordionProps) => {
  return (
    <Accordion
      expanded={expandedPanel === id}
      onChange={() => handleExpanded(id)}
    >
      <AccordionSummary expandIcon={<AiOutlineArrowDown />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}
export { AsideAccordion }
