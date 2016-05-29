
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import { Meteor } from 'meteor/meteor';

//Modules

const App = 'Whatsapp';

Angular.module(App, [
	'angular-meteor',
	'ionic',
]);

//startup for mobile
if(Meteor.isCordova) {
	Angular.element(document).on('deviceready', onReady);
} else {
	Angular.element(document).ready(onReady);
}

function onReady() {
	Angular.bootstrap(document, [App]);
}