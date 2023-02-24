function game() {
    let paper = document.querySelector(".p2")
    let scissors = document.querySelector(".sc")

    paper.style.cssText = `
    opacity:1;
    `
    scissors.style.cssText = `
    opacity:1;
    `
    paprluser()
}

function game2() {
    let stone = document.querySelector(".p")
    let scissors = document.querySelector(".s2")

    stone.style.cssText = `
    opacity:1;
    `
    scissors.style.cssText = `
    opacity:1;
    
    `
    paprluser()

}

function game3() {
    let scissors = document.querySelector(".s")
    let stone = document.querySelector(".sc2")

    scissors.style.cssText = `
    opacity:1;
    `
    stone.style.cssText = `
    opacity:1;
    `
    paprluser()
    
}
function paprluser() {
    let pluser = document.querySelector(".paper_go")
    let sluser = document.querySelector(".stone_go")
    let scluser = document.querySelector(".scissors_go")
    let youluser = document.querySelector(".luseer")



    sluser.style.cssText = `
    display:none;
    `

    scluser.style.cssText = `
    display:none;
    `
    pluser.style.cssText = `
    display:none;
    `
    youluser.style.cssText = `
    display:block;
 
    `

}