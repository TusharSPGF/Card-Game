let card = document.getElementById("cards")
let total = document.getElementById("total")
let ctotal = document.getElementById("ctotal")
let msg = document.getElementById("msg")
let pcard = []
let sum = 0
let csum = 0
let win = false
let game = true
let sgame = false
var player = prompt("Enter Player Name : ")
var ammount = prompt("Enter The Ammount : ")

function getRandomNum() {
    let rand = Math.floor((Math.random() * 13) + 1)
    if (rand > 10)
        return 10
    else if (rand == 1)
        return 11
    else
        return rand
}

function newCard() {
    if (win == false && game == true && sgame == true) {
        let num = getRandomNum()
        pcard.push(num)
        sum += num

        while (csum < 17 && csum < sum) {
            let cnum = getRandomNum()
            csum += cnum
        }

        render()
        if (sum > 21) {
            winner()
        }
    }
}

function start() {
    sgame = true
    let num1 = getRandomNum()
    let num2 = getRandomNum()
    sum = num1 + num2
    let cn1 = getRandomNum()
    let cn2 = getRandomNum()
    csum = cn1 + cn2
    pcard = [num1, num2]
    render()
}

function render() {
    card.innerHTML = "Cards : "
    for (let i = 0; i < pcard.length; i++) {
        card.innerHTML += ` ${pcard[i]} `
    }
    total.innerHTML = `Total : ${sum}`
    ctotal.innerHTML = `Computer Total : ${csum}`
    if (sum < 21) {
        msg.innerHTML = "Do You Want Another Card"
    }
    else if (sum == 21) {
        ammount *= 2
        msg.innerHTML = `Congrats , ${player} , you won Rs.${ammount}`
        win = true
        setTimeout(() => {
            document.location.reload();
        }, 3000);// location.reload()
    }
    else {
        msg.innerHTML = `Sorry , ${player} , your Rs.${ammount} is gaya`
        game = false
        setTimeout(() => {
            document.location.reload();
        }, 3000);// location.reload()
    }
}

function winner() {
    if (sgame == true) {
        while (csum < 17) {
            let cnum = getRandomNum()
            csum += cnum
        }
        ctotal.innerHTML = `Computer Total : ${csum}`
        if (sum > 21 || (csum <= 21 && csum > sum)) {
            msg.innerHTML = `Sorry , ${player} , your Rs.${ammount} is gaya`
            setTimeout(() => {
                document.location.reload();
            }, 3000);// location.reload()
        }
        else if (sum == csum) {
            msg.innerHTML = ("IT is tie")
            setTimeout(() => {
                document.location.reload();
            }, 3000);// location.reload()
        }
        else {
            ammount *= 2
            msg.innerHTML = `Congrats , ${player} , you won Rs.${ammount}`
            setTimeout(() => {
                document.location.reload();
            }, 3000);// location.reload()
        }
        game = false
    }
}