import { _ } from 'meteor/underscore';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class ProfileCtrl extends Controller {
	constructor() {
		super(...arguments);

		const profile = this.currrentUser && this.currrentUser.profile;
		this.name = profile ? profile.name : '';
	}
	updateName() {
		if (_.isEmpty(this.name)) return;

		this.callMethod('updateName', this.name, (err) => {
			if(err) return this.handleError(err);
			this.$state.go('tab.chats');
		});
	}

	handleError(err) {
		this.$log.error('Profile save error', err);

		this.$ionicPopup.alert({
			title: err.reason || 'save failed',
			template: 'Please try again',
			okType: 'button-positive button-clear'
		});
	}
}

ProfileCtrl.$inject = ['$state', '$ionicPopup', '$log'];