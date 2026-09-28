import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ActionProps {
    onClick: () => void;
}
function Doubler({ onClick }: ActionProps): React.JSX.Element {
    return <Button onClick={onClick}>Double</Button>;
}

function Halver({ onClick }: ActionProps): React.JSX.Element {
    return <Button onClick={onClick}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <div>Double Half</div>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler
                onClick={() => {
                    setDhValue(2 * dhValue);
                }}
            ></Doubler>
            <Halver
                onClick={() => {
                    setDhValue(0.5 * dhValue);
                }}
            ></Halver>
        </div>
    );
}
