import { Input, Button } from 'getlinks-ui'
import { loginUser } from 'lib/auth'
import Router from 'next/router'

class LoginForm extends React.Component {
  state = {
    email: 'Rey.Padberg@karina.biz',
    password: 'ambrose.net',
    error: '',
    isLoading: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      error: '',
      isLoading: true
    })
    const { email, password } = this.state
    loginUser(email, password).then(() => {
      Router.push('/profile')
    })
      .catch(this.showError)
  }

  showError = err => {
    console.error(err)
    const error = err.response && err.response.data || err.message
    this.setState({ error, isLoading: false })
  }

  render() {
    const { email, password, error, isLoading } = this.state
    return (
      <form
        style={{margin: 'auto', minWidth: '320px'}}
        onSubmit={this.handleSubmit}
      >
        <header className='login-header' style={{textAlign: 'center'}}>
          <h4>Candidate Login</h4>
        </header>
        <Input
          type='email'
          name='email'
          size='lg'
          wrapperCss='margin-bottom: 9px'
          placeholder='Your email'
          onChange={this.handleChange}
          value={email}
        />
        <Input
          type='password'
          name='password'
          size='lg'
          wrapperCss='margin-bottom: 18px'
          placeholder='Password'
          onChange={this.handleChange}
          autocomplete='current-password'
          value={password}
          />
        <Button
          type='submit'
          size='lg'
          block
          disabled={isLoading}
        >
          {isLoading ? 'Authenticating' : 'Login' }</Button>
        {error && <span>{error}</span>}
      </form>
    )
  }
}

export default LoginForm