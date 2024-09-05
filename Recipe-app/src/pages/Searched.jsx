import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import styles from '../styles/Cuisine.module.css'

function Searched() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const[searchQuery, setSearchQuery]= useState([]);
    const params = useParams();

    useEffect(()=> {
        async function searchRecipe (name){
            const response= await fetch(`https://api.spoonacular.com/recipes/complexSearch?&query=${name}&apiKey=${API_KEY}&number=8`);
            const data= await response.json();
            setSearchQuery(data.results);  
        }
        searchRecipe(params.search);
    }, [params.search]);
  return (
    <div className={styles.Grid}>
    {searchQuery.map((item)=>{
      return(
        <div className={styles.card} key={item.id}>
          <Link to={'/recipe/'+ item.id}> 
            <img src={item.image} alt=""/>
            <h4> {item.title}</h4>
            </Link>
        </div>
      )
    })}
  </div>
  )
}

export default Searched