import back_card from "./back.jpg";

/**************
clubs
**************/

import club_ace from "./clubs_ace.png";
import club_2 from "./clubs_2.png";
import club_3 from "./clubs_3.png";
import club_4 from "./clubs_4.png";
import club_5 from "./clubs_5.png";
import club_6 from "./clubs_6.png";
import club_7 from "./clubs_7.png";
import club_8 from "./clubs_8.png";
import club_9 from "./clubs_9.png";
import club_10 from "./clubs_10.png";
import club_jack from "./clubs_jack.png";
import club_queen from "./clubs_queen.png";
import club_king from "./clubs_king.png";

/**************
diamonds
**************/

import diamond_ace from "./diamonds_ace.png";
import diamond_2 from "./diamonds_2.png";
import diamond_3 from "./diamonds_3.png";
import diamond_4 from "./diamonds_4.png";
import diamond_5 from "./diamonds_5.png";
import diamond_6 from "./diamonds_6.png";
import diamond_7 from "./diamonds_7.png";
import diamond_8 from "./diamonds_8.png";
import diamond_9 from "./diamonds_9.png";
import diamond_10 from "./diamonds_10.png";
import diamond_jack from "./diamonds_jack.png";
import diamond_queen from "./diamonds_queen.png";
import diamond_king from "./diamonds_king.png";

/**************
hearts
**************/

import heart_ace from "./hearts_ace.png";
import heart_2 from "./hearts_2.png";
import heart_3 from "./hearts_3.png";
import heart_4 from "./hearts_4.png";
import heart_5 from "./hearts_5.png";
import heart_6 from "./hearts_6.png";
import heart_7 from "./hearts_7.png";
import heart_8 from "./hearts_8.png";
import heart_9 from "./hearts_9.png";
import heart_10 from "./hearts_10.png";
import heart_jack from "./hearts_jack.png";
import heart_queen from "./hearts_queen.png";
import heart_king from "./hearts_king.png";

/**************
spades
**************/

import spade_ace from "./spades_ace.png";
import spade_2 from "./spades_2.png";
import spade_3 from "./spades_3.png";
import spade_4 from "./spades_4.png";
import spade_5 from "./spades_5.png";
import spade_6 from "./spades_6.png";
import spade_7 from "./spades_7.png";
import spade_8 from "./spades_8.png";
import spade_9 from "./spades_9.png";
import spade_10 from "./spades_10.png";
import spade_jack from "./spades_jack.png";
import spade_queen from "./spades_queen.png";
import spade_king from "./spades_king.png";

const clubs = [
  { sign: "club", value: "A", card: club_ace },
  { sign: "club", value: "2", card: club_2 },
  { sign: "club", value: "3", card: club_3 },
  { sign: "club", value: "4", card: club_4 },
  { sign: "club", value: "5", card: club_5 },
  { sign: "club", value: "6", card: club_6 },
  { sign: "club", value: "7", card: club_7 },
  { sign: "club", value: "8", card: club_8 },
  { sign: "club", value: "9", card: club_9 },
  { sign: "club", value: "10", card: club_10 },
  { sign: "club", value: "J", card: club_jack },
  { sign: "club", value: "Q", card: club_queen },
  { sign: "club", value: "K", card: club_king },
];

const diamonds = [
  { sign: "diamond", value: "A", card: diamond_ace },
  { sign: "diamond", value: "2", card: diamond_2 },
  { sign: "diamond", value: "3", card: diamond_3 },
  { sign: "diamond", value: "4", card: diamond_4 },
  { sign: "diamond", value: "5", card: diamond_5 },
  { sign: "diamond", value: "6", card: diamond_6 },
  { sign: "diamond", value: "7", card: diamond_7 },
  { sign: "diamond", value: "8", card: diamond_8 },
  { sign: "diamond", value: "9", card: diamond_9 },
  { sign: "diamond", value: "10", card: diamond_10 },
  { sign: "diamond", value: "J", card: diamond_jack },
  { sign: "diamond", value: "Q", card: diamond_queen },
  { sign: "diamond", value: "K", card: diamond_king },
];

const hearts = [
  { sign: "heart", value: "A", card: heart_ace },
  { sign: "heart", value: "2", card: heart_2 },
  { sign: "heart", value: "3", card: heart_3 },
  { sign: "heart", value: "4", card: heart_4 },
  { sign: "heart", value: "5", card: heart_5 },
  { sign: "heart", value: "6", card: heart_6 },
  { sign: "heart", value: "7", card: heart_7 },
  { sign: "heart", value: "8", card: heart_8 },
  { sign: "heart", value: "9", card: heart_9 },
  { sign: "heart", value: "10", card: heart_10 },
  { sign: "heart", value: "J", card: heart_jack },
  { sign: "heart", value: "Q", card: heart_queen },
  { sign: "heart", value: "K", card: heart_king },
];

const spades = [
  { sign: "spade", value: "A", card: spade_ace },
  { sign: "spade", value: "2", card: spade_2 },
  { sign: "spade", value: "3", card: spade_3 },
  { sign: "spade", value: "4", card: spade_4 },
  { sign: "spade", value: "5", card: spade_5 },
  { sign: "spade", value: "6", card: spade_6 },
  { sign: "spade", value: "7", card: spade_7 },
  { sign: "spade", value: "8", card: spade_8 },
  { sign: "spade", value: "9", card: spade_9 },
  { sign: "spade", value: "10", card: spade_10 },
  { sign: "spade", value: "J", card: spade_jack },
  { sign: "spade", value: "Q", card: spade_queen },
  { sign: "spade", value: "K", card: spade_king },
];

const backCard = [back_card];

const cards = [...spades, ...hearts, ...diamonds, ...clubs];

export { cards, backCard };

// export {
//   back_card,
//   club_ace,
//   club_2,
//   club_3,
//   club_4,
//   club_10,
//   club_5,
//   club_6,
//   club_7,
//   club_8,
//   club_9,
//   club_jack,
//   club_king,
//   club_queen,
//   diamond_ace,
//   diamond_2,
//   diamond_3,
//   diamond_4,
//   diamond_10,
//   diamond_5,
//   diamond_6,
//   diamond_7,
//   diamond_8,
//   diamond_9,
//   diamond_jack,
//   diamond_king,
//   diamond_queen,
//   heart_ace,
//   heart_2,
//   heart_3,
//   heart_4,
//   heart_10,
//   heart_5,
//   heart_6,
//   heart_7,
//   heart_8,
//   heart_9,
//   heart_jack,
//   heart_king,
//   heart_queen,
//   spade_ace,
//   spade_2,
//   spade_3,
//   spade_4,
//   spade_10,
//   spade_5,
//   spade_6,
//   spade_7,
//   spade_8,
//   spade_9,
//   spade_jack,
//   spade_king,
//   spade_queen,
// };
