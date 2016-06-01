//the controller is used as the view through the controllerAs syntax. 
//the data models is defined on the controller itself instead of using $scope

import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats } from '../../../lib/collections';

export default class ChatsCtrl extends Controller {
	constructor() {
		super(...arguments);

		this.helpers({ //this is used in the same way as $scope
			data() {
				return Chats.find(); //finds all chat messages in the collection
			}
		});
	}

	remove(chat) {
		this.data.remove(chat);
	}
}






