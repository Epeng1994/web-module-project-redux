import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'


const MovieDiv = styled.div`
    display: flex;
    align-items: center;
`

const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    const {push} = useHistory()
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <MovieDiv key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link> 
                    <span ><span class="material-icons" onClick ={()=>{props.removeFavorite(movie.id);push('/movies')}}>remove_circle</span></span>
                    
                </MovieDiv>
            })
        }
    </div>);
}

const mapStateToProps = state =>{
    return({
        favorites: state.favoriteReducer.favoriteMovies
    })
}


export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);