import React from 'react'
import style from './CarouselHome.module.scss';
import { listHome } from '../../data/data';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import './CarouselHome.scss'

export default function CarouselHome() {
    return (
        <Swiper
            className={style.container}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={false}
            pagination={true}
            scrollbar={{ draggable: true }}
            autoplay={{
                "delay": 4000,
                "disableOnInteraction": true
            }}
        >
            {listHome?.map((p, i) => {
                return (
                    <SwiperSlide key={i}>
                        <div className={style.container__wrapper}>
                            <div className={style.container__wrapper__content}>
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                                <button>ORDER NOW</button>
                            </div>
                            <div className={style.container__wrapper__img}>
                                <img src={p.img} alt={p.title} />
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
