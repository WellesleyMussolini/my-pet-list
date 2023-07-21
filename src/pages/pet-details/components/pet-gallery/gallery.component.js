import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container, Image } from "./gallery.styles";

const PetGallery = ({ images, pet }) => {
    const [slidesPerView, setSlidesPerView] = React.useState(3);
    const [showPagination, setShowPagination] = React.useState(true);

    React.useEffect(() => {
        const updateSlidesPerView = () => window.innerWidth <= 775 ? setSlidesPerView(1) | setShowPagination(false): setSlidesPerView(3) | setShowPagination(true);
        window.addEventListener('resize', updateSlidesPerView);
        updateSlidesPerView(); 
        return () => window.removeEventListener('resize', updateSlidesPerView);
    }, []);
    return (
        <Container>
            <Swiper
                slidesPerView={slidesPerView}
                centeredSlides={true}
                spaceBetween={30}
                pagination={showPagination} 
                navigation={true}
                modules={[Pagination, Navigation]}>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image} alt={pet} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
};

export default PetGallery;