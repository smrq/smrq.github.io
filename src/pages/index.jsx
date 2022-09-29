import YouTube from 'react-player/youtube';
import Release from '../components/Release';
import releases from '../releases';

export default function HomePage() {
	return <Release showType={false} {...releases[0]} />;
}
