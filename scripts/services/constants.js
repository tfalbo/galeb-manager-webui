angular.module('galebWebui')
.constant('config', {
  'apiUrl': 'http://localhost',
  'statsUrl': 'http://stats.localhost/',
  'statusGaleb': 'http://status-galeb.localhost/',
  'statusIaaS': 'http://status-iaas.localhost/',
  'logUrl': 'http://logs.localhost/',
  'logEnv': ['dev','prod'],
  'alertTeam': 'Galeb',
  'alertMail': 'contact@galeb.io'
});
