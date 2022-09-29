import ReactPlayer from 'react-player/youtube';
import useAfterHydrate from '../../useAfterHydrate';

export default function YouTube({ url }) {
	const show = useAfterHydrate();

	return (
		<div className="aspect-16-9">
			{show && <ReactPlayer url={url} width="100%" height="100%" />}
		</div>
	);
}
