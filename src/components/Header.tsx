import { Link } from "react-router-dom";
import styled from "styled-components";


export const Header = () => {
  
  

  return (
     
          <HeaderContainer  >
            {/* <MObileStyle   style={activebar ? { margin: '1px' } : { margin: '-700px' }}>   */}
          
          {/* </MObileStyle> */}
           <Divformanue > 
           <Difforbuttons>
           <Link to="/">  <HeaderButtons>HOME PAGE </HeaderButtons></Link>
          <Link to='/story'> <HeaderButtons> STORIES</HeaderButtons> </Link> 
          <Link to='/features'><HeaderButtons> FEATURES</HeaderButtons></Link> 
          <Link to='/pricing'><HeaderButtons> PRICING</HeaderButtons></Link> 
        
                    <BlackHeaderButton>GET AN INVITE</BlackHeaderButton>
                    </Difforbuttons>
                    </Divformanue>
        </HeaderContainer>
       
  
    );
  }

  export default Header;
  

  // const MObileStyle = styled.div`
 
  // `;
  
const HeaderContainer = styled.div`
width: 100%;
height: fit-content;
display: flex;
justify-content: space-around;
align-items: start;
/* margin:auto; */
flex-direction: column;
/* margin-bottom:10px; */
/* margin-top:-10px; */
gap:10px;
/* margin-top:80px; */
/* margin-bottom:30px; */
padding: 24px 0px;

@media (min-width: 767px ) {
  width: 100%;
height: 75px;
display: flex;
justify-content: start;
align-items: center;
margin:auto;
flex-direction: row;

}

@media (min-width: 992px ) {
  width: 100%;
height: 75px;
display: flex;
justify-content: space-around;
align-items: center;
margin:auto;
flex-direction: row;
}

`;

const HeaderButtons = styled.button`
color: #000;
font-size: 12px;
font-family: DM Sans;
font-weight: 700;
letter-spacing: 2px;
background-color: white;
border: none;


&:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}

@media (min-width: 992px) {

  color: #000;
font-size: 12px;
font-family: DM Sans;
font-weight: 700;
letter-spacing: 2px;
background-color: white;
border: none;
}
`;



const BlackHeaderButton = styled.button`

height: 40px;
background: #000;
color: white;
/* margin-top:-20px; */
width:300px;
&:hover {
  background: #dfdfdf;
  color: black;
}

@media (min-width: 767px) {
  width: 120px;
height: 25px;
margin-bottom:0px;
text-size-adjust:5px;


background: #000;
color: white;
&:hover {
  background: #dfdfdf;
  color: black;

}
}


@media (min-width: 992px) {

  height: 40px;
background: #000;
color: white;
/* margin-top:-20px; */
width:300px;

&:hover {
  background: #dfdfdf;
  color: black;
}
}
`;





const Divformanue = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:auto;
gap:15px;
margin-top:15px;
margin-bottom:20px;
/* margin-left:50px;*/


 @media (min-width: 772px) { 
 margin-left:1px;

margin-bottom:1px;
margin-top:50px;
display:flex;
flex-direction:row;
flex-direction:start;
gap:10px;

} 

@media (min-width: 992px) { 
 margin-left:1px;

margin-bottom:1px;
margin-top:50px;
display:flex;
flex-direction:row;
gap:150px;

} 

`;

const Difforbuttons = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:auto;
gap:15px;
width:100%;
@media (min-width: 767px) {

display:flex;
flex-direction:row;
justify-content:start;
align-items:center;
width:auto;
margin-top:0px;
/* margin-left:-300px; */
gap:30px;
margin-top:-50px;
margin-left:100px;
}

@media (min-width: 992px) {

  display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin:auto;
width:auto;
margin-top:-50px;
margin-left:200px;
gap:100px;

}
  
`;

