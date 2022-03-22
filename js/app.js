// Initialize an array of 10 tweets (strings)
// Created a loop that iterates through the array, 
// and for each element in the array prints the tweet to the console

var tweets = ['Tweet 1', 'Tweet 2', 'Tweet 3', 'Tweet 4', 'Tweet 5', 'Tweet 6', 'Tweet 7', 'Tweet 8', 'Tweet 9', 'Tweet 10'];


//

tweets.forEach(function(tweet) {
    console.log(tweet);
});


tweets.forEach(tweet => console.log(tweet));


// 10 user objects I will iterate through to extract the tweet, username, and dateCreated


var users1 = [{
            tweet: 'Hello',
            username: 'Mike',
            dateCreated: 'MM-DD-YYYY',
            userAge: 15
        },
            {
            tweet: 'Hello',
            username: 'Alex',
            dateCreated: 'MM-DD-YYYY',
            userAge: 31
            },
            {
            tweet: 'Hello',
            username: 'Colin',
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


//  I was trying to create an addNewUser function to inject user objects into a users array:

// const users = new Array(i);

// function addNewUser(newUser) {
//     const newUser = {};
//     for (i = 0; i < users.length; i++) {
//         users[i] = {
//                 tweet: '',
//                 username: '',
//                 dateCreated: '',
//                 userAge: ''
//         } 
//     } return newUser;
// }

// addNewUser('This isi', 'uhsdf', 'njafudifg', 'ijadfgj');
// console.log(users);


// function newUser(tweet, username, dateCreated, userAge) {
//     this.tweet = tweet;
//     this.username = username;
//     this.dateCreated = dateCreated;
//     this.userAge = userAge;
//     this.addUser = function() {
//         return (`${this.tweet} ${this.username} ${this.dateCreated} ${this.userAge}`);
//     }
    
//     } 



// userObjects.push(new Person('Hey this was so cool!', 'John', 'Date()', 25));

// console.log(userObjects);

// let userObjects = new Object();
// userObjects.tweet = "OMG, I'm learning how to do this";
// userObjects.username = 'Roger';
// userObjects.dateCreated = Date();
// userObjects.userAge = 32;

// console.log(userObjects);
//  I could only extract the tweet from each object, didn't have time to finish!!!!

users1.forEach(users1 => console.log(users1.username, users1.userAge));

// function ageVerification(str) {
//     for (i = 0; i < str.length; i++) {
//         if (str[i].userAge >= 18) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// console.log(ageVerification(users1));

// tweets.forEach(function(tweet) {
//     console.log(tweet);
// });


function ageVerification(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].userAge < 18) {
            return arr[i].username;
        } else {
            return false;
        }
    }
        
    
    
    }




console.log(ageVerification(users1));

