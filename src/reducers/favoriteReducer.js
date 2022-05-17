import { FAVORITE_MOVIE } from '../actions/movieActions.js';

const initialState = {
    favoriteMovies:[],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return {
                favoriteMovies: state.favoriteMovies.concat(action.payload)
            }        
    }
}

export default reducer;