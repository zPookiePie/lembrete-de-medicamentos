import AwarenessSection from '../AwarenessSection/AwarenessSection';
import StorageSection from '../StorageSection/StorageSection';
import styles from './Home.module.scss';

export default function HomPage() {

  return (
    <main className={styles.container}>
      <StorageSection/>
      <AwarenessSection />
      <p>Desenvolvido com ❤️ por Ágata</p>
    </main>
  );
}
