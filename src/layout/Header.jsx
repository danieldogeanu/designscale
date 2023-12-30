import FilterBar from '../components/FilterBar';
import ActionMenu from '../components/ActionMenu';
import ScaleLogo from '../assets/scale-logo.svg?react';
import classes from '../styles/header.module.scss';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <ScaleLogo className={classes.logo} />
      </div>
      <div className={classes.center}>
        <FilterBar />
      </div>
      <div className={classes.right}>
        <ActionMenu />
      </div>
    </header>
  );
}
