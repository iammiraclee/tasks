import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [currentType, switchType] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeType(): void {
        // Set visible to be the logical opposite of its previous value
        currentType === "multiple_choice_question" ?
            switchType("short_answer_question")
        :   switchType("multiple_choice_question");
    }
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {currentType === "multiple_choice_question" ?
                <p>Multiple Choice</p>
            :   <p>Short Answer</p>}
        </div>
    );
}
