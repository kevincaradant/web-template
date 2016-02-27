'use strict';

module.exports = (gulp, $) => {
	return (done) => {
		return $.conventionalGithubReleaser({
			type: 'oauth',
			// change this to your own GitHub token or use an environment variable
			token: '754f73e5e353e19b9502e71e721629c5023f03ab'
		}, {
			// convention you use.
			preset: 'angular'
		}, done);
	}
}
