import styles from '../styles/Home.module.css'

const Footer=()=>{
    return (
        <footer className={styles.footer}>
               <p> En colaboración con</p> 
               <div className={styles.grid}>
                    <img src="" className={styles.card}></img>
                    <img src="" className={styles.card}></img>
                    <img src= "" className={styles.card}></img>               
                </div>
               <p> Un projecto creado por la Biblioteca Pedro Zulen de la Universidad Nacional Mayor de San Marcos | © 2022  </p>
        </footer>
    );
}
export default Footer;