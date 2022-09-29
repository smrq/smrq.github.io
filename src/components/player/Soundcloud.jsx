import ReactPlayer from 'react-player/soundcloud';
import useAfterHydrate from '../../useAfterHydrate';

export default function Soundcloud({ url }) {
	const show = useAfterHydrate();

	return show && <ReactPlayer url={url} height="166" width="100%" />;
}
