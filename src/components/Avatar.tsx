import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder: boolean;    
}

export function Avatar(props:AvatarProps){
    return(
        <img 
            className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={props.src}
            alt={props.alt}
        />
    );
}