import {
  Box,
  Popover,
  ListItem,
  List,
  ListItemText,
  Grid,
  Button,
  IconButton,
  Stack,
  ListItemIcon
} from '@mui/material'
import { useState, MouseEvent } from 'react'

import {
  SocialNetwork,
  socialNetworksList,
  getSocialNetworkById
} from '../../../../domain/social-networks'
import { FaTrash } from 'react-icons/fa'

import { useAppSelector, useAppDispatch } from '../../../../hooks'
import {
  selectSocialNetworks,
  addSocialNetwork,
  removeSocialNetwork
} from '../../../../slices/social-networks-slice'

type AvailableSocialNetworksListProps = {
  onChange: (newSocialNetwork: SocialNetwork['id']) => void
}

type SelectedSocialNetworkItemProps = {
  socialNetworkId: SocialNetwork['id']
}
const SelectedSocialNetworkItem = ({
  socialNetworkId
}: SelectedSocialNetworkItemProps) => {
  const socialNetwork = getSocialNetworkById(socialNetworkId)
  const dispatch = useAppDispatch()

  const handleRemoveSocialNetwork = (socialNetworkId: SocialNetwork['id']) => {
    dispatch(removeSocialNetwork(socialNetworkId))
  }
  return (
    <ListItem>
      <ListItemIcon>{socialNetwork.icon}</ListItemIcon>
      <ListItemText primary={socialNetwork.name} />
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => handleRemoveSocialNetwork(socialNetworkId)}
      >
        <FaTrash />
      </IconButton>
    </ListItem>
  )
}

const AvailableSocialNetworksList = ({
  onChange
}: AvailableSocialNetworksListProps) => {
  const selectedSocialNetworks = useAppSelector(selectSocialNetworks)

  const availableItems = socialNetworksList.filter(
    ({ id }) => !selectedSocialNetworks.socialNetworks.includes(id)
  )
  return (
    <Grid container spacing={3}>
      {availableItems.map((socialNetwork) => {
        return (
          <Grid item xs={3} key={socialNetwork.id}>
            <IconButton onClick={() => onChange(socialNetwork.id)}>
              {socialNetwork.icon}
            </IconButton>
          </Grid>
        )
      })}
    </Grid>
  )
}

const SocialNetworkPicker = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const selectedSocialNetworks = useAppSelector(selectSocialNetworks)
  const dispatch = useAppDispatch()

  const handleSocialNetworkAdd = (newSocialNetworkId: SocialNetwork['id']) => {
    dispatch(addSocialNetwork(newSocialNetworkId))
    handleClose()
  }
  return (
    <>
      <Stack>
        <List>
          {selectedSocialNetworks.socialNetworks.map((socialNetworkId) => (
            <SelectedSocialNetworkItem socialNetworkId={socialNetworkId} />
          ))}
        </List>
        {selectedSocialNetworks.socialNetworks.length <
          socialNetworksList.length && (
          <Button onClick={handleClick}>Add new</Button>
        )}
      </Stack>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Box width={'250px'} p={2} maxWidth={'100%'}>
          <AvailableSocialNetworksList onChange={handleSocialNetworkAdd} />
        </Box>
      </Popover>
    </>
  )
}

export { SocialNetworkPicker }
