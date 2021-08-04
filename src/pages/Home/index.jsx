import React from 'react';
import {Container, Search , Logo, Wrapper,Carousel ,CarouselTitle, ModalTitle, ModalContent} from './styles';
import logo from '../../assets/logo.svg'
import {  useSelector } from 'react-redux';
import restaurante from '../../assets/restaurante-fake.png'
import { useState } from 'react';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantCard, Modal, Map, Skeleton } from '../../components/index';

const Home = ()=>{
    const [inputvalue,setInputValue] = useState('');
    const [modalOpened,setModalOpened] = useState(false);
    const [query,setQuery] = useState(null);
    const [placeId,setPlaceId] = useState(null);
    const {restaurants, restaurantSelected }= useSelector((state)=> state.restaurants);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    }
    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            setQuery(inputvalue)
        }
    }
    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }
    return(
        <Wrapper>
    <Container>
       <Search>
           <Logo src={logo} alt="logo" />

           <TextField
            outlined
            label="Pesquisar"
            trailingIcon={<MaterialIcon role="button" icon="search" />}
            >
            <Input type="text" onKeyPress={handleKeyPress} value={inputvalue}  onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          {restaurants.length > 0 ?(
              <>
              <CarouselTitle>Na sua Area</CarouselTitle>
              <Carousel {...settings}>
                  {restaurants.map((restaurant)=> <Card photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name}></Card> )}
                  
              </Carousel>
              </>
          ): (<h1>Caregando</h1>)}
       
       </Search>
       {restaurants.map((restaurant)=><RestaurantCard onClick={()=> handleOpenModal(restaurant.place_id)} restaurant={restaurant}></RestaurantCard>)}
    </Container>
    <Map query={query} placeId={placeId}></Map>
    <Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)} >
        {restaurantSelected ?(
            <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
        <ModalContent>{restaurantSelected?.opening_hours?.open_now? 'Aberto Agora' : 'fechado Agora'}</ModalContent>
        </>
        ):(<Skeleton width='10px' height='10px'></Skeleton>)}
        
    </Modal>
    </Wrapper>)
}
export default Home;