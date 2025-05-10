'use client';

import styles from './StorageSection.module.scss';

export default function StorageSection() {
  return (
    <>
    <h2 className={styles.titulo}>Armazenamento Correto de Medicamentos</h2>
    <section className={styles.container} id="armazenamento">
     
      <p>
        Armazenar seus medicamentos de forma adequada é essencial para garantir sua eficácia e segurança!
      </p>

      <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <img src="/home-temperature.png" alt="Casa com termômetro" />
          <h3>Local Adequado</h3>
          <ul>
            <li>Evite locais úmidos como banheiros e cozinhas.</li>
            <li>Armazene em locais frescos, secos e sem luz direta.</li>
            <li>Mantenha fora do alcance de crianças e animais.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <img src="/box-medicine.png" alt="Caixa de medicamento" />
          <h3>Embalagem Original</h3>
          <ul>
            <li>Guarde sempre na embalagem original.</li>
            <li>Não transfira para outros frascos ou potes.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <img src="/refrigerator.png" alt="Ícone de geladeira" />
          <h3>Refrigeração</h3>
          <ul>
            <li>Armazene na geladeira só se for indicado.</li>
            <li>Evite colocar na porta da geladeira.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <img src="/schedule.png" alt="Calendário com relógio" />
          <h3>Validade</h3>
          <ul>
            <li>Verifique sempre a data de validade.</li>
            <li>Descarte corretamente os vencidos.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <img src="/wash-your-hands.png" alt="Lavar as mãos" />
          <h3>Manuseio Seguro</h3>
          <ul>
            <li>Lave bem as mãos antes de usar.</li>
            <li>Evite partir ou triturar sem orientação médica.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <img src="/light-bulb.png" alt="Dica importante" />
          <h3>Dicas Importantes</h3>
          <ul>
            <li>Não compartilhe seus medicamentos.</li>
            <li>Evite automedicação.</li>
            <li>Separe os medicamentos em uso dos outros.</li>
          </ul>
        </div>
      </div>

      <div className={styles.sources}>
        <h4>📚 Fontes Oficiais</h4>
        <ul>
          <li>
            <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-idosa/uso-e-armazenamento-de-medicamentos" target="_blank" rel="noopener noreferrer">
              Ministério da Saúde
            </a>
          </li>
          <li>
            <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2019/saiba-como-conservar-medicamentos-em-casa" target="_blank" rel="noopener noreferrer">
              Anvisa
            </a>
          </li>
        </ul>
      </div>
    </section>
    </>
  );
}