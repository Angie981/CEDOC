import s from '../footer/footer.module.css'
import {RiFacebookFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";


const Footer=()=>{
    return (
        <footer className={s.footer}>
            <div className={s.mainFooter}>
               <a href='#'>Nosotros</a> /
               <a href='#'> Ubicación</a> /
               <a href='#'> Administrativos</a>
               <div className={s.grid}>     
                    < RiFacebookFill  className={s.icon}/>
                    < RiInstagramLine className={s.icon}/>
                    < RiTwitterFill className={s.icon}/>          
                </div>
            </div>
            <div className={s.secondaryFooter}>
                <p > Un projecto creado por la Biblioteca Pedro Zulen de la Universidad Nacional Mayor de San Marcos | © 2022  </p>
            </div>
        </footer>
    );
}
export default Footer;