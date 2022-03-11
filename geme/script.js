function generator(matLen, gr, grEat, pr, ae, s, wa,bom) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < ae; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < s; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < wa; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    for (let i = 0; i < bom; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }
    return matrix;
}

let side = 20;

let matrix = generator(20, 35, 15, 11, 10, 8, 5, 7);

let grassArr = []
let grassEaterArr = []
let predatorArr = []
let amenakerArr = []
let SunkArr = []
let grassWall = []
let grassBoomb = []
function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(3)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y)
                grassEaterArr.push(grE)
            } else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            } else if (matrix[y][x] == 4) {
                let am = new Amenaker(x, y)
                amenakerArr.push(am)
            }
            else if (matrix[y][x] == 5) {
                let su= new sunk(x, y)
                SunkArr.push(su)
            }
            else if (matrix[y][x] == 6) {
                let wa = new Wall(x, y)
                grassWall.push(wa)
            }
            else if (matrix[y][x] == 7) {
                let bom = new boomb(x, y)
                grassBoomb.push(bom)
            }
        }
    }

    }


function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green')
            } else if (matrix[y][x] == 0) {
                fill('#acacac')
            } else if (matrix[y][x] == 2) {
                fill('yellow')
            } else if (matrix[y][x] == 3) {
                fill('red')
            } else if (matrix[y][x] == 4) {
                fill('blue')
            } else if (matrix[y][x] == 5) {
                fill('#c50be6')
            }
            else if (matrix[y][x] == 6) {
                fill('#e65b0b')
            }
            else if (matrix[y][x] == 7) {
                fill('#42f5e3')
            }
            rect(x * side, y * side, side, side)
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].eat()
    }
    for (let i in amenakerArr) {
        amenakerArr[i].mul()
        amenakerArr[i].eat()
    }
    for (let i in SunkArr) {
        SunkArr[i].mul()
    }
    for (let i in grassWall) {
        grassWall[i].mul()
    }
    for (let i in grassBoomb) {
        grassBoomb[i].mul()
        grassBoomb[i].eat()
    }
}
var clickCount = 0;
function draw2(evt) {
    clickCount++;
    console.log(evt);
    var str = "sammer" + clickCount;
    this.innerText = str;
}



function draw2() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('yellow')
            } else if (matrix[y][x] == 2) {
                fill('red')
            } else if (matrix[y][x] == 4) {
                fill('ba8d8d')
            } else if (matrix[y][x] == 6) {
                fill('er34sr')
            } else if (matrix[y][x] == 0) {
                fill('#FFFFFF')
            } else if (matrix[y][x] == 3) {
                fill('#FFFFFF')
            } else if (matrix[y][x] == 5) {
                fill('red')
            } else if (matrix[y][x] == 7) {
                fill('#FFFFFF')
            }
            rect(x * side, y * side, side, side)
        }
    }
}



var p = document.getElementById("pElement");
p.addEventListener("click", draw2);

var clickCount = 0;
function draw4(evt) {
    clickCount++;
    console.log(evt);
    var str = "sammer" + clickCount;
    this.innerText = str;
}
function draw4() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('yellow')
            } else if (matrix[y][x] == 2) {
                fill('red')
            } else if (matrix[y][x] == 4) {
                fill('yellow')
            } else if (matrix[y][x] == 6) {
                fill('red')
            } else if (matrix[y][x] == 0) {
                fill('yellow')
            } else if (matrix[y][x] == 3) {
                fill('red')
            } else if (matrix[y][x] == 5) {
                fill('yellow')
            } else if (matrix[y][x] == 7) {
                fill('red')
            }
            rect(x * side, y * side, side, side)
        }
    }
}

var p = document.getElementById("pElement2");
p.addEventListener("click", draw4);


var statistics = {};
let a = 45;
let b = 10;
let c = 20;
let e = 10;
let d = 10;
let k = 10;
let z = 11;
setInterval(function () {
    statistics.grass = a++;
    statistics.grassEater = b++;
    statistics.sunk = c++;
    statistics.pat = e++;
    statistics.averich = d++;
    statistics.amenaker = k++;
    statistics.Predator = z++;


}, 1000)




var clickCount = 1;
function statis(evt) {
    clickCount++;
    console.log(evt);
    var str = "sammer" + clickCount;
    this.innerText = str;
}

function statis() {
    console.log(setInterval(function () {
        statistics.grass = a++;
        statistics.grassEater = b++;
        statistics.sunk = c++;
        statistics.pat = e++;
        statistics.averich = d++;
        statistics.amenaker = k++;
        statistics.Predator = z++;

    }, 1000));

    console.log(statistics);




}
var p = document.getElementById("pElement6");
p.addEventListener("click", statis);


function windowLoad() {
    console.log("winter");
}
window.onload = windowLoad;




function mul() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('#FFFFFF')
            } else if (matrix[y][x] == 2) {
                fill('#74rtde')
            } else if (matrix[y][x] == 4) {
                fill('#FFFFFF')
            } else if (matrix[y][x] == 6) {
                fill('#c05cd6')
            } else if (matrix[y][x] == 0) {
                fill('#6d7dbd')
            } else if (matrix[y][x] == 3) {
                fill('#4fe3a8')
            } else if (matrix[y][x] == 5) {
                fill('#abba93')
            } else if (matrix[y][x] == 7) {
                fill('#7789a6')
            }
            rect(x * side, y * side, side, side)
        }
    }
   

}

var clickCount = 3;
function zmer(evt) {
    clickCount++;
    console.log(evt);
    var str = "sammer" + clickCount;
    this.innerText = str;
}
function zmer() {
    document.addEventListener("click", function () {
        setInterval(function () {
            document.getElementById("pElement3").click();
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill('#FFFFFF')
                    } else if (matrix[y][x] == 2) {
                        fill('#C0C0C0')
                    } else if (matrix[y][x] == 4) {
                        fill('#6666FF')
                    } else if (matrix[y][x] == 6) {
                        fill('#FF6666')
                    } else if (matrix[y][x] == 0) {
                        fill('#606060')
                    } else if (matrix[y][x] == 3) {
                        fill('#66FFFF')
                    } else if (matrix[y][x] == 5) {
                        fill('#000000')
                    } else if (matrix[y][x] == 7) {
                        fill('#FFFF99')
                    }
                    rect(x * side, y * side, side, side)
                }
            }


        }, 0);

    });

}


var p = document.getElementById("pElement3");
p.addEventListener("click", zmer);
