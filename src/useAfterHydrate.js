import { useState, useEffect } from 'react';

export default function useAfterHydrate() {
	const [init, setInit] = useState(false);
	useEffect(() => {
		setInit(true);
	}, []);
	return init;
}
