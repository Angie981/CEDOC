import styles from '../styles/Home.module.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import biblioteca from '../public/img/biblioteca.png';
import UNMSM from '../public/img/unmsm.png';

library.add(fas,fab);

const Navbar=()=>{
    return (
        <div className={styles.navElements+styles.containerFluid+ styles.dFlex}>
            <div className={styles.navElementsSize + styles.mxAuto}>    
            <div className={styles.headerGrid}>
                <div  id="container-img-center" className={styles.containerImg}>    
                    <a id="logo-unmsm-center" className={styles.mr0 +styles.floatLeft} title="UNMSM" href="https://www.unmsm.edu.pe/" target="_blank">
                        <Image className={styles.imageLogo} src={UNMSM} alt="UNMSM" layout="raw"/>
                    </a>
                    <a  id="logo-biblioteca" href="../" className={styles.h100+ styles.ml0+styles.floatLeft} title="SISBIB">
                            <Image  className={styles.imageLogo} src={biblioteca} alt="SISBIB" layout="raw"/>
                    </a>
                    <div className={styles.socialNetworks}>
                        <div className={styles.alignSocialNetworks}>
                            <a> <FontAwesomeIcon icon="fa-solid fa-envelope" className={styles.iconNetworksEnvelope} /> <span className={styles.correo}>bibcent@unmsm.edu.pe</span></a>
                            <a><FontAwesomeIcon icon="fa-brands fa-facebook-square" className={styles.iconNetworks}/></a>
                            <a><FontAwesomeIcon icon="fa-brands fa-instagram-square" className={styles.iconNetworks}/></a>
                            <a><FontAwesomeIcon icon="fa-brands fa-twitter-square" className={styles.iconNetworks}/></a>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        </div> 
       
    );
}

export default Navbar;

