//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
   var arr = [];
   for(var key in object){
       arr.push(object[key]);
   }
   return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var arr = [];
for(var key in object){
    arr = Object.keys(object);
}
   return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
    for (var key in object) {
        if(typeof object[key] === 'string') {
        arr.push(object[key]);
        }
    }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) {
        return 'array';
    } else if (collection instanceof Date) {
        return false;
    } else if (collection === null) {
        return false;
    } else if (typeof collection === 'object') {
        return 'object';
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var arr = [];
    arr = string.split('');
    var newChar = arr[0];
    newChar = newChar.toUpperCase();
    arr.shift();
    arr.unshift(newChar);
    return arr.join('');
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
 var arr = string.split(" ");
 var arrTwo = [];
 for(var i = 0; i < arr.length; i++) {
    var word = arr[i];
    var wordArr = word.split('');
    var newChar = wordArr[0];
    newChar = newChar.toUpperCase();
    wordArr.shift();
    wordArr.unshift(newChar);
    word = wordArr.join('');
    arrTwo.push(word);
 }
 return arrTwo.join(' ');
 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
 
     var nameInput = object["name"];
     var newName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
     return "Welcome " + newName + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    var nameInput = object["name"];
    var newName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
    
    var speciesInput = object["species"];
    var newSpecies = speciesInput.charAt(0).toUpperCase() + speciesInput.slice(1);
    return newName + " is a " + newSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    if (Array.isArray(object.noises)) {
        if(object.noises.length === 0){
            return "there are no noises";
        } else {
            var arr = object.noises.join(" ");
            return arr;
        }
    } else {
        return "there are no noises";
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
var arr = string.split(" ");
for(var i = 0; i < arr.length; i++) {
    if(arr[i] === word){
        return true;
    }
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
    
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    if(object.friends === undefined){
        return false;
    }
    
    for(var i = 0; i < object.friends.length; i++){
        if(object.friends[i] === name) {
            return true
        }
    
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    for(var i = 0; i < array.length; i++){
        var nameArray = [];
        nameArray.push(array[i]['name']);
        if(data.friends)
    }
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
    for (var i = 0; i < array.length; i++) {
            delete object[array[i]];
    }
    return object;


}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
var newArr = [... new Set(array)];
return newArr;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}