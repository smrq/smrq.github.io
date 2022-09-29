import '../global.css';

import Head from 'next/head';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>smrq</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="shortcut icon" type="image/png" href="/icon/favicon.ico" />
				<link rel="shortcut icon" sizes="16x16" href="/icon/16px.png" />
				<link rel="shortcut icon" sizes="32x32" href="/icon/32px.png" />
				<link rel="shortcut icon" sizes="96x96" href="/icon/96px.png" />
				<link rel="shortcut icon" sizes="192x192" href="/icon/192px.png" />
				<link rel="shortcut icon" sizes="512x512" href="/icon/512px.png" />
				<link rel="apple-touch-icon" href="/icon/180px.png" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
