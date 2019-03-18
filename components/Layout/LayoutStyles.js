import styled from 'styled-components'

export const LayoutRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const NavButton = styled.button`
  text-decoration: underline;
  padding: 0;
  margin: 0 5px;
  font: inherit;
  border-style: none;
  cursor: pointer;
`