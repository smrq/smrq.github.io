import Nav from './nav/Nav';
import styles from './Layout.module.css';

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Nav />
			<main className={styles.main}>{children}</main>
		</div>
	);
}
