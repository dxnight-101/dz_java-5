'use strict';
// debugger
/**
 * @param {number} winnerRating - Рейтинг победителя пары.
 * @param {number} opponentRating - Рейтинг соперника.
 * @returns {number} - Рассчитанный рейтинг победителя.
 */
function rate(winnerRating, opponentRating){
    if (winnerRating < 0 || opponentRating < 0){
        throw new Error ('Рейтинг не может быть меньше 0');
    }
    const allRating = winnerRating - opponentRating;

    if (allRating >= 0 && allRating <= 2){
        return winnerRating + 2;
    } else if (allRating > 2 && allRating < 20){
        return winnerRating + 1;
    } else if (allRating >= 20){
        return winnerRating;
    } else if (winnerRating < 0){
        return opponentRating;
    } else {
        return (opponentRating - winnerRating +5) / 3;
    }
}
console.log(rate (1, 5));