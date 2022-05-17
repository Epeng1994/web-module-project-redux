export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const ADD_MOVIE = "ADD_MOVIE";

export const addMovie = (movie)=>{
    return({type: ADD_MOVIE, payload:movie});
}

export const FAVORITE_MOVIE = "FAVORITE_MOVIE";

export const favoriteMovie = (movie)=>{
    return({type: FAVORITE_MOVIE, payload:movie});
}