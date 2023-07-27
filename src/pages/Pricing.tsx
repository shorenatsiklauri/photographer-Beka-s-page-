import styled from "styled-components";
import MobileHero from "../assets/pricing/mobile/hero.jpg";
import Hero from "../assets/pricing/desktop/hero.jpg";
import Herotab from "../assets/pricing/tablet/hero.jpg";

import { useState } from "react";

const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPickedone, setIsPickedone] = useState(false);
  const [isPickedtwo, setIsPickedtwo] = useState(false);
  const [isPickedthree, setIsPickedthree] = useState(false);
  
  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    
  };
  const handlePickedone = () => {
    setIsPickedone(!isPickedone);
    setIsPickedtwo(false);
    setIsPickedthree(false);
   
  };

  const handlePickedtwo = () => {
    setIsPickedtwo(!isPickedtwo);
    setIsPickedone(false);
    setIsPickedthree(false);
   
  };

  const handlePickedthee = () => {
    setIsPickedthree(!isPickedthree);
    setIsPickedtwo(false);
    setIsPickedone(false);
   
  };


  return (
    <Maindiv>
       <Divforpictureandtext>
        <MobilePicturestyle src={MobileHero} alt="My Image" />{" "}
        <Divfortext>
          <Paragrapaboutsharestory>
          PRICING.{" "}
          </Paragrapaboutsharestory>
          <Contentelement>
            {" "}
            Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.
          </Contentelement>
                 </Divfortext>
        <Divforpicture>
          <Picturestyle src={Hero} alt="My Image" />{" "}
          <TabPicturestyle src={Herotab} alt="My Image" />{" "}
     

                  </Divforpicture>{" "}
      </Divforpictureandtext>

  
      <ToggleSwitch>
  <p>Monthly</p>
  <ToggleLabel>
    <ToggleCheckbox type="checkbox" onChange={handleToggleChange} checked={isChecked} />
    <Slider>
      <Ball style={isChecked ? { display: 'block' } : { display: 'none' }}></Ball>
      <Ballcklicked style={isChecked ? { display: 'none' } : { display: 'block' }}></Ballcklicked>
    </Slider>
  </ToggleLabel>
  <p>Yearly</p>
</ToggleSwitch>
<Threepricedivs>
<Basicdivone style={{ background: isPickedone ? "#000" :  "#F5F5F5"}}>

    <Basictext style={{ color: isPickedone ? "white" : "black" }}>Basic</Basictext>
    <Smalllighttext style={{ color: isPickedone ? "white" : "black" }}>Includes basic usage of our platform. Recommended for new and aspiring photographers.</Smalllighttext>

    <Basictext style={{ color: isPickedone ? "white" : "black" }}> {isChecked? "19$" : "190$"} </Basictext>
    <Smalllighttext style={{ color: isPickedone ? "white" : "black" }}>  per month</Smalllighttext>
    <BlackButtonone onClick={handlePickedone}  >PICK PLAN</BlackButtonone>
</Basicdivone>

<Basicdiv style={{ background: isPickedtwo ? "#000" :  "#F5F5F5"}}>

    <Basictext style={{ color: isPickedtwo ? "white" : "black" }}>Basic</Basictext>
    <Smalllighttext style={{ color: isPickedtwo ? "white" : "black" }}>Includes basic usage of our platform. Recommended for new and aspiring photographers.</Smalllighttext>

    <Basictext style={{ color: isPickedtwo ? "white" : "black" }}> {isChecked? "39$" : "390$"} </Basictext>
    <Smalllighttext style={{ color: isPickedtwo ? "white" : "black" }}>  per month</Smalllighttext>
    <BlackButtontwo onClick={handlePickedtwo}  >PICK PLAN</BlackButtontwo>
</Basicdiv>


<Basicdiv  style={{ background: isPickedthree ? "#000" :  "#F5F5F5"}} >
    <Basictext style={{ color: isPickedthree ? "white" : "black" }}>Basic</Basictext>
    <Smalllighttext style={{ color: isPickedthree ? "white" : "black" }}>Includes basic usage of our platform. Recommended for new and aspiring photographers.</Smalllighttext>
    <Basictext style={{ color: isPickedthree ? "white" : "black" }}> {isChecked? "99$" : "990$"} </Basictext>
    <Smalllighttext  style={{ color: isPickedthree ? "white" : "black" }}>   per month</Smalllighttext>
    <BlackButtonthree onClick={handlePickedthee} >PICK PLAN</BlackButtonthree>
</Basicdiv>

</Threepricedivs>

<Comparediv> 
<CompareTexts> COMPARE </CompareTexts> 
<Comparisionelements> 
<div>
<LinesinCompareddiv>
<Textcompare> THE FEATURES</Textcompare>
<Divforthreeticks> 
<Textcompare> BASIC</Textcompare>
<Textcompare> Pro</Textcompare>
<Textcompare> BUSINESS</Textcompare>
</Divforthreeticks>
</LinesinCompareddiv>

<LinesinCompareddiv>
<Textcompare> UNLIMITED STORY POSTING</Textcompare>
<Divforthreeticks>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray" stroke-width="2"/>
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray"  stroke-width="2"/>
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray"  stroke-width="2"/>
</svg></Textcompare>
</Divforthreeticks>
</LinesinCompareddiv>

<LinesinCompareddiv>
<Textcompare> UNLIMITED PHOTO UPLOAD</Textcompare>
<Divforthreeticks>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray"  stroke-width="2"/>
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray" stroke-width="2"/>
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray"  stroke-width="2"/>
</svg></Textcompare>
</Divforthreeticks>
</LinesinCompareddiv>

<LinesinCompareddiv>
<Textcompare> EMBEDDING CUSTOM CONTENT</Textcompare>

<Divforthreeticks>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray"  stroke-width="2"/>
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray"  stroke-width="2"/>
</svg></Textcompare>
</Divforthreeticks>
</LinesinCompareddiv>

<LinesinCompareddiv>
<Textcompare> CUSTOMIZE METADATA</Textcompare>
<Divforthreeticks>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray"  stroke-width="2"/>
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray"  stroke-width="2"/>
</svg></Textcompare>
</Divforthreeticks>
</LinesinCompareddiv>

<LinesinCompareddiv>
<Textcompare>ADVANCED METRICS</Textcompare>
<Divforthreeticks>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray" stroke-width="2"/>
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray" stroke-width="2"/>
</svg></Textcompare>
</Divforthreeticks>
</LinesinCompareddiv>

<LinesinCompareddiv>
<Textcompare> PHOTO DOWNLOADS</Textcompare>
<Divforthreeticks>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray" stroke-width="2"/>
</svg></Textcompare>
</Divforthreeticks>
</LinesinCompareddiv>

<LinesinCompareddiv>
<Textcompare> THE FEATURES</Textcompare>
<Divforthreeticks>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg></Textcompare>
<Textcompare><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg> </Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray" stroke-width="2"/>
</svg></Textcompare>
</Divforthreeticks>
</LinesinCompareddiv>

<LinesinCompareddiv>
<Textcompare> SEARCH ENGINE INDEXING</Textcompare>
<Divforthreeticks>
<Textcompare><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg> </Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg></Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray" stroke-width="2"/>
</svg></Textcompare>
</Divforthreeticks>
</LinesinCompareddiv>

<LinesinCompareddiv>
<Textcompare> CUSTOM ANALYTICS</Textcompare>
<Divforthreeticks>
<Textcompare><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg> </Textcompare>
<Textcompare><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" color="white" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="white" strokeWidth="2" />
</svg> </Textcompare>
<Textcompare> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 8.12351L5.62323 13L17 1" stroke="gray" stroke-width="2"/>
</svg></Textcompare>
</Divforthreeticks>
</LinesinCompareddiv>
</div>
</Comparisionelements>
</Comparediv>

    </Maindiv>
  );
};

