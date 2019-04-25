import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/Footer';

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'Blockchain Tandil' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        <nav>
          <Link href='/'><a>Home</a></Link> | {' '}
          <Link href='#'><a>Explorer</a></Link> | {' '}
          <Link href='/about'><a>About</a></Link> | {' '}
        </nav>
      </header>
      {children}
      <Footer />
    </div>
  )
  }

export default Layout
