import { useState} from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../styles/Search.module.css";
import { useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate('');
    const [input, setInput] = useState('');

    function submitHandler(e){
        e.preventDefault();
        navigate('/searched/' + input);

    }
  return (
    <div>
        <form className={styles.formStyle} onSubmit={submitHandler}>
            <FaSearch> </FaSearch>
            <input value={input} type="text" onChange={(e)=> setInput(e.target.value)}/>
        </form>
    </div>
  )
}

export default Search