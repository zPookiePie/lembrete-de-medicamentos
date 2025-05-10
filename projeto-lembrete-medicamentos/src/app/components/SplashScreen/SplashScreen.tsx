'use client';
import styles from './SplashScreen.module.scss';
import Image from 'next/image';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {

  return (
    <div className={styles.splash}>
      <div className={styles.top}>
        <svg className={styles.wave} viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,256L48,234.7C96,213,192,171,288,154.7C384,139,480,149,576,170.7C672,192,768,224,864,218.7C960,213,1056,171,1152,144C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className={styles.iconWrapper}>
        <Image src="/splashscreen-icon.png" width={200} height={200} alt="Ícone de remédio" />
      </div>

      <div className={styles.content}>
        <h1>Bem-vindo!</h1>
        <p>Vamos te orientar sobre o armazenamento e descarte correto de medicamentos.</p>
        <button onClick={onFinish}>Começar</button>
      </div>
  </div>
  )
}