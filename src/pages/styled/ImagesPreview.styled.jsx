import Image from "next/image";
import styled from "styled-components";

//Four main values
const WIDTH =  "420px"
const HEIGHT = "200px"
const COLUMN_GAP = "4%"
const ROW_GAP = "20px"

export const ImageRow = styled.div`
    width: ${WIDTH};
    height: ${HEIGHT};
    display: flex;
    flex-direction: row;
    column-gap: ${COLUMN_GAP};
    box-sizing: border-box;
`

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: calc(50% - (${COLUMN_GAP}/2));
    height: 100%;
    row-gap: ${ROW_GAP};
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

export const PreviewImage = styled.img`
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

export const Cross = styled(Image)`
    width: 80%;
    height: 80%;
`