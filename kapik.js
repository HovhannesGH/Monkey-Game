let reply = document.getElementById('reply');
let xaxiHashivLose = 0;
let xaxiHashivWin = 0;
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let monkey1 = document.getElementById('monkey1');
let monkey2 = document.getElementById('monkey2');
let play = document.getElementById('play');
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let win = false;
let lose = false;

let time = '';
let monk = '';

document.getElementById('menu').onclick = () => {
    document.location.reload();
}


easy.onclick = () => {
    easy.classList.add('addShadow');
    medium.classList.remove('addShadow');
    hard.classList.remove('addShadow');
    time = 'easy';
}
medium.onclick = () => {
    easy.classList.remove('addShadow');
    medium.classList.add('addShadow');
    hard.classList.remove('addShadow');
    time = 'medium';
}
hard.onclick = () => {
    easy.classList.remove('addShadow');
    medium.classList.remove('addShadow');
    hard.classList.add('addShadow');
    time = 'hard';
}

monkey1.onclick = () => {
    monkey1.classList.add('addShadow');
    monkey2.classList.remove('addShadow');
    monk = 'monk1';
}
monkey2.onclick = () => {
    monkey1.classList.remove('addShadow');
    monkey2.classList.add('addShadow');
    monk = 'monk2';
}


function game() {

    for (let i = 0; i < document.getElementsByClassName('banan').length; i++) {
        document.getElementsByClassName('banan')[i].style.top = Math.round(Math.random() * 90) + '%';
        document.getElementsByClassName('banan')[i].style.left = Math.round(Math.random() * 90) + '%';
        document.getElementsByClassName('banan')[i].classList.remove('rr');
    }

    if (monk == 'monk1') {
        document.getElementById('q6-kapik').setAttribute('src', './images/monkey1.webp');
        page2.style.backgroundImage = 'url(images/garden1.png)';
        page2.style.backgroundSize = 'cover';
    } else {
        document.getElementById('q6-kapik').setAttribute('src', './images/monkey2.webp');
        page2.style.backgroundImage = 'url(images/garden2.jpg)';
        page2.style.backgroundSize = 'cover';
    }

    let u = 45;
    if (time == 'easy') {
        u = 45;
    } else if (time == 'medium') {
        u = 30;
    } else {
        u = 15;
    }
    let stop = setInterval(() => {
        u--;
        document.getElementById('jamanak').innerHTML = u;
        if (u == 0) {
            clearInterval(stop);
            document.getElementById('gameOver').style.display = 'block';
            document.onkeydown = null;
            reply.style.display = 'block';
            xaxiHashivLose++;
            document.getElementById('hashivLose').innerHTML = xaxiHashivLose;
        }
    }, 1000);


    document.onkeydown = function (e) {
        let ll = document.getElementById('q6').offsetLeft;
        let tt = document.getElementById('q6').offsetTop;

        let ll1 = document.getElementById('q').offsetLeft;
        let tt1 = document.getElementById('q').offsetTop;


        let ll2 = document.getElementById('q1').offsetLeft;
        let tt2 = document.getElementById('q1').offsetTop;

        let ll3 = document.getElementById('q2').offsetLeft;
        let tt3 = document.getElementById('q2').offsetTop;

        let ll4 = document.getElementById('q3').offsetLeft;
        let tt4 = document.getElementById('q3').offsetTop;

        let ll5 = document.getElementById('q4').offsetLeft;
        let tt5 = document.getElementById('q4').offsetTop;

        let ll6 = document.getElementById('q5').offsetLeft;
        let tt6 = document.getElementById('q5').offsetTop;

        if (e.keyCode == 38 || e.keyCode == 87) {
            tt = tt - 10
            document.getElementById('q6').style.top = tt + 'px';
        }
        if (e.keyCode == 40 || e.keyCode == 83) {
            tt = tt + 10;
            document.getElementById('q6').style.top = tt + 'px';
        }
        if (e.keyCode == 37 || e.keyCode == 65) {
            ll = ll - 10;
            document.getElementById('q6').style.left = ll + 'px';
        }
        if (e.keyCode == 39 || e.keyCode == 68) {
            ll = ll + 10;
            document.getElementById('q6').style.left = ll + 'px';
        }

        if (ll + 50 > ll1 && ll < ll1 + 50 && tt + 50 > tt1 && tt < tt1 + 50) {
            document.getElementById('q').classList.add('rr');
        }
        if (ll + 50 > ll2 && ll < ll2 + 50 && tt + 50 > tt2 && tt < tt2 + 50) {
            document.getElementById('q1').classList.add('rr');
        }
        if (ll + 50 > ll3 && ll < ll3 + 50 && tt + 50 > tt3 && tt < tt3 + 50) {
            document.getElementById('q2').classList.add('rr');
        }
        if (ll + 50 > ll4 && ll < ll4 + 50 && tt + 50 > tt4 && tt < tt4 + 50) {
            document.getElementById('q3').classList.add('rr');
        }
        if (ll + 50 > ll5 && ll < ll5 + 50 && tt + 50 > tt5 && tt < tt5 + 50) {
            document.getElementById('q4').classList.add('rr');
        }
        if (ll + 50 > ll6 && ll < ll6 + 50 && tt + 50 > tt6 && tt < tt6 + 50) {
            document.getElementById('q5').classList.add('rr');
        }

        let cl = document.getElementsByClassName('rr').length * 5;
        document.getElementById('miavor').innerHTML = cl;
        console.log(cl);
        if (cl == 30) {
            document.getElementById('winner').style.display = 'block';
            clearInterval(stop);
            document.onkeydown = null;
            reply.style.display = 'block';
            xaxiHashivWin++;
            document.getElementById('hashivWin').innerHTML = xaxiHashivWin;
        }
    }

}

play.onclick = function () {
    if (time != '' && monk != '') {
        page1.style.display = 'none';
        page2.style.display = 'block';
        game();
    }
}

reply.onclick = () => {
    reply.style.display = 'none';
    document.getElementById('winner').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('q6').style.top = '400px';
    document.getElementById('q6').style.left = '65%';
    document.getElementById('miavor').innerHTML = '';
    return game();
}