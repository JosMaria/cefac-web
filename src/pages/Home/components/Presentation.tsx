import img from '../../../assets/img.jpeg';
import styles from '../scss/Presentation.module.scss';

export const Presentation = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Cefac - Centro de <span>F&aacute;rmacos Alimentos</span> y <span>Cosm&eacute;ticos</span></h1>
      <div className={styles.firstSectionContainer}>
        <div className={styles.presentationText}>
          <p>
            El CEFAC, Centro de Fármacos, Alimentos y Cosméticos creada en el año 1992, es una Unidad
            de Investigación dependiente del Instituto de Investigaciones Bioquimicos-Farmaceuticas,
            de la Facultad de Bioquimica y Farmacias, cuyas actividades en el campo de los productos
            naturales, estan orientadas a valoración y validación de la actividad biologica de la
            flora medicinal utilizada por la medicina tradicional y popular.
          </p>
          <br />
          <h2>Objetivo</h2>
          <p>
            Contribuir en el desarrollo científico-tecnológico mediante el fortalecimiento
            de la investigación y estandarización de procedimientos para extraer metabolitos secundarios y validar
            actividades farmacológicas de especies vegetales reportadas como medicinales, así como la formulación
            y elaboración de fitofármacos y cosméticos naturales.
          </p>
          <br />
          <button className={styles.goCatalogBtn}>Ver productos <span>&#8702;</span></button>
        </div>
        <img src={img} alt="imagen" />
      </div>
    </div>
  );
}