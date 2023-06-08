import Heart from "../img/icon-breed-lifespan.svg";
import Bone from "../img/icon-breed-height.svg";
import Dog from "../img/icon-breed-group.svg";
import Scale from "../img/icon-breed-weight.svg";

export const petStat = [
    {
        stat: {en: "Breed Group", ptBr: "Grupo"},
        icon: Dog,
        information: "breed_group",
    },
    {
        stat: {en: "Size", ptBr: "Tamanho"},
        icon: Bone,
        information: "breed_size",
    },
    {
        stat: {en: "Weight", ptBr: "Peso"},
        icon: Scale,
        information: "weight",
    },
    {
        stat: {en: "Life Span", ptBr: "Expectativa"},
        icon: Heart,
        information: "life_span"
    }
];