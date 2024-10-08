import React from 'react'
import HomeLogo from '../../assets/capaHome.svg'
import { Container, HomeImg } from './styles'
import { CategoryCarousel, OffersCarousel } from '../../components'
import Header from '../../components/Header'
export function Home() {
  return (
    <Container>
      <Header />
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
