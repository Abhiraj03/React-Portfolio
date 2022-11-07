import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Assets/client1.jpg'
import AVTR2 from '../../Assets/client2.jpg'
import AVTR3 from '../../Assets/client3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const test = [
  {
    id: 1,
    image: AVTR1,
    name: "Ernest Achiever",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique nostrum aperiam tempora hic explicabo officia voluptas libero eum fugiat cupiditate temporibus! Totam, dolore amet! Voluptatem, provident ex?",
  },
  {
    id: 2,
    image: AVTR2,
    name: "Many Goldernest",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique nostrum  provident ex? Voluptatibus, nulla provident ex? Voluptatibus, nulla voluptas libero eum fugiat cupiditate temporibus! Totam, dolore  nulla..",
  },
  {
    id: 3,
    image: AVTR3,
    name: "Lorry Bennet",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique nostrum aperiam tempora hic explicabo officia voluptas libero eum fugiat cupiditate temporibus! Totam, dolore.",
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          test.map(({id, image, name, review}) => {
            return(
              <SwiperSlide id={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials