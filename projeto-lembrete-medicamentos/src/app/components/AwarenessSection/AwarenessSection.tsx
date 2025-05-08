import styles from './AwarenessSection.module.scss';

export default function AwarenessSection() {
  return (
    <div className={styles.awarenessSection}>
  <h2>Descarte Consciente de Medicamentos</h2>

  <section className={styles.infoBox}>
    <h3>O que pode ser descartado no lixo comum?</h3>
    <ul>
      <li>📦 Caixas de medicamentos</li>
      <li>📄 Bulas</li>
      <li>🫙 Vidros e frascos <strong>vazios</strong></li>
      <li>🧴 Tubos de pomada <strong>vazios</strong></li>
    </ul>
  </section>

  <section className={styles.infoBox}>
    <h3>O que deve ser levado aos postos de coleta?</h3>
    <ul>
      <li>💊 Medicamentos vencidos ou não</li>
      <li>📋 Cartelas</li>
      <li>🫙 Vidros e frascos <strong>cheios</strong></li>
      <li>🧴 Tubos de pomada <strong>cheios</strong></li>
      <li>💉 Objetos perfurocortantes (agulhas, seringas etc.)</li>
    </ul>
    <p className={styles.warning}>
      ⚠️ <strong>Atenção:</strong> Perfurocortantes devem ser descartados em embalagens resistentes como latas ou garrafas plásticas.
    </p>
  </section>

  <section className={styles.steps}>
    <h3>Como descartar corretamente:</h3>
    <ol>
      <li>
        <img src="/expired.png" alt="Separar medicamentos vencidos" />
        <p>Separe os medicamentos vencidos ou em desuso.</p>
      </li>
      <li>
        <img src="/medicine-box.png" alt="Embalar corretamente" />
        <p>Embale em recipiente seguro, longe do alcance de crianças.</p>
      </li>
      <li>
        <img src="/pharmacy.png" alt="Levar à farmácia" />
        <p>Leve até uma farmácia ou UBS com ponto de coleta.</p>
      </li>
    </ol>
  </section>
</div>
  );
}