export default Pricing;


const Ball = styled.span`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color:black;
  transition: 0.4s;


`;

const Ballcklicked = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color:black;
  transition: 0.4s;
  display:none;


`;

const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin:auto;
  background-color:white;
  margin-top:20px;
`;

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 64px;
height: 25px;
  margin-right: 10px;
  background-color:white;
`;

const ToggleCheckbox = styled.input`
  display: none;
  color:balck;

`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:gray;
  border-radius: 34px;
  transition: 0.4s;
`;
const Threepricedivs = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  flex-direction:column;
  gap:30px;

  @media (min-width: 768px) {
  width: 100%;
  flex-direction:column;
  gap:10px;

  }


  @media (min-width: 992px) {
  width: 100%;
  flex-direction:row;
  gap:10px;

  }

`;
const Basicdiv =styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:auto;
flex-direction:column;
margin-top:20px;
margin-bottom:20px;
width: 70%;
height: 407px;
background: #F5F5F5;
border-radius:5px;

@media (min-width:768px) {
  width: 90%;
  flex-direction:column;
height: 407px;
flex-shrink: 0;

  }

  @media (min-width: 992px) {
    display:flex;
justify-content:center;
align-items:center;
margin:auto;
flex-direction:column;
margin-top:20px;
margin-bottom:20px;
width: 25%;
height: 407px;
background: #F5F5F5;
border-radius:5px;

  }

`;

