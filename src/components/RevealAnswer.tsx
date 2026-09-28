import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, revealAnswer] = useState<boolean>(false);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        revealAnswer(!visible);
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
