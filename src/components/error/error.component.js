import { Text } from "./error.styles";

const Error = ({ message, centered, color }) => {
    const styles = centered && {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "rgb(204, 68, 68)",
    };
    return <Text color={color} style={{ ...styles }}>{message}</Text>
};

export default Error;