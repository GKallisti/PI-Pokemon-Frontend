import { useNavigate } from "react-router-dom";
import style from "./DeletedPK.module.css";

const DeletedPK = (props) => {
  const { setClean } = props;
  const history = useNavigate();

  const clickHandler = () => {
    setClean(false);
    history.goBack("/home");
  };

  return (
    <div className={style.main}>
      <p>The Pokémon was deleted successfully </p>
      <div>
      <button className={style.button}  onClick={clickHandler}>x</button>
      </div>
    </div>
  );
};
export default DeletedPK;