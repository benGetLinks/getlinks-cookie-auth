import Login from 'components/Login'
import Layout from 'components/Layout'
import { authInitialProps } from 'lib/auth'

export default function LoginPage (props) {
  return (
    <Layout title='Login' {...props}>
      <Login />
    </Layout>
  )
}

LoginPage.getInitialProps = authInitialProps()