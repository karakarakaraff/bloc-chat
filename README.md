# Bloc Chat

Bloc Chat is a real-time chat application using Firebase and AngularJS. Read a case study about building this project on my portfolio website at [karaflaherty.com: Bloc Chat](http://karaflaherty.com/bloc-chat-real-time-chat-app-using-angular-and-firebase/). 

### Usernames
When a user first enters Bloc Chat, he or she will be prompted to enter a username. Bloc Chat uses the [ngCookies module](https://docs.angularjs.org/api/ngCookies) to remember the username and keep it active. This username will be displayed in the chat rooms, and it will persist for as long as it remains in the user's browser cookies. 

### Chat rooms
The left sidebar in Bloc Chat holds the list of active chat rooms in the order they were created. Users can create new chat rooms by clicking the "New Room" button. Each new chat room will appear at the bottom of the list.

### Chatting
To chat, users must first enter a chat room. Once inside, the room's name will be displayed at the top of the chat window with a messaging bar at the bottom of the window. Simply type a message into the messaging bar and click the "send" button. New messages will appear below the previous messages. *Please note: All chat rooms are public, so avoid posting any personal information.*

### Timestamps
Each message is timestamped by the Firebase server and filtered like so:
```
sentAt: $filter('date')(date, 'EEEE @ h:mma (M/d/yy)')
```
This will format the timestamp as "Saturday @ 4:28PM (9/30/17)". All timestamps will automatically appear with the timezone of the machine on which they are viewed. For example, if a user in Denver sees a message's timestamp as "Saturday @ 4:28PM (9/30/17)", a user in New York City will see the same message's timestamp as "Saturday @ 6:28PM (9/30/17)", while a user in Seoul will see it as "Sunday @ 7:28AM (10/1/17)".

### Firebase database
The Firebase database behind Bloc Chat is set up to hold two main objects: rooms and messages. These are connected through a unique room key — that is, each room has an identification number, and each message will include a `roomId` key with a value that matches the corresponding room's identifcation number. The setup looks like this:
```
bloc-chat
|---> rooms
|   |---> -KjM2Ktq-eXy4wCnGP: "spadoinkle"
|---> messages
|   |---> -KjtyDv82UyqJGkvcO
|       |---> content: "this is a message in the spadoinkle chat room"
|       |---> roomId: "-KjM2Ktq-eXy4wCnGP"
|       |---> sentAt: "time date"
|       |---> username: "testing123"
```

---
This project was built for [Bloc's Web Development Program](https://www.bloc.io/).
