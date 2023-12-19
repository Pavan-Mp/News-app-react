
import { useEffect, useState } from 'react';
import Sub from './Sub';
import './App.css';

function App() {


  let [articles,setArticles] = useState([])
  let [category,setCategory] = useState("india")

   useEffect(()=>{

     fetch (`https://newsapi.org/v2/everything?q=${category}&apiKey=f0e0343d4dea4dd895847e4395c81fc5`)
     .then((Response)=>Response.json())
     .then((news)=>{
       setArticles(news.articles);
       console.log(news.articles)
     })
    //  .catch((err)=>{
    //   console.log(err)
    //  })

   },[category])

  return (
    <div className="App">

      <header className='Header'>

       <h1>NEWS 07</h1>

       <input type='text' onChange={(e)=>{
        if(e.target.value!=="")
        {

          setCategory(e.target.value);
        }
        else{
          setCategory("karnataka")
        }
        
       }} placeholder='Search News'/>

      </header>

     <section className='News-articles'>
      
      {

         articles.length!==0?
        articles.map((article)=>{
           return(
            <Sub article={article}/>
           )
        })
        :
         <h3>No News Found For Searched Text</h3>
      }
        


       
    </section>

    </div>
  );
  }

export default App;
