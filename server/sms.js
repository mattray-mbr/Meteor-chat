import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

if(Meteor.settings && Meteor.settings.ACCOUNTS_PHONE) {
	Accounts._options.adminPhoneNumbers = Meteor.settings.ACCOUNTS_PHONE.ADMIN_NUMBERS;
	Accounts._options.phoneVerificationMasterCode = Metero.settings.ACCOUNTS_PHONE.MASTER_CODE;
}

//for testing with a real phone number check out accounts-phone repo for easy integration with twilio's api