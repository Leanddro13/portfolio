import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface Props {
  siteTitle: string
  fixed?: boolean
}

const HeaderEl = styled.header<{ fixed?: boolean }>`
  ${({ fixed }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    width: 100%;
    background-color: #232323;

    ${fixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `}
  `}
`


const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    font-weight: 500;
    color: #FFFFFF;
    transition: color 0.2s;

    &:hover {
      color: #4f8e3e;
    }
  }
`

const Header = ({ siteTitle = '', fixed }: Props) => {
  return (
    <HeaderEl fixed={fixed}>
      <h1>{siteTitle ?? 'Meu Site'}</h1>
      <Nav>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </Nav>
    </HeaderEl>
  )
}

export default Header
