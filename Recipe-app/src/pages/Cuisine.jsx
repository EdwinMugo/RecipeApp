import {motion} from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from '../styles/Cuisine.module.css';

function Cuisine() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [cuisine, setCuisine] = useState([])
  let params = useParams();

  useEffect(() => {
    async function getCuisine(name){
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=8&cuisine=${name}`)
      const response = await data.json();
      setCuisine(response.results)
    } 
   getCuisine(params.type);
  }, [params.type]); //run the useEffect everytime the params changes
  

  return (
    <div className={styles.Grid}>
      {cuisine.map((item)=>{
        return(
          <div className={styles.card} key={item.id}>
            <Link to={'/recipe/'+ item.id} > 
              <img src={item.image} alt=""/>
              <h4> {item.title}</h4>
              </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Cuisine