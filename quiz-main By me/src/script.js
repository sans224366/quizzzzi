
let ishaqk = document.querySelector('.start-wrapper')
let ishak = document.querySelector('.start-button')
let ishaki = document.querySelector('.quiz-wrapper')

function llll() {
    ishaqk.classList.toggle('hide')
    ishaki.classList.toggle('hide')
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}

ishak.addEventListener('click', llll)


let a = getRandomInt(0, 101)
let c = getRandomInt(1, 50)
let b = getRandomInt(1, 50)
let v = 0
let d = getRandomInt(-50, 50)
let f = getRandomInt(-50, 50)
let g = getRandomInt(-50, 50)
let h = getRandomInt(-50, 50)
ans1 = document.querySelector('.answer-1')
ans2 = document.querySelector('.answer-2')
ans3 = document.querySelector('.answer-3')
ans4 = document.querySelector('.answer-4')
ans5 = document.querySelector('.answer-5')
let ff = getRandomInt(1, 101)

let ishakki = document.querySelector('.question-heading')
if (Number(a) <= 50) {
    v = c + b
    ishakki.innerHTML = (c + ' + ' + b)
} else if (Number(a) >= 51) {
    v = c - b
    ishakki.innerHTML = (c + ' - ' + b)
}
function gener() {
    d = getRandomInt(-50, 76)
    f = getRandomInt(-50, 76)
    g = getRandomInt(-50, 76)
    h = getRandomInt(-50, 76)
    a = getRandomInt(0, 101)
    c = getRandomInt(1, 50)
    b = getRandomInt(1, 50)
    if (Number(a) <= 50) {
        v = c + b
        ishakki.innerHTML = (c + ' + ' + b)
    } else if (Number(a) >= 51) {
        v = c - b
        ishakki.innerHTML = (c + ' - ' + b)
    }
    console.log(v)
}

let rightans = 0
function getff() {
    ff = getRandomInt(0, 101)

    if (ff >= 0 && ff < 15) {
        ans1.innerHTML = (v)
        ans1.className = 'right'
        ans2.innerHTML = (f)
        ans2.className = 'left'
        ans3.innerHTML = (g)
        ans3.className = 'left'
        ans4.innerHTML = (d)
        ans4.className = 'left'
        ans5.innerHTML = (h)
        ans5.className = 'left'
    }
    else if (ff >= 15 && ff < 25) {
        ans1.innerHTML = (f)
        ans1.className = 'left'
        ans2.innerHTML = (v)
        ans2.className = 'right'
        ans3.innerHTML = (d)
        ans3.className = 'left'
        ans4.innerHTML = (h)
        ans4.className = 'left'
        ans5.innerHTML = (g)
        ans5.className = 'left'
    }
    else if (ff >= 25 && ff < 35) {
        ans1.innerHTML = (f)
        ans1.className = 'left'
        ans2.innerHTML = (g)
        ans2.className = 'left'
        ans3.innerHTML = (v)
        ans3.className = 'right'
        ans4.innerHTML = (d)
        ans4.className = 'left'
        ans5.innerHTML = (h)
        ans5.className = 'left'
    }
    else if (ff >= 35 && ff < 50) {
        ans1.innerHTML = (h)
        ans1.className = 'left'
        ans2.innerHTML = (g)
        ans2.className = 'left'
        ans3.innerHTML = (d)
        ans3.className = 'left'
        ans4.innerHTML = (v)
        ans4.className = 'rigth'
        ans5.innerHTML = (f)
        ans5.className = 'left'
    }
    else if (ff >= 50 && ff < 60) {
        ans1.innerHTML = (d)
        ans1.className = 'left'
        ans2.innerHTML = (f)
        ans2.className = 'left'
        ans3.innerHTML = (g)
        ans3.className = 'left'
        ans4.innerHTML = (v)
        ans4.className = 'right'
        ans5.innerHTML = (h)
        ans5.className = 'left'
    }
    else if (ff >= 60 && ff < 75) {
        ans1.innerHTML = (g)
        ans1.className = 'left'
        ans2.innerHTML = (f)
        ans2.className = 'left'
        ans3.innerHTML = (h)
        ans3.className = 'left'
        ans4.innerHTML = (d)
        ans4.className = 'left'
        ans5.innerHTML = (v)
        ans5.className = 'right'

    }
    else if (ff >= 75 && ff < 90) {
        ans1.innerHTML = (g)
        ans1.className = 'left'
        ans2.innerHTML = (v)
        ans2.className = 'right'
        ans3.innerHTML = (f)
        ans3.className = 'left'
        ans4.innerHTML = (h)
        ans4.className = 'left'
        ans5.innerHTML = (d)
        ans5.className = 'left'

    }
    else if (ff >= 90) {
        ans1.innerHTML = (v)
        ans1.className = 'right'
        ans2.innerHTML = (f)
        ans2.className = 'left'
        ans3.innerHTML = (h)
        ans3.className = 'left'
        ans4.innerHTML = (g)
        ans4.className = 'left'
        ans5.innerHTML = (d)
        ans5.className = 'left'
    }
}
let loser = document.querySelector('.lose')
let lifes = 3
let txtff = loser.querySelector('#txtpob')
getff()

