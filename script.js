var tetev = 0
var himn = document.getElementsByClassName("but")
var sharq = document.getElementById("xax")
var sksel = document.getElementById("skizb")
var xosh = document.getElementsByClassName("xoshor")
var p1s = document.getElementById("p1")
var p2s = document.getElementById("p2")
var taracel = document.getElementById("taracel")
var dastijenia = document.getElementById("dastijenia")
var game = 0
var fl = 0
var x = localStorage.getItem("game", game)
var fla = localStorage.getItem("flay", fl)
var gamelev = 0
localStorage.setItem("lev",gamelev)
var lev = localStorage.getItem("lev",gamelev)

var drosh = document.getElementsByClassName("drosh")
var opshi = document.getElementsByClassName("opshi")

var tarhy = ["Նոր խաղ", "Տարածել", "Նվաճումներ", "Շարունակել", "Մակարդակ"]
var tarru = ["Новая игра", "Поделиться", "Достижение", "Продолжать", "Уровень"]
var h1ru = "Найди кота"
var h1hy = "Գտի՛ր կատվին"



p1s.onclick = function () {

    game = 1
    localStorage.setItem("game", game)

    document.body.removeChild(opshi[0]) //են առաջի էջը կորավ 
    var leveldiv = document.createElement("div")
    document.body.append(leveldiv)
    leveldiv.setAttribute("class", "leveldiv")
    var h1 = document.createElement("div")
    leveldiv.append(h1)
    h1.setAttribute("class", "hlev")
    var h1p = document.createElement("h1")
    h1.append(h1p)
    h1p.setAttribute("class", "h1p")
    if (fla == 0) {
        h1p.innerHTML = tarhy[4]
    }
    else {
        h1p.innerHTML = tarru[4]
    }

    var levelner = document.createElement("div")
    leveldiv.append(levelner)
    levelner.setAttribute("class", "levelner")


    for (let i = 0; i <= 10; i++) 
    {
        var level = document.createElement("div")
        levelner.append(level)
        level.setAttribute("id", i)
        if (window.innerWidth >=400 ) {
            level.setAttribute("class", "levels2")
        }
        else{
            level.setAttribute("class", "levels")
        }
   
              
        var p = document.createElement("p")
        p.setAttribute("class", "pner")
        p.innerHTML = i
        level.append(p)
    }

    var levs = document.getElementsByClassName("levels")


    if (levs[0]) {
       levs[0].addEventListener("click",levl1)
    }

var slak  = document.createElement("div")
levelner.append(slak)
slak.setAttribute("class","slak")

    var futer = document.createElement("div")
    leveldiv.append(futer)
    futer.setAttribute("class", "futer")
    var zv = document.createElement("img")
    futer.append(zv)
    zv.setAttribute("class", "zvuk")
    zv.src = "img/zvuk.png"

    var tun = document.createElement("img")
    futer.append(tun)
    tun.setAttribute("class", "tun")
    tun.src = "img/home.png"




    var harcs = document.createElement("img")
    futer.append(harcs)
    harcs.setAttribute("class", "harc")
    harcs.src = "img/harc.png"


}
// p2s.onclick = function () {

// window.open("www.facebook.com","blank")

// } 





drosh[0].onclick = function () {

    var p1 = document.getElementById("p1")
    var p2 = document.getElementById("p2")
    var p3 = document.getElementById("p3")
    var p4 = document.getElementById("p4")
    var hner = document.getElementsByClassName("s")
    if (localStorage.getItem("tetev", tetev) == 0) {
        fl = 1
        localStorage.setItem("flay", fl)
        fla = 1

        this.src = "img/arm.png"
        this.style.width = "47px"
        this.style.height = "47px"

        tetev = 1
        localStorage.setItem("tetev", tetev)

        p1.innerHTML = tarru[0]
        p2.innerHTML = tarru[1]
        p3.innerHTML = tarru[2]
        hner[0].innerHTML = h1ru
        if (p4) {
            p4.innerHTML = tarru[3]
        }



    }
    else if (localStorage.getItem("tetev", tetev) == 1) {

        fl = 0
        localStorage.setItem("flay", fl)
        fla = 0


        this.src = "img/rus.png"
        this.style.width = "64px"
        this.style.height = "48px"

        tetev = 0
        localStorage.setItem("tetev", tetev)

        p1.innerHTML = tarhy[0]
        p2.innerHTML = tarhy[1]
        p3.innerHTML = tarhy[2]
        hner[0].innerHTML = h1hy
        if (p4) {
            p4.innerHTML = tarhy[3]
        }


    }


}





