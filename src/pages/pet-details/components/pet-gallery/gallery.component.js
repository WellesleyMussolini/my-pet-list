import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container, Image } from "./gallery.styles";

const PetGallery = ({ images, pet }) => (
    <Container>
        <Swiper
            slidesPerView={3}
            // centeredSlides={true}
            rewind
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}>
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image src={image} alt={pet} />
                </SwiperSlide>
            ))}
        </Swiper>
    </Container>
);

export default PetGallery;