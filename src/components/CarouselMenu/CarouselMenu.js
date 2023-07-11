import React from 'react'
import style from './CarouselMenu.module.scss';
import { listMenu } from '../../data/data';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import './CarouselMenu.scss'


import { useState } from 'react';

export default function CarouselMenu() {

    const [select, setSelect] = useState(false)

    return (
        <Swiper
            className={style.container}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={window.innerWidth < 968 ? 3 : 8}
            navigation={true}
            pagination={false}
            scrollbar={{ draggable: true }}
            autoplay={false}
        >
            {listMenu?.map((p, i) => {
                return (
                    <SwiperSlide key={i}>
                        <div
                            className={style.container__wrapper}
                            onClick={() => setSelect(p.title)}
                        >
                            <img src={p.img} alt={p.title} />
                            <h3 style={{ borderBottom: `${select === p.title ? "4px solid red" : "none"}` }}>{p.title}</h3>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
