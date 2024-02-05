import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: "https://raw.githubusercontent.com/mamelhado/DevLinks_tutorial/master/assets/avatar-light.png",
          name: "Marlon Melhado",
          role: "Web Developer"
      },
      content: [
          { type: "paragraph", content: "Fala galera 👏" },
          { type: "paragraph", content: "Acabei de subir mais um projeto no meu profile. É um projeto que fiz no NLW Return, evento da RocketSeat" },
          { type: "link", content :"jane.design/doctorcare"}               
      ],
      publishedAt: new Date("2024-02-03 21:51:13")
  },
  {
      id: 2,
      author: {
          avatarUrl: "https://raw.githubusercontent.com/maykbrito/devlinks/main/assets/avatar.png",
          name: "Mayk Brito",
          role: "Educator Rocket seat"
      },
      content: [
          { type: "paragraph", content: "Fala galera 👏" },
          { type: "paragraph", content: "Acabei de subir mais um projeto no meu profile. É um projeto que fiz no NLW Return, evento da RocketSeat" },
          { type: "link", content :"jane.design/doctorcare"}               
      ],
      publishedAt: new Date("2024-02-04 13:51:13")
  }
];

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* <Post />
          <Post />   */}
          {
            posts.map(post =>{
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            })
          }
        </main>
      </div>
      
    </div>
  )
}
