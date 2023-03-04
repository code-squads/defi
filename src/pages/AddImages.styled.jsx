import styled from "styled-components";

export const Container = styled.div`
    width: 620px;
    margin: auto;

    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const AddPhotos = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    align-self: flex-start;
`

export const ImageRow = styled.div`
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    row-gap: 20px;
    box-sizing: border-box;
`

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    row-gap: 20px;
    border-radius: 15px;
    box-sizing: border-box;
`

export const SingleImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.halfImage ? "50%" : "100%"};
    border-radius: 15px;
    object-fit: cover;
    overflow: hidden;
    box-sizing: border-box;
`


export const Image = styled.img`
    /* position: relative;
    width: 100%;
    height: ${props => props.halfImage ? "50%" : "100%"};
    border-radius: 15px;
    object-fit: cover;
    overflow: hidden;
    box-sizing: border-box; */
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    object-fit: cover;
`

export const Circle = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255, 0.2);
    cursor: pointer;
`

export const Cross = styled.img`
    width: 80%;
    height: 80%;
`