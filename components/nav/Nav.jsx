import { SocialIcon } from 'react-social-icons';
import Logo from './Logo';
import NavLink from './NavLink';
import styles from './Nav.module.css';

export default function Nav() {
	const socialStyle = {
		width: '1rem',
		height: '1rem',
	};

	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<NavLink exact href="/">
					<Logo />
				</NavLink>
			</div>
			<ul className={styles.primary}>
				<li>
					<NavLink href="/music">Music</NavLink>
				</li>
				<li>
					<NavLink href="/contact">Contact</NavLink>
				</li>
			</ul>
			<ul className={styles.socials}>
				<li>
					<SocialIcon
						style={socialStyle}
						url="https://youtube.com/c/smrqofficial"
						bgColor="transparent"
						fgColor="currentColor"
					/>
				</li>
				<li>
					<SocialIcon
						style={socialStyle}
						url="https://open.spotify.com/artist/4oiqELlprwdGI6SOB8jlWZ"
						bgColor="transparent"
						fgColor="currentColor"
					/>
				</li>
				<li>
					<SocialIcon
						style={socialStyle}
						url="https://soundcloud.com/smrq"
						bgColor="transparent"
						fgColor="currentColor"
					/>
				</li>
				<li>
					<SocialIcon
						style={socialStyle}
						url="https://github.com/smrq"
						bgColor="transparent"
						fgColor="currentColor"
					/>
				</li>
			</ul>
		</nav>
	);
}
