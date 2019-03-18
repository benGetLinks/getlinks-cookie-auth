import Link from 'next/link'
import { logoutUser } from 'lib/auth'

const Layout = ({
  children,
  title,
  auth
}) => {
  const { user = {} } = auth || {}

  return (
  <div className='root'>
    <nav className='navbar'>
      <span>Welcome, <b>{ user ? user.name : 'Guest'}</b></span>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>

        { user.email ? (
          <>
        <Link href='/profile'>
          <a>Profile</a>
        </Link>
        <button onClick={logoutUser}>Logout</button>
        </> ) : (
        <Link href='/login'>
          <a>Login</a>
        </Link>
        )}
      </div>
    </nav>
    <h1>{title}</h1>
    {children}

    <style jsx>{`
      .root {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .navbar {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
      a {
        margin-right: 0.5em; 
      }
      button {
        text-decoration: underline;
        padding: 0;
        margin: 0 5px 0 0;
        font: inherit;
        border-style: none;
        cursor: pointer;
      }
    `}</style>
  </div>
)}

export default Layout