import * as React from 'react'
import Layout from '../layouts/Main'
import List from '../components/NumberList';

const IndexPage: React.FunctionComponent = () => (
  <Layout title="Home | demo app for Blockchain Tandil">
    <h1>Hello Blockchain Tandil 👋</h1>
    <List />
  </Layout>
)

export default IndexPage;
