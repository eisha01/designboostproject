import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// Import the image using the correct relative path
import ui2designImage from '../images/ui2design.png';
import sparkImage from '../images/spark.png';
import arrowImage from '../images/arrow.png';
import boostImage from '../images/boost.png';
import IconButton from '@mui/material/IconButton';
import ServiceIcon1 from '@mui/icons-material/AccessibilityNew';
import ServiceIcon2 from '@mui/icons-material/Extension';
import ServiceIcon3 from '@mui/icons-material/Settings';
import arrowrightupdateImage from '../images/arrowrightupdate.png';
import arrowleftupdateImage from '../images/arrowleftupdate.png';
import usabilityupdateImage from '../images/usabilityupdate.png';
import accessibilityImage from '../images/accessibility.png';
import enhancementImage from '../images/enhancement.png';
import Services from './services';
const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          minHeight: '85vh',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, #304352, #d7d2cc)',
        }}
      >
        <img
          src={sparkImage}
          alt='Spark Image'
          style={{
            width: '9%',
            top: '3%',
            left: '1%',
            height: 'auto',
            borderRadius: '8px',
            zIndex: 2,
            position: 'absolute',
          }}
        />

        <img
          src={arrowImage}
          alt='arrow Image'
          style={{
            width: '23%',
            top: '48%',
            left: '51%',
            height: 'auto',
            borderRadius: '8px',
            zIndex: 2,
            position: 'absolute',
          }}
        />

        <img
          src={boostImage}
          alt='boost Image'
          style={{
            width: '25%',
            top: '10%',
            left: '70%',
            height: 'auto',
            borderRadius: '8px',
            zIndex: 2,
            position: 'absolute',
          }}
        />

        <Box
          sx={{
            width: '45%',
            height: '60vh',
            borderRadius: '16px',
            left: '6%',
            overflow: 'hidden',
            background: 'linear-gradient(to bottom, #304352, #d7d2cc)',
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Content inside the first card */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '35px',
              color: 'white',
            }}
          >
            <Box>
              <Typography variant='h3' fontWeight={700} fontFamily='Roboto'>
                Elevate Your Designs with Design Boost
              </Typography>
              <Typography variant='subtitle1' mt={2}>
                Unleash the power of stunning and user-friendly interfaces.
              </Typography>
            </Box>
            {/* Image on the top right corner */}
            <img
              src={ui2designImage}
              alt='Top Right Image'
              style={{
                width: '80%',
                height: 'auto',
                borderRadius: '8px',
                zIndex: 2,
              }}
            />
          </Box>
        </Box>

        {/* Second square box for the 3D effect */}
        <Box
          sx={{
            width: '42%',
            height: '60vh',
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'linear-gradient(to bottom, #304352, #d7d2cc)',
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            top: '17%',
            left: '4%',
            zIndex: 0,
          }}
        />
      </Box>
      <Box
        sx={{
          width: '94%',
          padding: '50px',
          height: '245vh',
          background: 'linear-gradient(to bottom, #304352, #d7d2cc)',
          color: 'white',
        }}
      >
        <Typography
          variant='h4'
          fontWeight={700}
          fontFamily='Roboto'
          alignContent='center'
          marginLeft='42%'
        >
          Our Services
        </Typography>

        {/* Cards layout for services */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px',
          }}
        >
          {/* Service Card 1 */}
          <Card
            sx={{
              width: '30%',
              borderRadius: '16px',
              height: '25vh',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease-in-out', // CSS transition for the transform property
              '&:hover': {
                transform: 'translateY(-10px)', // Move the card upward on hover
              },
            }}
          >
            <CardContent>
              <IconButton size='large' marginLeft='20%'>
                <ServiceIcon1 fontSize='inherit' marginLeft='37%' />
              </IconButton>
              <Typography variant='body1' marginLeft='25%'>
                Usability Score Analysis
              </Typography>
            </CardContent>
          </Card>

          {/* Service Card 2 */}
          <Card
            sx={{
              width: '30%',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
              },
            }}
          >
            <CardContent>
              <IconButton size='large'>
                <ServiceIcon2 fontSize='inherit' />
              </IconButton>
              <Typography variant='h6' fontWeight={700} mb={2} marginLeft='37%'>
                Service 2
              </Typography>
              <Typography variant='body1' marginLeft='25%'>
                Accessibility Score Analysis
              </Typography>
            </CardContent>
          </Card>

          {/* Service Card 3 */}
          <Card
            sx={{
              width: '30%',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
              },
            }}
          >
            <CardContent>
              <IconButton size='large'>
                <ServiceIcon3 fontSize='inherit' />
              </IconButton>
              <Typography variant='h6' fontWeight={700} mb={2} marginLeft='37%'>
                Service 3
              </Typography>
              <Typography variant='body1' marginLeft='31%'>
                Design Enhancement Recommendations
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <img
          src={arrowrightupdateImage}
          alt='arrowright Image'
          style={{
            width: '25%',
            top: '-3%',
            left: '19%',
            height: 'auto',
            borderRadius: '8px',
            zIndex: 2,
            position: 'relative',
          }}
        />

        <img
          src={usabilityupdateImage}
          alt='usabilityupdate Image'
          style={{
            width: '25%',
            top: '10%',
            left: '45%',
            height: 'auto',
            borderRadius: '8px',
            zIndex: 2,
            position: 'relative',
          }}
        />

        {/* Left-aligned text next to the last image */}
        <Typography
          variant='body1'
          style={{
            position: 'relative',
            top: '-3%',
            left: '15%',
            width: '25%',
          }}
        >
          Service: Elevate user experience through in-depth interface
          evaluations. Benefits: Uncover user pain points, enhance interaction
          design, and refine your digital products. Outcome: Improved
          satisfaction and engagement among your audience.
        </Typography>

        <img
          src={arrowleftupdateImage}
          alt='arrowright Image'
          style={{
            width: '25%',
            top: '-5%',
            left: '50%',
            height: 'auto',
            borderRadius: '8px',
            zIndex: 2,
            position: 'relative',
          }}
        />

        <img
          src={accessibilityImage}
          alt='accessibility Image'
          style={{
            width: '25%',
            top: '7%',
            left: '-12%',
            height: 'auto',
            borderRadius: '8px',
            zIndex: 2,
            position: 'relative',
          }}
        />

        {/* Left-aligned text next to the last image */}
        <Typography
          variant='body1'
          style={{
            position: 'relative',
            top: '-5%',
            left: '68%',
            width: '30%',
          }}
        >
          Service: Ensure inclusivity with comprehensive accessibility
          assessments. Benefits: Identify and address potential barriers,
          ensuring your content is accessible to all users. Outcome: Foster a
          more inclusive online environment.
        </Typography>
        <img
          src={arrowrightupdateImage}
          alt='arrowright Image'
          style={{
            width: '25%',
            top: '-8%',
            left: '34%',
            height: 'auto',
            borderRadius: '8px',
            zIndex: 2,
            position: 'relative',
          }}
        />

        <img
          src={enhancementImage}
          alt='enhancement Image'
          style={{
            width: '35%',
            top: '4%',
            left: '40%',
            height: 'auto',
            borderRadius: '8px',
            zIndex: 2,
            position: 'relative',
          }}
        />

        {/* Left-aligned text next to the last image */}
        <Typography
          variant='body1'
          style={{
            position: 'relative',
            top: '-10%',
            left: '12%',
            width: '30%',
          }}
        >
          Service: Transform your digital presence with personalized design
          recommendations. Benefits: Receive expert insights on enhancing visual
          appeal and user engagement. Identify and rectify design elements that
          may impact user experience. Stay ahead in the competitive landscape
          with cutting-edge design suggestions. Outcome: Elevate your brand
          image and user satisfaction through a visually stunning and
          user-friendly interface.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
