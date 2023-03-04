import React from 'react'
import styled, { keyframes } from 'styled-components'

const Spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #1977F2;
  width: ${(props) => props.size ? props.size : "18px"};
  height: ${(props) => props.size ? props.size : "18px"};
  -webkit-animation: ${Spin} 1s linear infinite;
  animation: ${Spin} 1s linear infinite;
`

const Loader = ({size}) => {
  return (
    <div className='w-10 h-10 flex justify-center' >
      <Spinner size={size} />
    </div>
  )
}

export default Loader
