/*
    Hold API's related to lobby details
*/
var config = require('../config.json');
var loginInfo = require('../data-interface/login.js');
var broadcast = require('../../utilities.js').broadcast;
var arenaInfo = {
    pot: 0,
    users: {
        // Chips, Bet, Rank, state
    },
    smallBlind: null,
    bigBlind: null,
    dealer: null,
    round: 0
};

function startGame(io){
    var users = Object.keys(arenaInfo.users);
    if (config.game.playerCount > 2) {
        arenaInfo.users[users[1]] = config.game.smallBlind;
        arenaInfo.users[users[2]] = 2 * config.game.smallBlind;
        arenaInfo.dealer = users[0];
        arenaInfo.smallBlind = users[1];
        arenaInfo.bigBlind = users[2]; 
    } else {
        arenaInfo.users[users[0]] = config.game.smallBlind;
        arenaInfo.users[users[1]] = 2 * config.game.smallBlind;
        arenaInfo.dealer = users[0];
        arenaInfo.smallBlind = users[0];
        arenaInfo.bigBlind = users[1]; 
    }

    console.log(arenaInfo);
    broadcast(io, 'broadcastarena', arenaInfo);
}

function initialize(io, name) {
    arenaInfo.users[name] = {
        chips: config.game.initialAmount,
        Bet: 0,
        Rank: 0,
        state: null
    }

    console.log(arenaInfo.users);
    if (config.game.playerCount === Object.keys(arenaInfo.users).length){
        console.log(Object.keys(arenaInfo.users).length);
        startGame(io);
    }
}

exports.getInitialInfo = function(io, name) {
    initialize(io, name);
};

exports.getArenaInfo = function() {
    return arenaInfo;
};

exports.setArenaInfo = function(obj) {
    arenaInfo = JSON.parse(JSON.stringify(obj));
};