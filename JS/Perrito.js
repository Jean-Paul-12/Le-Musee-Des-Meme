class Perrito {
    constructor() {
        this.pieces = [];
    }
    getPieces() {
        return this.pieces
    }
    setPieces(pieces) {
        this.pieces = pieces;
    }
    initializeGallery() {
        let piece3 = new Piece("./Image/PerritoNoPuedeSer.webp", "Este michis representa a los programadores que no nos compila nuestro codigo, ni la vida, ni nada *Mood Sad*");
        this.pieces.push(piece3);
    }
}
let perrito = new Perrito();
perrito.initializeGallery();

const artPiecesPerrito = perrito.getPieces();

function showInfoByClickButtonPerrito() {
    alert(artPiecesPerrito[0].getDescription())
};