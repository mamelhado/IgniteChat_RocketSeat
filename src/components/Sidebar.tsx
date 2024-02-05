import styles from "./Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Imagem de capa"
            />

            <div 
                className={styles.profile}
            >
                {/* <img 
                    className={styles.avatar}
                    src={avatar} alt="Avatar usuario"
                /> */}

                <Avatar 
                    hasBorder
                    src="https://raw.githubusercontent.com/mamelhado/DevLinks_tutorial/master/assets/avatar-light.png"/>

                <strong>Marlon Melhado</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        
        </aside>
    );
}