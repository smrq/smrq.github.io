import YouTube from 'react-youtube';
import releases from '../releases';

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
						<YouTube
							videoId={release.youtube}
							opts={{ height: '360px', width: '640px' }}
						/>
					)}
				</div>
			))}
		</div>
	);
}
