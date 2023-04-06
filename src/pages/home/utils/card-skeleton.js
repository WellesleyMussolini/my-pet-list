export const cardSkeleton = (Cards, card_amount) => {
    return Array.from({ length: card_amount }).map((_, index) => <Cards key={index} />);
};
