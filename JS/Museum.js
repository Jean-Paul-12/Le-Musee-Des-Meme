class Museum {
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
        let piece1 = new Piece("./Image/Perrito preocupado.jpg", "Este perrito esta mas preocupado por este museo que no queria compilar y se iba a quedar sin nota *Suda frio*");
        this.pieces.push(piece1);
    }
} 