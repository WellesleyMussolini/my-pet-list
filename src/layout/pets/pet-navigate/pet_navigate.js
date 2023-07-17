import { useNavigate } from "react-router-dom";
import { petRouteName } from "../../../utils/petRouteName";

export const usePetNavigate = () => {
    const navigate = useNavigate();

    const handleGetPetName = (name, params, route) => navigate(`/${route}/${petRouteName(name[params])}`);

    return handleGetPetName;
};