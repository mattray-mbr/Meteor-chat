
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-meteor-auth';
import 'angular-ui-router';
import 'angular-moment';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

//Modules
import ChatCtrl from '../controllers/chat.controller';
import ChatsCtrl from '../controllers/chats.controller';
import LoginCtrl from '../controllers/login.controller';
import ConfirmationCtrl from '../controllers/confirmation.controller';
import InputDirective from '../directives/input.directive';
import CalendarFilter from '../filters/calendar.filter';
import Routes from '../routes';

const App = 'Whatsapp';

Angular.module(App, [
	'angular-meteor',
	'angular-moment',
	'angular-meteor-auth',
	'ionic',
]);

new Loader(App) 
	App.load(ChatCtrl)
	App.load(ChatsCtrl)
	App.load(LoginCtrl)
	App.load(ConfirmationCtrl)
	App.load(InputDirective)
	App.load(CalendarFilter)
	App.load(Routes)


//startup for mobile
if(Meteor.isCordova) {
	Angular.element(document).on('deviceready', onReady);
} else {
	Angular.element(document).ready(onReady);
}

function onReady() {
	Angular.bootstrap(document, [App]);
}