import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [diceOne, updateLeftDie] = useState<number>(0);
    const [diceTwo, updateRightDie] = useState<number>(1);

    function rollLeftDice(): void {
        updateLeftDie(d6());
    }

    function rollRightDice(): void {
        updateRightDie(d6());
    }

    return (
        <div>
            <span data-testid="left-die">{diceOne}</span>
            <Button onClick={rollLeftDice}>Roll Left</Button>
            <Button onClick={rollRightDice}>Roll Right</Button>
            <span data-testid="right-die">{diceTwo}</span>
            {diceOne === diceTwo ?
                diceOne === 1 ?
                    <p>Lose</p>
                :   <p>Win</p>
            :   undefined}
        </div>
    );
}
