import "../styles/globals.css"; // Tailwind styles
import "@fontsource/poppins"; // External Font library
import "@fontsource/poppins/300.css"; // Light weight
import "@fontsource/poppins/400.css"; // Regular weight
import "@fontsource/poppins/600.css"; // Semi-bold weight

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
