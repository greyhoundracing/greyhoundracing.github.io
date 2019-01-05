var CANVAS_WIDTH = 1024;
var CANVAS_HEIGHT = 768;
var EDGEBOARD_X = 0;
var EDGEBOARD_Y = 120;//168
var FPS = 30;
//var FPS_TIME = 1000 / FPS;
var WEB_FONT = "Arial-Bold";
var PRIMARY_FONT = "RobotoCondensed-Bold";
var SECONDARY_FONT = "Digital-7";
var TERTIARY_FONT = "RobotoCondensed-BoldItalic";
var STATE_LOADING = 0;
var STATE_MENU = 1;
var STATE_BET_PANEL = 2;
var STATE_GAME = 3;
var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT = 3;
var ON_DRAG_START = 4;
var ON_DRAG_END = 5;
var BET_PANEL_X = 43;
var BET_PANEL_Y = 165;
var BET_PANEL_WIDTH;
var BET_PANEL_HEIGHT;
var GREYHOUND_WIDTH = 338;
var GREYHOUND_HEIGHT = 170;
var CHIP_VALUES;
var NUM_CHIPS;
var NUM_GREYHOUNDS;
var MIN_BET;
var MAX_BET;
var WIN_OCCURRENCE;
var NUM_TRACK_BG = 18;//416;
//var RACE_TIME = Math.round(NUM_TRACK_BG / (FPS/2));
var ARRIVAL_X = 491;
var TIME_CHECK_RANK = 3000;
var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;
var SHOW_CREDITS;
var DISABLE_SOUND_MOBILE = false;
var SOURCE_PATH = "";
//
//var FREE_COIN = 100;
var START_CREDIT = 0;
var MY_BALANCES = [{name:"TRX",available:100},{name:"DOGE",available:9884},{name:"LTC",available:1.345}];
var MY_ODDS = { COIN_TYPE: 0, ODDS:[0,0,0]};
var GAME_ODDS_RATE = [1,2,0.0002];
//var GAME_ODDS = [[1,2,3,5,10,20,30,50,100,200],/*"FREE COIN"*/[1,2,3,5,10,20,30,50,100,200],/*DOGE*/[0.0001,0.0002,0.0003,0.0005,0.001,0.002,0.003,0.005,0.01,0.02]/*LTC*/];