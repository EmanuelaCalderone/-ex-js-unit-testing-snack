//funzione snack1
function getInitials(nomeCompleto) {
    /* return nomeCompleto
        .split(" ")
        .map(nome => nome[0].toUpperCase())
        .join(".") + "."; */

    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== "")
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

//funzione snack 2 //edit: funzione snack 4 e snack 6
function createSlug(stringa) {
    if (stringa === "" || stringa === null || stringa === undefined) {
        throw new Error('Errore nel titolo')
    } else {
        return stringa.toLowerCase().replaceAll(" ", "-");
    }
}

//funzione snack 3

function average(array) {
    return array.reduce((acc, num) => acc + num, 0) / array.length

}

//funzione snack 5
function isPalindrome(parola) {
    const parolaInversa = parola.split('').reverse().join('');
    return parola === parolaInversa;
}

//funzione snack 7
function findPostById(posts, id) {
    posts.forEach(p => {
        if (p.id === undefined || p.title === undefined || p.slug === undefined) {
            throw new Error("Formato non corretto");
        }
    });
    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id`);
    }

    return posts.find(p => p.id === id) || null;
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}