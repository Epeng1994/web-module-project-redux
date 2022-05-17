import {ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from '../actions/favoritesActions';

const initialState = {
    favoriteMovies:[],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            if(state.favoriteMovies.includes(action.payload)){
                alert('You already like this')
            }
            else{return{...state, 
                favoriteMovies: state.favoriteMovies.concat(action.payload)
            }}
        case TOGGLE_FAVORITES:
            return{...state,
                displayFavorites: !state.displayFavorites
            }
        case REMOVE_FAVORITE:
            return{...state,
                favoriteMovies: state.favoriteMovies.filter(a => a.id !== action.payload)
            }
        default:
            return state
    }
        
}

export default reducer;