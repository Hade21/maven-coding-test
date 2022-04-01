module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "desktop-login": "url('./assets/bg-id.png')",
                "mobile-login": "url('./assets/Mask Group 60.png')",
                "my-love-from-another-star": "url('./assets/movies/my-love-from-another-star.jpg')",
                "18-again": "url('./assets/movies/18-again.jpg')",
                "apple-dogs-time": "url('./assets/movies/apple-dogs-time.jpg')",
                speechless: "url('./assets/movies/speechless.jpg')",
                "sweet-romance": "url('./assets/movies/sweet-romance.jpg')",
                "the-call": "url('./assets/movies/the-call.jpg')",
                "slide-vincenzo": "url('./assets/movies/vincenzo-slide.jpg')",
                "slide-space-sweepers": "url('./assets/movies/space-sweepers-slide/jpg')",
            },
            fontFamily: {
                chivo: "Chivo, sans-serif",
                "DM-Sans": "DM Sans, sans-serif",
            },
            colors: {
                "black-custom": "#15181C",
                "light-cyan": "#2CBAD5",
                "moderate-grey": "#707070",
                "dark-blue": "#242F4E",
                "moderate-blue": "#377CCC",
                "dark-cyan": "#004C5A",
                horror: "#00245A",
                star: "#FFC107",
                thriller: "#401077",
                romance: "#62105C",
                comedy: "#895E2A",
                "light-grey": "#0000007E",
                "white-custom": "#36363600",
                "detail-title": "#0C9FBA",
            },
            boxShadow: {
                "slide-shadow": "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            },
            animation: {
                fadeIN: "fadeIn 0.5s ease-out",
                shadow: "shadow 0.5s ease-in-out",
                faded: "faded 0.5s ease-in-out",
                fokus: "fokus 0.5s ease-in-out",
                unfokus: "unfokus 0.5s ease-in-out",
                dissappear: "dissappear 0.5s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(5px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                shadow: {
                    "0%": { width: "100%", opacity: "0", transform: "translateX(0%)" },
                    "50%": { width: "120%", opacity: "1", transform: "translateX(-10%)" },
                    "100%": { width: "100%", transform: "translateX(0%)" },
                },
                faded: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fokus: {
                    "0%": { "font-size": "24px" },
                    "100%": { "font-size": "10px" },
                },
                unfokus: {
                    "0%": { "font-size": "10px" },
                    "100%": { "font-size": "24px" },
                },
                dissappear: {
                    "0%": { display: "block" },
                    "100%": { display: "hidden" },
                },
            },
        },
    },
    plugins: [],
};