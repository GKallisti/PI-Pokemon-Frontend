import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { cleanMyStore, cleanStore, getDetail, deletePokemon } from "../../redux/action";
import image from "../../assets/loading.gif"
import styles from "./Detail.module.css"
import DeletedPK from "../DeletedPk/DeletedPK";

export default function Detail() {
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
    if (pokemonDetail) {

        return (
            <div className={styles.bodyDetail}>

                <div className={styles.nav}>
                    <Link to='/home'>
                        <button className={styles.button} onClick={cleanStore}>Back</button>

                        {typeof pokemonDetail.id === "string" && (
                            <button onClick={handleDelete} className={styles.button}>
                                 Delete
                            </button>
                        )}
                    </Link>
                </div>


                <div className={styles.leftside}></div>
                <div className={styles.cardDetail}>
                    <div className={styles.imgdiv}>
                        <img src={pokemonDetail.image} alt="Pokemon Image" style={{ borderRadius: '10px', width: '250px', height: '250px' }} />
                    </div>

                    <div className={styles.infostuff}>
                        <h2 className={styles.name}>{pokemonDetail.name.toUpperCase()}</h2>
                        <h4 className={styles.id}>ID: {pokemonDetail.id}</h4>
                        <h4 className={styles.height}>Height: {pokemonDetail.height}</h4>
                        <h4 className={styles.weight}>Weight: {pokemonDetail.weight}</h4>
                    </div>
                </div>


                <div className={styles.rightside}></div>

                {clean && <DeletedPK setClean={setClean} />}

                <div className={styles.detailinfo}>
                    <div className={styles.centeredinfo}>
                        <h4 className={styles.hp}>HP: {pokemonDetail.hp}</h4>
                        <h4 className={styles.attack}>Attack: {pokemonDetail.attack}</h4>
                        <h4 className={styles.defense}>Defense: {pokemonDetail.defense}</h4>
                        <h4 className={styles.speed}>Speed: {pokemonDetail.speed}</h4>
                        <h4 className={styles.type}>Types:</h4>
                        <div className={styles.types}>
                            {pokemonDetail &&
                                pokemonDetail.types.map((e) => {
                                    let color;
                                    // Asignar color de texto según el tipo de Pokemon
                                    switch (e.name) {
                                        case "grass":
                                            color = "green";
                                            break;
                                        case "fire":
                                            color = "red";
                                            break;
                                        case "water":
                                            color = "blue";
                                            break;
                                        case "ghost":
                                            color = "purple";
                                            break;
                                        case "rock":
                                            color = "brown";
                                            break;
                                        case "dragon":
                                            color = "crimson";
                                            break;
                                        case "steel":
                                            color = "steelblue";
                                            break;
                                        case "bug":
                                            color = "yellowgreen";
                                            break;
                                        case "electric":
                                            color = "gold";
                                            break;
                                        case "fairy":
                                            color = "violet";
                                            break;
                                        case "poison":
                                            color = "rebeccapurple";
                                            break;
                                        case "psychic":
                                            color = "hotpink";
                                            break;
                                        case "ground":
                                            color = "saddlebrown";
                                            break;
                                        case "ice":
                                            color = "turquoise";
                                            break;
                                            case "flying":
                                                color = "lightblue";
                                                break;
                                        default:
                                            color = "gray";
                                    }

                                    return (
                                        <h3
                                            key={e.name}
                                            style={{ color: color }}
                                        >
                                            {e.name[0].toUpperCase() + e.name.slice(1)}
                                        </h3>
                                    );
                                })}
                        </div>
                    </div>
                </div>
                <footer className={styles.footer}> <h1>Purple-Ghost Pokedex</h1> </footer>


            </div>
        );
    } else {
        return (
            <div>
                <div className={styles.nav}>
                </div>
                <img src={image} className={styles.loadingPokemons} styles={{ width: "100px" }} />;
            </div>
        )
    };
};