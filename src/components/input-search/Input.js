import { Container, Wrapper, InputSearch } from "./input.styles";
import SearchIcon from '@mui/icons-material/Search';

const Input = ({ handleSearch }) => {
    return (
        <Container>
            <Wrapper>
                <InputSearch placeholder="type a breed..." onChange={handleSearch} />
                <SearchIcon />
            </Wrapper>
        </Container>
    )
}

export default Input;