import { format, formatDistanceToNow } from "date-fns";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface Author {
    avatarUrl: string;
    name: string;
    role: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostInterface{
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps{
    post: PostInterface;
}

export function Post({ post } : PostProps){

const [comments, setComments] = useState([
    "Post muito bacana, hein?!",
]);

const [newCommentText, setNewCommentText] = useState("");

const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR})
const publishseDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
});

function handleCreateNewComment(event:FormEvent){
    event.preventDefault();    
    setComments([...comments, newCommentText]);
    setNewCommentText("");
};

function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
}

function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("O preenchimento deste campo é obrigatório!");
}

function deleteComment(commentToDelete: string){
//imutabilidade -> as variaveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memoria)
    
//criar uma nova lista de comentarios, sem o comentario que será excluido
const commentsWithoutDeletedeOne = comments.filter(comment => {
        return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedeOne);
}

const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder={true}
                        alt=""
                        src={post.author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormated}
                    dateTime={post.publishedAt.toISOString()}
                >{publishseDateRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    post.content.map(line => {
                        if(line.type== "paragraph"){
                            return (
                                <p key={line.content}>{line.content}</p>
                            )
                        }
                        else if(line.type== "link"){
                            return (
                                <p key={line.content}><a href="#">{line.content}</a></p>
                            )
                        }
                    })
                }
                
            </div>

            <form 
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}
            >
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    value={newCommentText}
                    placeholder="Deixe um comentario"
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button 
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentsList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    );
                })}
            </div>
        </article>
    );
}