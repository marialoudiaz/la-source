import { React, useEffect, useContext } from 'react';
import { useState } from 'react';
import Markdown from 'markdown-to-jsx'
import { ThemeContext } from '../App';
import styled from 'styled-components'



const Post=()=> {
  const [postContent, setPostContent] = useState('');
  const {isDark} = useContext(ThemeContext);
  const styles = {
    darkMode: {
    backgroundColor: "#292929",
    color: "white",
    },
    lightMode: {
      backgroundColor: "white",
      color: "#292929"
    }};

  // Fetch the article
  useEffect(()=>{
    /*Avec le module import, j'envoie une promise*/
    import ('../markdown/prolégomène.md') // j'importe le fichier article.md
    /*Le module est importé, j'appelle la fonction .then avec le module res qui contient le contenu du fichier article.md*/
    .then (res=>{
      /*Fonction fetch effectue une requête HTTP pour récupérer le contenu du fichier.*/
      console.log(res.default)
      fetch(res.default) //Res.default = chemin relatif du fichier md obtenu lors de l'import
      /*Réponse HTTP obtenue*/
      .then(response => response.text() // Nouvelle fonction .then utilisée pour gérer la réponse
        .then(response => setPostContent(response))) // Je stocke la réponse dans postContent
        .catch(err => console.log(err) // J'affiche les potentielles erreurs
      )
    })
  },[]);


  return (
    <article className='article' style={isDark? styles.darkMode : styles.lightMode}>
      <div className='container'>
        <div className='post-wrapper'>
          <Markdown># La source</Markdown>
          <Markdown>### Petit manuel de survie spirituelle en milieu hostile</Markdown>
          <Markdown>{postContent}</Markdown>
        </div>
      </div>
    </article>
  )
}

export default Post