import SiteLogo from '../components/SiteLogo';
import FilterBar from '../components/FilterBar';
import ActionMenu from '../components/ActionMenu';
import classes from '../styles/header.module.scss';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <SiteLogo />
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
