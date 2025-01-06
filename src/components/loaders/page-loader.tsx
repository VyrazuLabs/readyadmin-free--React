import classes from './styles.module.scss';

const PageLoader = () => (
  <div className={`${classes.loader} ${classes.triangle}`}>
    <svg viewBox="0 0 86 80">
      <polygon points="43 8 79 72 7 72" />
    </svg>
  </div>
);

export default PageLoader;
