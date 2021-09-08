// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //create an object that will be filled by the values above
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 

//add the inputs into the function
function makeContactList(id, nameFirst, nameLast) {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     
     //create a blank array that will be filled by the contact information
    var contacts = [];
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //create a new function that adds the contact information to the contacts variable
        //I: contact information
        //O: the contacts array with the added contact
        //C: n/a
        //E: has to be added with the variables listed above
        addContact: function addContact(contact) {
            return contacts.push(contact)
        },
        //create a function that searches for the input full name
        //I: a variable named fullName that includes the searched for name
        //O: the contact information for the searched name
        //C: n/a
        //E: if the name is not in the list, returned undefined
        findContact: function findContact(fullName) {
            for (var i = 0; i <= contacts.length - 1; i++) {
                if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) {
                    return contacts[i];
                } else {
                    return undefined;
                }
            }
        },
        //create a function that takes the input contact and removes it from the contact list
        //I: contact information in the contact variable
        //O: removing the contact from the array of the contact variable
        //C:
        //E: must be in the list to be removed, otherwise undefined
        removeContact: function removeContact(contact) {
            for(var i = 0; i <= contacts.length - 1; i++) {
                if(contacts[i] === contact) {
                    contacts.splice(i, 1);
                }
                
            }
        },
        
        printAllContactNames: function printAllContactNames() {
            var emptyString = "";
            for(var i = 0; i < contacts.length; i++){
                emptyString += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n"
            }
            
            return emptyString.slice(0, emptyString.length - 1);
           /*for(var prop in contacts) {
             return contacts["firstName"] + " " + contacts["lastName"] + "\n"
           }
            */
        /*for(var i = 0; i <= contacts.length - 1; i++) {
            if(i <= contacts.length - 2) {
                return contacts[i]["firstName"] + " " + contacts[i]["lastName"] + "\n";
            } else if (i === contacts.length - 1) {
                return contacts[i]["firstName"] + " " + contacts[i]["lastName"];
            }
        }*/
    }
            
        };
    //create a function that prints all of the contact names within our contact list followed by line break EXCEPT for the last one
    //I: all the contact names
    //O: Printing all the contact names with a line break
    //C: we must not have a linebreak after the last name
    //E: n/a
    
     
    





// YOUR CODE GOES ABOVE HERE //

}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
