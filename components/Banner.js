import styles from '../styles/Home.module.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {toggle} from '../public/js/toggle.js';
library.add(fas,fab);


const Banner=()=>{
    return (
        
        <nav className={styles.nav}>
           
            <div className={styles.banner}>
                 <div className={styles.titleCenter}>   
                    <div className={styles.titleHeader}>
                        CDMS 
                    </div>
                    <div className={styles.subtitle}>
                        Centro de Documentación <br></br>
                        sobre Movimientos Sociales 
                    </div>  
                </div>
                <ul className={styles.menu}>
                    <li className={styles.item}><a href="#">Inicio</a></li>
                    <li className={styles.item}><a href="#">Nosotros</a></li>
                    <li className={styles.item}><a href="#">Servicios</a>
                        <ul>
                            <li className={styles.item2}><a href="#">Préstamo</a></li>
                            <li className={styles.item2}><a href="#">Digitalización de documentos</a></li>
                            <li className={styles.item2}><a href="#">Estante abierto</a></li>
                            <li className={styles.item2}><a href="#">Acceso Wifi</a></li>
                        </ul>
                    </li>
                    <li className={styles.item}><a href="#">Catálogo</a></li>
                    <li className={styles.item}><a href="#">Recursos en línea</a>
                        <ul>
                            <li className={styles.item2}><a href="#">Biblioteca digital de CEDOC</a></li>
                            <li className={styles.item2}><a href="#"> Actas del Consejo de Ministros</a></li>
                            <li className={styles.item2}><a href="#">Repositorios institucionale</a></li>                          
                        </ul>
                    </li>
                    <li className={styles.item}><a href="#">Agenda cultural</a></li>
                    <li className={styles.item}><a href="#">Galería</a></li>
                    <li className={styles.item}><a href="#">Apoyo a la investigación</a></li>
                    <li className={styles.toggle}><a href="#"> <FontAwesomeIcon icon="fa-solid fa-bars" width={20} /> </a></li>
                </ul>
            
            </div>
            <div className={styles.start}>
                <button className={styles.buttonStart} >EMPECEMOS</button>
            </div>


                  
        </nav>
        
            );
        }
        
    export default Banner;