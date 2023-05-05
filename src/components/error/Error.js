import { Text } from "./error.styles";

const Error = ({ message, centered }) => {
    const styles = centered && {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    };

    return <Text style={{ ...styles }}>{message}</Text>
};

export default Error;