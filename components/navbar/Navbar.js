import React from 'react';
import s from '../navbar/navbar.module.css'
import Image from 'next/image';
import biblioteca from '../../public/img/biblioteca.png';
import UNMSM from '../../public/img/unmsm.png';
import {RiFacebookFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";

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
                            <a> <FaEnvelope  className={s.iconNetworksEnvelope}/> <span className={s.correo}>bibcent@unmsm.edu.pe</span></a>
                            <a> <RiFacebookFill  className={s.iconNetworks}/></a>
                            <a> <RiInstagramLine className={s.iconNetworks}/></a>
                            <a> <RiTwitterFill className={s.iconNetworks}/>  </a>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        </div> 
       
    );
}

export default Navbar;

