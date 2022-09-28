import YouTube from 'react-youtube';

export default function HomePage() {
	return (
		<div className="flex flex-column gap-600">
			<hgroup>
				<h1>summit</h1>
				<p>2022.08.06</p>
			</hgroup>
			<YouTube
				videoId="t-soUQ6MpgQ"
				opts={{ height: '360px', width: '640px' }}
			/>
		</div>
	);
}
