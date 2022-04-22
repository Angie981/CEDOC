import styles from '../styles/Home.module.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas,fab);

const Banner=()=>{
    return (
        
        <nav className={styles.nav}>
           
            <div className={styles.banner}>
                 <div className={styles.center}>   
                    <div className={styles.titleHeader}>
                        CDMS 
                    </div>
                    <div className={styles.subtitle}>
                        Centro de Documentación <br></br>
                        sobre Movimientos Sociales 
                    </div>  
                </div>
                <ul className={styles.menu + styles.list}>
                    <li className={styles.item}>Inicio</li>
                        <ul>
                            <li className={styles.item}>Definición</li>
                            <li className={styles.item}>Catálogo</li>
                        </ul>
                    <li className={styles.item}>Nosotros</li>
                        <ul>
                            <li className={styles.item}>Autoridades de la Universidad</li>
                            <li className={styles.item}>DGBP</li>
                            <li className={styles.item}>DSBBC</li>
                            <li className={styles.item}>USI</li>
                            <li className={styles.item}>Comité Consultivo</li>
                        </ul>
                    <li className={styles.item}>Servicios</li>
                        <ul>
                            <li className={styles.item}>Préstamo en Sala</li>
                            <li className={styles.item}>Préstamo a Domicilio</li>
                            <li className={styles.item}>Préstamo Interbiblioecario</li>
                            <li className={styles.item}>Acceso a Internet</li>
                            <li className={styles.item}> Digitalización de Documentos</li>
                            <li className={styles.item}>Estante abierto</li>
                        </ul>

                    <li className={styles.item}>Recursos en línea</li>
                        <ul>
                            <li className={styles.item}> Base de datos</li>
                            <li className={styles.item}> Enlaces a Bibliotecas afines</li>
                            <li className={styles.item}>Enlaces a Biblioteca de la UNMSM</li>
                            <li className={styles.item}>Archivo COVID-19</li>
                            <li className={styles.item}> Actas del Consejo de Ministros del Perú</li>
                            <li className={styles.item}>Fondo Editorial UNMSM</li>
                            <li className={styles.item}>Cybertesis UNMSM</li>
                            <li className={styles.item}>Revistas de Investigaciòn UNMSM</li>
                            <li className={styles.item}>Novedades Bibliográficas</li>
                            <li className={styles.item}>Biblioteca Digital de CEDOC</li>
                        </ul>
                        <li className={styles.toggle}><a href="#"> <FontAwesomeIcon icon="fa-solid fa-bars" width={15}/> </a></li>
                </ul>
            
            </div>
            <div className={styles.start}>
                <button className={styles.buttonStart} >Empecemos</button>
            </div>


                  
        </nav>
        
            );
        }
        
    export default Banner;