import Head from 'next/head';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact &ndash; smrq</title>
			</Head>
			<div className="flex flex-column gap-500">
				<h1>Contact information</h1>
				<p className="font-body">
					All inquiries: <strong>smrq@smrq.net</strong>
				</p>
			</div>
		</>
	);
}
