import React from 'react';
import s from '../navbar/navbar.module.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';
import biblioteca from '../../public/img/biblioteca.png';
import UNMSM from '../../public/img/unmsm.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas,fab);

const Navbar=()=>{
    return (
        <div className={s.navElements}>
            <div className={s.navElementsSize}>    
            <div className={s.headerGrid}>
                <div  id="container-img-center" className={s.containerImg}>    
                    <a id="logo-unmsm-center"  title="UNMSM" href="https://www.unmsm.edu.pe/" target="_blank">
                        <Image className={s.imageLogo} src={UNMSM} alt="UNMSM" layout="raw"/>
                    </a>
                    <a  id="logo-biblioteca" href="../" title="SISBIB">
                            <Image  className={s.imageLogo} src={biblioteca} alt="SISBIB" layout="raw"/>
                    </a>
                    <div className={s.socialNetworks}>
                        <div className={s.alignSocialNetworks}>
                            <a> <FontAwesomeIcon icon="fa-solid fa-envelope" className={s.iconNetworksEnvelope} /> <span className={s.correo}>bibcent@unmsm.edu.pe</span></a>
                            <a><FontAwesomeIcon icon="fa-brands fa-facebook-square" className={s.iconNetworks}/></a>
                            <a><FontAwesomeIcon icon="fa-brands fa-instagram-square" className={s.iconNetworks}/></a>
                            <a><FontAwesomeIcon icon="fa-brands fa-twitter-square" className={s.iconNetworks}/></a>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        </div> 
       
    );
}

export default Navbar;

