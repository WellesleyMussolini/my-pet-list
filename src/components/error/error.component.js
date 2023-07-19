import { Themes } from "../../themes/themes";
import { Text } from "./error.styles";

const Error = ({ message, centered, color }) => {
    const styles = centered && {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: Themes.error.default,
    };
    return <Text color={color} style={{ ...styles }}>{message}</Text>
};

export default Error;