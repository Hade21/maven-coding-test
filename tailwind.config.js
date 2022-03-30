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
            },
        },
    },
    plugins: [],
};