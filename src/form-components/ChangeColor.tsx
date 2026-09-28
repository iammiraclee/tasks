import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
];
export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <div>Change Color</div>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="colors"
                        id={`color-${color}`}
                        label={color}
                        value={color}
                        checked={chosenColor === color}
                        onChange={updateColor}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    display: "inline-block",
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
