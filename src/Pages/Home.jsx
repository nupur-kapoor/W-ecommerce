import React from 'react'
import styled from 'styled-components'
import Main from '../Components/Main/Main'
import Services from '../Components/Services/Services'
import Trusted from '../Components/Services/Trusted'
const Home = () => {
  const data ={
    name:"HEY WELCOME"
  }
  return (
   <>
    <Main name={data}/>
    <Services/>
    <Trusted/>
   </>
  )
}



// css 

const wrapper = styled.section`
    backgroundColor :"blue";
    width:100%;
    height:100vh;


`



export default Home;