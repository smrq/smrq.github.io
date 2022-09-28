import YouTube from 'react-youtube';

const releases = [
	{
		title: 'Summit',
		type: 'Single',
		date: '2022.08.06',
		youtube: 't-soUQ6MpgQ',
	},
	{
		title: 'killed in the light of a crescent moon',
		type: 'Single',
		date: '2022.09.30',
		youtube: 'ZZ0JY_LTxc8',
	},
	{
		title: 'jamelan',
		type: 'Single',
		date: '2022.09.20',
		youtube: 'fhYi958qqac',
	},
	{
		title: 'Breathe (feat. Stephen McGranahan)',
		originalArtist: 'Angus Macnaughton',
		type: 'Single',
		date: '2015.02.13',
	},
	{
		title: 'Reach for the Dead (smrq remix)',
		originalArtist: 'Boards of Canada',
		type: 'Single',
		date: '2013.05.25',
	},
	{ title: 'Type A', type: 'Single', date: '2013.03.14' },
	{
		title: 'Tetrik',
		type: 'Single',
		date: '2012.10.13',
		youtube: 'zlA_Mkld3xc',
	},
	{
		title: 'nwwia',
		type: 'Single',
		date: '2012.03.06',
		youtube: 'DnDJk3VLnD4',
	},
	{
		title: 'Monochrome (smrq remix)',
		originalArtist: 'TOMATSU Haruka',
		type: 'Single',
		date: '2012.02.29',
		youtube: '-H77dvb1I4g',
	},
	{ title: 'Sticking Together', type: 'Single', date: '2009.08.18' },
	{ title: 'Colonize', type: 'Single', date: '2008.04.04' },
	{
		title: 'Chorale for the Aquatic Traveler',
		type: 'Single',
		date: '2008.02.04',
	},
];

export default function MusicPage() {
	return (
		<div className="flex flex-column gap-700">
			<h1>Music</h1>
			{releases.map((release) => (
				<div className="flex flex-column gap-500">
					<hgroup>
						<h2>{release.title}</h2>
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
