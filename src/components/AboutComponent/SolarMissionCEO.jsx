import React from 'react';
import { Fade } from 'react-awesome-reveal';

const SolarMissionImage = () => {
  const imageUrl = "/img/CEOpanel.jpeg"
  const descriptionText = `We are committed to playing a pivotal role in making solar energy affordable and accessible to all areas of Pakistan, whether urban or rural or off-grid villages. Solar energy is the most sought option as sunlight being the infinite source of energy makes solar power obvious energy choice today to serve thousands of off-grid areas in Pakistan. Solar energy is global green energy revolution and solar PV technology is the best way to produce carbon and nuclear-free energy. Fuel is not required and solar power can create large amounts of electricity without uncertainty and expense of security fuel supply. Our strategic focus is to provide cost efficient solutions as PV panel cells efficiency is getting higher resulting in price de-escalation. This is an investment which gives high value on IRR and short payback period with no environmental impact. Solar power is key to clean energy future in Pakistan as sun gives us more energy than we need power everything on earth with low operating cost and CO2 free. We are proud that Net Solar has accepted the challenge to supply more solar power at affordable cost with quality products and we look forward to helping achieve a sustainable solar energy future in Pakistan. We thank all our valued customers, partners and employees for their support in achieving these targets.`;

  return (
    <div style={{
      width: '100%',
      maxWidth: '1400px', // Increased from 1200px
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#F6F7F8', 
      borderRadius: 5,
    }}>
      {/* Enhanced Image Container */}
      <div style={{
        width: '95%', // Increased from 85%
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        marginBottom: '30px',
        aspectRatio: '16/9' // Added for consistent proportions
      }}>
        <img 
          src={imageUrl} 
          alt="Solar Energy in Pakistan"
          style={{
            width: '100%',
            height: '100%', // Changed from auto to fill container
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
      
      {/* Description Text */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
        
      }}>
        <Fade direction="up" triggerOnce style={{
          width: '85%',
          maxWidth: '800px'
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', // Responsive font size
              marginBottom: '20px',
              color: '#333',
              textAlign: 'center'
            }}>
              Our Solar Commitment to Pakistan
            </h2>
            
            <div style={{
              lineHeight: '1.8',
              color: ' #9B9B9B',
              textAlign: 'justify',
              fontSize: 'clamp(1rem, 1.2vw, 1.1rem)' // Responsive text
            }}>
              <p>{descriptionText}</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SolarMissionImage;