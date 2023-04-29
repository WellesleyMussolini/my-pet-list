import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container, Image } from "./pet.gallery.styles";


const PetGallery = ({ images }) => {
    return (
        <Container>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination
                navigation={true}
                modules={[Pagination, Navigation]}>
                {images.map((image, index) => (
                    <SwiperSlide>
                        <Image key={index} src={image} alt={`Pet ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
};

export default PetGallery;