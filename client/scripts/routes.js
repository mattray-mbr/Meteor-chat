import { Config } from 'angular-ecmascript/module-helpers';

export default class RoutesConfig extends Config { //adding on to base config with some custom stuff
	configure() {
		this.$stateProvider
		.state('tab', {  //the routes for each tab of the ionic application
			url: '/tab',
			abstract: true,
			templateUrl: 'client/templates/tabs.html'
		})
		.state('tab.chats', {
			url: '/chats',
			views:  {
				'tab-chats': {
					templateUrl: 'client/templates/chats.html',
					controller: 'ChatsCtrl as chats'
				}
			}
		})
		.state('tab.chat', {
			url: '/chats/:chatId',
			views: {
				'tab-chats': {
					templateUrl: 'client/templates/chat.html',
					controller: 'ChatCtrl as chat'
				}
			}
		});

		this.$urlRouterProvider.otherwise('tab/chats'); //error alt route???
	}
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];