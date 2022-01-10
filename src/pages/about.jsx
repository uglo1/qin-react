import Head from 'next/head'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import styles from 'src/styles/Home.module.css'

export default function About({
    count, 
    isShow, 
    handleClick, 
    handleDisplay,
    text, 
    array, 
    handleChange, 
    handleAdd
  }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <button onClick={handleAdd}>追加</button>
      <input type="text" value={text} onChange={handleChange}/>
      <ul>
        {array.map((item) => {
          return(
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page="about" />
      <Footer />
    </div>
  )
}
