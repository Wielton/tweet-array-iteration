// Initialize an array of 10 tweets (strings)
// Created a loop that iterates through the array, 
// and for each element in the array prints the tweet to the console

var tweets = ['Tweet 1', 'Tweet 2', 'Tweet 3', 'Tweet 4', 'Tweet 5', 'Tweet 6', 'Tweet 7', 'Tweet 8', 'Tweet 9', 'Tweet 10'];

// This is a forEach loop, using myTweets as the callback.  A tweet is a value or element in my array
tweets.forEach(myTweets);
function myTweets(tweet){
    console.log(tweet);
}


// This is my preferred use of a forEach callback
// Simple and very easy to read
tweets.forEach(tweet => console.log(tweet));


// 10 user objects I will iterate through to extract the tweet, username, and dateCreated

var users = [{
    tweet: 'Hello',
    username: 'John',
    dateCreated: 'MM-DD-YYYY',
    userAge: 15},
    {
    tweet: 'Hello',
    username: 'John',
    dateCreated: 'MM-DD-YYYY',
    userAge: 31
    },
    {
    tweet: 'Hello',
    username: 'John',
    dateCreated: 'MM-DD-YYYY',
    userAge: 11
    },
    {
    tweet: 'Hello',
    username: 'John',
    dateCreated: 'MM-DD-YYYY',
    userAge: 32
    },
    {
    tweet: 'Hello',
    username: 'John',
    dateCreated: 'MM-DD-YYYY',
    userAge: 25
    },
    {
    tweet: 'Hello',
    username: 'John',
    dateCreated: 'MM-DD-YYYY',
    userAge: 43
    },
    {
    tweet: 'Hello',
    username: 'John',
    dateCreated: 'MM-DD-YYYY',
    userAge: 21
    },
    {
    tweet: 'Hello',
    username: 'John',
    dateCreated: 'MM-DD-YYYY',
    userAge: 24
    },
    {
    tweet: 'Hello',
    username: 'John',
    dateCreated: 'MM-DD-YYYY',
    userAge: 54
    },
    {
    tweet: 'Hello',
    username: 'John',
    dateCreated: 'MM-DD-YYYY',
    userAge: 32
    }];

    //  I could only extract the tweet from each object, didn't have time to finish!!!!
    
    for (let i = 0; i < users.length; i++) { 
        console.log(users[i].tweet);
        
    }