//funzione snack1
function getInitials(nomeCompleto) {
    return nomeCompleto
        .split(" ")
        .map(nome => nome[0].toUpperCase())
        .join(".") + ".";
}

console.log(getInitials("Emanuela Calderone"));

//funzione snack 2 //edit: funzione snack 4 e snack 6
function createSlug(stringa) {
    if (stringa === "" || stringa === null || stringa === undefined) {
        throw new Error('Errore nella stringa')
    } else {
        return stringa.toLowerCase().replace(/ /g, '-');
    }
}

//funzione snack 3

function average(array) {
    const result = array.reduce((acc, num) => acc + num, 0) / array.length
    return result;
}

//funzione snack 5
function isPalindrome(stringa) {
    const normalized = stringa.toLowerCase().replace(/\s+/g, '');
    //confronto
    return normalized === normalized.split('').reverse().join('');
}

//funzione snack 7
function findPostById(posts, id) {
    return posts.find(post => post.id === id);
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}