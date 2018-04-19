
## Week 12 Lab

#### Build new features in Chat App

---

**(1) Add a feature so that Usernames are unique (case insensitive).**
  - Make this check on unique usernames on the server side.
  - Have the server emit a new message 'failed-join'
  - When this message is emitted to the client display an error on the client that the username already exists.

**(2) Add a feature so that every user has a custom avatar**
  - Use robohash.org to generate unique avatars based on usernames.
  - Store the avatar information so that it is easily accessible in your `content` or `message` object.
    - The avatar image should be displayed using data binding `v-bind:src=something`
    - **DO NOT INCLUDE THE URL LIKE:** `v-bind:src="'http://robohash.org/{{something}}'"`

**(3) Add a feature that displays a Welcome message to the user after logged in**
  - Create a new Vue component that shows the a welcome information
  - Include the user avatar and username
    - Use data binding for both user name and avatar

--- 
**NOTES**
You'll need to make sure your code is working with two browser tabs open.  Just like in the lecture you want to make sure when you join in one tab as 'user A' that you see the welcome message for 'user A'  and then when you join in the second tab as 'user B' you see the welcome message for 'user B'.  Check to make sure that the first tab open still shows the correct user A and the second tab is user B.

Try sending messages and making sure the avatars and messages appear correctly for user A and user B.

---
