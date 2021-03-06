const _ = require('lodash')
const perms = require('get-unique-permutations');

/* 
*   Returns all or a number of permutations of string
*/
const permutations = (word, num) => {
    let permsGenerator = perms(word.split(''));
    let result =[];

    for (let perm of permsGenerator) {
        result.push(perm);     
        if (num && result.length == num) break;
    }
      
    return result;
}

/*
*   Returns a random permutation of a string using Durstenfeld Shuffle
*/
const random_permutation = (word) => {
    const chars = word.split('');
    for (i = chars.length -1 ; i >= 1; i--) {
        let num = rand(i);
        let tempNum = chars[i];
        chars[i] = chars[num];
        chars[num] = tempNum;
    }
    return chars
}
/*
*   Returns the absolute displacement of 2 strings
*/
const absolute_displacement = (word, drow) => {
    let sum = 0;
    drowArray = _.split(drow,'');
    wordArray = _.split(word,'');

    for (let index in wordArray) {
        let foundIndex = _.indexOf(drowArray,wordArray[index]);
        // This line takes care of repeat characters
        drowArray.splice(foundIndex,1,'*');
        let result = Math.abs(foundIndex - index);
        sum += result;
    } 
    return sum;
}

/*
*   Returns the maximum absolute displacement of a word
*/
const max_absolute_displacement = (word) => {
    return Math.floor(Math.pow((word.length/2),2)*2);
}

/*
*   Returns an array of words with a specific displacement
*/
const all_absolute_displacements = (word, num) => {
    let words = [];

    if (!num) {
        num = max_absolute_displacement(word);
    }
    
    permutations(word).forEach(w_perm => { 
        if (absolute_displacement(_.join(w_perm,''),word) == num) {
            words.push(w_perm);
        } 
    })
    
    return words;
}

/*
*   returns an array of objects with 1 key:value pair.
*   key: is the absolute displacement
*   value: is the sum of perms of that displacement 
*   (I'm sure there's a sexier, mathier way of doing this, but I'm just a hack:))
*/
const absolute_displacement_distribution = (word) => {
    let words = permutations(word);
    let result = {};
    for (i = 0; i <= max_absolute_displacement(word); i+=2) {
        result[i] = 0;      
    }
    words.forEach(w_perm => {
        abs_dist = absolute_displacement(word, w_perm.join('')).toString();
        //cl(w_perm + abs_dist);
        result[abs_dist] += 1;
        //cl();
    });
    return result;
}


// Returns the displacement code
const displacement_code = (word, drow) => {
    let code = []

    drowArray = _.split(drow,'');
    wordArray = _.split(word,'');

    for (let index in wordArray) {
        let foundIndex = _.indexOf(drowArray,wordArray[index]);
        drowArray.splice(foundIndex,1,'*');    
        code.push(foundIndex -index);
    } 
    return code;
}

rand = (max) => Math.floor(Math.random() * (max+1));

exports = { permutations, random_permutation, absolute_displacement, max_absolute_displacement, all_absolute_displacements, absolute_displacement_distribution , displacement_code }