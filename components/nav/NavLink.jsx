import classNames from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function NavLink(props) {
	const { href, exact = false, className, children, ...rest } = props;
	const { pathname } = useRouter();
	const active = exact ? pathname === href : pathname.startsWith(href);
	return (
		<Link href={href}>
			<a
				className={classNames(styles.link, active && styles.active, className)}
				{...rest}
			>
				{children}
			</a>
		</Link>
	);
}
