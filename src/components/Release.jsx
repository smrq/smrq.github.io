import YouTube from './player/YouTube';
import Soundcloud from './player/Soundcloud';

export default function Release({
	title,
	originalArtist,
	showType = true,
	type,
	date,
	youtube,
	soundcloud,
}) {
	return (
		<div className="flex flex-column gap-500">
			<hgroup>
				<h2 className="font-title">{title}</h2>
				{originalArtist && <p>original by {originalArtist}</p>}
				{showType && <p>{type}</p>}
				<p>{date}</p>
			</hgroup>
			{youtube && (
				<YouTube url={`https://www.youtube.com/watch?v=${youtube}`} />
			)}
			{soundcloud && <Soundcloud url={soundcloud} />}
		</div>
	);
}
