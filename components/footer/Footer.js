import s from '../footer/footer.module.css'

const Footer=()=>{
    return (
        <footer className={s.footer}>
            <div className={s.mainFooter}>
               <p> En colaboración con</p> 
               <div className={s.grid}>
                    <img src="" className={s.card}></img>
                    <img src="" className={s.card}></img>
                    <img src= "" className={s.card}></img>               
                </div>
            </div>
            <div className={s.secondaryFooter}>
                <p > Un projecto creado por la Biblioteca Pedro Zulen de la Universidad Nacional Mayor de San Marcos | © 2022  </p>
            </div>
        </footer>
    );
}
export default Footer;