import styles from './Nothing.module.css'

const Nothing = () => {
  return (
    <div className={styles.search_message_empty_container}>
      <span className={styles.search_message_empty_decal}>
        <span className={styles.search_message_empty_decal_eyes}>:</span>
        <span>(</span>
      </span>
      <h2 className={styles.search_message_empty_message}>Nope, nothing.</h2>
    </div>
  );
};

export default Nothing;
