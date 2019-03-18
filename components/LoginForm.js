import { Input, Button } from 'getlinks-ui'
import { loginUser } from 'lib/auth'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    loginUser(email, password)
    console.log(loginUser(email, password))
  }

  render() {
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
        />
        <Input
          type='password'
          name='password'
          size='lg'
          wrapperCss='margin-bottom: 18px'
          placeholder='Password'
          onChange={this.handleChange}
          autocomplete='current-password'
          />
        <Button
          type='submit'
          size='lg'
          block
        >Login</Button>
      </form>
    )
  }
}

export default LoginForm