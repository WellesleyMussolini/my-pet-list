import { useNavigate } from "react-router-dom";
import { petRouteName } from "../../../utils/pet.route.name";

export const usePetNavigate = () => {
    const navigate = useNavigate();

    const handleGetPetId = (id, params, route) => navigate(`/${route}/${petRouteName(id[params])}`);

    return handleGetPetId;
};