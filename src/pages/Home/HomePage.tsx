import styles from './HomePage.module.scss';
import img1 from '../../assets/image_1.png';
import img2 from '../../assets/img.jpeg';
import { Relevant } from './components/Relevant';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.presentationContainer}>
        <section className={styles.sectionContainer}>
          <article className={styles.infoContainer}>
            <h2 className={styles.title}>Cefac - Centro de <span>F&aacute;rmacos Alimentos</span> y <span>Cosm&eacute;ticos</span></h2>
            <p className={styles.text}>
              El CEFAC, Centro de Fármacos, Alimentos y Cosméticos creada en el año 1992, es una Unidad
              de Investigación dependiente del Instituto de Investigaciones Bioquimicos-Farmaceuticas,
              de la Facultad de Bioquimica y Farmacias, cuyas actividades en el campo de los productos
              naturales, estan orientadas a valoración y validación de la actividad biologica de la
              flora medicinal utilizada por la medicina tradicional y popular.
            </p>
          </article>
          <img src={img1} alt='img_one' />
        </section>
        <section className={styles.sectionContainer}>
          <article className={styles.infoContainer}>
            <h2 className={styles.title}>Investigaci&oacute;n</h2>
            <p className={styles.text}>
              En la investigación el laboratorio abarca el desarrollo cientifico-tecnologico mediante
              el fortalecimiento de la investigacion y estandarizacion de procedimientos para extraer
              metabolicos secundarios, validar actividades farmacologicas de plantas de uso medicinal,
              asi como la fomulacion y elaboracion de fitomedicamentos y cosmeticos naturales
            </p>
          </article>
          <img src={img2} alt='img_two' />
        </section>
      </div>

      <Relevant />

    </div>
  );
}
