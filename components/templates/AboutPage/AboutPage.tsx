/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import styles from '@/styles/about/index.module.scss'

const AboutPage = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={`${styles.about__title} ${darkModeClass}`}>
          О нас
        </h2>
        <div className={styles.about__inner}>
          <div className={`${styles.about__img} ${styles.about__img__top}`}>
            <img src="/img/lycs-architecture-U2BI3GMnSSE-unsplash.jpg" alt="image-1" style={{ objectFit: 'cover' }} />
          </div>
          <div className={`${styles.about__info} ${darkModeClass}`}>
            <p> Интернет-магазин &quot;ХРОМ Детеилс&quot;
              предлагает широкий ассортимент запасных частей для газовых и электрических котлов европейского,
              корейского и отечественного производства. Мы гарантируем, что 99% запчастей, представленных на нашем сайте,
              всегда доступны на складе. </p>
            <p> В нашем каталоге вы найдете детали таких брендов,
              как Arderia, Ariston, Baxi, Beretta, Bosch, Buderus, Chaffoteaux, De Dietrich, Demrad,
              Electrolux, Ferroli, Fondital, Immergas, Junkers, Koreastar, Nova Florida, Saunier Duval,
              Sime, Tiberis, Vaillant, Viessmann и Westen. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
