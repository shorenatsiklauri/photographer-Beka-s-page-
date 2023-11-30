import styled from "styled-components";
import Createandsharepicture from "../assets/home/desktop/8.jpg";
import TabletCreateandsharepicture from "../assets/home/tablet/8.jpg";
import MobileCreateandsharepicture from "../assets/home/mobile/8.jpg";
import Beutifulstory from "../assets/home/desktop/12.jpg";
import TabBeutifulstory from "../assets/home/tablet/12.jpg";
import MObileBeutifulstory from "../assets/home/mobile/12.jpg";
import Designedpicture from "../assets/home/desktop/23.jpg";
import MobileDesignedpicture from "../assets/home/mobile/23.jpg";
import TabDesignedpicture from "../assets/home/tablet/23.jpg";
import lasthomepagepicturedesctop from "../assets/home/desktop/22.jpg";
import Tablasthomepagepicture from "../assets/home/tablet/22.jpg";
import MObilelasthomepagepicture from "../assets/home/mobile/22.jpg";






const Homepage = () => {
  return (
    <Maindiv>
      <Divforpictureandtext>
        <MobilePicturestyle src={MobileCreateandsharepicture} alt="My Image" />{" "}
        <Divfortext>
          <Paragrapaboutsharestory>
          Whispers of Evening.{" "}
          </Paragrapaboutsharestory>
          <Contentelement>
            {" "}
            In the hushed embrace of twilight, as the sun dips below the horizon, casting long shadows that dance across the land, a symphony of whispers arises from the depths of the evening. The rustling of leaves, the chirping of crickets, the gentle murmur of a flowing stream – these are the voices of nature, whispering secrets to those who listen attentively.
            <br></br>
As the sky transforms into a canvas of vibrant hues, the clouds take on ethereal forms, their edges shimmering with the fading light. They appear like celestial messengers, carrying whispers of ancient tales and forgotten dreams. The wind, a gentle storyteller, carries these whispers across the land, weaving them into the fabric of the evening air.
<br></br>
The world seems to hold its breath in anticipation of the night, and in this quietude, the whispers of evening become more distinct. They speak of the harmony of nature, of the interconnectedness of all living things, of the eternal cycle of day and night.
          </Contentelement>
 
        </Divfortext>
        <Divforpicture>
          <Picturestyle src={Createandsharepicture} alt="My Image" />{" "}
          <TabPicturestyle src={TabletCreateandsharepicture} alt="My Image" />{" "}

                  </Divforpicture>{" "}
      </Divforpictureandtext>

      <Divforpictureandtext>
        <Divforpicture>
          <Picturestyle src={Beutifulstory} alt="One" />{" "}
          <TabPicturestyle src={TabBeutifulstory} alt="One" />{" "}
         
        </Divforpicture>
        <MobilePicturestyle src={MObileBeutifulstory} alt="My Image" />{" "}
        <Divfortext>
          <Paragrapaboutsharestory>
          Pillars of Zemo Adjara{" "}
          </Paragrapaboutsharestory>
          <Contentelement>
            {" "}
            In this black and white photograph, I capture the strength and resilience of traditional women in the Zemo Adjara region of Georgia. Their faces, etched with the lines of hard work and determination, tell stories of unwavering spirit and deep connection to their ancestral heritage.
<br></br>
I am drawn to the quiet strength and unspoken wisdom of these women. They are the unsung heroes of their communities, their contributions often overlooked but deeply valued. Their unwavering spirit serves as an inspiration to all who encounter them.
          </Contentelement>
          
        </Divfortext>
      </Divforpictureandtext>
 
     <Divforpictureandtext>
        <MobilePicturestyle src={MobileDesignedpicture} alt="My Image" />{" "}
        <Divfortext>
          <Paragrapaboutsharestory>
          Reflections of Eternity{" "}
          </Paragrapaboutsharestory>
          <Contentelement>
            {" "}
         

In the depths of the shimmering waters, an ethereal dance unfolds. Slender, abstract figures emerge from the liquid expanse, their forms mirroring the undulating columns of water. These enigmatic beings, seemingly composed of water itself, sway rhythmically to an unheard melody, their movements echoing the ebb and flow of the tides.
<br></br>
Amidst this aquatic ballet, a group of sun-kissed figures twirl and leap upon the water's surface, their bodies infused with the radiant energy of the sun. They draw sustenance from the sun's golden rays and the life-giving essence of the water, their movements fueled by an insatiable desire for harmony and connection with the natural world.
          </Contentelement>
          
        </Divfortext>
        <Divforpicture>
          <Picturestyle src={Designedpicture} alt="My Image" />{" "}
          <TabPicturestyle src={TabDesignedpicture} alt="My Image" />{" "}
       
        </Divforpicture>{" "}
      </Divforpictureandtext>

      <Divforpictureandtext>
        <Divforpicture>
          <Picturestyle src={lasthomepagepicturedesctop} alt="One" />{" "}
          <TabPicturestyle src={Tablasthomepagepicture} alt="One" />{" "}
         
        </Divforpicture>
        <MobilePicturestyle src={MObilelasthomepagepicture} alt="My Image" />{" "}
        <Divfortext>
          <Paragrapaboutsharestory>
       


A Pathway to the Divine{" "}
          </Paragrapaboutsharestory>
          <Contentelement>
            {" "}
            At the convergence of the earthly realm and the celestial expanse, a majestic bridge emerges, its ethereal form spanning the chasm between the mortal and the divine. This celestial viaduct, a beacon of hope and transcendence, unites the mundane with the sacred, the human with the divine.
<br></br>
Upon the bridge's shimmering surface, a procession of souls embarks on their eternal journey, their hearts filled with the anticipation of celestial enlightenment. They traverse the bridge, guided by the radiant glow of celestial beings, their ethereal forms illuminating the path towards heavenly bliss.
        <br></br>
        As they journey towards the celestial gates, the souls encounter a reflection of themselves, a mirror image that embodies their earthly experiences and the lessons they have learned. This reflection serves as a poignant reminder of the interconnectedness of all existence, the karmic threads that bind the mortal realm to the divine.
        
          </Contentelement>
         
        </Divfortext>
      </Divforpictureandtext>

      
      
      
    </Maindiv>
  );
};

