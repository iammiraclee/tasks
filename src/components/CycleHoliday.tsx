import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays: string[] = ["🎃", "🎄", "🎂", "💘", "🦔"];

    const [current_holiday, updateCurentHoliday] = useState<string>(
        holidays[0],
    );

    function nextAlphebeticalHoliday() {
        switch (current_holiday) {
            case "🎂":
                updateCurentHoliday("🎄");
                break;
            case "🎄":
                updateCurentHoliday("🦔");
                break;
            case "🦔":
                updateCurentHoliday("🎃");
                break;
            case "🎃":
                updateCurentHoliday("💘");
                break;
            case "💘":
                updateCurentHoliday("🎂");
                break;
        }
    }
    function nextSequentialHoliday() {
        switch (current_holiday) {
            case "🦔":
                updateCurentHoliday("💘");
                break;
            case "💘":
                updateCurentHoliday("🎂");
                break;
            case "🎂":
                updateCurentHoliday("🎃");
                break;
            case "🎃":
                updateCurentHoliday("🎄");
                break;
            case "🎄":
                updateCurentHoliday("🦔");
                break;
        }
    }

    return (
        <div>
            Holiday: {current_holiday}
            <Button onClick={nextAlphebeticalHoliday}>
                Advance by Alphabet
            </Button>
            <Button onClick={nextSequentialHoliday}>Advance by Year</Button>
        </div>
    );
}
