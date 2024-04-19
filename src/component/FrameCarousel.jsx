import React from 'react';
import { Grid, Typography } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { data } from '../projectsData';
import '../Styles/Carousel.css';

export default function FrameCarousel() {

  return (
    <>
      <Grid container alignItems="center" justifyContent='center' sx={{ flexDirection: 'column', paddingBlock: '20px' }}>
        <Typography variant='h6' gutterBottom sx={{ mb: '18px', textAlign: 'center', color: '#7a8b8a' }}>
          <span>(My framing skills)</span>
        </Typography>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            data.map((item, index) => {
              return (
                <SwiperSlide>
                  <img 
                    src={item.src}
                    alt={item.alt}
                    key={index}
                  />
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </Grid>
    </>
  );
}