export default Homepage;

const Maindiv = styled.div`
  width: 100%;


  @media (min-width: 767px) {
  width: 100%;
  }
  @media (min-width: 992px) {

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
  width: 40%;
  @media (max-width: 767px) {
    width: 100%;
   
  }
`;

const Divforpicture = styled.div`
  width: 60%;


  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`;

const Paragrapaboutsharestory = styled.p`
  color: #fff;
  font-size: 30px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 2.167px;
  text-transform: uppercase;
  margin-left: 50px;
  margin-right: 50px;
  margin-top:200px;


  @media (min-width: 768px)  {
      font-size:20px;
    font-family: DM Sans;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 2.167px;
  text-transform: uppercase;
  margin-left: 50px;
  margin-top:35px;
  margin-bottom:20px;
  }

  @media (min-width: 320px) and (max-width: 767px) {

    margin-top: 35px;
    margin-bottom:30px;
  }
    
  


`;

const Contentelement = styled.h1`
  color: gray;
  font-size: 13px;
  font-family: DM Sans;
  line-height: 25px;
 margin-right:30px;
  opacity: 0.9000000238418579;
  margin-left: 50px;
  margin-bottom:20px;
`;





const MobilePicturestyle = styled.img`
  display: block;
 
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
@media (min-width: 767px) {
    display: block;
    width:100%;
    height:100%;
  }

  
  @media (min-width: 992px) {
    display: none;
  }
  
  @media (max-width: 767px) {
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


