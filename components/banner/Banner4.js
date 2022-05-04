import s from '../banner/banner.module.css'
import background from'../../public/js/bannerBackground';
import { FaBars, FaTimes, FaPlay } from "react-icons/fa";
import React from 'react';
import { Button, Menu } from 'antd';

background();


function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  
const items = [
    getItem('Inicio', '1', <FaPlay/>,),
    getItem('Nosotros', '2',<FaPlay/>,),
    getItem('Servicios', 'sub1',<FaPlay/>, [
      getItem('Préstamo', '3'),
      getItem('Digitalización de documentos', '4'),
      getItem('Estante abierto', '5'),
      getItem('Acceso Wifi', '6'),
    ]),
    getItem('Catálogo', '7',<FaPlay/>,),
    getItem('Recursos en linea', 'sub2', <FaPlay />, [
      getItem('Biblioteca digital de CEDOC', '8'),
      getItem('Actas del Consejo de Ministros', '9'),
      getItem('Repositorios institucionales', '10'),
    ]),
    getItem('Agenda Cultural', '11',<FaPlay/>,),
    getItem('Galeria', '12',<FaPlay/>,),
    getItem('Apoyo a la investigación', '13',<FaPlay/>,),

    
  ];
  
  const onClick = (e) => {
    console.log('click', e);
  };

const Banner2=()=>{
  
    const [collapsed, setCollapsed] = React.useState(false);
  
    const toggleCollapsed = () => {
    setCollapsed(!collapsed);};

    return (    
        <nav id="banner" className={s.nav}>          
            <div className={s.bannerHeader}>
                 <div className={s.titleCenter}>   
                    <div id="title" className={s.titleHeader}>
                        CDMS
                    </div>
                    <div id="subtitle"
                     className={s.subtitle}>
                        Centro de Documentación <br></br>
                        sobre Movimientos Sociales 
                    </div>  
                </div>
                <Button className={s.toggle}
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{
                      cursor:'pointer',
                      width: '3.7rem',
                      height: '3.2rem',
                      borderRadius: '20px',
                      background: '#000',
                      opacity: '75%',
                      color:'#fff',
                      float: 'right',
                      borderStyle: 'none',
                      margin: '1rem 4.5rem 1rem 0',
                      fontSize:'1.5rem',
                    }}
                >
                     {collapsed ? <FaBars /> : <FaTimes/>}
                </Button>
            </div>
            <Menu
                onClick={onClick}
                style={{
                width: 256,
                float:'right',
                borderRadius:'20px',
                background: '#000',
                opacity: '75%',
                }}
                theme="dark"
                mode="vertical"
                inlineCollapsed={collapsed}
                items={items}
            />
            <div id="start" className={s.start}>
                <button className={s.buttonStart} >EMPECEMOS</button>
            </div>                  
        </nav>
        
    );
}
        
export default Banner2;