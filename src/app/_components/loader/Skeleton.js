import styles from '../../styles/Skeleton.module.css'

const Skeleton = ({ height = '20px', width = '100%', style = {} }) => {
  return (
    <div
      className={styles.skeleton}
      style={{ height, width, ...style }}
    ></div>
  );
};

export default Skeleton;
