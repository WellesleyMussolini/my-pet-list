import { ErrorMessage, Wrapper } from "./error.styles";

const Error = ({error}) => {
    return <Wrapper><ErrorMessage>{error}</ErrorMessage></Wrapper>
};

export default Error;