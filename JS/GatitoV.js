class GatitoV {
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
        let piece4 = new Piece("./Image/GatitoV", "El es nuestra descripcion cuando nada nos quiere dar");
        this.pieces.push(piece4);
    }
}
let gatitov = new GatitoV();
gatitov.initializeGallery();

const artPiecesGatitoV = gatitov.getPieces();

function showInfoByClickButtonGatitoV() {
    alert(artPiecesGatitoV[0].getDescription())
};