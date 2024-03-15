/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            base: [
                "1.4rem",
                {
                    letterSpacing: "-0.02em",
                    fontWeight: "500",
                },
            ],
            sm: [
                "1.2rem",
                {
                    lineHeight: "1.5",
                    letterSpacing: "-0.01em",
                    fontWeight: "500",
                },
            ],
            lg: [
                "2.2rem",
                {
                    letterSpacing: "-0.01em",
                    fontWeight: "700",
                },
            ],
            "2-lg": [
                "2.4rem",
                {
                    letterSpacing: "-0.01em",
                    fontWeight: "700",
                },
            ],
            xl: [
                "3.2rem",
                {
                    letterSpacing: "-0.01em",
                    fontWeight: "700",
                },
            ],
            "2-xl": [
                "3.6rem",
                {
                    letterSpacing: "-0.01em",
                    fontWeight: "700",
                },
            ],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            primary: "var(--base-color-primary)",
            one: "var(--base-color-one)",
            secondary: "var(--base-color-secondary)",
            three: "var(--base-color-three)",
        },
        extend: {
          
        },
        screens: {
            sm: "576px",
            // => @media (min-width: 576px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "922px",
            // => @media (min-width: 1024px) { ... }

            xl: "1200px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1366px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    extend: {},
    plugins: [],
};
