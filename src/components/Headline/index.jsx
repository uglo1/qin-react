import classes from 'src/components/Headline/Headline.module.css'

export const Headline = (props) => {
  return (
    <>
      <h1 className={classes.title}>
        {props.page} Page
      </h1>

      <p className={classes.description}>
        アイテムの数は {props.children} 個です。
      </p>
    </>
  )
}
