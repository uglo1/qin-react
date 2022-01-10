import classes from 'src/components/Links/Links.module.css'

export function Links({items, handleReduce}) {
  return (
    <div className={classes.grid}>
      <button onClick={handleReduce}>減らす</button>
      {items.map(item => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h2 className={classes.title}>{item.title}</h2>
            <p className={classes.description}>{item.description}</p>
          </a>
        );
      })}
    </div>
  )
}
