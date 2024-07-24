//form validation
export const options = [
    { value: "us", label: "U.S" },
    { value: "thailand", label: "Thailand" },
    { value: "india", label: "India" },
    { value: "uk", label: "U.K" }
];

export const tooltipFormValidationSubTitle = [
    {
        text: "If your form layout allows it, you can swap the",
        code: `.{valid|invalid}`,
    },
    {
        text: "-feedback classes for",
        code: `.{valid|invalid}`,
    },
    {
        text: "-tooltip classes to display validation feedback in a styled tooltip. Be sure to have a parent with",
        code: "position: relative",
    },
    { text: "on it for tooltip positioning." },
];

export const browserDefaultsSubTitle = [
    {
        text: `Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? Depending on your browser and OS,While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.`,
    },
];

export const validationFormSubTitle = [
    {
        text: "Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.Background icons for",
        code: `<select>`,
    },
    {
        text: "s are only available with ",
        code: `.form-select`,
    },
    {
        text: "and not",
        code: ".form-control.",
    },
];