function flag(params) {
    var p1 = document.getElementById("p1")
    var p2 = document.getElementById("p2")
    var p3 = document.getElementById("p3")
    var p4 = document.getElementById("p4")
    var hner = document.getElementsByClassName("s")
    if (fla == 0) {
        p1.innerHTML = tarhy[0]
        p2.innerHTML = tarhy[1]
        p3.innerHTML = tarhy[2]
        hner[0].innerHTML = h1hy
        drosh[0].src = "img/rus.png"
    }
    else if (fla == 1) {
        hner[0].innerHTML = h1ru
        p1.innerHTML = tarru[0]
        p2.innerHTML = tarru[1]
        p3.innerHTML = tarru[2]
        drosh[0].src = "img/arm.png"
        drosh[0].style.width = "47px"
        drosh[0].style.height = "47px"
    }


}
flag()

// localStorage.setItem("game",game)


function contineo(params) {
    if (x == 1) {

        if (sharq) {

            sharq.removeChild(sksel)
            sharq.removeChild(taracel)
            sharq.removeChild(dastijenia)
            var h1 = document.getElementsByClassName("h1")
            // h1[0].style.marginBottom = "64px"

            var shr = document.createElement("div")
            sharq.append(shr)
            shr.setAttribute("class", "sharun")
            var sharim = document.createElement("img")
            shr.append(sharim)
            sharim.setAttribute("src", "img/shar.png")
            sharim.setAttribute("class", "cont")
            var p = document.createElement("p")
            shr.append(p)
            p.setAttribute("class", "nor")
            p.setAttribute("id", "p4")
            if (fla == 0) {
                p.innerHTML = tarhy[3]
            }
            else if (fla == 1) {
                p.innerHTML = tarru[3]
            }



            var norx = document.createElement("div")
            sharq.append(norx)
            norx.setAttribute("class", "sksel")
            //  norx.setAttribute("id","skizb")
            var sharim1 = document.createElement("img")
            norx.append(sharim1)
            sharim1.setAttribute("src", "img/xoshor.png")
            sharim1.setAttribute("class", "xoshor")
            var p1 = document.createElement("p")
            norx.append(p1)
            p1.setAttribute("class", "nor")
            p1.setAttribute("id", "p1")
            if (fla == 0) {
                p1.innerHTML = tarhy[0]
            }
            else if (fla == 1) {
                p1.innerHTML = tarru[0]
            }

            norx.onclick = function (params) {

                game = 0
                x = 0
                localStorage.setItem("game", x)

            }

            var norx1 = document.createElement("div")
            sharq.append(norx1)
            norx1.setAttribute("class", "taracel")
            //   norx1.setAttribute("id","taracel")
            var a = document.createElement("a")
            norx1.append(a)
            a.setAttribute("href", "https://www.youtube.com/watch?v=I1ruXD6POfE")
            a.setAttribute("target", "_blank")
            var sharim2 = document.createElement("img")
            a.append(sharim2)
            sharim2.setAttribute("src", "img/pod.png")
            sharim2.setAttribute("class", "dost")
            var p2 = document.createElement("p")
            a.append(p2)
            p2.setAttribute("class", "nor")
            p2.setAttribute("id", "p2")
            if (fla == 0) {
                p2.innerHTML = tarhy[1]
            }
            else if (fla == 1) {
                p2.innerHTML = tarru[1]
            }



            var norx2 = document.createElement("div")
            sharq.append(norx2)
            norx2.setAttribute("class", "dastijenia")
            //    norx2.setAttribute("id","dastijenia")
            var sharim3 = document.createElement("img")
            norx2.append(sharim3)
            sharim3.setAttribute("src", "img/dost.png")
            sharim3.setAttribute("class", "dost")
            var p3 = document.createElement("p")
            norx2.append(p3)
            p3.setAttribute("class", "nor")
            p3.setAttribute("id", "p3")
            if (fla == 0) {
                p3.innerHTML = tarhy[2]
            }

            else if (fla == 1) {
                p3.innerHTML = tarru[2]
            }



        }



    }

}
contineo()








  


