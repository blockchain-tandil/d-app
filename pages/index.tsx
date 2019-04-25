import * as React from 'react'
import Link from 'next/link'
import Layout from '../layouts/Main'
import List from '../components/NumberList';

const IndexPage: React.FunctionComponent = () => (
  <Layout title="Home | demo app for Blockchain Tandil">
    <h1>Hello Blockchain Tandil 👋</h1>
    <List />
    <p><Link href='/about'><a>About</a></Link></p>
  </Layout>
)

export default IndexPage;
