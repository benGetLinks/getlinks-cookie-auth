import Link from 'next/link'
import { logoutUser } from 'lib/auth'
import { LayoutRoot, Nav, NavButton } from './LayoutStyles'

const Layout = ({
  children,
  title,
  auth
}) => {
  const { user = {} } = auth || {}

  return (
  <LayoutRoot className='root'>
    <Nav className='navbar'>
      <span>Welcome, <b>{ user && user.email ? user.name : 'Guest'}</b></span>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>

        { user.email ? (
          <>
        <Link href='/profile'>
          <a style={{margin: '0 5px'}}>Profile</a>
        </Link>
        <NavButton onClick={logoutUser}>Logout</NavButton>
        </> ) : (
        <Link href='/login'>
          <a style={{}}>Login</a>
        </Link>
        )}
      </div>
    </Nav>
    <h1>{title}</h1>
    {children}
  </LayoutRoot>
)}

export default Layout