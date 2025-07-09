const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
} = require("./test-vari.js");

//snack1 Creare un test che verifichi la seguente descrizione: "La funzione getInitials restituisce le iniziali di un nome completo."

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Emanuela Calderone")).toBe("E.C.");
})

//snack2 Creare un test che verifichi la seguente descrizione: "La funzione createSlug restituisce una stringa in lowercase."

let stringa;

beforeEach(() => {
    stringa = "stringa di prova"
})

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    const result = createSlug(stringa);
    expect(result).toBe(result.toLowerCase());
})

//snack 3 Creare un test che verifichi la seguente descrizione: "La funzione average calcola la media aritmetica di un array di numeri."

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    const array = [2, 4, 6]
    expect(average(array)).toBe(array.reduce((acc, num) => acc + num, 0) / array.length);
})

//snack 4 Creare un test che verifichi la seguente descrizione: "La funzione createSlug sostituisce gli spazi con -." Esempi: createSlug("Questo è un test") → "questo-e-un-test"

test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug(stringa)).toBe(stringa.replace(/ /g, '-'));
})

//snack 5 Creare un test che verifichi la seguente descrizione: "La funzione isPalindrome verifica se una stringa è un palindromo."

test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome("anna")).toBe(true);
    expect(isPalindrome("lucia")).toBe(false);
})

//snack 6 Creare un test che verifichi la seguente descrizione: "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug("")).toThrow();
    expect(() => createSlug(null)).toThrow();
    expect(() => createSlug(undefined)).toThrow();
})

//snack 7 Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug. Creare un test che verifichi le seguenti descrizioni:"La funzione findPostById restituisce il post corretto dato l’array di post e l’id". Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

const posts = [
    {
        id: 0,
        title: 'Città di Palermo',
        slug: createSlug("Città di Palermo")
    },
    {
        id: 1,
        title: 'Città di Roma',
        slug: createSlug("Città di Roma")
    },
    {
        id: 2,
        title: 'Città di Firenze',
        slug: createSlug("Città di Firenze")
    }
]

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id"', () => {
    const id = 0;
    const post = findPostById(posts, id);
    expect(post.id).toBe(id);
    expect(post.title).toBe('Città di Palermo');
})

//test 2 di snack 7
test('Ogni post ha le proprietà id, title e slug', () => {
    posts.forEach(post => {
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('slug');
    });
});
