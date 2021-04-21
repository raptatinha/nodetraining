# 🚀 Node Training
Rocketseat node training nlw 5

Run the app with:
```yarn dev```

## 🗂️ Project Introduction
A Node Js backend app that will provide the settings for a given client for choosing the desired features (email, customer profile, chat, chat history) and will show instant messages;
The app will have a database connection and HTTP protocol and websocket;


## 🧩 Technologies
Node 14
Yarn
Insomnia

# Class 1
## Class Summary
Node was invented to solve inability to see the progress bar on flickr while uploading a file.
Javascript was the best tool available due to its non-blocking IO feature.

### Node JS -
User sends the request;
Event loop single thread identifies the request and 
Delegates to the 4 async threads available (4 by default but it's configurable)

### API -
API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other (usually the client web and/or mobile with the server).
Eg: shipping cost for a given address.

### Typescript
Superset of Javascript
we can have types and and attributes.

Example:
```
interface UserData {
    id: String, name: String, email: String
}

function addUser( {email, id, name } : UserData) { //example of destructuring javascript
    console.log(id, email, name);
}

class addAdmin {
    add() {
        addUser("324", "Bla", "email@company.com");
    }
}
```

### Practice
- yarn init -Y
- yarn add express
- create a server.ts file
- create the listen method
- import express and types (when ... is shown on the import)
- ```node server.ts``` throws an error cause node doesn't recognize import (it does const bla = require 'bla')
- yarn add typescript
- setup the tsconfig.json
- yarn add ts-node-dev
- add scripts into package.json ts-node-dev filename
- create a new route into server.ts
- the routes can have "/" or "/bla"


