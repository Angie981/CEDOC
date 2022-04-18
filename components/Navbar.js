import styles from '../styles/Home.module.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas,fab);

const Navbar=()=>{
    return (
        <nav>
            <div className={styles.container}>
                <img src=""></img>
                <img src=""></img>
                <FontAwesomeIcon icon="fa-solid fa-envelope" width={15} /> bibcent@unmsm.edu.pe
                <FontAwesomeIcon icon="fa-brands fa-facebook" width={15}/>
                <FontAwesomeIcon icon="fa-brands fa-instagram" width={15}/>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" width={15}/>
            </div>
            <div>
                <img src=""></img>
                <img src=""></img>
                <h1>CDMS </h1>
                <h4>Centro de Documentación sobre Movimientos Sociales</h4>
                <input type="search" id="site-search"/>
                <button><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" width={15}/></button>

                
            </div>

            <ul>
                <li>Inicio</li>
                    <ul>
                        <li>Definición</li>
                        <li>Catálogo</li>
                    </ul>
                <li>Nosotros</li>
                    <ul>
                        <li>Autoridades de la Universidad</li>
                        <li>DGBP</li>
                        <li>DSBBC</li>
                        <li>USI</li>
                        <li>Comité Consultivo</li>
                    </ul>
                <li>Servicios</li>
                    <ul>
                        <li>Préstamo en Sala</li>
                        <li>Préstamo a Domicilio</li>
                        <li>Préstamo Interbiblioecario</li>
                        <li>Acceso a Internet</li>
                        <li> Digitalización de Documentos</li>
                        <li>Estante abierto</li>
                    </ul>

                <li>Recursos en línea</li>
                    <ul>
                        <li> Base de datos</li>
                        <li> Enlaces a Bibliotecas afines</li>
                        <li>Enlaces a Biblioteca de la UNMSM</li>
                        <li>Archivo COVID-19</li>
                        <li> Actas del Consejo de Ministros del Perú</li>
                        <li>Fondo Editorial UNMSM</li>
                        <li>Cybertesis UNMSM</li>
                        <li>Revistas de Investigaciòn UNMSM</li>
                        <li>Novedades Bibliográficas</li>
                        <li>Biblioteca Digital de CEDOC</li>
                    </ul>
            </ul>
          
        </nav>
    );
}
export default Navbar;