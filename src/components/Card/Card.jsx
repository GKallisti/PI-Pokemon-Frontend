import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, images, type, id }){
    return(
        <Link to={`/home/${id}`} className={styles.card} style={{textDecoration: 'none'}}>
             <img src={images} alt="Image not found" className={styles.img}/>
             <div className={styles.type}>
             <h2 className={styles.name}>{name[0].toUpperCase() + name.slice(1)}</h2>

  {type &&
    type.map((e) => {
      let color;
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
            color = "yellow";
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
        <h4 key={e.name} style={{ color: color }}>
          {e.name}
        </h4>
      );
    })}
</div>
        </Link>
    );
};