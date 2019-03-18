import Link from 'next/link'
import { Button } from 'getlinks-ui'

const Layout = ({
  children,
  title,
  user
}) => (
  <div className='root'>
    <nav className='navbar'>
      <span>Welcome, <b>{ user ? user.name : 'Guest'}</b></span>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/profile'>
          <a>Profile</a>
        </Link>
        <Button size='sm'>Logout</Button>
        <Link href='/login'>
          <a>Login</a>
        </Link>
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
        font: inherit;
        border-style: none;
        cursor: pointer;
        color: green;
      }
    `}</style>
  </div>
)

export default Layout