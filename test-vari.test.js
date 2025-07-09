const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
} = require("./test-vari.js");

//challenge
describe('manipolazione stringhe', () => {

    //snack1 Creare un test che verifichi la seguente descrizione: "La funzione getInitials restituisce le iniziali di un nome completo."

    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
        expect(getInitials("Emanuela Calderone")).toBe("E.C.");
    });

    //snack 5 Creare un test che verifichi la seguente descrizione: "La funzione isPalindrome verifica se una stringa è un palindromo."

    test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
        expect(isPalindrome("anna")).toBeTruthy()
        expect(isPalindrome("lucia")).toBeFalsy();
    })
})

describe('operazioni su array', () => {

    //snack 3 Creare un test che verifichi la seguente descrizione: "La funzione average calcola la media aritmetica di un array di numeri."

    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
        const array = [2, 4, 6]
        expect(average(array)).toBe(4);
    });


    //snack 7 Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug. Creare un test che verifichi le seguenti descrizioni:"La funzione findPostById restituisce il post corretto dato l’array di post e l’id". Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

    const posts = [
        {
            id: 0,
            title: "Città di Palermo",
            slug: "Città-di-Palermo"
        },
        {
            id: 1,
            title: "Città di Roma",
            slug: "Città-di-Roma"
        },
        {
            id: 2,
            title: "Città di Firenze",
            slug: "Città-di-Firenze"
        }
    ]

    test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id"', () => {
        expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Città di Firenze", slug: "Città-di-Firenze" })
        expect(() => findPostById(posts, "ciao")).toThrow('"ciao" non è un id');
        expect(() => findPostById([3, 6, 9])).toThrow("Formato non corretto");

    })
})

describe('generazione di slug', () => {
    //snack2 Creare un test che verifichi la seguente descrizione: "La funzione createSlug restituisce una stringa in lowercase."

    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
        expect(createSlug("Titolo CON Maiuscole")).toBe("titolo-con-maiuscole");
    })


    //snack 4 Creare un test che verifichi la seguente descrizione: "La funzione createSlug sostituisce gli spazi con -." Esempi: createSlug("Questo è un test") → "questo-e-un-test"

    test('La funzione createSlug sostituisce gli spazi con -.', () => {
        expect(createSlug('Questo è un titolo')).toBe('questo-è-un-titolo');
    })


    //snack 6 Creare un test che verifichi la seguente descrizione: "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug("")).toThrow("Errore nel titolo");
        expect(() => createSlug(null)).toThrow("Errore nel titolo");
        expect(() => createSlug(undefined)).toThrow("Errore nel titolo");
    })
})






