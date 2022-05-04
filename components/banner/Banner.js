import { useEffect, useState } from 'react'
import s from '../banner/banner.module.css'
import {background,namePage} from'../../public/js/bannerBackground';
import {openServices,openRecursos} from '../../public/js/menu';
import { FaBars, FaTimes, FaPlay } from "react-icons/fa";

background();



const Banner=()=>{

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => setCollapsed(!collapsed);
    const [page,setPage]=useState('')
    useEffect(()=>setPage(namePage()),[])
    return (    
        <nav id="banner" className={s.nav}>  
            <div className={s.bannerHeader}>
                 <div className={s.titleCenter}>   
                    <div id="title" className={s.titleHeader}>
                    {page}
                    </div>
                    <div id="subtitle"
                     className={s.subtitle}>
                        Centro de Documentación <br></br>
                        sobre Movimientos Sociales 
                    </div>  
                </div>       
                <button className={s.toggle} onClick={toggleCollapsed}> 
                    {collapsed ===false ? <FaBars className={s.icon}/> : <FaTimes className={s.icon}/>}
                </button>
            </div>
            <div className={s.menuBox}>
                <ul className={collapsed=== false ? s.menu : s.menu + ' '+s.active}>
                    <li id="firstOptionMenu" className={s.item}>
                        <a href="/"> ▶ Inicio</a>
                        </li>
                    <li className={s.active}><a href="/nosotros"> ▶ Nosotros</a></li>
                    <li className={s.item} onClick= {openServices}><a href="#"> ▶ Servicios</a>
                        <ul id="submenu1" className={s.submenu}>
                            <li id="firstOptionSubMenu" className={s.item2}><a href="#">▶ Préstamo</a></li>
                            <li className={s.item2} ><a href="#"> ▶ Digitalización de documentos </a></li>
                            <li className={s.item2} ><a href="#"> ▶ Estante abierto</a></li>
                            <li id="lastOptionSubMenu"className={s.item2}><a href="#"> ▶ Acceso Wifi</a></li>
                        </ul>
                    </li>
                    <li className={s.item}><a href="#"> ▶ Catálogo</a></li>
                    <li className={s.item} onClick= {openRecursos}><a href="#"> ▶ Recursos en línea</a>
                        <ul id="submenu2" className={s.submenu}>
                            <li id="firstOptionSubMenu" className={s.item2}><a href="#"> ▶ Biblioteca digital de CEDOC</a></li>
                            <li className={s.item2}><a href="#"> ▶ Actas del Consejo de Ministros</a></li>
                            <li id="lastOptionSubMenu" className={s.item2}><a href="#"> ▶ Repositorios institucionale</a></li>                          
                        </ul>
                    </li>
                    <li className={s.item}><a href="#"> ▶ Agenda cultural</a></li>
                    <li className={s.item}><a href="#"> ▶ Galería</a></li>
                    <li id="lastOptionMenu" className={s.item}><a href="#"> ▶ Apoyo a la investigación</a></li>
                </ul>
            </div>
            <div id="start" className={s.start}>
                <button className={s.buttonStart} >EMPECEMOS</button>
            </div> 
        </nav>
        );
        }
        
    export default Banner;


