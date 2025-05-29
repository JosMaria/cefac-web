import { Link } from 'react-router';
import img from '../../../assets/image_1.png';
import styles from '../scss/Presentation.module.scss';

export const Presentation = () => {
  return (
    <section className={styles.presentationContainer}>
      <h1 className={styles.title}>
        Cefac - Centro de <span>F&aacute;rmacos Alimentos</span> y <span>Cosm&eacute;ticos</span>
      </h1>
      <div className={styles.presentationContent}>
        <div className={styles.presentationText}>
          <p>
            El CEFAC, Centro de Fármacos, Alimentos y Cosméticos creada en el año 1992, es una Unidad
            de Investigación dependiente del Instituto de Investigaciones Bioquimicos-Farmaceuticas,
            de la Facultad de Bioquimica y Farmacias, cuyas actividades en el campo de los productos
            naturales, estan orientadas a valoración y validación de la actividad biologica de la
            flora medicinal utilizada por la medicina tradicional y popular.
          </p>
          <div>
            <h3>OBJETIVO</h3>
            <p>
              Contribuir en el desarrollo científico-tecnológico mediante el fortalecimiento
              de la investigación y estandarización de procedimientos para extraer metabolitos secundarios y validar
              actividades farmacológicas de especies vegetales reportadas como medicinales, así como la formulación
              y elaboración de fitofármacos y cosméticos naturales.
            </p>
          </div>
          <div>
            <h3>PRODUCTOS</h3>
            <p>
              Los productos que ofrece CEFAC son de excelencia ya que antes de salir al mercado pasa
              por diferentes controles para asegurar su calidad. Este proceso consta en tres etapas:
              la estandarización del producto, el control de calidad y la producción, posteriormente
              ponerlos a la venta. El laboratorio ofrece sus productos a toda la comunidad
              universitaria y al publico en general.
            </p>
          </div>
          <Link to='catalog' className={styles.toCatalogBtn}>Ver productos</Link>
        </div>
        <div className={styles.imageContainer}>
          <img src={img} alt='imagen' />
        </div>
      </div>
    </section>
  );
}