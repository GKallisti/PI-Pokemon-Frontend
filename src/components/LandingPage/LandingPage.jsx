import { Link, useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";
import pokemonImage from "../../assets/LOGO.jpg";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/action";
import { useEffect } from "react";

export default function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toHome=()=>{
navigate('/home')
  }

  useEffect(() => { 
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={styles.Landing}>
      <img src={pokemonImage} alt="imagen" className={styles.Image} />
     
        <button className={styles.button} onClick={toHome}> Start Pokedex Purple-Ghost 
    
</button>
      
    </div>
  );
}


