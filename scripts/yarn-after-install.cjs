module.exports = {
	name: 'plugin-after-install',
	factory: function (require) {
		const { execute } = require('@yarnpkg/shell');
		return {
			hooks: {
				afterAllInstalled: async function () {
					const exitCode = await execute('yarn run afterinstall');
					if (exitCode) {
						throw new Error(
							'The `afterInstall` hook failed, see output above.'
						);
					}
				},
			},
		};
	},
};