const Basicdivone =styled(Basicdiv)`
`;

const BlackButtontwo = styled.button`
  width: 158px;
  height: 40px;
  flex-shrink: 0;
  background: black;
  color: white;
  &:hover {
    background: gray;
    color: white;
  }
`;

const BlackButtonone = styled.button`
  width: 158px;
  height: 40px;
  flex-shrink: 0;
  background: black;
  color: white;
  &:hover {
    background: gray;
    color: white;
  }
`;

const BlackButtonthree = styled.button`
  width: 158px;
  height: 40px;
  flex-shrink: 0;
  background: black;
  color: white;
  &:hover {
    background: gray;
    color: white;
  }
`;

const Basictext = styled.h1`
  color: #000;
text-align: center;
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 25px; /* 104.167% */
`;
const Smalllighttext = styled.p`
width: 275px;
color: #000;
text-align: center;
font-family: DM Sans;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 25px; /* 166.667% */
opacity: 0.6000000238418579;
`;

const CompareTexts = styled.p`
  color: #000;
text-align: center;
font-family: DM Sans;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 48px; /* 120% */
letter-spacing: 2.167px;
text-transform: uppercase;
`;
const Comparediv = styled.div`

   width:60%;
 
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  flex-direction:column;
  margin-bottom:30px;
  margin-top:30px;
  /* margin-top:50px; */

@media (min-width: 767px ) {
  /* margin-top:50px; */
  width:100%;

  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  margin-bottom:30px;
}

@media (min-width: 992px ) {

  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  /* margin-top:60px; */
  /* margin-bottom:250px; */
}
`;

const LinesinCompareddiv = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:row;
  width:90%;
  height:50px;
  gap:50px;
  color: gray;
font-family: DM Sans;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.05px;
border-bottom: solid 0.0001px #DFDFDF;



@media (min-width: 768px) {
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:row;
  height:50px;
  width:100%;
      color: gray;
font-family: DM Sans;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 2px;


@media (min-width: 992px) {
  width:900px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:row;
  height:50px;
      color: gray;
font-family: DM Sans;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 2px;
}

  }
`;



const  Divforthreeticks = styled.div`
width: 30%;
display:flex;
gap:40px;
justify-content:center;



@media (min-width: 768px) {
width: 30%;
display:flex;
gap:50px;
justify-content:center;
align-items:center;

}

@media (min-width: 992px) {
width: 50%;
display:flex;
gap:200px;
justify-content:center;
}
`;

const Textcompare = styled.p`
  
  color: #000;
font-family: DM Sans;
font-size: 8px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1px;
margin-bottom:70px;
`;


const Comparisionelements =styled.div`
  margin-top:50px;
`;

const Maindiv = styled.div`

  width: 100%;

  @media (min-width: 768px) {
  width: 100%;
  }
 
`;
const Divforpictureandtext = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Divfortext = styled.div`
  background: black;


  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  padding-bottom:200px;

  
  @media (max-width: 767px) {
    width: 100%;
    height:auto;
   
   
  }
`;

const Divforpicture = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Paragrapaboutsharestory = styled.p`
  color: #fff;
  font-size: 40px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 4.167px;
  text-transform: uppercase;
  margin-left: 50px;
  margin-top:200px;
  @media (max-width: 767px){
    margin-top:50px;
    
  }
`;


const Contentelement = styled.h1`
  color: #fff;
  font-size: 14px;
  font-family: DM Sans;
  line-height: 20px;
  opacity: 0.4000000238418579;
  width: 350px;
  margin-left: 50px;
`;



const MobilePicturestyle = styled.img`
display: block;
width:370px;
 
   @media (min-width: 768px) {
     display: none;
   }
  
   @media (max-width: 767px) {
     display: block;
     width: 100%;
     height: 100%;
   }
 `;

 const TabPicturestyle = styled.img`

     display: none;
  @media (min-width: 768px) {
      display: block;
      width:100%;
    }

  
   @media (min-width: 992px) {
   display: none;
   }
  

 `;

const Picturestyle = styled.img`
  display: none;

 
@media (min-width: 992px) {
 display: block;
 width: 100%;
 height: 100%;
 }
 `;
