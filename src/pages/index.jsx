import Head from 'next/head'
import { Header } from 'src/components/Header'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>JSONPlaceholderからデータ取得</h1>
    </div>
  )
}

export default Index;