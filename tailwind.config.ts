// import type { Config } from "tailwindcss"
// // const defaultTheme = require("tailwindcss/defaultTheme");
 
// const svgToDataUri = require("mini-svg-data-uri");
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");
 
// const config = {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
// 	],
//   prefix: "",
//   theme: {
// 	screens:{
// 	  mob: { min: "300px", max: "850px" },
//       des: { min: "1001px" },
//       tab: { min: "851px", max: "1000px" },
//       xsm: "240px",
//       xs: "400px",
//       sm: "640px",
//       md: "760px",
//       lg: "1024px",
//       xl: "1280px",
// 	},
//   	container: {
//   		padding: '2rem',
//   		screens: {
//   			'2xl': '1400px',
			  
//   		}
//   	},
//   	extend: {
//   		colors: {
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			'color-1': 'hsl(var(--color-1))',
//   			'color-2': 'hsl(var(--color-2))',
//   			'color-3': 'hsl(var(--color-3))',
//   			'color-4': 'hsl(var(--color-4))',
//   			'color-5': 'hsl(var(--color-5))'
//   		},
// 		  backgroundImage: {
// 			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
// 			"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
// 		  },
// 		  boxShadow: {
// 			"5xl": "0 0 20px rgba(0, 0, 0, 0.5)"
// 		  },
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   		keyframes: {
//         shimmer: {
//           "0%, 90%, 100%": {
//             "background-position": "calc(-100% - var(--shimmer-width)) 0",
//           },
//           "30%, 60%": {
//             "background-position": "calc(100% + var(--shimmer-width)) 0",
//           },
//         },
//         spotlight: {
//           "0%": {
// 			      opacity: "0",
//             transform: "translate(-72%, -62%) scale(0.5)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translate(-50%,-40%) scale(1)",
//           },
//         },
//   			'accordion-down': {
//   				from: {
//   					height: '0'
//   				},
//   				to: {
//   					height: 'var(--radix-accordion-content-height)'
//   				}
//   			},
//   			'accordion-up': {
//   				from: {
//   					height: 'var(--radix-accordion-content-height)'
//   				},
//   				to: {
//   					height: '0'
//   				}
//   			},
//   			rainbow: {
//   				'0%': {
//   					'background-position': '0%'
//   				},
//   				'100%': {
//   					'background-position': '200%'
//   				}
//   			},
//   			'shimmer-slide': {
//   				to: {
//   					transform: 'translate(calc(100cqw - 100%), 0)'
//   				}
//   			},
//   			'spin-around': {
//   				'0%': {
//   					transform: 'translateZ(0) rotate(0)'
//   				},
//   				'15%, 35%': {
//   					transform: 'translateZ(0) rotate(90deg)'
//   				},
//   				'65%, 85%': {
//   					transform: 'translateZ(0) rotate(270deg)'
//   				},
//   				'100%': {
//   					transform: 'translateZ(0) rotate(360deg)'
//   				}
//   			},
//   			'border-beam': {
//   				'100%': {
//   					'offset-distance': '100%'
//   				}
//   			},
//   			gradient: {
//   				to: {
//   					backgroundPosition: 'var(--bg-size) 0'
//   				}
//   			}
//   		},
//   		animation: {
//   			'accordion-down': 'accordion-down 0.2s ease-out',
//   			'accordion-up': 'accordion-up 0.2s ease-out',
//   			rainbow: 'rainbow var(--speed, 2s) infinite linear',
//   			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
//   			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
//   			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
//   			gradient: 'gradient 8s linear infinite',
//         shimmer: "shimmer 8s infinite",
//         spotlight: "spotlight 2s ease .75s 1 forwards",
//   		}
//   	}
//   },
//   plugins: [
//     addVariablesForColors,
//     function ({ matchUtilities, theme }: any) {
//       matchUtilities(
//         {
//           "bg-grid": (value: any) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//             )}")`,
//           }),
//           "bg-grid-small": (value: any) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//             )}")`,
//           }),
//           "bg-dot": (value: any) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
//             )}")`,
//           }),
//         },
//         { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
//       );
//     },
//     function ({ matchUtilities, theme }: any) {
//       matchUtilities(
//         {
//           "bg-dot-thick": (value: any) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
//             )}")`,
//           }),
//         },
//         { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
//       );
//     },
//   ],
// } satisfies Config

// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );
 
//   addBase({
//     ":root": newVars,
//   });
// }

// export default config

import { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

function addVariablesForColors({ addBase, theme }: { addBase: any, theme: any }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));
  addBase({ ":root": newVars });
}

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      mob: { min: "300px", max: "850px" },
      tab: { min: "851px", max: "1000px" },
      des: { min: "1001px" },
      xsm: "240px",
      xs: "400px",
      sm: "640px",
      md: "760px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    container: {
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        primary: "#7a5fd2",
        secondary: "#218583",
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        neutral: colors.neutral,
        transparent: colors.transparent,
        zinc: colors.zinc,
        "color-1": 'hsl(var(--color-1))',
        "color-2": 'hsl(var(--color-2))',
        "color-3": 'hsl(var(--color-3))',
        "color-4": 'hsl(var(--color-4))',
        "color-5": 'hsl(var(--color-5))',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "5xl": "0 0 20px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": { "background-position": "calc(-100% - var(--shimmer-width)) 0" },
          "30%, 60%": { "background-position": "calc(100% + var(--shimmer-width)) 0" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
        },
        gradient: { to: { backgroundPosition: "var(--bg-size) 0" } },
        rainbow: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "200%" },
        },
        "shimmer-slide": {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
        "spin-around": {
          "0%": { transform: "translateZ(0) rotate(0)" },
          "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
          "100%": { transform: "translateZ(0) rotate(360deg)" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        shimmer: "shimmer 8s infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: { matchUtilities: any, theme: any }) {
      matchUtilities(
        {
          "bg-dot": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
          "bg-dot-thick": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

export default config;
