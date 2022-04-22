import styles from '../styles/Home.module.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas,fab);

const Navbar=()=>{
    return (
        <div className={styles.navElements+styles.containerFluid+ styles.dFlex}>
            <div className={styles.navElementsSize + styles.mxAuto}>    
            <div className={styles.headerGrid}>
                <div  id="container-img-center" className={styles.containerImg}>    
                    <a id="logo-unmsm-center" className={styles.mr0 +styles.floatLeft} title="UNMSM" href="https://www.unmsm.edu.pe/" target="_blank">
                        <img className={styles.pr4} src="https://posgrado.unmsm.edu.pe/unmsm/resources/image/logo.png" alt="UNMSM"/>
                    </a>
                    <a  id="logo-biblioteca" href="../" className={styles.h100+ styles.ml0+styles.floatLeft} title="SISBIB">
                            <img  className={styles.pr4} src="https://form-sisbib.herokuapp.com/assets/principal/images/header/bibcentral_blanco-min.png" alt="SISBIB" />
                    </a>
                    <div className={styles.dFlex + styles.positionRelative+styles.alignItemsCenter+styles.justifyContentBetween+ styles.h100}>
                        <a> <FontAwesomeIcon icon="fa-solid fa-envelope" width={15}
                         /> bibcent@unmsm.edu.pe</a>
                        <a> <FontAwesomeIcon icon="fa-brands fa-facebook" width={15}/></a>
                        <a><FontAwesomeIcon icon="fa-brands fa-instagram" width={15}/></a>
                        <a><FontAwesomeIcon icon="fa-brands fa-linkedin" width={15}/></a>
                    </div>
                </div>
            </div> 
            </div>
        </div> 
       
    );
}

export default Navbar;