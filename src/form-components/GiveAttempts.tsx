import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequested(event.target.value);
    }

    function useAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempts() {
        const amount = parseInt(requested);
        if (!isNaN(amount)) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    }
    return (
        <div>
            <div>Give Attempts</div>
            <div>Attempts left: {attemptsLeft}</div>

            <Form.Group controlId="give-attempts-input">
                <Form.Label>Requested attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={updateRequested}
                />
            </Form.Group>

            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}
