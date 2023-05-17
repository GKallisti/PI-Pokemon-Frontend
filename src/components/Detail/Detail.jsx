import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { cleanMyStore, cleanStore, getDetail, deletePokemon } from "../../redux/action";
import image  from "../../assets/loading.gif"
import styles from "./Detail.module.css"
import DeletedPK from "../DeletedPk/DeletedPK";

export default function Detail(){
    const dispatch = useDispatch();
    const params = useParams();
    const [clean, setClean] = useState(false);
    
    
    const handleDelete = () => {
        dispatch(deletePokemon(pokemonDetail.id));
        setClean(true);
      };
    
    

    useEffect(() => {
        dispatch(getDetail(params.id));
    }, [dispatch, params.id]);

    const cleanStore = () => {
        dispatch(cleanMyStore())
    };

    const pokemonDetail = useSelector((state) => state.pokemonDetail.length && state.pokemonDetail[0]);
console.log(pokemonDetail.id)
    if(pokemonDetail){

        return (
        <div className={styles.bodyDetail}>
                
            <div className={styles.nav}>
                <Link to='/home'>
                    <button className={styles.button} onClick={cleanStore}>Back</button>
                    
                    {typeof pokemonDetail.id === "string" && (
            <button onClick={handleDelete} className={styles.button}>
              <p className={styles.text}> delete </p>
            </button>
          )}
                </Link>
            </div>

            <div className={styles.cardDetail}>

                    <div className={styles.imgdiv}>
                    <img src={pokemonDetail.image} alt="Pokemon Image" style={{borderRadius: '10px',width: '250px', height: '250px'}}/>
                    </div>

                    <div className={styles.infostuff}>
                    <h2 className={styles.name}>{pokemonDetail.name.toUpperCase()}</h2>
                    <h4 className={styles.height}>Height: {pokemonDetail.height}</h4>
                    <h4 className={styles.weight}>Weight: {pokemonDetail.weight}</h4>
                    </div>
                 </div>
              
                 {clean && <DeletedPK setClean={setClean} />}
               
                
            <div className= {styles.detailinfo}>
                <div className={styles.centeredinfo}>
            <h4 className={styles.hp}>HP: {pokemonDetail.hp}</h4>
                <h4 className={styles.attack}>Attack: {pokemonDetail.attack}</h4>
                <h4 className={styles.defense}>Defense: {pokemonDetail.defense}</h4>
                <h4 className={styles.speed}>Speed: {pokemonDetail.speed}</h4>
                <h3 className={styles.type}>Types:</h3>
                <div className={styles.types}>
                { pokemonDetail &&
                    pokemonDetail.types.map((e) => (
                    <h4 key={e.name}>
                    {e.name[0].toUpperCase() + e.name.slice(1)}
                    </h4>
                    ))}
                </div>
            </div>
        </div>
                
        </div>
    
        );
    }else{
        return (
            <div>
                <div className={styles.nav}>
                </div>
                <img src={image} className={styles.loadingPokemons} styles={{width:"100px"}}/>;
            </div>
        )
    };
};