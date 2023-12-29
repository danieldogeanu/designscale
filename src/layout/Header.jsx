import classes from '../styles/header.module.scss';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        Left
      </div>
      <div className={classes.center}>
        Center
      </div>
      <div className={classes.right}>
        Right
      </div>
    </header>
  );
}
