# Real-Time Chat Application

This project is a real-time chat application developed using Node.js, Socket.io, HTML, CSS, and JavaScript. It allows users to join a chat room and exchange messages instantly without page refresh.

## Tech Stack

- **Node.js**: JavaScript runtime environment to execute server-side code.
- **Socket.io**: Library for real-time web applications, enabling bidirectional communication between web clients and servers.
- **HTML/CSS**: For structuring and styling the chat interface.
- **JavaScript**: For client-side scripting to handle real-time chat functionalities.

## Features

- Real-time messaging
- Join and leave notifications
- User-friendly interface
- Group Chat

## Setup Instructions

1. Install Node.js from [Node.js official site](https://nodejs.org/).

2. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/an02ny/Real_Time_Chat_Application
   cd Real_Time_Chat_Application

3.Initialize the Node.js project and install dependencies:
```bash
npm init -y
npm install socket.io
```
4.Start a Local Server Using Python:
If you have Python installed, you can start a simple HTTP server using the following command:
```bash
python -m http.server 5500
```
5.Run server in new terminal
```
node index.js
```

5.Navigate to **[chat.html](http://127.0.0.1:5500/chat.html)** in your web browser to start the chat application.

Open the chat application in multiple tabs or different browsers.
Enter your name to join the chat.
Start sending messages and see them appear in real-time.

## Files
**index.js**: Server-side code to handle Socket.io connections.

**client.js**: Client-side JavaScript to manage chat functionalities.

**chat.html**: HTML structure for the chat interface.

**style.css**: CSS styles for the chat interface.

