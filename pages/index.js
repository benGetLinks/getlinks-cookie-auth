import LoginForm from 'components/LoginForm'
import { GlobalCss } from 'getlinks-ui'
import { css } from 'styled-components'

const addToGlobal = css`
  #__next {
    justify-content: center;
  }
`

export default function Index () {
  return (
    <>
      <GlobalCss />
      <LoginForm />
    </>
  )
}