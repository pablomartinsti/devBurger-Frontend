import React from 'react'
import PropTypes from 'prop-types'
import LogoutIcon from '@mui/icons-material/Logout'
import listLinks from './menu-list'
import { useUser } from '../../hooks/UserContext'

import { Container, ItemContainer, Exit, Listlink } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()

  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <Listlink to={item.link}>{item.label}</Listlink>
        </ItemContainer>
      ))}
      <hr></hr>
      <Exit>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <Listlink to="/login" onClick={logout}>
          Sair
        </Listlink>
      </Exit>
    </Container>
  )
}
SideMenuAdmin.protoTypes = {
  path: PropTypes.string
}
