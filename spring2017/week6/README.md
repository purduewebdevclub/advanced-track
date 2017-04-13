# Week 6

This is the last week of the Spring 2017 Advanced Track!

Topics:
* ngrx/store
* Redux
* State/State Management

Summary:
Sometimes state management can be difficult. 
## What is state?

State is what happens in your app, it's also what is maintained throughout your application. 
For example, in the TodoApp, the main form of state are our list of Todos. We'd like to use that data in many places.

## What can I use?

You can use Redux! Redux is a form of state management that allows you to easily manipulate state. 
Mainly, we like to use it so that there's an easy flow of data, and so we can take advantage of 
having our state in Observable form. Sometimes it may not be necessary, but it can make our lives 
a whole lot easier. In Angular 2 we'll be using ngrx/store.

## How does redux work?

You have each of your components hooked up to the state, which is called "Store". Each component, if they'd
like to manipulate the data, needs to send an event to the reducer. The event consists of two things: 
the type of action/event and the (optional) payload. What reads the actions then? Good question. It's the reducer. 
The reducer is a function that takes in the state, and the action. The reducer takes the action, and based on the type, it will manipulate the state in some way. When you manipulate state, you can't manipulate the underlying current state. You have to copy the state and then manipulate it, then return a new version. 
Once the manipulation is finished and state has been returned, the Store Observable is emitted a new updated version of the state.

Notice: The data is always immutable and read only!