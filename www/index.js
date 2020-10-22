import { Universe }from "rust-wasm-ping-pong";
import { memory } from "rust-wasm-ping-pong/rust_wasm_ping_pong_bg";

const BOARD_COLOUR = "#000000";
const STUFF_COLOUR = "#FFFFFF";
const HEIGHT = 600;
const WIDTH = 800;

const MAX_SCORE = 5;
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 5;
const PADDLE_OFFSET = 20;
const PADDLE_VELOCITY = 15;
const BALL_SIZE = 5;
const BALL_X_VELOCITY = 2;
const BALL_MAX_Y_VELOCITY = 6;
const pre = document.getElementById("score")
const canvas = document.getElementById("board");
const ctx = canvas.getContext('2d');
canvas.height = HEIGHT;
canvas.width = WIDTH;

let universe = Universe.new(HEIGHT, WIDTH, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_OFFSET, BALL_SIZE, PADDLE_VELOCITY, BALL_X_VELOCITY, BALL_MAX_Y_VELOCITY, MAX_SCORE);
let ballPositionPtr = universe.ball_pos();
let paddlesPositionPtr = universe.paddles_y_pos();
let scorePositionPtr = universe.score();
let gameStatePtr = universe.game_state();
let ballPositionArray = new Float64Array(memory.buffer, ballPositionPtr, 2);
let paddlesPositionArray = new Float64Array(memory.buffer, paddlesPositionPtr, 2);
let scoreArray = new Uint8Array(memory.buffer, scorePositionPtr, 2);
let gameState = new Uint8Array(memory.buffer, gameStatePtr, 1);


const tick = () => {
    universe.tick();
    drawBoard();
    drawScore();
    requestAnimationFrame(tick);
} 

requestAnimationFrame(tick);

const drawScore = () => {
    pre.textContent = `${gameState[0] ? "Game Over" : "Game In Progress"} \n ${scoreArray[0]} : ${scoreArray[1]}`;
}

const drawBoard = () => {
    ctx.beginPath();
    ctx.fillStyle = BOARD_COLOUR;
    ctx.fillRect(
        0,
        0,
        WIDTH,
        HEIGHT
        );
    ctx.fillStyle = STUFF_COLOUR;
    ctx.fillRect(
        ballPositionArray[1] - BALL_SIZE/2,
        ballPositionArray[0] - BALL_SIZE/2,
        BALL_SIZE,
        BALL_SIZE
    );
    ctx.fillRect(
        PADDLE_OFFSET,
        paddlesPositionArray[0] - PADDLE_HEIGHT/2,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
    );
    ctx.fillRect(
        WIDTH - PADDLE_OFFSET - PADDLE_WIDTH,
        paddlesPositionArray[1] - PADDLE_HEIGHT/2,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
    );
    ctx.stroke();
}

document.getElementById("restart").addEventListener("click", () => {
    universe = Universe.new(HEIGHT, WIDTH, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_OFFSET, BALL_SIZE, PADDLE_VELOCITY, BALL_X_VELOCITY, BALL_MAX_Y_VELOCITY, MAX_SCORE);
    ballPositionPtr = universe.ball_pos();
    paddlesPositionPtr = universe.paddles_y_pos();
    scorePositionPtr = universe.score();
    gameStatePtr = universe.game_state();
    ballPositionArray = new Float64Array(memory.buffer, ballPositionPtr, 2);
    paddlesPositionArray = new Float64Array(memory.buffer, paddlesPositionPtr, 2);
    scoreArray = new Uint8Array(memory.buffer, scorePositionPtr, 2);
    gameState = new Uint8Array(memory.buffer, gameStatePtr, 1); 
});

document.addEventListener("keydown", event => {
    universe.key_pressed(event.key);
});

