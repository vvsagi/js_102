const myFriends = ['Anna', 'Billy', 'Carlos', 'David', 'Eunice', 'Franz'];
// Print to the console the total number of favorite friends you have as "I have 6 favorite friends."
// Let's assume these friends are in order of your favorite friends, print to the console the name of your 3rd favorite friend.
// Franz has offended your sister so you no longer consider him your friend. Remove him from your list of friends and print the update list to the console.
// You went to Spain over the summer and met a new friend, Ferdinand. At him to the list and print this updated list to the console.

function numFavFriends(friends) {
    return `I have ${friends.length} favorite friends.`;
}
console.log(numFavFriends(myFriends))

function printNthFavFriend(friends, num) {
    return friends[num - 1];
}
console.log(printNthFavFriend(myFriends,3));

myFriends.pop();
console.log(myFriends);

myFriends.push('Ferdinand');
console.log(myFriends);
