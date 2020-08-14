// Add Lives Possibly?

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;

// Globals
const grid = 80;
let keys = []
let score = 0;
let collisionsCount = 0;
let gameSpeed = 1;
let safe = false;

const particlesArray = [];
const maxParticles = 300;
const arrowsArray = [];
const rocksArray = [];

const arrowsSprite = new Image();
arrowsSprite.src = "sprites/arrows.png"

const rocksSprite = new Image();
rocksSprite.src = "sprites/rock.png";

const dragonSprite = new Image();
dragonSprite.src = "sprites/dragon.png";

const rubySprite = new Image();
rubySprite.src = "sprites/ruby.png";


