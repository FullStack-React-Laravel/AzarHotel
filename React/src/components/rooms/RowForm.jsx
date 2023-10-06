import Col from "../../ui/Col";
import Error from "./Error";

export default function RowForm({ name, error, children }) {
    return (
        <Col classes="gap-2">
            <label htmlFor={name}>{name}</label>
            {children}
            {error && <Error>{error}</Error>}
        </Col>
    );
}
