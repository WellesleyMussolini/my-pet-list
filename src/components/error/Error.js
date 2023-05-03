import { Text } from "./error.styles";

const Error = ({error, position, top, left, transform}) => {
    return <Text style={{ position: position, top: top, left: left, transform: transform }}>{error}</Text>
};

export default Error;