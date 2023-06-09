import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../redux/action/index";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
 

  const hanldeInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      // verifica si el valor del campo de entrada no está vacío
      dispatch(getNamePokemon(name));
      setName(""); // limpia el valor del campo de entrada después de enviar la acción
    } else {
      alert("Enter a valid name");
    }
  };


  return (
    <div className={styles.centralize}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
       
          <input
            className={styles.inputBlock}
            placeholder="Buscar..." 
            type="text"
           value={name} 
            id="input-text"
            required
            spellCheck="false"
            onChange={(e) => {
              hanldeInputChange(e);
            }}
          />
           <button type="submit" className={styles.placeholder} value={name}>Buscar</button>   
          
        
      </form>
    </div>
  );

}
