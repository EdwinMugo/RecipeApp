import { useEffect, useState} from "react";
import styles from "../styles/Popular.module.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";

export default function Popular() {
  const [popular, setPopular] = useState([]);

    useEffect(()=> {
        async function getPopularRecipe(){
          const checkStorage = localStorage.getItem('popular');
          const API_KEY = import.meta.env.VITE_API_KEY;

          if(checkStorage){
            setPopular(JSON.parse(checkStorage));
          }else{ 
          try{
          const response= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=8`);
          const data = await response.json();
          localStorage.setItem('popular', JSON.stringify(data.recipes));
          setPopular(data.recipes)  
          // console.log(data);
          } catch (error){
            console.error("Failed to fetch Recipes", error);
          }
        }  
        } getPopularRecipe();
    }, []);
  return (
    <div className={styles.wrapper}>
      <h3>Popular Picks</h3>

      <Splide options= {{
        perPage:4,
        arrows:false,
        paginaion: false,
        drag:'free',
        gap: "5rem"
      }}> 
      {popular.map((recipe)=> {
        return(
          <SplideSlide key={recipe.id}> 
          <div className={styles.card}> 
          <Link to={'/recipe/'+ recipe.id}> 
          <p key={recipe.id}> {recipe.title}</p>
          <img className={styles.Gradient} src={recipe.image} alt={recipe.title}/>
          </Link>
          </div>
          </SplideSlide>
        
        );
      })}
      </Splide>
    </div>
  )
}

