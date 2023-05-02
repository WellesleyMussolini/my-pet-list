import Error from "../../../components/error/Error";
import PetList from "../../../layout/pets/pet-list/pet";

const PetNotFound = ({ pets }) => {
    return (
        <>
            {
                pets.length > 0 ?
                    <PetList pets={pets} />
                    :
                    <Error error="NO PET FOUND" />
            }
        </>
    )
};

export default PetNotFound;