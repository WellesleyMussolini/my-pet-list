import { UseLanguage } from "../../context/languageContext";
import { Container, Wrapper, InputSearch } from "./input.styles";
import SearchIcon from '@mui/icons-material/Search';

const Input = ({ handleSearch }) => {
    const { language } = UseLanguage();
    return (
        <Container>
            <Wrapper>
                <InputSearch placeholder={language.value === "en" ? "type a breed..." : "digite uma raça..."} onChange={handleSearch} />
                <SearchIcon />
            </Wrapper>
        </Container>
    )
};

export default Input;