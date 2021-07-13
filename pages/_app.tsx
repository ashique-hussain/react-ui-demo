import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Footer from '../src/commonComponents/footer/Index';
import PrimarySearchAppBar from '../src/commonComponents/header/PrimaryMenuBar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<PrimarySearchAppBar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
export default MyApp;
