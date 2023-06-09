import axios from 'axios';

export function getPokemons(){
    return async function(dispatch){
    try {
        let response = await axios.get(`http://localhost:3001/pokemons`);
        return dispatch({
            type: 'GET_POKEMONS',
            payload: response.data
        });
    } catch (error) {
        alert('We ran out of Pokeballs!')
    }
     
    };
};

export function getTypes(){
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/types`);
        return dispatch({
            type: 'GET_TYPES',
            payload: response.data
        });
    };
};


export function getNamePokemon(name){
    return async function(dispatch){
        try{
            let response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            let arr= [];
            arr.push(response.data)
            return dispatch({
                type: 'GET_BY_NAME',
                payload: arr 
            });
        }catch{
            alert('We couldnt catch that Pokemon');
        };
    };
};

export function getDetail(id){
    return async function(dispatch){
        try{
            let json = await axios.get('http://localhost:3001/pokemons' + id);
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            });
        }catch{
            alert('We couldnt catch that Pokemon');
        };
    };
};

export function createPokemon(pokenuevo){
    return async function(dispatch){
        try {
            let response = await axios.post(`http://localhost:3001/pokemons`, pokenuevo);
            return alert('A Egg Is Hatching')    
        } catch (error) {
            alert('Bad Egg')
        }
       
    };
};


export function deletePokemon(id) {
    return async function (dispatch) {
      try {
        await axios.delete(`http://localhost:3001/delete/${id}`);
        return dispatch({
          type: 'DELETE_POKEMON',
          payload: id
        });
      } catch (error) {
        return dispatch({
            type: 'DELETE_POKEMON',
            payload: error.message
        });
      }
    };
  }

  export function orderByName(payload){
    return{
        type: 'ORDER_POKEMONS',
        payload
    };
};

export function filterByType(payload){
    return{
        type: 'FILTER_BY_TYPE',
        payload
    };
};

export function filterByState(payload){
    return{
        type: 'FILTER_BY_STATE',
        payload
    };
};


export function setPage(){
    return{
        type: 'SET_PAGE',
    }
}


export function cleanMyStore(){
    return{
        type: 'CLEAN_STORE',
    }
}
