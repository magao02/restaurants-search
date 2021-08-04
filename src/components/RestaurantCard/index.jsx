import React from 'react'
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'
const RestaurantCard = ({restaurant, onClick})=>{
    return(
        <Restaurant onClick={onClick} >
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} ishalf value={restaurant.rating} edit={false} activeColor='#e7711c' ></ReactStars>
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt='rest'/>
        </Restaurant>

    )
}

export default RestaurantCard;