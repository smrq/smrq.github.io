import Release from '../components/Release';
import releases from '../releases';

export default function MusicPage() {
	return (
		<div className="flex flex-column gap-700">
			<h1>Music</h1>
			{releases.map((release) => (
				<Release key={release.title} {...release} />
			))}
		</div>
	);
}
