import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { HeroSection, Box, BoxWrapper, HeroTitle, Text, BtnAddDrinks, ImgMain } from './Home.styled';
import img from '../../assets/images/coctailPhoto.png';


const HomeHero = () => {

  const {theme} = useContext(GlobalContext);


  return  <HeroSection>
            <Box themeName={theme}>
              
              <BoxWrapper>
                
                <HeroTitle>
                  Craft Your Perfect 
                  <br/> Drink with Drink Master
                </HeroTitle>

                <Text>
                  Unlock your inner mixologist with Drink Master, your one-stop
                  destination for exploring, crafting, and mastering the world´s
                  finest beverages.
                </Text>

                <BtnAddDrinks to="/add">Add drink</BtnAddDrinks>
                
              </BoxWrapper>

              {/* <ImgMain src={img} alt="main-coctail" /> */}
              
            </Box>
          </HeroSection>
};

export default HomeHero;
