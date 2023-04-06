import { Container, InputSearch } from "./input.styles";
import SearchIcon from '@mui/icons-material/Search';

const Input = ({ handleSearch }) => {
    return (
        <Container>
            <InputSearch placeholder="type a breed..." onChange={handleSearch} />
            <SearchIcon />
        </Container>
    )
}

export default Input;