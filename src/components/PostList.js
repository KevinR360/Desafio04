import React, { Component } from "react";

import avatar from "../assets/avatar.png";
import batman from "../assets/batman-icon.png";

import Post from "../components/Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Kevin Richard",
          avatar: avatar
        },
        date: "05 Ago 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: batman
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord!(Sério, me chame mesmo, esse comentário é real)"
          },
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar: batman
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord!(Sério, me chame mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Kevin Richard",
          avatar: avatar
        },
        date: "05 Ago 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: batman
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord!(Sério, me chame mesmo, esse comentário é real)"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className=" postList content">
        <ul>
          {this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
