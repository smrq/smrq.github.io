import dynamic from 'next/dynamic';
import releases from '../releases';

const ReactPlayer = dynamic(() => import('react-player/lazy', { ssr: false }));

export default function MusicPage() {
	return (
		<div className="flex flex-column gap-700">
			<h1>Music</h1>
			{releases.map((release) => (
				<div className="flex flex-column gap-500" key={release.title}>
					<hgroup>
						<h2 className="font-title">{release.title}</h2>
						{release.originalArtist && (
							<p>original by {release.originalArtist}</p>
						)}
						<p>{release.type}</p>
						<p>{release.date}</p>
					</hgroup>
					{release.youtube && (
						<div className="aspect-16-9">
							<ReactPlayer
								url={`https://www.youtube.com/watch?v=${release.youtube}`}
								width="100%"
								height="100%"
							/>
						</div>
					)}
					{release.soundcloud && (
						<ReactPlayer url={release.soundcloud} height="166" width="100%" />
					)}
				</div>
			))}
		</div>
	);
}
