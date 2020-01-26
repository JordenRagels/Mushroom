import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
    "data:image/png;base64,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";

const Doctor = ({ doctor }) => {
    const symptom =
        doctor.symptom === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : doctor.symptom;
    return (
        <div className="doctor">
            <h2>{doctor.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The doctor: ${doctor.Title}`}
                    src={symptom}
                />
            </div>
            <p>({doctor.Year})</p>
        </div>
    );
};


export default Doctor;