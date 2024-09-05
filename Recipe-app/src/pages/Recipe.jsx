import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import styles from '../styles/Recipe.module.css';

function Recipe() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const[details, setDetails]= useState({});
  const[activeTab, setActiveTab]=useState('instructions');
  const params = useParams();
    useEffect(() => {
      async function getRecipeDetails(){
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}&number=8&`);
        const response= await data.json();
        setDetails(response);
      }
      getRecipeDetails();
    },[params.id]);
  
    
  return (
    <> 
    <div className={styles.DetailWrapper}>
      <h2> {details.title} </h2>
      <img src={details.image} alt=""/>
      </div>
      <div className={styles.info}> 
        <button className={activeTab === 'instructions' ? styles.active : ''} onClick={()=> setActiveTab('instructions')}> Instructions </button>
        <button  className={activeTab === 'ingredients' ? styles.active : ''} onClick={()=> setActiveTab('ingredients')}> Ingredients</button>
      </div>
      <div>
        <h3 dangerouslySetInnerHTML={{__html: details.summary }}/>
        <h3 dangerouslySetInnerHTML={{__html: details.instructions }}/>
      </div>
      </>
  )
}

export default Recipe