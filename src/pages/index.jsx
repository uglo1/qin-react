import Head from 'next/head'
import { Header } from 'src/components/Header'
import styles from 'src/styles/Home.module.css'

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>JSONPlaceholderからデータ取得</h1>
    </div>
  )
}

export default Index;