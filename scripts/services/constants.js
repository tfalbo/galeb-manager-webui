angular.module('galebWebui')
.constant('config', {
  'apiUrl': 'http://127.0.0.1:80',
  //'statsUrl': 'http://stats.localhost/',
  //'statusGaleb': 'http://status-galeb.localhost/',
  //'statusIaaS': 'http://status-iaas.localhost/',
  //'logUrl': 'http://logs.localhost/',
  'logEnv': ['dev','prod'],
  'alertTeam': 'Galeb',
  'alertMail': 'contact@galeb.io'
});