function levl1 () {
    console.log(4);
    if (lev==0) {
       var ids = 0
        
       var levsa  = document.getElementsByClassName("leveldiv")
document.body.removeChild(levsa[0])
          
var xaxayin = document.createElement("div")
document.body.append(xaxayin)
xaxayin.setAttribute("class","xaxayin")

var verev = document.createElement("div")
verev.setAttribute("class","vererv")
xaxayin.append(verev)

var brldiv = document.createElement("div")
brldiv.setAttribute("class","brldiv")
verev.append(brldiv)

var brlplus = document.createElement("img")
brlplus.setAttribute("src","img/plus.png")
brlplus.setAttribute("class","plus")
brldiv.append(brlplus)   


var brl = document.createElement("img")
brl.setAttribute("src","img/brliand.png")
brl.setAttribute("class","brl")
brldiv.append(brl)   

var brlp = document.createElement("p")
brlp.setAttribute("class","brlp")
brlp.innerHTML = 0
brldiv.append(brlp)

var levdiv = document.createElement("div")
levdiv.setAttribute("class","levdiv")
verev.append(levdiv)


var levin = document.createElement("h1")
levin.setAttribute("class","levin")
levdiv.append(levin)
if (fla==0) {
    levin.innerHTML = tarhy[4]
    levin.style.fontSize = "17px"
}
else{
    levin.innerHTML = tarru[4]


}
var levp = document.createElement("p")
levp.setAttribute("class","levp")
levp.innerHTML = 0
levdiv.append(levp)
levp.setAttribute("align","center")


var poxdiv = document.createElement("div")
poxdiv.setAttribute("class","poxdiv")
verev.append(poxdiv)

var poxp = document.createElement("p")
poxp.setAttribute("class","poxp")
poxp.innerHTML = 0
poxdiv.append(poxp)



var pox = document.createElement("img")
pox.setAttribute("src","img/pox.png")
pox.setAttribute("class","pox")
poxdiv.append(pox) 
var poxplus = document.createElement("img")
poxplus.setAttribute("src","img/poxplus.png")
poxplus.setAttribute("class","poxplus")
poxdiv.append(poxplus)   



var gamediv = document.createElement("div")
gamediv.setAttribute("class","gamediv")
xaxayin.append(gamediv)



var tbl = document.createElement('table')
gamediv.appendChild(tbl)
tbl.setAttribute("class","table")
// tbl.style.margin = 'auto'
var tbd = document.createElement('tbody')

tbl.appendChild(tbd)
var m = 10
var n = 10
for (let i = 0; i < m; i++) {
    var tr = document.createElement('tr')
    tbd.appendChild(tr)
    tr.setAttribute("id",i)
 


    for (let j = 0; j < n; j++) {
        var td = document.createElement('td')
        tr.appendChild(td)
        td.setAttribute("class","td")
        td.setAttribute("id",j)
        td.style.backgroundColor = "transparent"
        // td.style.width = 50 + 'px'
        // td.style.height = 50 + 'px'
        td.onclick = function (params) {
      
            
if (this.id==3&&this.parentElement.id==2) {
    console.log("4");
    
}

        }

    }
}



var futerdiv = document.createElement("div")
futerdiv.setAttribute("class","futerdiv")
xaxayin.append(futerdiv)



var zvuk = document.createElement('img')
futerdiv.appendChild(zvuk)
zvuk.setAttribute("class","zvuk")
zvuk.src = "img/zvuk.png"


var ogndiv = document.createElement('div')
futerdiv.appendChild(ogndiv)
ogndiv.setAttribute("class","ogndiv")


var ogn1 = document.createElement('img')
ogndiv.appendChild(ogn1)
ogn1.setAttribute("class","ogn1")
ogn1.src = "img/ogn.png"

var ogn2 = document.createElement('img')
ogndiv.appendChild(ogn2)
ogn2.setAttribute("class","sos")
ogn2.src = "img/sos.png"




    }

} 



//innerHeight: 736
//innerWidth: 414