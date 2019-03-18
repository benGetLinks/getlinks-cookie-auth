import Layout from 'components/Layout'
import { getUserProfile } from 'lib/auth'


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
      <Layout>
      <h1>Profile</h1>
      <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
      </Layout>
    )
  }
}