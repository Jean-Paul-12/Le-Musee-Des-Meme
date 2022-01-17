class Michi {
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
        let piece2 = new Piece("./imgen/MichisEstres.jpg", "El michis de la resignacion porque no me da el codigo. Representa la vida de un programador :( ");
        this.pieces.push(piece2);
    }
}
let michi = new Michi();
michi.initializeGallery();

const artPiecesMichi = michi.getPieces();

function showInfoByClickButtonMichi() {
    alert(artPiecesMichi[0].getDescription())
};