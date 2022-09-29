import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy', { ssr: false }));

export default function HomePage() {
	return (
		<div className="flex flex-column gap-600">
			<hgroup>
				<h2 className="font-title">summit</h2>
				<p>2022.08.06</p>
			</hgroup>
			<div className="aspect-16-9">
				<ReactPlayer
					url="https://www.youtube.com/watch?v=t-soUQ6MpgQ"
					width="100%"
					height="100%"
				/>
			</div>
		</div>
	);
}
