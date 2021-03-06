import styled from "styled-components";
import Slider from 'react-slick';
export const Wrapper = styled.div`
    display: flex;
    flex-diretion: row;
`
export const Container = styled.aside`
    background-color: ${(props)=> props.theme.colors.background};
    width: 26%;
    height: 100vh;
    overflow-y: auto;
`;
export const Search = styled.section`
   display: flex;
   flex-direction: column;
   background-color: #fff;
   justify-content: center;
   padding: 16px;

`;
export const Logo = styled.img`
   margin-bottom: 17px;

`;
export const Map = styled.div`
   background-color: red;
   width: 74%;

`;
export const Carousel= styled(Slider)`
    .slick-slide{
        margin-right: 30px;
    }
`;
export const CarouselTitle = styled.h1`
    font-family: ${(props)=> props.theme.fonts.regular};
    color: ${(props)=> props.theme.colors.text};
    font=size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;

`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props)=> props.theme.fonts.regular};
    color: ${(props)=> props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;

`;
export const ModalContent = styled.p`
    margin-bottom: 10px;
    font-family: ${(props)=> props.theme.fonts.regular};
    color: ${(props)=> props.theme.colors.text};
    font-size: 16px;
    font-weight: normal;
    line-height: 19px;

`