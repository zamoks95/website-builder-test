import { ReactNode } from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaTwitch,
  FaInstagram,
  FaSnapchatGhost,
  FaSpotify,
  FaSoundcloud,
  FaSteamSymbol,
  FaWhatsapp
} from 'react-icons/fa'

type SocialNetwork = {
  id: string
  name: string
  icon: ReactNode
}

const socialNetworksList: SocialNetwork[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <FaFacebookF />
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: <FaTwitter />
  },
  {
    id: 'twitch',
    name: 'Twitch',
    icon: <FaTwitch />
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <FaInstagram />
  },
  {
    id: 'snapchat',
    name: 'SnapChat',
    icon: <FaSnapchatGhost />
  },
  {
    id: 'spotify',
    name: 'Spotify',
    icon: <FaSpotify />
  },
  {
    id: 'soundcloud',
    name: 'SoundCloud',
    icon: <FaSoundcloud />
  },
  {
    id: 'steam',
    name: 'Steam',
    icon: <FaSteamSymbol />
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: <FaWhatsapp />
  }
]

const getSocialNetworkById = (id: SocialNetwork['id']): SocialNetwork =>
  socialNetworksList.find((socialNetwork) => socialNetwork.id === id) ??
  socialNetworksList[0]

export { getSocialNetworkById, socialNetworksList }
export type { SocialNetwork }
