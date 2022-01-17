class HappyDay {
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
        let piece5 = new Piece("./Image/HappyDay.png", "Mucha suerte en tu carrera como programador nalgon/na, nunca te rindas, siempre intentalo. Espero te haya gustado el Le Musee Des Meme (el museo de memes por si no sabes frances.)");
        this.pieces.push(piece5);
    }
}
let happyday = new HappyDay ();
happyday.initializeGallery();

const artPiecesHappyDay = happyday.getPieces();

function showInfoByClickButtonHappyDay() {
    alert(artPiecesHappyDay[0].getDescription())
};