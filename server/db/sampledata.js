const Channels = require('./schemas/channels.js');
const Messages = require('./schemas/messages.js');
const Members = require('./schemas/members.js');
const Teams = require('./schemas/teams.js');
const Users = require('./schemas/user.js');
const Stars = require('./schemas/stars.js');

const messages = [
    {
      id: 1,
      channel: 'General',
      username: 'nick123',
      text: 'filler text',
      reaction_id: 1,
      parent: null,
      attachment_id: null
    },
    {
      id: 2,
      channel: 'General',
      username: 'joseph123',
      text: 'filler text',
      reaction_id: 2,
      parent: null,
      attachment_id: null
    },
    {
      id: 3,
      channel: 'General',
      username: 'david123',
      text: 'filler text',
      reaction_id: 3,
      parent: null,
      attachment_id: null
    },
    {
      id: 12,
      channel: 'General',
      likes: 27,
      username: 'nick123',
      reaction_id: 2,
      parent: null,
      attachment_id: null
    },
    {
      id: 42,
      channel: 'General',
      username: 'joseph123',
      text: 'comment text',
      reaction_id: 4,
      parent: null,
      attachment_id: null
    },
    {
      id: 17,
      channel: 'General',
      username: 'david123',
      text: 'comment text',
      reaction_id: 1,
      parent: null,
      attachment_id: null
    }
  ];

  const channels = [
      {
          name: 'General',
          team_id: 1,
          user_id: 1
      }
  ];

  const teams = [
      {
          id: 1,
          team_name: 'HRLA21',
          user_id: 1
      }
  ]

const stars = [
      {
        message_id: 17,
        username: 'nick123',
        channel: 'General'
      },
      {
        message_id: 3,
        username: 'joseph123',
        channel: 'General'
      },
      {
        message_id: 2,
        username: 'david123',
        channel: 'General'
      }
  ];

const users = [
    {
      username: 'nick123',
      password: 'abcd123' 
    },
    {
      username: 'joseph123',
      password: 'password123'
    },
    {
      username: 'david123',
      password: 'wooo123'   
    }
];

var insertData = () => {
    users.forEach((user) => {
      var newUser = new Users(user);
      newUser.save((err) => err ? console.log('Error inserting user', err) : console.log('Users inserted'));
    });
  
    messages.forEach((message) => {
      var newMessage = new Messages(message);
      newMessage.save((err) => err ? console.log('Error inserting message', err) : console.log('Message inserted'));
    });
  
    channels.forEach((channel) => {
      var newChannel = new Channels(channel);
      newChannel.save((err) => err ? console.log('Error inserting Channel', err) : console.log('Channel inserted'));
    });
  
    teams.forEach((team) => {
      var newTeam = new Teams(team);
      newTeam.save((err) => err ? console.log('Error inserting team', err) : console.log('Team inserted'));
    });
  
    stars.forEach((star) => {
      var newStar = new Stars(star);
      newStar.save((err) => err ? console.log('Error inserting star', err) : console.log('Star inserted'));
    });
  };
  
  insertData();