function check_ans1() {
    let answ1 = ans1.innerHTML
    if (answ1 == v) {
        document.getElementById('yes').play()
        console.log('правильно')
        gener()
        getff()
        rightans += 1
    }
    else {
        lifes -= 1
        document.getElementById('no').play()
        if (lifes <= 0) {
            document.getElementById('xa').play()
            ishaki.classList.toggle('hide')
            loser.classList.toggle('hide')
            txtff.innerHTML = ('Ты дал: ' + rightans + " правильных ответов")
        }
        console.log(lifes)
        gener()
        getff()
    }

}
function check_ans2() {
    let answ2 = ans2.innerHTML
    if (answ2 == v) {
        document.getElementById('yes').play()
        rightans += 1
        console.log('правильно')
        gener()
        getff()
    }
    else {
        lifes -= 1
        document.getElementById('no').play()
        if (lifes <= 0) {
            document.getElementById('xa').play()
            txtff.innerHTML = ('Ты дал: ' + rightans + " правильных ответов")
            ishaki.classList.toggle('hide')
            loser.classList.toggle('hide')
        }
        console.log(lifes)
        gener()
        getff()
    }

}
function check_ans3() {
    let answ3 = ans3.innerHTML
    if (answ3 == v) {
        document.getElementById('yes').play()
        rightans += 1
        console.log('правильно')
        gener()
        getff()
    }
    else {
        lifes -= 1
        document.getElementById('no').play()
        if (lifes <= 0) {
            document.getElementById('xa').play()
            txtff.innerHTML = ('Ты дал: ' + rightans + " правильных ответов")
            ishaki.classList.toggle('hide')
            loser.classList.toggle('hide')
        }
        console.log(lifes)
        gener()
        getff()
    }

}
function check_ans4() {
    let answ4 = ans4.innerHTML
    if (answ4 == v) {
        document.getElementById('yes').play()
        rightans += 1
        console.log('правильно')
        gener()
        getff()
    }
    else {
        lifes -= 1
        document.getElementById('no').play()
        if (lifes <= 0) {
            document.getElementById('xa').play()
            txtff.innerHTML = ('Ты дал: ' + rightans + " правильных ответов")
            ishaki.classList.toggle('hide')
            loser.classList.toggle('hide')
        }
        console.log(lifes)
        gener()
        getff()
    }

}
function check_ans5() {
    let answ5 = ans5.innerHTML
    if (answ5 == v) {
        document.getElementById('yes').play()
        rightans += 1
        console.log('правильно')
        gener()
        getff()
    }
    else {
        lifes -= 1
        document.getElementById('no').play()
        if (lifes <= 0) {
            document.getElementById('xa').play()
            txtff.innerHTML = ('Ты дал: ' + rightans + " правильных ответов")
            ishaki.classList.toggle('hide')
            loser.classList.toggle('hide')
        }
        console.log(lifes)
        gener()
        getff()
    }

}


ans1.addEventListener('click', check_ans1)
ans2.addEventListener('click', check_ans2)
ans3.addEventListener('click', check_ans3)
ans4.addEventListener('click', check_ans4)
ans5.addEventListener('click', check_ans5)
console.log(v)


