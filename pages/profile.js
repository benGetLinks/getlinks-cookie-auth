import Layout from 'components/Layout'
import { getUserProfile, authInitialProps } from 'lib/auth'


export default class Profile extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    getUserProfile().then(user => this.setState({ user }))
  }

  render() {
    console.log(this.state)
    return (
      <Layout title='Profile' {...this.props}>
      <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
      </Layout>
    )
  }
}

Profile.getInitialProps = authInitialProps(true)