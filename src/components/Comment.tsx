import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

interface CommentProps{
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment(props: CommentProps)
{
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        //console.log("deletar");
        props.onDeleteComment(props.content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                alt=""
                src="https://raw.githubusercontent.com/mamelhado/DevLinks_tutorial/master/assets/avatar-light.png"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marlon Melhado</strong>
                            <time 
                                title="03 de fevereiro às 21:51"
                                dateTime="2024-02-03 21:51:13"
                            >Cerca de 1h atrás
                            </time>
                        </div>
                        <button 
                            title="Deletar comentário"
                            onClick={handleDeleteComment}
                        >
                            <Trash 
                                size={24}
                            />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button
                        onClick={handleLikeComment}
                    >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}