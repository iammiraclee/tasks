import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numAttempts, updateAttempts] = useState<number>(4);
    const [inProgress, updateInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        updateInProgress(true);
        updateAttempts(numAttempts - 1);
    }

    function stopQuiz(): void {
        updateInProgress(false);
    }

    function mulligan(): void {
        updateAttempts(numAttempts + 1);
    }

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={numAttempts === 0 || inProgress}
            >
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>

            {numAttempts}
        </div>
    );
}
