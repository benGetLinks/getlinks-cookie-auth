import Layout from 'components/Layout'
import Home from 'components/Home'
import { authInitialProps } from 'lib/auth'


export default function Index (props) {
  return (
    <Layout title='Home' {...props}>
      <Home />
    </Layout>
  )
}

Index.getInitialProps = authInitialProps()