
import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Chats, Messages } from '../lib/collections';

Meteor.startup(function(){
	if(Chats.find().count() !== 0) return; //if there is chat history, return

	Messages.remove({})

	const messages = [
		{
			text: 'You on your way?',
			timestamp: Moment().subtract(1, 'hours').toDate()
		},
		{
			text: 'Hey, it\'s me',
			timestamp: Moment().subtract(2, 'hours').toDate()
		},
		{
			text: 'I should buy a boat',
			timestamp: Moment().subtract(1, 'days').toDate()
		},
		{
			text: 'some sample text',
			timestamp: Moment().subtract(4, 'days').toDate()
		},
		{
			text: 'This is great ice cream',
			timestamp: Moment().subtract(2, 'weeks').toDate()
		}
	];

	messages.forEach((m) => {
		Messages.insert(m);
	});

	const chats = [
		{
			name: 'Ethan Lopez',
			picture: 'http://randomuser.me/api/portraits/thumb/men/1.jpg'
		},
		{
			name: 'Molly Day',
			picture: 'http://randomuser.me/api/portraits/thumb/women/1.jpg'
		},
		{
			name: 'Brian Arnold',
			picture: 'http://randomuser.me/api/portraits/thumb/lego/1.jpg'
		},
		{
			name: 'Hannah Padda',
			picture: 'http://randomuser.me/api/portraits/thumb/women/2.jpg'
		},
		{
			name: 'Jay bird',
			picture: 'http://randomuser.me/api/portraits/thumb/men/2.jpg'
		}
	];

	chats.forEach((chat) => {
		const message = Messages.findOne({ chatId: { $exists: false } });
		chat.lastMessage = message;
		const chatId = Chats.insert(chat);
		Messages.update(mesage._id, { $set: { chatId } });
	});
});



















