/*
Version: v0.0.1-a.2
License: MIT License(https://github.com/nagicat/gpacalcjs)
*/

export class GpaCalc {
    constructor(points) {
        if ( !Array.isArray(points) ) {
            throw new Error("GPACalcJS: ERROR: input type is not Array.");
        }

        this.points = points;
        this.pointsLength = this.points.length;
    }

    calc(scores) {
        if ( !Array.isArray(scores) && scores.length !== this.pointsLength ) {
            throw new Error("GPACalcJS: ERROR: input score is fraud.\n CAUSE: Type not Array or Array is not long enough.");
        }

        let totalPoint = 0;
        let subjectLength = 0;
        for ( let i = 0; i < this.pointsLength; i++ ) {
            const point = this.points[i];
            const score = scores[i];

            totalPoint += point * score ;
            subjectLength += score;
        }
        return totalPoint / subjectLength;
    }
}