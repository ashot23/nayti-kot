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
// localStorage.setItem("game", game)
localStorage.getItem("tetev", tetev)
var fla = localStorage.getItem("flay", fl)
var gamelev = 0
var click1 = 0
var vercs = localStorage.getItem("vercra")
var erekor = Math.floor(localStorage.getItem("erekor"))
var erekamis =  Math.floor(localStorage.getItem("erekamis"))
var timesl = 0
var timess = localStorage.getItem("timess",timesl)
var sors  = new Date()
var sor = sors.getDate()
var soramis = sors.getMonth()

var zdiv = document.getElementsByClassName("zagruzkadiv")
var zagrus =   document.getElementsByClassName("zagruska")
var zagp = document.getElementsByClassName("tokos")
var l = window.innerWidth*window.innerHeight
zagp[0].style.fontSize = Math.floor(l/5000)+"px"
zdiv[0].style.width = window.innerWidth +"px"
zdiv[0].style.height = window.innerHeight +"px"
zagrus[0].style.width = window.innerWidth-100 +"px"
zagrus[0].style.height = window.innerWidth-100 +"px"
var bal = 0
var slakbal = 0 
var poxvox 
var page = 1
var ej = localStorage.getItem("ej",page)
poxvox = ej
var lev = localStorage.getItem("lev", gamelev)
var cls = 0
var click2 = localStorage.getItem("cl1", cls)
var ka = localStorage.getItem("ka")
var ka2 = localStorage.getItem("ka2")
var ka3 = localStorage.getItem("ka3")
var drosh = document.getElementsByClassName("drosh")
var opshi = document.getElementsByClassName("opshi")
var chap = 3000
var snduk = localStorage.getItem("data")
var gumar = 300
var zmruxt = 100
var uroven = 10
                   

               //    0      1           2             3               4          5                6                               7     8     9                                    10                     11                 12                 13                        14                                                  15                   16                      17
var tarhy = ["Նոր խաղ", "Կապ", "Նվաճումներ", "Շարունակել", "Մակարդակ","Շնորհավոր !!","Դուք ցանկանու՞մ եք սկսել 0-ից","Այո","Ոչ","Անցի՛ր մինչև 5-րդ մակարդակ","Հավաքի'ր  46 Բրլիանտ","Հավաքի'ր 180 փող","Դուք վաստակեցիք","Դեռ նվաճումներ չկան","Շնորհավոր դուք վաստակեցիք նոր նվաճում","Անցի՛ր մինչև 5-րդ մակարդակ","Հավաքի'ր 46 Բրլիանտ","Հավաքի'ր 180 փող"]
var tarru = ["Новая игра", "Контакты", "Достижение", "Продолжать", "Уровень","Поздравляю !!","Вы хотите начать с нуля ?","Да","Нет","Перейти вплоть до на 5 уровень!","Соберите 46 бриллиантов!","Собрать 180 денег!","Вы заработали","Пока нет достижений","Поздравляю с новым достижением!","Перейти вплоть до на 5 уровень!","Соберите 46 бриллиантов!","Собрать 180 денег!"]
var h1ru = "Найди кота"
var h1hy = "Գտի՛ր կատվին"


var adamand = localStorage.getItem("adam")
var para = localStorage.getItem("para")

var k1 = new Audio("audio/k1.mp3")



// k1.mutet = false
//    k1.load()
function tokos(params) {
    window.open("index.html")
    var c = 0
var p = document.getElementById("tok")
p.innerHTML = 0 + "%"
var st = setInterval(zags,20)
function zags(params) {
   
    c++
    p.innerHTML = c + "%"
    if (c==1) {
        p.innerHTML = "Complete"
        clearInterval(st)
        setTimeout(() => {
          
             if (x == null) {
                 console.log("x chka");
                 

    ej = 1  
    page = 1
    localStorage.setItem("ej",page)
    poxvox = ej
    lev = 0
    gamelev = 0
    localStorage.setItem("lev", gamelev)
    cl =  0
    sxm = 0
    ka = 0
    localStorage.setItem("ka",0)
    ka2 = 0
    localStorage.setItem("ka2",0)
     
    
adam = 40
localStorage.setItem("adam", adam)
adamand = 40

par = 160
localStorage.setItem("para", par)
para = 160
click2 =  0
cls = 0
localStorage.setItem("cl1", cls) 
click1 = 0

                game = 0
                x = 0
                localStorage.setItem("game", game)
                fl = 0
                localStorage.setItem("flay", fl)
                fla = 0
                tetev = 0
                localStorage.setItem("tetev", tetev)
               


                timesl = 0
            timess = 0
            localStorage.setItem("timess",timesl)
            verc = 0
            localStorage.setItem("vercra",verc)
            vercs = 0
           
            }
        
            contineo()  
            data()
        }, 300);
       
    }
}

}

tokos()

function data(params) {
    
    
 



    if (timess==0) {
      console.log("araji angam");
       verc = 0
       localStorage.setItem("vercra",verc)
       vercs = 0
      timesl = 1
      timess = 1
      localStorage.setItem("timess",timesl)
      var times = new Date()
      localStorage.setItem("erekor",times.getDate())
      localStorage.setItem("erekamis",times.getMonth())
      // localStorage.setItem("time",times.getMinutes())
    }
    else if (timess==1&&x==1) {

 
      if (sor>erekor&&erekamis==soramis) {
        
        console.log("ha");
          
        if (vercs==0) {
            console.log("vercreci vercs = 0");
            vercra()   
    
        }
        else if (vercs==2) {
            
            timesl = 0
            timess = 0
            localStorage.setItem("timess",timesl)
            verc = 0
            localStorage.setItem("vercra",verc)
            vercs = 0
        }


    
      }           //1!= 2                 31-1=30 30-1
      else if (erekamis!=soramis) {
        if (sor-erekor==30||sor-erekor==29||sor-erekor==28||sor-erekor==27||sor-erekor==26||sor-erekor==25||sor-erekor==24||sor-erekor==23||sor-erekor==22||sor-erekor==21||sor-erekor==20||sor-erekor==19||sor-erekor==18||sor-erekor==17||sor-erekor==16||sor-erekor==15||sor-erekor==14||sor-erekor==13||sor-erekor==12||sor-erekor==11||sor-erekor==10||sor-erekor==9||sor-erekor==8||sor-erekor==7||sor-erekor==6||sor-erekor==5||sor-erekor==4||sor-erekor==3||sor-erekor==2||sor-erekor==1||sor-erekor==0) {
          
        
          if (vercs==0) {
            console.log("vercreci");
            vercra()   
    
        }
        else if (vercs==2) {
            console.log(0);
            timesl = 0
            timess = 0
            localStorage.setItem("timess",timesl)
            verc = 0
            localStorage.setItem("vercra",verc)
            vercs = 0
        }
         
  
        }
     
        
      }
        

    }
else if (timess==1&&x==0) {
    
    console.log("araji angam");
    verc = 0
    localStorage.setItem("vercra",verc)
    vercs = 0
   timesl = 1
   timess = 1
   localStorage.setItem("timess",timesl)
   var times = new Date()
   localStorage.setItem("erekor",times.getDate())
   localStorage.setItem("erekamis",times.getMonth())

}
  }

function droshinna(params) {
    k1.play()
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

    k1.play()
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
//flag()



function norxax(params) {
    k1.play()
    ej = 1
    poxvox = 1
    page = 1
    localStorage.setItem("ej",page)
    game = 0
    x = 0
    localStorage.setItem("game", x)
    lev = 0
    gamelev = 0
    localStorage.setItem("lev", gamelev)
    cl =  0
    sxm = 0
     cls = 0
     click2 = 0
     localStorage.setItem("cl1", cls)
    
adam = 40
localStorage.setItem("adam", adam)
adamand = 40

par = 160
localStorage.setItem("para", par)
para = 160
timesl = 0
timess = 0
localStorage.setItem("timess",timesl)
}

function harcpatasx() {
    k1.play()
    setTimeout(() => {
        var parent = document.body.children[1]
        var dashtparent = document.createElement("div")
        parent.append(dashtparent)
        dashtparent.setAttribute("class","dashtparent")
        dashtparent.style.width = parent.offsetWidth + "px"
        dashtparent.style.height = parent.offsetHeight + "px"
        
        var dasht = document.createElement("div")
        dashtparent.append(dasht)
        dasht.setAttribute("class","harcpat")
        dasht.style.width = parent.offsetWidth + "px"
        dasht.style.height = parent.offsetHeight/6 + "px"
        
        
        var harccna = document.createElement("div")
        dasht.append(harccna)
        harccna.setAttribute("class","harcna")
        harccna.style.width = dasht.offsetWidth + "px"
        // harccna.style.height = dasht.offsetHeight/6 + "px"
        
        var pharc = document.createElement("p")
        harccna.append(pharc)
        pharc.setAttribute("class","harcna")
        pharc.setAttribute("align","center")
        if (fla==0) {
            pharc.innerHTML = tarhy[6]
        }
        else{
            pharc.innerHTML = tarru[6]
        }
        
        
        
        var hache = document.createElement("div")
        dasht.append(hache)
        hache.setAttribute("class","hache")
        
        
        
        var che = document.createElement("div")
        hache.append(che)
        che.setAttribute("class","che")
        
        if (fla==0) {
            che.innerHTML =  tarhy[8]
        }
        else{
            che.innerHTML =  tarru[8]
        }
        
        
        che.style.width =(dasht.offsetHeight/2)-10 + "px"
        che.style.height = (dasht.offsetHeight/2)-10 + "px"
        var ha = document.createElement("div")
        hache.append(ha)
        ha.setAttribute("class","ha")
        
        
        if (fla==0) {
            ha.innerHTML = tarhy[7]
        }
        else{
            ha.innerHTML = tarru[7]
        }
        
        ha.style.width =(dasht.offsetHeight/2)-10 + "px"
        ha.style.height = (dasht.offsetHeight/2)-10 + "px"
        che.addEventListener("click",chexav)
        ha.addEventListener("click",exav) 
    }, 150);


}


function chexav(params) {
    var che = document.getElementsByClassName("che")[0]
    var dashtparent = document.getElementsByClassName("dashtparent")[0]
    k1.play()
    che.style.borderBlockEnd = "0px"
    che.style.borderRight = "0px"
    che.style.borderBlockStart = "2px solid gray"
    che.style.borderLeft = "2px solid gray"

    setTimeout(() => {
        che.style.borderBlockEnd = "2px solid gray"
        che.style.borderRight = "2px solid gray"
        che.style.borderBlockStart = "0px"
        che.style.borderLeft = "0px"

dashtparent.parentElement.removeChild(dashtparent)






    
    }, 80);
}

function exav(params) {
    var ha = document.getElementsByClassName("ha")[0]
    var dashtparent = document.getElementsByClassName("dashtparent")[0]
    ha.style.borderBlockEnd = "0px"
    ha.style.borderRight = "0px"
    ha.style.borderBlockStart = "2px solid gray"
    ha.style.borderLeft = "2px solid gray"

    setTimeout(() => {
        ha.style.borderBlockEnd = "2px solid gray"
        ha.style.borderRight = "2px solid gray"
        ha.style.borderBlockStart = "0px"
        ha.style.borderLeft = "0px"

dashtparent.parentElement.removeChild(dashtparent)
newgame()





    
    }, 80);
}



function contineo(params) {

   
    if (x == 1) {
           
        var xax = document.getElementsByClassName("xax")
        if (xax[0]) {

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
            sharim.addEventListener("click",levmyus)
            var p = document.createElement("p")
            shr.append(p)
            p.setAttribute("class", "nor")
            p.setAttribute("id", "p4")
          p.addEventListener("click",levmyus)

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


//           p1.addEventListener("click",norxax)
// sharim1.addEventListener("click",norxax)
p1.addEventListener("click",harcpatasx)
sharim1.addEventListener("click",harcpatasx)
            var norx1 = document.createElement("div")
            sharq.append(norx1)
            norx1.setAttribute("class", "taracel")
            //   norx1.setAttribute("id","taracel")
            var a = document.createElement("a")
            norx1.append(a)
            a.setAttribute("href", "https://www.facebook.com/ashot.sargsyan.1848")
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
            sharim3.addEventListener("click",dostijenia)
            p3.addEventListener("click",dostijenia)
            if (fla == 0) {
                p3.innerHTML = tarhy[2]
            }

            else if (fla == 1) {
                p3.innerHTML = tarru[2]
            }



        }
        else if (zdiv[0]) {
            document.body.removeChild(zdiv[0])
        
            var opshi = document.createElement("div")
            document.body.append(opshi)
            opshi.setAttribute("class", "opshi")
        
            var h1div = document.createElement("div")
            opshi.append(h1div)
            h1div.setAttribute("class", "h1")
        
        
            var h1div2 = document.createElement("div")
            h1div.append(h1div2)
            h1div2.setAttribute("class", "h1div")
        
        
        
            var h1 = document.createElement("h1")
            h1div2.append(h1)
            h1.setAttribute("class", "s")
        
        
            if (fla == 0) {
                h1.innerHTML = h1hy
            }
            else if (fla == 1) {
                h1.innerHTML = h1ru
            }
        
        
        
            var xax = document.createElement("div")
            opshi.append(xax)
            xax.setAttribute("class", "xax")
            xax.setAttribute("id", "xax")
        
        
        
        
            var sharun = document.createElement("div")
            xax.append(sharun)
            sharun.setAttribute("class", "sharun")
        
            var sharnk = document.createElement("img")
            sharun.append(sharnk)
            sharnk.setAttribute("class", "cont")
            sharnk.setAttribute("src", "img/shar.png")
        sharnk.addEventListener("click",levmyus)
        
            var sharp = document.createElement("p")
            sharun.append(sharp)
            sharp.setAttribute("class", "nor")
            sharp.setAttribute("id", "p4")
            sharp.addEventListener("click",levmyus)
            if (fla == 0) {
                sharp.innerHTML = tarhy[3]
            }
            else if (fla == 1) {
                sharp.innerHTML = tarru[3]
            }
         
        
        
        
            var norx = document.createElement("div")
            xax.append(norx)
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
        
        //   p1.addEventListener("click",norxax)
        // sharim1.addEventListener("click",norxax)
            
          p1.addEventListener("click",harcpatasx)
        sharim1.addEventListener("click",harcpatasx)
            var norx1 = document.createElement("div")
            xax.append(norx1)
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
            xax.append(norx2)
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
            sharim3.addEventListener("click",dostijenia)
            p3.addEventListener("click",dostijenia)
            if (fla == 0) {
                p3.innerHTML = tarhy[2]
            }
        
            else if (fla == 1) {
                p3.innerHTML = tarru[2]
            }
        
        
        
        
        
            var futer = document.createElement("div")
            opshi.append(futer)
            futer.setAttribute("class", "futer")
        
        
            var zvuk = document.createElement("img")
            futer.append(zvuk)
            zvuk.setAttribute("class", "zvuk")
        zvuk.src = "img/zvuk.png"
        
        var drosh = document.createElement("img")
        futer.append(drosh)
        drosh.setAttribute("class", "drosh")
        drosh.addEventListener("click",droshinna)
        if (fla==0) {
            drosh.src = "img/rus.png"
        }
        else if (fla==1) {
            
            drosh.src = "img/arm.png"
            drosh.style.width = "47px"
            drosh.style.height = "47px"
        
        }
        
        var harc = document.createElement("img")
        futer.append(harc)
        harc.setAttribute("class", "harc")
        harc.src = "img/harc.png"
        harc.addEventListener("click",harcakan)
        }



    }
    else if (x==0) {
         if (zdiv[0]) {
            document.body.removeChild(zdiv[0])
        }


        var opshi = document.createElement("div")
        document.body.append(opshi)
        opshi.setAttribute("class", "opshi")
    
        var h1div = document.createElement("div")
        opshi.append(h1div)
        h1div.setAttribute("class", "h1")
    
    
        var h1div2 = document.createElement("div")
        h1div.append(h1div2)
        h1div2.setAttribute("class", "h1div")
    
    
    
        var h1 = document.createElement("h1")
        h1div2.append(h1)
        h1.setAttribute("class", "s")
    
    
        if (fla == 0) {
            h1.innerHTML = h1hy
        }
        else if (fla == 1) {
            h1.innerHTML = h1ru
        }
    
    
    
        var xax = document.createElement("div")
        opshi.append(xax)
        xax.setAttribute("class", "xax")
        xax.setAttribute("id", "xax")
    
    
    
    
    
        var norx = document.createElement("div")
        xax.append(norx)
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
    
      p1.addEventListener("click",newgame)
    sharim1.addEventListener("click",newgame)
        var norx1 = document.createElement("div")
        xax.append(norx1)
        norx1.setAttribute("class", "taracel")
        //   norx1.setAttribute("id","taracel")
        var a = document.createElement("a")
        norx1.append(a)
        a.setAttribute("href", "https://www.facebook.com/ashot.sargsyan.1848")
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
        xax.append(norx2)
        norx2.setAttribute("class", "dastijenia")
        //    norx2.setAttribute("id","dastijenia")
        var sharim3 = document.createElement("img")
        norx2.append(sharim3)
        sharim3.setAttribute("src", "img/dost.png")
        sharim3.setAttribute("class", "dost")
        var p3 = document.createElement("p")
        sharim3.addEventListener("click",dostijenia)
        p3.addEventListener("click",dostijenia)
        norx2.append(p3)
        p3.setAttribute("class", "nor")
        p3.setAttribute("id", "p3")
        if (fla == 0) {
            p3.innerHTML = tarhy[2]
        }
    
        else if (fla == 1) {
            p3.innerHTML = tarru[2]
        }
    
    
    
    
    
        var futer = document.createElement("div")
        opshi.append(futer)
        futer.setAttribute("class", "futer")
    
    
        var zvuk = document.createElement("img")
        futer.append(zvuk)
        zvuk.setAttribute("class", "zvuk")
    zvuk.src = "img/zvuk.png"
    
    var drosh = document.createElement("img")
    futer.append(drosh)
    drosh.setAttribute("class", "drosh")
    drosh.addEventListener("click",droshinna)
    if (fla==0) {
        drosh.src = "img/rus.png"
    }
    else if (fla==1) {
        
        drosh.src = "img/arm.png"
        drosh.style.width = "47px"
        drosh.style.height = "47px"
    
    }
    
// var v = document.createElement("a")
// futer.append(v)
// v.setAttribute("class","v")
// v.href = "https://www.facebook.com"

    var harc = document.createElement("img")
    futer.append(harc)
    harc.setAttribute("class", "harc")
    harc.src = "img/harc.png"
    harc.addEventListener("click",harcakan)


    }





    }




function doms(params) {
    
    k1.play()
    if (bal==0&&slakbal==0) {
        
    
    var levdiv = document.getElementsByClassName("leveldiv")
    var xaxayin = document.getElementsByClassName("xaxayin")
   var opshuc = document.getElementsByClassName("opshuc")
   var harcdiv = document.getElementsByClassName("harcodiv")
    document.body.style.backgroundImage = "url(img/back.jpg)"
    if (levdiv[0]) {
        document.body.removeChild(levdiv[0])
    }
  else if (xaxayin[0]) {
        document.body.removeChild(xaxayin[0])
    }
    else if (opshuc[0]) {
        document.body.removeChild(opshuc[0])
    }
    else if(harcdiv[0]){
        document.body.removeChild(harcdiv[0])

    }
 poxvox = 1
    var opshi = document.createElement("div")
    document.body.append(opshi)
    opshi.setAttribute("class", "opshi")

    var h1div = document.createElement("div")
    opshi.append(h1div)
    h1div.setAttribute("class", "h1")


    var h1div2 = document.createElement("div")
    h1div.append(h1div2)
    h1div2.setAttribute("class", "h1div")



    var h1 = document.createElement("h1")
    h1div2.append(h1)
    h1.setAttribute("class", "s")


    if (fla == 0) {
        h1.innerHTML = h1hy
    }
    else if (fla == 1) {
        h1.innerHTML = h1ru
    }



    var xax = document.createElement("div")
    opshi.append(xax)
    xax.setAttribute("class", "xax")
    xax.setAttribute("id", "xax")




if (x==1) {
    var sharun = document.createElement("div")
    xax.append(sharun)
    sharun.setAttribute("class", "sharun")

    var sharnk = document.createElement("img")
    sharun.append(sharnk)
    sharnk.setAttribute("class", "cont")
    sharnk.setAttribute("src", "img/shar.png")
sharnk.addEventListener("click",levmyus)

    var sharp = document.createElement("p")
    sharun.append(sharp)
    sharp.setAttribute("class", "nor")
    sharp.setAttribute("id", "p4")
    sharp.addEventListener("click",levmyus)
    if (fla == 0) {
        sharp.innerHTML = tarhy[3]
    }
    else if (fla == 1) {
        sharp.innerHTML = tarru[3]
    }
    
  
}


var norx = document.createElement("div")
xax.append(norx)
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

if (x==0) {
    p1.addEventListener("click",newgame)
sharim1.addEventListener("click",newgame)

}
else{

    p1.addEventListener("click",harcpatasx)
    sharim1.addEventListener("click",harcpatasx)
     
}


    var norx1 = document.createElement("div")
    xax.append(norx1)
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
    xax.append(norx2)
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
    sharim3.addEventListener("click",dostijenia)
    p3.addEventListener("click",dostijenia)
    if (fla == 0) {
        p3.innerHTML = tarhy[2]
    }

    else if (fla == 1) {
        p3.innerHTML = tarru[2]
    }





    var futer = document.createElement("div")
    opshi.append(futer)
    futer.setAttribute("class", "futer")


    var zvuk = document.createElement("img")
    futer.append(zvuk)
    zvuk.setAttribute("class", "zvuk")
zvuk.src = "img/zvuk.png"

var drosh = document.createElement("img")
futer.append(drosh)
drosh.setAttribute("class", "drosh")
drosh.addEventListener("click",droshinna)
if (fla==0) {
    drosh.src = "img/rus.png"
}
else if (fla==1) {
    
    drosh.src = "img/arm.png"
    drosh.style.width = "47px"
    drosh.style.height = "47px"

}

var harc = document.createElement("img")
futer.append(harc)
harc.setAttribute("class", "harc")
harc.src = "img/harc.png"
harc.addEventListener("click",harcakan)
}
}



function paraadam(params) {

bal = 1


    click2 =  0
    cls = 0
  localStorage.setItem("cl1", cls) 
    var td = document.getElementsByClassName("td")
    for (let i = 0; i < td.length; i++) {
        td[i].onclick = "none"

    }

var imgb = document.getElementsByClassName("brl")
var brldiv = document.getElementsByClassName("brldiv")
imgb[0].style.animationDuration = "1s"
imgb[0].style.animationFillMode = "forwards"
imgb[0].style.animationName = "adam"
// imgb[0].style.position = "relative"



    adamand = Math.floor(adamand) + 1
    adam = adamand
    localStorage.setItem("adam", adam)

    para = Math.floor(para) + 3
    par = para
    localStorage.setItem("para", par)




    var pb = document.getElementsByClassName('brlp')
    pb[0].innerHTML = adamand
    var pp = document.getElementsByClassName('poxp')
    pp[0].innerHTML = para


    setTimeout(() => {

        imgb[0].style.animationDuration = ""
        imgb[0].style.animationFillMode = ""
        imgb[0].style.animationName = ""



        var gamediv = document.getElementsByClassName("gamediv")
    var table=  document.getElementsByTagName("table") 
    var w = table[0].offsetWidth    
 var h = table[0].offsetHeight 


             gamediv[0].removeChild(table[0])   
            

          var divanc = document.createElement("div")
   
                gamediv[0].append(divanc)
                 divanc.style.width = w + "px"
                divanc.style.height = h + "px"
               
            
           
                    divanc.style.backgroundImage ="url(img/level/"+(lev-1)+".jpg)"
                
                    
                      
                divanc.setAttribute("class","ancnel")
               
                var poqr = document.createElement("div")
   
                divanc.append(poqr)
                poqr.style.width = Math.floor(w-100) + "px"
                poqr.style.height = Math.floor(h-100) + "px"
                poqr.setAttribute("class","poqr")
                


                var verevner = document.createElement("div")
                poqr.append(verevner)
                verevner.setAttribute("class","verevner")



                var h1 = document.createElement("h1")
                verevner.append(h1)
                h1.setAttribute("align","center")
                h1.setAttribute("class","poqrh1")
                if (fla==0) {
                    h1.innerHTML = tarhy[5]
                   
                }
                else if (fla==1) {
                    h1.innerHTML = tarru[5]
                } 

                var h3 = document.createElement("h1")
                verevner.append(h3)
                h3.setAttribute("align","center")
                h3.setAttribute("class","poqrh3")
                if (fla==0) {
                    h3.innerHTML = tarhy[12]
                   
                }
                else if (fla==1) {
                    h3.innerHTML = tarru[12]
                } 



                // var erkardiv = document.createElement("div")
                // poqr.append(erkardiv)
                // erkardiv.setAttribute("class","erkardiv")
              



                var opshdiv = document.createElement("div")
                verevner.append(opshdiv)
                opshdiv.setAttribute("class","opshdiv")
              
                var poxdiv = document.createElement("div")
                opshdiv.append(poxdiv)
                poxdiv.setAttribute("class","poxidiv")
              
                var p1 = document.createElement("p")
                poxdiv.append(p1)
                p1.setAttribute("class","p1pox")
                p1.innerHTML = 3

                var imgpox = document.createElement("img")
                poxdiv.append(imgpox)
                imgpox.setAttribute("class","imgpox")
                imgpox.src = "img/pox.png"



                var brlid = document.createElement("div")
                opshdiv.append(brlid)
                brlid.setAttribute("class","brlidiv")
              
             
        
                    var p2 = document.createElement("p")
                    brlid.append(p2)
                    p2.setAttribute("class","p2pox")
                    p2.innerHTML = 1

                    var imgbrl = document.createElement("img")
                    brlid.append(imgbrl)
                    imgbrl.setAttribute("class","imgbrl")
                    imgbrl.src = "img/brliand.png"



                    var shnhayt = document.createElement("h3")    
                    poqr.append(shnhayt)                         
                    shnhayt.setAttribute("align","center")
                    shnhayt.setAttribute("class","shnhayt")


                  if (lev==5||adamand==46&&ka2==0||para>=180&&ka==0) {
                 
                    shnhayt.style.color = "crimson"

            
                    if (fla==0) {
                        shnhayt.innerHTML  = tarhy[14]
                    }
                    else{
                        shnhayt.innerHTML  = tarru[14]
                    }

                       var shardiv = document.createElement("div")
                       poqr.append(shardiv)  
                       shardiv.setAttribute("class","imgdiv")


                    var shimg = document.createElement("img")
                    shardiv.append(shimg)                         
                    shimg.setAttribute("align","center")
                    shimg.setAttribute("class","shimg")
      

                   if (lev==5) {
                       
                  shimg.src = "img/lev.png"


                   }    
                   else if (adamand == 46) {
            
                    if (ka2==0) {
              
                        shimg.src = "img/d2.png"
                        
                        ka2 = 1
                        localStorage.setItem("ka2",1)
                                }  
             
               }
               
                   else if (para >= 180) {
                            
          if (ka==0) {
              
              
            shimg.src = "img/poxs.png"
            ka = 1
            localStorage.setItem("ka",1)
                    }           
                                     
               
                   }
                 
                               

                  }
                       else{
                          
                          
                        // var hayt = document.createElement("h3")
                        // poqr.append(hayt)                         
                        // hayt.setAttribute("align","center")
                        // hayt.setAttribute("class","hayt")

                        if (fla==0) {
                            shnhayt.innerHTML  = tarhy[13]
                        }
                        else{
                            shnhayt.innerHTML  = tarru[13]
                        }
                        
                       }
               



                       var sha = document.getElementsByClassName("shnhayt")[0]
if (document.getElementsByClassName("xaxayin")[0].offsetHeight<=600) {
    
h1.style.fontSize =  "x-large";
h3.style.fontSize =  "larger";
p1.style.fontSize = "xx-large";
p2.style.fontSize = "xx-large";
// shnhayt.style.fontSize = "x-large"


// if (sha) {
//     sha.style.fontSize = "x-large"
// }

}
else{
    h3.style.fontSize = poqr.offsetWidth/10 + "px"
    // shnhayt.style.fontSize = "x-large"
    p1.style.fontSize = imgbrl.offsetHeight/2 + 5 + "px";
    p2.style.fontSize = imgbrl.offsetHeight/2 + 5 + "px";
    
 
   
}



imgbrl.style.width = (poqr.offsetWidth/4)-10 + "px"
imgbrl.style.height = (poqr.offsetWidth/4)-10  + "px"
imgpox.style.width = (poqr.offsetWidth/4)-10  + "px"
imgpox.style.height = (poqr.offsetWidth/4)-10  + "px"

if (shimg) {
    shimg.style.width = imgpox.offsetWidth+10 +"px"
shimg.style.height = imgpox.offsetWidth+10 +"px"


}





}, 1000);



}

function paraadamdel(params) {



    adamand = Math.floor(adamand) - 1
    adam = adamand
    localStorage.setItem("adam", adam)




    var pb = document.getElementsByClassName('brlp')
    pb[0].innerHTML = adamand

}


function l0(params) {

   
    var table = document.getElementsByClassName("table")
    var gamediv = document.getElementsByClassName("gamediv")

    

    if (lev == 0&&slakbal==0) {
       
        if (adamand>=1) {
        document.body.style.backgroundImage  = "url(img/back.jpg)";
   
        var xaxayin = document.createElement("div")
        document.body.append(xaxayin)
        xaxayin.setAttribute("class", "xaxayin")


        if (gamediv[0]) {
            gamediv[0].removeChild(table[0])
        }
        else {
            k1.play()
            ver()
        }
  


        var gamediv = document.createElement("div")
        gamediv.setAttribute("class", "gamediv")
        xaxayin.append(gamediv)


        var tbl = document.createElement('table')
        gamediv.appendChild(tbl)
        tbl.style.backgroundImage = "url(img/level/0.jpg)"
        tbl.setAttribute("class", "table")
       
       


        // tbl.style.margin = 'auto'
        var tbd = document.createElement('tbody')

        tbl.appendChild(tbd)
        var m = 30
        var n = 30
        var xaxh = xaxayin.offsetHeight
        var verh = document.getElementsByClassName("vererv")[0].offsetHeight
        var cach =  54
var tbih = xaxh - (cach+verh)
var verj = tbih/28
        
        for (let i = 0; i < m; i++) {
            var tr = document.createElement('tr')
            tbd.appendChild(tr)
            tr.setAttribute("id", i)
 
            tr.style.height = verj-2 + 'px'

            for (let j = 0; j < n; j++) {
                var td = document.createElement('td')
                tr.appendChild(td)
                td.setAttribute("class", "td")
                td.setAttribute("id", j)
                td.style.backgroundColor = "transparent"
                td.style.width = 30 + 'px'
                // td.style.height = 42 + 'px'
                td.onclick = function (params) {


// m[0].style.display = "none"


                    if (this.id == 10 && this.parentElement.id == 6 || this.id == 11 && this.parentElement.id == 6 || this.id == 12 && this.parentElement.id == 6 || this.id == 9 && this.parentElement.id == 7 || this.id == 10 && this.parentElement.id == 7 || this.id == 11 && this.parentElement.id == 7 || this.id == 12 && this.parentElement.id == 7 || this.id == 13 && this.parentElement.id == 7 || this.id == 9 && this.parentElement.id == 8 || this.id == 10 && this.parentElement.id == 8 || this.id == 11 && this.parentElement.id == 8 || this.id == 12 && this.parentElement.id == 8 || this.id == 13 && this.parentElement.id == 8 || this.id == 14 && this.parentElement.id == 8 || this.id == 16 && this.parentElement.id == 8 || this.id == 17 && this.parentElement.id == 8|| this.id == 8 && this.parentElement.id == 9|| this.id == 10 && this.parentElement.id == 9|| this.id == 11 && this.parentElement.id == 9|| this.id == 12 && this.parentElement.id == 9|| this.id == 13 && this.parentElement.id == 9|| this.id == 14 && this.parentElement.id == 9|| this.id == 15 && this.parentElement.id == 9|| this.id == 16 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 9|| this.id == 8 && this.parentElement.id == 10|| this.id == 9 && this.parentElement.id == 10|| this.id == 10 && this.parentElement.id == 10|| this.id == 11 && this.parentElement.id == 10|| this.id == 12 && this.parentElement.id == 10|| this.id == 13 && this.parentElement.id == 10|| this.id == 14 && this.parentElement.id == 10|| this.id == 15 && this.parentElement.id == 10|| this.id == 16 && this.parentElement.id == 10|| this.id == 17 && this.parentElement.id == 10|| this.id == 18 && this.parentElement.id == 10|| this.id == 8 && this.parentElement.id == 11|| this.id == 9 && this.parentElement.id == 11|| this.id == 10 && this.parentElement.id == 11|| this.id == 11 && this.parentElement.id == 11|| this.id == 12 && this.parentElement.id == 11|| this.id == 13 && this.parentElement.id == 11|| this.id == 14 && this.parentElement.id == 11|| this.id == 15 && this.parentElement.id == 11|| this.id == 16 && this.parentElement.id == 11|| this.id==17 && this.parentElement.id == 11|| this.id == 18 && this.parentElement.id == 11|| this.id == 7 && this.parentElement.id == 12|| this.id == 8 && this.parentElement.id == 12|| this.id == 9 && this.parentElement.id == 12|| this.id == 10 && this.parentElement.id == 11|| this.id == 11 && this.parentElement.id == 12|| this.id == 12 && this.parentElement.id == 12|| this.id == 13 && this.parentElement.id == 12|| this.id == 14 && this.parentElement.id == 12|| this.id == 15 && this.parentElement.id == 12|| this.id == 16 && this.parentElement.id == 12|| this.id == 17 && this.parentElement.id == 12|| this.id == 18 && this.parentElement.id == 12|| this.id == 19 && this.parentElement.id == 12|| this.id == 7 && this.parentElement.id == 13|| this.id == 8 && this.parentElement.id == 13|| this.id == 9 && this.parentElement.id == 13|| this.id == 10 && this.parentElement.id == 13|| this.id == 11 && this.parentElement.id == 13|| this.id == 12 && this.parentElement.id == 13|| this.id == 13 && this.parentElement.id == 13|| this.id == 14 && this.parentElement.id == 13|| this.id == 15 && this.parentElement.id == 13|| this.id == 16 && this.parentElement.id == 13|| this.id == 17 && this.parentElement.id == 13|| this.id == 18 && this.parentElement.id == 13|| this.id == 19 && this.parentElement.id == 13|| this.id == 6 && this.parentElement.id == 14|| this.id == 7 && this.parentElement.id == 14|| this.id == 8 && this.parentElement.id == 14|| this.id == 9 && this.parentElement.id == 14|| this.id == 10 && this.parentElement.id == 14|| this.id == 11 && this.parentElement.id == 14|| this.id == 12 && this.parentElement.id == 14|| this.id == 13 && this.parentElement.id == 14|| this.id == 14 && this.parentElement.id == 14|| this.id == 15 && this.parentElement.id == 14|| this.id == 16 && this.parentElement.id == 14|| this.id == 17 && this.parentElement.id == 14|| this.id == 18 && this.parentElement.id == 14|| this.id == 19 && this.parentElement.id == 15|| this.id == 6 && this.parentElement.id == 15|| this.id == 7 && this.parentElement.id == 15|| this.id == 8 && this.parentElement.id == 15|| this.id == 9 && this.parentElement.id == 15|| this.id == 10 && this.parentElement.id == 15|| this.id == 11 && this.parentElement.id == 15|| this.id == 12 && this.parentElement.id == 15|| this.id == 13 && this.parentElement.id == 15|| this.id == 14 && this.parentElement.id == 15|| this.id == 15 && this.parentElement.id == 15|| this.id == 16 && this.parentElement.id == 15|| this.id == 17|| this.id == 19 && this.parentElement.id == 16|| this.id == 6 && this.parentElement.id == 16|| this.id == 7 && this.parentElement.id == 16|| this.id == 8 && this.parentElement.id == 16|| this.id == 9 && this.parentElement.id == 16|| this.id == 10 && this.parentElement.id == 16|| this.id == 11 && this.parentElement.id == 16|| this.id == 12 && this.parentElement.id == 16|| this.id == 13 && this.parentElement.id == 16|| this.id == 14 && this.parentElement.id == 16|| this.id == 15 && this.parentElement.id == 17||  this.id == 8 && this.parentElement.id == 18|| this.id == 9 && this.parentElement.id == 18|| this.id == 10 && this.parentElement.id == 18|| this.id == 11 && this.parentElement.id == 18|| this.id == 12 && this.parentElement.id == 18|| this.id == 13 && this.parentElement.id == 18|| this.id == 14 && this.parentElement.id == 18|| this.id == 15 && this.parentElement.id == 18|| this.id == 9 && this.parentElement.id == 19|| this.id == 10 && this.parentElement.id == 19|| this.id == 11 && this.parentElement.id == 19|| this.id == 12 && this.parentElement.id == 19|| this.id == 15 && this.parentElement.id == 19) {
                    if (this.id!=17&&this.parentElement.id != 3) {
                        tbl.setAttribute("class", "comp")

                        paraadam()
                        
                       tbl.style.backgroundImage = "url(img/compl/1.png)"
                        gamelev = 1
                        lev = 1   
                        localStorage.setItem("lev", gamelev)


                        setTimeout(() => {
                            l1()
                        }, chap); 
                    }
                 


                          

                    }
                    else{
                        
                        paraadamdel()

                        tanel(this)
                    }

                }

            }
        }
     
        if (click2==1) {
               
               
            tbl.style.backgroundImage = "url(img/klor/1.png)"
         }
         else{
           
            tbl.style.backgroundImage = "url(img/level/0.jpg)"
         }
       
// var td2 =  document.getElementsByTagName("td")
// console.log(td2[115]);

// var ob = document.createElement("div")
// td2[114].append(ob)
// ob.setAttribute("class","ob")


        if (!gamediv[0]) {
            futer()
        }
    
    }
    else {
        brlaynd()
    }
}



}

function tanel(params) {
    var karimg = document.getElementsByClassName("deli")
var divb  =document.getElementsByClassName("divs")


    var karp = document.getElementsByClassName("delp")
    if (adamand>=1) {
        for (let i = 0; i < karimg.length; i++) {

            if (karimg[i] && karimg[i].parentElement == params) {
    
                params.removeChild(karimg[i])
                params.removeChild(karp[i])
                // params.style.display = "table-cell"
            }
    
        }
    
    
    if (karp.length>0&&karp[0]) {
    
       
          karp[0].parentElement.style.display = "table-cell"
        karimg[0].parentElement.removeChild(karimg[0].parentElement.children[0])
        karp[0].parentElement.removeChild(karp[0].parentElement.children[0])
    
      
    }
    
    
    var divs = document.createElement("div")
    divs.setAttribute("class", "divs")
    params.append(divs)
    divs.style.position = "absolute"
    
    divs.style.display = "flex"
    divs.style.alignItems = 'center'
        var brlimg = document.createElement("img")
        brlimg.setAttribute("class", "deli")
        brlimg.src = "img/brliand.png"
        var xaxayin = document.getElementsByClassName("xaxayin")
    brlimg.style.width = (xaxayin[0].offsetHeight/22)+"px"
    brlimg.style.height = (xaxayin[0].offsetHeight/22)+"px"
        divs.append(brlimg)
        var p = document.createElement("p")
    p.style.fontSize = ((xaxayin[0].offsetHeight/22)-11)+"px"
        p.setAttribute("class", "delp")
        p.innerHTML = -1
        divs.append(p)
    
        // .delp{
        //     display: inline;
        //     color: red;
        //     font-size: 16px;
        // }
        // .deli{
        //     width: 25px;
        //     height: 25px;
        // }
    
        if (brlimg && p) {
    
    
            setTimeout(() => {
                
                
                for (let x = 0; x < divb.length; x++) {
                    if (divb[x] && divs.parentElement == params) {
                    
                        params.removeChild(divs)
                        // params.removeChild(p)
                        params.style.display = "table-cell"
                    }
    
    
                }
    
    
            }, 400);
        }
    }
    else{
        brlaynd()
    }
  

}




function l1(params) {

    lner("60px", "19px", 30, 30, 1)

}

function l3() {
    lner("52px", "42px", 30, 30, 2)

}
function l4(params) {
    lner("60px", "19px", 30, 30, 3)
}

function l5(params) {
    lner("60px", "19px", 30, 30, 4)


}




function l6(params) {
    lner("60px", "19px", 30, 30, 5)

}

function l7(params) {
    lner("25px", "27px", 30, 30, 6)

}


function l8(params) {
    lner("56px", "42px", 30, 30, 7)
}
function l9(params) {
    lner("10px", "10px", 30, 30, 8)
}

function l10(params) {
    // lner("40px","40px",10,12,9)
    lner("44px", "42px", 30, 30, 9)
}
function l11(params) {
    lner("19px", "19px", 30, 30, 10)
}

function kt(params) {
    k1.play()
}






function lner(w, h, m, n, level) {

   
        
    
bal = 0
    var table = document.getElementsByClassName("comp")
    var table2 = document.getElementsByClassName("table")
    var gamedivs = document.getElementsByClassName("gamediv")
    var xaxs = document.getElementsByClassName("xaxayin")
    //  localStorage.setItem("adamand",adam)
    //  localStorage.setItem("para",par)

var ancdiv = document.getElementsByClassName("ancnel")

    if (lev == level&&slakbal==0) {
      
        if (adamand>=1) {
            
        
        var a = 0
        click1 = 0
    document.body.style.backgroundImage  = "url(img/back.jpg)";
    

        if (gamedivs[0]) {

                   if (table2[0]) {
                    gamedivs[0].removeChild(table2[0]) 
                   }
      
            
else if (ancdiv[0]) {
                gamedivs[0].removeChild(ancdiv[0])
            }
            
            


            var brl = document.getElementsByClassName("levp")
            brl[0].innerHTML = lev

            var tbl = document.createElement('table')
            gamedivs[0].appendChild(tbl)
            tbl.setAttribute("class", "table")
        
            tbl.style.backgroundImage = "url(img/level/"+lev+".jpg)"

            // tbl.style.margin = 'auto'
            var tbd = document.createElement('tbody')

            tbl.appendChild(tbd)
var xaxayins= document.getElementsByClassName("xaxayin") 
            var xaxh = xaxayins[0].offsetHeight
            var verh = document.getElementsByClassName("vererv")[0].offsetHeight
            var cach =  54
    var tbih = xaxh - (cach+verh)
    var verj = tbih/28
            

            for (let i = 0; i < m; i++) {
                var tr = document.createElement('tr')
                tbd.appendChild(tr)
                tr.setAttribute("id", i)
                tr.style.height = verj-2 + "px"


                for (let j = 0; j < n; j++) {
                    var td = document.createElement('td')
                    tr.appendChild(td)
                    td.setAttribute("class", "td")
                    td.setAttribute("id", j)
                    td.style.backgroundColor = "transparent"
                    td.style.width = "30px"
                    // td.style.height = h
                    td.onclick = function (params) {
                     
                        if (level == 1) {

                            if (this.id == 20 && this.parentElement.id == 11 || this.id == 21 && this.parentElement.id == 11 || this.id == 22 && this.parentElement.id == 12 || this.id == 20 && this.parentElement.id == 12 || this.id == 21 && this.parentElement.id == 12 || this.id == 22 && this.parentElement.id == 12|| this.id == 23 && this.parentElement.id == 12|| this.id == 24 && this.parentElement.id == 12|| this.id == 25 && this.parentElement.id == 12|| this.id == 26 && this.parentElement.id == 12|| this.id == 27 && this.parentElement.id == 12|| this.id == 21 && this.parentElement.id == 13 || this.id == 22 && this.parentElement.id == 13|| this.id == 23 && this.parentElement.id == 13|| this.id == 24 && this.parentElement.id == 13|| this.id == 25 && this.parentElement.id == 13|| this.id == 26 && this.parentElement.id == 13|| this.id == 27 && this.parentElement.id == 13) {
                                tbl.setAttribute("class", "comp")
                                paraadam()


                                tbl.style.backgroundImage = "url(img/compl/7.png)"
                                gamelev = 2
                                lev = 2
                                localStorage.setItem("lev", gamelev)

                                setTimeout(() => {
                                    l3()
                                }, chap);


                            }
            
                            else {
                                paraadamdel()
                                tanel(this)
                              
                                
                            }

                        }
                        else if (level == 2) {
                            if (this.id == 14 && this.parentElement.id == 11||this.id == 12 && this.parentElement.id == 12||this.id == 13 && this.parentElement.id == 12||this.id == 14 && this.parentElement.id == 12||this.id == 15 && this.parentElement.id == 12||this.id == 13 && this.parentElement.id == 13||this.id == 14 && this.parentElement.id == 13||this.id == 15 && this.parentElement.id == 13||this.id == 13 && this.parentElement.id == 14||this.id == 14 && this.parentElement.id == 14||this.id == 15 && this.parentElement.id == 14||this.id == 13 && this.parentElement.id == 15||this.id == 14 && this.parentElement.id == 15||this.id == 15 && this.parentElement.id == 15) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/5.png)"
                                gamelev = 3
                                lev = 3
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l4()
                                }, chap);
                            }
                    
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }

                        else if (level == 3) {
                            if (this.id == 16 && this.parentElement.id == 7 || this.id == 17 && this.parentElement.id == 7 || this.id == 18 && this.parentElement.id == 7 || this.id == 16 && this.parentElement.id == 8 || this.id == 17 && this.parentElement.id == 8|| this.id == 18 && this.parentElement.id == 8|| this.id == 18 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 10|| this.id == 18 && this.parentElement.id == 10|| this.id == 17 && this.parentElement.id == 11|| this.id == 18 && this.parentElement.id == 11) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/4.png)"
                                gamelev = 4
                                lev = 4
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l5()
                                }, chap);
                            }
                        
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 4) {
                            if (this.id == 13 && this.parentElement.id == 12||this.id == 14 && this.parentElement.id == 12) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/6.png)"
                                gamelev = 5
                                lev = 5
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l6()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 5) {
                            if (this.id == 19 && this.parentElement.id == 15 || this.id == 18 && this.parentElement.id == 16 || this.id == 19 && this.parentElement.id == 16 || this.id == 20 && this.parentElement.id == 16 || this.id == 19 && this.parentElement.id == 17|| this.id == 20 && this.parentElement.id == 17) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/9.png)"
                                gamelev = 6
                                lev = 6
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l7()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 6) {
                            if (this.id == 17 && this.parentElement.id == 27||this.id == 18 && this.parentElement.id == 27||this.id == 19 && this.parentElement.id == 28||this.id == 17 && this.parentElement.id == 28||this.id == 18 && this.parentElement.id == 28||this.id == 19 && this.parentElement.id == 28) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/2.png)"
                                gamelev = 7
                                lev = 7
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l8()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                 
               
                        else if (level == 7) {
                            if (this.id == 22 && this.parentElement.id == 26 || this.id == 22 && this.parentElement.id == 27 || this.id == 23 && this.parentElement.id == 27 || this.id == 23 && this.parentElement.id == 28) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/10.png)"
                                gamelev = 8
                                lev = 8
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l9()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 8) {

                            if (this.id == 18 && this.parentElement.id == 18||this.id == 19 && this.parentElement.id == 18||this.id == 17 && this.parentElement.id == 19||this.id == 18 && this.parentElement.id == 19||this.id == 19 && this.parentElement.id == 19||this.id == 17 && this.parentElement.id == 20||this.id == 19 && this.parentElement.id == 20) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/3.png)"
                                gamelev = 9
                                lev = 9
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l10()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 9) {

                            if (this.id == 17 && this.parentElement.id == 13||this.id == 18 && this.parentElement.id == 13||this.id == 20 && this.parentElement.id == 13||this.id == 21 && this.parentElement.id == 13||this.id == 17 && this.parentElement.id == 14||this.id == 17 && this.parentElement.id == 14||this.id == 18 && this.parentElement.id == 14||this.id == 19 && this.parentElement.id == 14||this.id == 20 && this.parentElement.id == 14||this.id == 21 && this.parentElement.id == 14||this.id == 19 && this.parentElement.id == 15) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/11.png)"
                                gamelev = 10
                                lev = 10
                                localStorage.setItem("lev", gamelev)
                         
                                // setTimeout(() => {
                                //     l11()
                                // }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 10) {
                            if (this.id == 18 && this.parentElement.id == 14||this.id == 18 && this.parentElement.id == 15||this.id == 17 && this.parentElement.id == 15||this.id == 10 && this.parentElement.id == 18) {
                                tbl.setAttribute("class", "comp")
                                page = 2
                                ej = 2 
                             localStorage.setItem("ej",page)
                               poxvox = 2 
                                paraadam()
                                tbl.style.backgroundImage = "url(img/compl/8.png)"
                                gamelev = 7
                                lev = 7
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l8()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                       

                    }


                }
            }
            if (a == 1) {
                futer()
            }
        }
        else {
           
            k1.play()
            if (ancdiv[0]) {
                gamedivs[0].removeChild(ancdiv[0])
            }
            var xaxayin = document.createElement("div")
            document.body.append(xaxayin)
            xaxayin.setAttribute("class", "xaxayin")
            ver()

            a = 1
            var gamediv = document.createElement("div")
            gamediv.setAttribute("class", "gamediv")
            xaxayin.append(gamediv)


            var tbl = document.createElement('table')
            gamediv.appendChild(tbl)
            tbl.setAttribute("class", "table")
          
        
            // tbl.style.margin = 'auto'
            var tbd = document.createElement('tbody')

            tbl.appendChild(tbd)

            var xaxayins= document.getElementsByClassName("xaxayin") 
            // var m = 30
            // var n = 30
            var xaxh = xaxayins[0].offsetHeight
            var verh = document.getElementsByClassName("vererv")[0].offsetHeight
            var cach =  54
    var tbih = xaxh - (cach+verh)
    var verj = tbih/28
            
            for (let i = 0; i < m; i++) {
                var tr = document.createElement('tr')
                tbd.appendChild(tr)
                tr.setAttribute("id", i)
     
                tr.style.height = verj-2 + 'px'
    
                for (let j = 0; j < n; j++) {
                    var td = document.createElement('td')
                    tr.appendChild(td)
                    td.setAttribute("class", "td")
                    td.setAttribute("id", j)
                    td.style.backgroundColor = "transparent"
                    td.style.width = 30 + 'px'

                    td.onclick = function (params) {

                        if (level == 1) {

                            if (this.id == 20 && this.parentElement.id == 11 || this.id == 21 && this.parentElement.id == 11 || this.id == 22 && this.parentElement.id == 12 || this.id == 20 && this.parentElement.id == 12 || this.id == 21 && this.parentElement.id == 12 || this.id == 22 && this.parentElement.id == 12|| this.id == 23 && this.parentElement.id == 12|| this.id == 24 && this.parentElement.id == 12|| this.id == 25 && this.parentElement.id == 12|| this.id == 26 && this.parentElement.id == 12|| this.id == 27 && this.parentElement.id == 12|| this.id == 21 && this.parentElement.id == 13 || this.id == 22 && this.parentElement.id == 13|| this.id == 23 && this.parentElement.id == 13|| this.id == 24 && this.parentElement.id == 13|| this.id == 25 && this.parentElement.id == 13|| this.id == 26 && this.parentElement.id == 13|| this.id == 27 && this.parentElement.id == 13) {
                                tbl.setAttribute("class", "comp")
                                paraadam()


                                tbl.style.backgroundImage = "url(img/compl/7.png)"
                                gamelev = 2
                                lev = 2
                                localStorage.setItem("lev", gamelev)

                                setTimeout(() => {
                                    l3()
                                }, chap);


                            }
            
                            else {
                                paraadamdel()
                                tanel(this)
                              
                                
                            }

                        }
                        else if (level == 2) {
                            if (this.id == 14 && this.parentElement.id == 11||this.id == 12 && this.parentElement.id == 12||this.id == 13 && this.parentElement.id == 12||this.id == 14 && this.parentElement.id == 12||this.id == 15 && this.parentElement.id == 12||this.id == 13 && this.parentElement.id == 13||this.id == 14 && this.parentElement.id == 13||this.id == 15 && this.parentElement.id == 13||this.id == 13 && this.parentElement.id == 14||this.id == 14 && this.parentElement.id == 14||this.id == 15 && this.parentElement.id == 14||this.id == 13 && this.parentElement.id == 15||this.id == 14 && this.parentElement.id == 15||this.id == 15 && this.parentElement.id == 15) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/5.png)"
                                gamelev = 3
                                lev = 3
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l4()
                                }, chap);
                            }
                    
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }

                        else if (level == 3) {
                            if (this.id == 16 && this.parentElement.id == 7 || this.id == 17 && this.parentElement.id == 7 || this.id == 18 && this.parentElement.id == 7 || this.id == 16 && this.parentElement.id == 8 || this.id == 17 && this.parentElement.id == 8|| this.id == 18 && this.parentElement.id == 8|| this.id == 18 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 10|| this.id == 18 && this.parentElement.id == 10|| this.id == 17 && this.parentElement.id == 11|| this.id == 18 && this.parentElement.id == 11) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/4.png)"
                                gamelev = 4
                                lev = 4
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l5()
                                }, chap);
                            }
                        
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 4) {
                            if (this.id == 13 && this.parentElement.id == 12||this.id == 14 && this.parentElement.id == 12) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/6.png)"
                                gamelev = 5
                                lev = 5
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l6()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 5) {
                            if (this.id == 19 && this.parentElement.id == 15 || this.id == 18 && this.parentElement.id == 16 || this.id == 19 && this.parentElement.id == 16 || this.id == 20 && this.parentElement.id == 16 || this.id == 19 && this.parentElement.id == 17|| this.id == 20 && this.parentElement.id == 17) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/9.png)"
                                gamelev = 6
                                lev = 6
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l7()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 6) {
                            if (this.id == 17 && this.parentElement.id == 27||this.id == 18 && this.parentElement.id == 27||this.id == 19 && this.parentElement.id == 28||this.id == 17 && this.parentElement.id == 28||this.id == 18 && this.parentElement.id == 28||this.id == 19 && this.parentElement.id == 28) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/2.png)"
                                gamelev = 7
                                lev = 7
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l8()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                 
               
                        else if (level == 7) {
                            if (this.id == 22 && this.parentElement.id == 26 || this.id == 22 && this.parentElement.id == 27 || this.id == 23 && this.parentElement.id == 27 || this.id == 23 && this.parentElement.id == 28) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/10.png)"
                                gamelev = 8
                                lev = 8
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l9()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 8) {

                            if (this.id == 18 && this.parentElement.id == 18||this.id == 19 && this.parentElement.id == 18||this.id == 17 && this.parentElement.id == 19||this.id == 18 && this.parentElement.id == 19||this.id == 19 && this.parentElement.id == 19||this.id == 17 && this.parentElement.id == 20||this.id == 19 && this.parentElement.id == 20) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/3.png)"
                                gamelev = 9
                                lev = 9
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l10()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 9) {

                            if (this.id == 17 && this.parentElement.id == 13||this.id == 18 && this.parentElement.id == 13||this.id == 20 && this.parentElement.id == 13||this.id == 21 && this.parentElement.id == 13||this.id == 17 && this.parentElement.id == 14||this.id == 17 && this.parentElement.id == 14||this.id == 18 && this.parentElement.id == 14||this.id == 19 && this.parentElement.id == 14||this.id == 20 && this.parentElement.id == 14||this.id == 21 && this.parentElement.id == 14||this.id == 19 && this.parentElement.id == 15) {
                                tbl.setAttribute("class", "comp")
                                paraadam()

                                tbl.style.backgroundImage = "url(img/compl/11.png)"
                                gamelev = 10
                                lev = 10
                                localStorage.setItem("lev", gamelev)
                         
                                // setTimeout(() => {
                                //     l11()
                                // }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                        else if (level == 10) {
                            if (this.id == 18 && this.parentElement.id == 14||this.id == 18 && this.parentElement.id == 15||this.id == 17 && this.parentElement.id == 15||this.id == 10 && this.parentElement.id == 18) {
                                tbl.setAttribute("class", "comp")
                                page = 2
                                ej = 2 
                             localStorage.setItem("ej",page)
                               poxvox = 2 
                                paraadam()
                                tbl.style.backgroundImage = "url(img/compl/8.png)"
                                gamelev = 7
                                lev = 7
                                localStorage.setItem("lev", gamelev)


                                setTimeout(() => {
                                    l8()
                                }, chap);

                            }
                            else {
                                paraadamdel()
                                tanel(this)
                            }
                        }
                       
                       
                    }


                }
            }

            // if (level == 1) {
               
            //     if (click2==1) {
               
            //         tbl.style.backgroundImage = "url(img/klor/7.png)"
            //      }
            //      else{
            //         tbl.style.backgroundImage = "url(img/level/1.jpg)"
            //      }
                
            // }
            // else if (level == 2) {
            //     if (click2==1) {
               
               
            //         tbl.style.backgroundImage = "url(img/klor/5.png)"
            //      }
            //      else{
                   
            //         tbl.style.backgroundImage = "url(img/level/3.jpg)"
            //      }
              
            // }
            // else if (level == 3) {
            //     if (click2==1) {
               
               
            //         tbl.style.backgroundImage = "url(img/klor/4.png)"
            //      }
            //      else{
                   
            //         tbl.style.backgroundImage = "url(img/level/4.jpg)"
            //      }
            // }
            // else if (level == 4) {
            //     if (click2==1) {
               
               
            //         tbl.style.backgroundImage = "url(img/klor/6.png)"
            //      }
            //      else{
                   
            //         tbl.style.backgroundImage = "url(img/level/5.jpg)"
            //      }
            // }
            // else if (level == 5) {
            //     if (click2==1) {
               
               
            //         tbl.style.backgroundImage = "url(img/klor/9.png)"
            //      }
            //      else{
                   
            //         tbl.style.backgroundImage = "url(img/level/6.jpg)"
            //      }
               
            // }
            // else if (level == 6) {
            //     if (click2==1) {
               
               
            //         tbl.style.backgroundImage = "url(img/klor/8.png)"
            //      }
            //      else{
                   
            //         tbl.style.backgroundImage = "url(img/level/7.jpg)"
            //      }
            // }
            // else if (level == 7) {
            //     if (click2==1) {
               
               
            //         tbl.style.backgroundImage = "url(img/klor/2.png)"
            //      }
            //      else{
                   
            //         tbl.style.backgroundImage = "url(img/level/8.jpg)"
            //      }
            // }
            // else if (level == 8) {
            //     if (click2==1) {
               
               
            //         tbl.style.backgroundImage = "url(img/klor/10.png)"
            //      }
            //      else{
                   
            //         tbl.style.backgroundImage = "url(img/level/9.jpg)"
            //      }
            // }
            // else if (level == 9) {
         
            //     if (click2==1) {
               
               
            //         tbl.style.backgroundImage = "url(img/klor/3.png)"
            //      }
            //      else{
                   
            //         tbl.style.backgroundImage = "url(img/level/10.jpg)"
            //      }
            // }
            // else if (level == 10) {
         
            //     if (click2==1) {
               
               
            //         tbl.style.backgroundImage = "url(img/klor/11.png)"
            //      }
            //      else{
                   
            //         tbl.style.backgroundImage = "url(img/level/11.jpg)"
            //      }
            // }
            if (click2==1) {
               
               
                tbl.style.backgroundImage = "url(img/klor/"+lev+".png)"
             }
             else{
               
                tbl.style.backgroundImage = "url(img/level/"+lev+".jpg)"
             }
            if (a == 1) {
                futer()
            }


        }



    }
    else{
        brlaynd()
    }
}

}






function ver(params) {

    var ids = 0

    var levsa = document.getElementsByClassName("leveldiv")
    if (levsa[0]) {
        document.body.removeChild(levsa[0])
    }
  


    var xaxayin = document.getElementsByClassName("xaxayin")



    var verev = document.createElement("div")
    verev.setAttribute("class", "vererv")
    xaxayin[0].append(verev)

    var brldiv = document.createElement("div")
    brldiv.setAttribute("class", "brldiv")
    verev.append(brldiv)

    var brlplus = document.createElement("img")
    brlplus.setAttribute("src", "img/plus.png")
    brlplus.setAttribute("class", "plus")
    brldiv.append(brlplus)
brlplus.addEventListener("click",brlaynd)
// brlplus.style.width = xaxayin[0].offsetHeight





    var brl = document.createElement("img")
    brl.setAttribute("src", "img/brliand.png")
    brl.setAttribute("class", "brl")
    brl.setAttribute("id", "adamans")
    brldiv.append(brl)

    brl.style.width = ((xaxayin[0].offsetHeight/16)+3)+"px"
    brl.style.height = ((xaxayin[0].offsetHeight/16)+3)+"px"
    brlplus.style.width = (brl.offsetHeight-17)+"px"
    brlplus.style.height = (brl.offsetHeight-17)+"px"
    var brlp = document.createElement("p")
    brlp.setAttribute("class", "brlp")
    brlp.innerHTML = adamand
    brldiv.append(brlp)
  
    var levdiv = document.createElement("div")
    levdiv.setAttribute("class", "levdiv")
    verev.append(levdiv)


    var levin = document.createElement("h1")
    levin.setAttribute("class", "levin")
    levdiv.append(levin)
    if (fla == 0) {
        levin.innerHTML = tarhy[4]
        levin.style.fontSize = "17px"
    }
    else {
        levin.innerHTML = tarru[4]


    }
    var levp = document.createElement("p")
    levp.setAttribute("class", "levp")
    levp.innerHTML = lev
    levdiv.append(levp)
    levp.setAttribute("align", "center")
 levp.style.fontSize =((xaxayin[0].offsetHeight/19)+1) + "px"
//  brldiv.style.fontSize =((xaxayin[0].offsetHeight/19)+1) + "px"
brldiv.style.fontSize = (brl.offsetHeight-12) + "px"
    var poxdiv = document.createElement("div")
    poxdiv.setAttribute("class", "poxdiv")
    verev.append(poxdiv)

    var poxp = document.createElement("p")
    poxp.setAttribute("class", "poxp")
    poxp.innerHTML = para
    poxdiv.append(poxp)
// poxp.style.fontSize = (levp.offsetHeight - 11)+ "px"
poxp.style.fontSize = (brl.offsetHeight-12) + "px"
    var pox = document.createElement("img")
    pox.setAttribute("src", "img/pox.png")
    pox.setAttribute("class", "pox")
    poxdiv.append(pox)
    pox.style.width = (brl.offsetHeight  + 2) + "px"
    pox.style.height = (brl.offsetHeight  + 2) + "px"

    // var poxplus = document.createElement("img")
    // poxplus.setAttribute("src", "img/poxplus.png")
    // poxplus.setAttribute("class", "poxplus")
    // poxdiv.append(poxplus)

    // poxplus.style.width = (brlplus.offsetHeight  + 2) + "px"
    // poxplus.style.height = (brlplus.offsetHeight  + 2)+ "px"

}



function futer(params) {

    var opshi = document.getElementsByClassName("opshi")[0]
  
    var xaxayin = document.getElementsByClassName("xaxayin")
    var futerdiv = document.createElement("div")
    futerdiv.setAttribute("class", "futerdiv")
        xaxayin[0].append(futerdiv)

  
   



    var zvuk = document.createElement('img')
    futerdiv.appendChild(zvuk)
    zvuk.setAttribute("class", "zvuk")
    zvuk.src = "img/zvuk.png"

    var dom = document.createElement('img')
    futerdiv.appendChild(dom)
    dom.setAttribute("class", "tun")
    dom.src = "img/home.png"
dom.addEventListener("click",doms)

    var ogndiv = document.createElement('div')
    futerdiv.appendChild(ogndiv)
    ogndiv.setAttribute("class", "ogndiv")


    var ogn1 = document.createElement('img')
    ogndiv.appendChild(ogn1)
    ogn1.setAttribute("class", "ogn1")
    ogn1.src = "img/ogn.png"

         ogn1.onclick = function (params) {
            var table = document.getElementsByClassName("table")
          
                if (para>=60) {
                    k1.play()
                    if (click2==0) {
                    para = Math.floor(para) - 60
                    par = para
                    localStorage.setItem("para", par)
                
                
                
                
                    var pb = document.getElementsByClassName('poxp')
                    pb[0].innerHTML = para
              
                    
                //         if (lev==0) {
                  
                    
                //             table[0].style.backgroundImage = "url(img/klor/1.png)"
                //             table[0].setAttribute("class",'klor')
                         
                //         }
                // else if (lev==1) {
                
                  
                //     table[0].style.backgroundImage = "url(img/klor/7.png)"
                //     table[0].setAttribute("class",'klor')
                     
                          
                // } 
                // else if (lev==2) {
                
                //     table[0].style.backgroundImage = "url(img/klor/5.png)"
                //         table[0].setAttribute("class",'klor')
                     
                          
                // } 
                // else if (lev==3) {
                
                //     table[0].style.backgroundImage = "url(img/klor/4.png)"
                //         table[0].setAttribute("class",'klor')
                     
                          
                // } 
                // else if (lev==4) {
                
                //     table[0].style.backgroundImage = "url(img/klor/6.png)"
                //         table[0].setAttribute("class",'klor')
                     
                          
                // } 
                // else if (lev==5) {
                
                //     table[0].style.backgroundImage = "url(img/klor/9.png)"
                //         table[0].setAttribute("class",'klor')
                     
                          
                // } 
                // else if (lev==6) {
                
                //     table[0].style.backgroundImage = "url(img/klor/8.png)"
                //         table[0].setAttribute("class",'klor')
                     
                          
                // } 
                // else if (lev==7) {
                
                //     table[0].style.backgroundImage = "url(img/klor/2.png)"
                //         table[0].setAttribute("class",'klor')
                     
                          
                // } 
                // else if (lev==8) {
                
                //     table[0].style.backgroundImage = "url(img/klor/10.png)"
                //         table[0].setAttribute("class",'klor')
                     
                          
                // } 
                // else if (lev==9) {
                
                //     table[0].style.backgroundImage = "url(img/klor/3.png)"
                //         table[0].setAttribute("class",'klor')
                     
                          
                // } 
                // else if (lev==10) {
                
                //     table[0].style.backgroundImage = "url(img/klor/11.png)"
                //         table[0].setAttribute("class",'klor')
                     
                          
                // } 
                table[0].style.backgroundImage = "url(img/klor/"+lev+".png)"
                table[0].setAttribute("class",'klor')
             
                  
                click2 = 1
                cls = 1
                 localStorage.setItem("cl1", cls)
            
        }
            }
         


         }


    var ogn2 = document.createElement('img')
    ogndiv.appendChild(ogn2)
    ogn2.setAttribute("class", "sos")
    ogn2.src = "img/sos.png"
ogn2.onclick = function (params) {
    
if (click1==0) {
    
if (para>=90) {
    k1.play()
    var table = document.getElementsByTagName("table")


                    
para = Math.floor(para) - 90
par = para
localStorage.setItem("para", par)

var pb = document.getElementsByClassName('poxp')
pb[0].innerHTML = para
   

if (lev == 0) {

   
    table[0].setAttribute("class", "comp")
    paraadam()

    table[0].style.backgroundImage = "url(img/compl/1.png)"
    gamelev = 1
    lev = 1
    localStorage.setItem("lev", gamelev)


    setTimeout(() => {
        l1()
    }, 2000);

}

else if (lev == 1) {
    
    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/7.png)"
        gamelev = 2
        lev = 2
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l3()
        }, 2000);

}
   

else if (lev == 2) {

    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/5.png)"
        gamelev = 3
        lev = 3
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l4()
        }, 2000);
    }
 
else if (lev == 3) {
   
    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/4.png)"
        gamelev = 4
        lev = 4
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l5()
        }, 2000);
    }
  

else if (lev == 4) {

    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/6.png)"
        gamelev = 5
        lev = 5
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l6()
        }, 2000);

    }
  

else if (lev == 5) {
   
    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/9.png)"
        gamelev = 6
        lev = 6
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l7()
        }, 2000);

    }

else if (lev == 6) {
   
    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/8.png)"
        gamelev = 7
        lev = 7
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l8()
        }, 2000);

    }

else if (lev == 7) {

    table[0].setAttribute("class", "comp")

        paraadam()
        table[0].style.backgroundImage = "url(img/compl/2.png)"
        gamelev = 8
        lev = 8
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l9()
        }, 2000);

    }


else if (lev == 8) {
    
    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/10.png)"
        gamelev = 9
        lev = 9
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l10()
        }, 2000);

    }

else if (lev == 9) {

    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/3.png)"
        gamelev = 10
        lev = 10
        localStorage.setItem("lev", gamelev)


        setTimeout(() => {
            l11()
        }, 2000);

}


else if (lev == 10) {

    table[0].setAttribute("class", "comp")
        paraadam()

        table[0].style.backgroundImage = "url(img/compl/11.png)"
        gamelev = 11
        lev = 11
        localStorage.setItem("lev", gamelev)


        // setTimeout(() => {
        //     l11()
        // }, 2000);

}


click1 = 1
}

}

}

//innerHeight: 736
//innerWidth: 414\


       
     


}



function liver(params) {
    var levon = document.getElementsByClassName("leveldiv")
    var verev = document.createElement("div")
    verev.setAttribute("class", "vererv")
    levon[0].append(verev)

    var brldiv = document.createElement("div")
    brldiv.setAttribute("class", "brldiv")
    verev.append(brldiv)

    var brlplus = document.createElement("img")
    brlplus.setAttribute("src", "img/plus.png")
    brlplus.setAttribute("class", "plus")
    brldiv.append(brlplus)
    brlplus.addEventListener("click",brlaynd)


    var brl = document.createElement("img")
    brl.setAttribute("src", "img/brliand.png")
    brl.setAttribute("class", "brl")
    brl.setAttribute("id", "adamans")
    brldiv.append(brl)

    brl.style.width = ((levon[0].offsetHeight/16)+3)+"px"
    brl.style.height = ((levon[0].offsetHeight/16)+3)+"px"
    brlplus.style.width = (brl.offsetHeight-17)+"px"
    brlplus.style.height = (brl.offsetHeight-17)+"px"
    // brldiv.style.fontSize =((levon[0].offsetHeight/19)+1) + "px"
    brldiv.style.fontSize = (brl.offsetHeight-12) + "px"

    var brlp = document.createElement("p")
    brlp.setAttribute("class", "brlp")
    brlp.innerHTML = adamand
    brldiv.append(brlp)

    var h1 = document.createElement("div")
    verev.append(h1)
    h1.setAttribute("class", "hlev")
    var h1p = document.createElement("h1")
    h1.append(h1p)
    h1p.setAttribute("class", "h1p")
    if (fla == 0) {
        h1p.innerHTML = tarhy[4]
        h1p.style.fontSize = "17px"
    }
    else {
        h1p.innerHTML = tarru[4]
    }



    var poxdiv = document.createElement("div")
    poxdiv.setAttribute("class", "poxdiv")
    verev.append(poxdiv)

    var poxp = document.createElement("p")
    poxp.setAttribute("class", "poxp")
    poxp.innerHTML = para
    poxdiv.append(poxp)
    // poxp.style.fontSize = (brlp.offsetHeight - 11)+ "px"
    poxp.style.fontSize = (brl.offsetHeight-12) + "px"

    var pox = document.createElement("img")
    pox.setAttribute("src", "img/pox.png")
    pox.setAttribute("class", "pox")
    poxdiv.append(pox)
    pox.style.width = (brl.offsetHeight  + 2) + "px"
    pox.style.height = (brl.offsetHeight  + 2) + "px"


    // var poxplus = document.createElement("img")
    // poxplus.setAttribute("src", "img/poxplus.png")
    // poxplus.setAttribute("class", "poxplus")
    // poxdiv.append(poxplus)
    // poxplus.style.width = (brlplus.offsetHeight  + 2) + "px"
    // poxplus.style.height = (brlplus.offsetHeight  + 2) + "px"

}

function newgame(params) {
    k1.play()
       
    setTimeout(() => {
        ej = 1  
    page = 1
    localStorage.setItem("ej",page)
    poxvox = ej
    lev = 0
    gamelev = 0
    localStorage.setItem("lev", gamelev)
    cl =  0
    sxm = 0
    ka=0
    localStorage.setItem("ka",0)     
    ka2 = 0
    localStorage.setItem("ka2",0) 
    // ka3 = 0
    // localStorage.setItem("ka3",0)

adam = 40
localStorage.setItem("adam", adam)
adamand = 40

par = 160
localStorage.setItem("para", par)
para = 160
click2 =  0
cls = 0
localStorage.setItem("cl1", cls) 
click1 = 0
game = 1
x=1
localStorage.setItem("game", game)


        // poxvox = 1
    document.body.style.backgroundImage = "url(img/backa.jpg)"

        document.body.removeChild(opshi[0]) //են առաջի էջը կորավ 
        var leveldiv = document.createElement("div")
        document.body.append(leveldiv)
        leveldiv.setAttribute("class", "leveldiv")
    
        liver()
    
        var levelner = document.createElement("div")
        leveldiv.append(levelner)
        levelner.setAttribute("class", "levelner")
    
    
        for (let i = 0; i <= 10; i++) {
            var level = document.createElement("div")
            levelner.append(level)
            level.setAttribute("id", i)
    
            level.setAttribute("class", "levels")
            level.style.width =((window.innerWidth-12)/4)-17  + "px"
            level.style.height = ((window.innerWidth-12)/4)-17  +"px"
    
            var p = document.createElement("p")
            p.setAttribute("class", "pner")
            p.innerHTML = i
            level.append(p)
        }
    
        var levs = document.getElementsByClassName("levels")
    
    
        if (lev == 0) {
            levs[0].style.backgroundImage = "url(img/l6.png)"
            for (let i = 1; i < levs.length; i++) {
                levs[i].style.backgroundImage = "url(img/l7.png)"
                levs[i].style.borderColor = "white"
                levs[i].children[0].style.color = "gray"
            }
        }
        else {
            levs[0].style.backgroundImage = "url(img/l6.png)"
            for (let x = 1; x <= 10; x++) {
    
                if (lev == x) {
    
                    levs[x].style.backgroundImage = "url(img/l6.png)"
                    for (let l = 0; l < levs.length; l++) {
                        levs[x - l].style.backgroundImage = "url(img/l6.png)"
    
                    }
    
                    for (let i = x + 1; i < levs.length; i++) {
                        levs[i].style.backgroundImage = "url(img/l7.png)"
                        levs[i].style.borderColor = "white"
                    }
                }
            }
    
        }
    
    
    
    
    
        levs[0].addEventListener("click", l0)
        levs[1].addEventListener("click", l1)
        levs[2].addEventListener("click", l3)
        levs[3].addEventListener("click", l4)
        levs[4].addEventListener("click", l5)
        levs[5].addEventListener("click", l6)
        levs[6].addEventListener("click", l7)
        levs[7].addEventListener("click", l8)
        levs[8].addEventListener("click", l9)
        levs[9].addEventListener("click", l10)
        levs[10].addEventListener("click", l11)
        var slak = document.createElement("div")
        levelner.append(slak)
        slak.setAttribute("class", "slak")
        slak.style.width =((window.innerWidth-12)/4)  + "px"
        slak.style.height = ((window.innerWidth-12)/4)-17  +"px"

        var slakimg = document.createElement("img")
        slakimg.setAttribute("class", "slakimg")
        slak.append(slakimg)
        slakimg.src = "img/aj.png"
        slakimg.addEventListener("click",aj)
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
        tun.addEventListener("click", doms)
    
    
    
        var harcs = document.createElement("img")
        futer.append(harcs)
        harcs.setAttribute("class", "harc")
        harcs.src = "img/harc.png"
        harcs.addEventListener('click',harcakan)
    
    }, 150);


    
    
}
function levmyus(params) {
   

              k1.play()
              setTimeout(() => {
                document.body.style.backgroundImage = "url(img/backa.jpg)"
                game = 1
                localStorage.setItem("game", game)
        
                document.body.removeChild(opshi[0]) //են առաջի էջը կորավ 
                var leveldiv = document.createElement("div")
                document.body.append(leveldiv)
                leveldiv.setAttribute("class", "leveldiv")
                liver()
             
        
        
        
                var levelner = document.createElement("div")
                leveldiv.append(levelner)
                levelner.setAttribute("class", "levelner")
        
                if (ej==1) {
                    
                for (let i = 0; i <= 10; i++) {
                    var level = document.createElement("div")
                    levelner.append(level)
                    level.setAttribute("id", i)
        
        
                    level.setAttribute("class", "levels")
        level.style.width =((window.innerWidth-12)/4)-17  + "px"
        level.style.height = ((window.innerWidth-12)/4)-17  +"px"
                    var p = document.createElement("p")
                    p.setAttribute("class", "pner")
                    p.innerHTML = i
                    level.append(p)
    
                    if (lev<i) {
         
            
                        level.style.backgroundImage = "url(img/l7.png)"
                        level.style.borderColor = "white"
                        p.style.color = "gray" 
                    }
                    else if (lev==i) {
                          
                        level.style.backgroundImage = "url(img/l6.png)"
                        level.style.borderColor = "aqua"
                        p.style.color = "white" 
                    }
                    else if (lev>i) {
                        level.style.backgroundImage = "url(img/l2.png)"
                        level.style.borderColor = "white"
                        p.style.color = "black" 
                    }
    
                }
        
                var levs = document.getElementsByClassName("levels")
        
              
              
        
        
                levs[0].addEventListener("click", l0)
                levs[1].addEventListener("click", l1)
                levs[2].addEventListener("click", l3)
                levs[3].addEventListener("click", l4)
                levs[4].addEventListener("click", l5)
                levs[5].addEventListener("click", l6)
                levs[6].addEventListener("click", l7)
                levs[7].addEventListener("click", l8)
                levs[8].addEventListener("click", l9)
                levs[9].addEventListener("click", l10)
                levs[10].addEventListener("click", l11)
        
                }  
                
                else if (ej==2) {
                
                    var slakdzax = document.createElement("div")
                    levelner.append(slakdzax)
                    slakdzax.setAttribute("class", "slak")
                    slakdzax.style.width =((window.innerWidth-12)/4)  + "px"
                    slakdzax.style.height = ((window.innerWidth-12)/4)-17  +"px"
                    var slakdaximg = document.createElement("img")
                    slakdaximg.setAttribute("class", "slakimg")
                    slakdzax.append(slakdaximg)
                    slakdaximg.src = "img/dzax.png"
                    slakdaximg.addEventListener("click",dzax)
        
                    for (let i = 11; i <= 20; i++) {
                        var level = document.createElement("div")
                        levelner.append(level)
                        level.setAttribute("id", i)
            
            
                        level.setAttribute("class", "levels")
            
                        level.style.width =((window.innerWidth-12)/4)-17  + "px"
                        level.style.height = ((window.innerWidth-12)/4)-17  +"px"
    
                        var p = document.createElement("p")
                        p.setAttribute("class", "pner")
                        p.innerHTML = i
                        level.append(p)
                        
                    if (lev<i) {
         
            
                        level.style.backgroundImage = "url(img/l7.png)"
                        level.style.borderColor = "white"
                        p.style.color = "gray" 
                    }
                    else if (lev==i) {
                          
                        level.style.backgroundImage = "url(img/l6.png)"
                        level.style.borderColor = "aqua"
                        p.style.color = "white" 
                    }
                    else if (lev>i) {
                        level.style.backgroundImage = "url(img/l2.png)"
                        level.style.borderColor = "white"
                        p.style.color = "black" 
                    }
                    }
            
            
            }
            
            var slak = document.createElement("div")
            levelner.append(slak)
            slak.setAttribute("class", "slak")
            slak.style.width =((window.innerWidth-12)/4)  + "px"
            slak.style.height = ((window.innerWidth-12)/4)-17  +"px"
            // slak.addEventListener("click",aj)
            var slakimg = document.createElement("img")
            slakimg.setAttribute("class", "slakimg")
            slak.append(slakimg)
            slakimg.src = "img/aj.png"
            slakimg.addEventListener("click",aj)
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
            tun.addEventListener("click", doms)
        
        
        
            var harcs = document.createElement("img")
            futer.append(harcs)
            harcs.setAttribute("class", "harc")
            harcs.src = "img/harc.png"
        harcs.addEventListener("click",harcakan)
           
              }, 150);

        
    }


function aj(params) {
 
      if (slakbal==0) {
        k1.play()
    var lner = document.getElementsByClassName("levelner")
    // lner[0].style.animationDelay = "0.5"
    lner[0].style.animationDuration = "1s"
    lner[0].style.animationFillMode = "backwards"
    lner[0].style.animationName = "anc"
    lner[0].style.position = "relative"
   slakbal = 1
setTimeout(() => {
    lner[0].style.left = "200px"
    lner[0].style.animationName = "et"
    // lner[0].style.animationDelay = ""
    lner[0].style.animationDuration = "0.5s"
    lner[0].style.animationFillMode = "forwards"
   
    
    if (poxvox==1&&ej==1) {
        chancac(1,11,21,"+")
        
    }
    else if (poxvox==2) {
        chancac(2,21,31,"+")
    }
    // else if (poxvox==3) {
    //     chancac(3,31,41,"+")
    // }
    // else if (poxvox==1) {
    //     chancac(1,11,21,"+")
    // }
    // else if (poxvox==2) {
    //     chancac(2,21,31,"+")
    // }  
    //  else if (poxvox==3) {
    //     chancac(3,31,41,"+")
    // }
    // else if (poxvox==4) {
    //     chancac(4,41,51,"+")
    // }
    // else if (poxvox==5) {
    //     chancac(5,51,61,"+")
    // }

setTimeout(() => {
    lner[0].style.animationDuration = ""
    lner[0].style.animationFillMode = ""
    lner[0].style.animationName = ""
    lner[0].style.left = ""
    slakbal = 0
}, 500);

}, 400);
 
      }
 



  
  

}

function chancac(par1,skiz,verj,nsh) {
        var levelner = document.getElementsByClassName("levelner")
    var ldiv = document.getElementsByClassName("levels")
    var slak =   document.getElementsByClassName("slak")
    if (nsh == "+") {
        poxvox = par1 + 1  
    }
    else{
        poxvox = par1 - 1  
    }
 
    if (par1==1) {

        for (let i = 0; i < 11; i++) {
            levelner[0].removeChild(ldiv[0])
            
        }
        levelner[0].removeChild(slak[0])

    }
else {
    for (let i = 0; i < 10; i++) {
        levelner[0].removeChild(ldiv[0])
        
    }
    levelner[0].removeChild(slak[0])
    levelner[0].removeChild(slak[0])


}
if (poxvox!=1) {
    var slakhet = document.createElement("div")
    levelner[0].append(slakhet)
    slakhet.setAttribute("class", "slak")
    slakhet.style.width =((window.innerWidth-12)/4)  + "px"
    slakhet.style.height = ((window.innerWidth-12)/4)-17  +"px"
    var slakimghet = document.createElement("img")
    slakimghet.setAttribute("class", "slakimg")
    slakimghet.addEventListener("click",dzax)
    slakhet.append(slakimghet)
    slakimghet.src = "img/dzax.png"
      
}


for (let x = skiz; x < verj; x++) {
    
    

    var level = document.createElement("div")
    levelner[0].append(level)
    level.setAttribute("id", x)

    level.style.width =((window.innerWidth-12)/4)-17  + "px"
    level.style.height = ((window.innerWidth-12)/4)-17  +"px"

    level.setAttribute("class", "levels")



    var p = document.createElement("p")
    p.setAttribute("class", "pner")
    p.innerHTML = x
    level.append(p)
    if (lev<x) {
     
        
        level.style.backgroundImage = "url(img/l7.png)"
        level.style.borderColor = "white"
        p.style.color = "gray" 
    }
    else if (lev==x) {
          
        level.style.backgroundImage = "url(img/l6.png)"
        level.style.borderColor = "aqua"
        p.style.color = "white" 
    }
    else if (lev>x) {
        level.style.backgroundImage = "url(img/l2.png)"
        level.style.borderColor = "white"
        p.style.color = "black" 
    }
 
}
var levs = document.getElementsByClassName("levels")
if (ej==1&&poxvox==1) {
    levs[0].addEventListener("click", l0)
levs[1].addEventListener("click", l1)
levs[2].addEventListener("click", l3)
levs[3].addEventListener("click", l4)
levs[4].addEventListener("click", l5)
levs[5].addEventListener("click", l6)
levs[6].addEventListener("click", l7)
levs[7].addEventListener("click", l8)
levs[8].addEventListener("click", l9)
levs[9].addEventListener("click", l10)
levs[10].addEventListener("click", l11)
}



var slak = document.createElement("div")
levelner[0].append(slak)
slak.setAttribute("class", "slak")
slak.style.width =((window.innerWidth-12)/4)  + "px"
slak.style.height = ((window.innerWidth-12)/4)-17  +"px"
var slakimg = document.createElement("img")
slakimg.setAttribute("class", "slakimg")
slak.append(slakimg)
slakimg.src = "img/aj.png"
slakimg.addEventListener("click",aj)
}







function dzax(params) {

if (slakbal == 0) {
    k1.play()
    var lner = document.getElementsByClassName("levelner")
    // lner[0].style.animationDelay = "0.5"
    lner[0].style.animationDuration = "1s"
    lner[0].style.animationFillMode = "backwards"
    lner[0].style.animationName = "dzax"
    lner[0].style.position = "relative"
slakbal = 1
setTimeout(() => {

    lner[0].style.right = "200px"
    lner[0].style.animationName = "dzax2"
    // lner[0].style.animationDelay = ""
    lner[0].style.animationDuration = "0.5s"
    lner[0].style.animationFillMode = "forwards"
    

      if (poxvox==2) {
        chancac(2,0,11,"-")
    }
  else  if (poxvox==3) {
        chancac(3,11,21,"-")
    }

    else if (poxvox==2) {
        chancac(2,0,11,"-")
    }
    else if (poxvox==3) {
        chancac(3,11,21,"-")
    }
    else if (poxvox==4) {
        chancac(4,21,31,"-")
    }
    else if (poxvox==5) {
        chancac(5,31,41,"-")
    }
    else if (poxvox==6) {
        chancac(6,41,51,"-")
    }  


    setTimeout(() => {
        lner[0].style.animationDuration = ""
        lner[0].style.animationFillMode = ""
        lner[0].style.animationName = ""
        lner[0].style.right = ""
        slakbal = 0
    }, 500);


}, 400);
 
}



}





function vercra(params) {
    console.log("vercra funkcia");
    // vercs = 0



var op = document.getElementsByClassName("opshi")
var ka = document.getElementsByClassName("shahum")
// ver()




if (ka.length == 0) {
    var shahum = document.createElement("div")
    op[0].append(shahum)
    shahum.setAttribute("class","shahum")
    shahum.style.width = op[0].offsetWidth + "px"
    shahum.style.height = op[0].offsetHeight  + "px"
    sndver()
    
    var shahumdiv = document.createElement("div")
    shahum.append(shahumdiv)
    shahumdiv.setAttribute("class","sharundiv")
    
    
    
    for (let i = 0; i < 9; i++) {
        var snd1 = document.createElement("div")
    // snd1.src = "img/sndpak.png"
    shahumdiv.append(snd1)

    snd1.style.width = ((opshi[0].offsetWidth/3)-34) + "px"
    snd1.style.height = ((opshi[0].offsetWidth/3)-34) + "px"
    snd1.setAttribute("class","snd1")
    snd1.style.backgroundImage = "url(./img/sndpak.png)";
    snd1.onclick = function () {
    var sh = document.getElementsByClassName("sharundiv")

var nverbrl = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var nverpox = [5,10,12,15,20,25,33,30,35,40,45,50,60,65]
var pizimgrandom = ["img/pox.png","img/brliand.png"]
var prizpox = nverpox[Math.floor(Math.random()*nverpox.length)]
var prizbrl = nverbrl[Math.floor(Math.random()*nverbrl.length)]


//  var nverrand = [prizpox,prizbrl]
//  var nver = nverrand[Math.floor(Math.random()*nverrand.length)]
 var pizimg = pizimgrandom[Math.floor(Math.random()*pizimgrandom.length)]   
 var nver
if (pizimg=="img/pox.png") {
    nver = prizpox


    var sdiv = document.createElement("div")
    this.append(sdiv)
    sdiv.setAttribute("class","sdiv")
    
    var sndukimg = document.createElement("img")
    sdiv.append(sndukimg)
    sndukimg.setAttribute("class","sndukimg")

    sndukimg.src = pizimg


    var sndukp = document.createElement("p")
    sdiv.append(sndukp)
    sndukp.setAttribute("class","sndukp")
    sndukp.setAttribute("align","center")
    sndukp.innerHTML = nver

    var po = ((snd1.offsetHeight+14)/2)+10
    
var pp = ((snd1.offsetHeight+14)/2)-20




   
        sndukimg.style.width = po + "px"
        sndukimg.style.height =po + "px"
        sndukp.style.fontSize =  pp + "px"
   
     


    
  

    


    para = Math.floor(para) + nver
    par = para
    localStorage.setItem("para", par)
    var brlp = document.getElementsByClassName("poxp")
    brlp[0].innerHTML = para

}
else{



    nver = prizbrl

  
    var sdiv = document.createElement("div")
    this.append(sdiv)
    sdiv.setAttribute("class","sdiv")
    
    var sndukimg = document.createElement("img")
    sdiv.append(sndukimg)
    sndukimg.setAttribute("class","sndukimg")

sndukimg.src = pizimg
    

var sndukp = document.createElement("p")
sdiv.append(sndukp)
sndukp.setAttribute("class","sndukp")
sndukp.setAttribute("align","center")
sndukp.innerHTML = nver
sndukp.style.color = "aqua"

var po = ((snd1.offsetHeight+14)/2)+10
    
var pp = ((snd1.offsetHeight+14)/2)-20




   
        sndukimg.style.width = po + "px"
        sndukimg.style.height =po + "px"
        sndukp.style.fontSize =  pp + "px"
    
     

    
    console.log(nver);
    adamand = Math.floor(adamand) + nver
    adam = adamand
    localStorage.setItem("adam", adam)

    var brlp = document.getElementsByClassName("brlp")
    brlp[0].innerHTML = adamand


}





 this.style.backgroundImage = "url(./img/sndbac.png)";
this.onclick = "none"

var sndukner = document.getElementsByClassName("snd1")
for (let m = 0; m < sndukner.length; m++) {
    sndukner[m].onclick = "none"
    
}


setTimeout(() => {

verc = 0
localStorage.setItem("vercra",verc)
vercs = 0
timesl = 1
timess = 1
localStorage.setItem("timess",timesl)
var times = new Date()
localStorage.setItem("erekor",times.getDate())
localStorage.setItem("erekamis",times.getMonth())

 shahum.parentElement.removeChild(shahum)

}, 2000);
    
        
     
    
    }
    
    }
    
      
}



}


function sndver(params) {
    var xaxayin = document.getElementsByClassName("shahum")
var plusdiv =document.getElementsByClassName("plusdiv") 



    var verev = document.createElement("div")
    verev.setAttribute("class", "vererv")

    
if (plusdiv[0]) {
    plusdiv[0].append(verev)

}
else{
    xaxayin[0].append(verev)
}

    var brldiv = document.createElement("div")
    brldiv.setAttribute("class", "brldiv")
    verev.append(brldiv)
    

    var brl = document.createElement("img")
    brl.setAttribute("src", "img/brliand.png")
    brl.setAttribute("class", "brl")
    brl.setAttribute("id", "adamans")
    brldiv.append(brl)
    
    brl.style.width = ((verev.parentElement.offsetHeight/16)+3)+"px"
    brl.style.height = ((verev.parentElement.offsetHeight/16)+3)+"px"

    
    var brlp = document.createElement("p")
    brlp.setAttribute("class", "brlp")
    brlp.innerHTML = adamand
    brldiv.append(brlp)
    brlp.style.fontSize = (brl.offsetHeight-12) + "px"
    
    var poxdiv = document.createElement("div")
    poxdiv.setAttribute("class", "poxdiv")
    verev.append(poxdiv)
    
    var poxp = document.createElement("p")
    poxp.setAttribute("class", "poxp")
    poxp.innerHTML = para
    poxdiv.append(poxp)
    poxp.style.fontSize = (brl.offsetHeight-12) + "px"
    
    
    var pox = document.createElement("img")
    pox.setAttribute("src", "img/pox.png")
    pox.setAttribute("class", "pox")
    poxdiv.append(pox)
  
    
    
    pox.style.width = ((brl.offsetHeight+3))+"px"
    pox.style.height = ((brl.offsetHeight+3))+"px"
}




function brlaynd(params) {
    
var plusdiv = document.createElement("div")
document.body.children[1].append(plusdiv)
plusdiv.setAttribute("class","plusdiv")
plusdiv.style.width = plusdiv.parentElement.offsetWidth + "px"
plusdiv.style.height = plusdiv.parentElement.offsetHeight  + "px"

brlver()

var mejtex = document.createElement("div")
plusdiv.append(mejtex)
mejtex.setAttribute("class","mejtex")

mejtex.style.height = plusdiv.parentElement.offsetHeight-200  + "px"



var plusmej = document.createElement("div")
mejtex.append(plusmej)
plusmej.setAttribute("class","plusmej")
plusmej.style.width = plusdiv.parentElement.offsetWidth-100 + "px"
plusmej.style.height = plusdiv.parentElement.offsetHeight-200  + "px"

// var h1idiv = document.createElement("h1")
// plusmej.append(h1idiv)
// h1idiv.setAttribute("class","hidiv")
// h1idiv.innerHTML = "Գնեք բրլիանտներ գումարով"

var plusmejimej = document.createElement("div")
plusmej.append(plusmejimej)
plusmejimej.setAttribute("class","plusmejimej")
// plusmejimej.style.width = plusdiv.parentElement.offsetWidth-100 + "px"
// plusmejimej.style.height = plusdiv.parentElement.offsetHeight-200  + "px"

var hognbrl = [1,10,100,150,200]
var hognpox = [10,80,700,800,1000]




for (let k = 0; k < 5; k++) {
   
    var pl1 = document.createElement("div")
    plusmejimej.append(pl1)
pl1.setAttribute("class","pl1")
pl1.style.height = (plusmej.offsetHeight/10  )+ "px"

   
var bri = document.createElement("img")
pl1.append(bri)
bri.setAttribute("class","bri")
bri.src = "img/brliand.png"

// var brpdiv = document.createElement("div")
// pl1.append(brpdiv)
// brpdiv.setAttribute("class","brpdiv")



var brp = document.createElement("p")
pl1.append(brp)
brp.setAttribute("class","brp")
// brp.innerHTML = 1 + "-"

var poxp = document.createElement("p")
pl1.append(poxp)
poxp.setAttribute("class","para")
// poxp.innerHTML = 10 

var poxdivplus = document.createElement("div")
pl1.append(poxdivplus)
poxdivplus.setAttribute("class","poxdivplus")


var poxi = document.createElement("img")
poxdivplus.append(poxi)
poxi.setAttribute("class","poxi")
poxi.src = "img/pox.png"
poxi.style.width = (plusmej.offsetHeight/10) + "px"

var pluss = document.createElement("img")
poxdivplus.append(pluss)
pluss.setAttribute("class","pluss")
pluss.src = "img/plus.png"
pluss.id = k
pluss.style.width = (plusmej.offsetHeight/10) + "px"
pluss.onclick =function (params) {
    var bb = document.getElementsByClassName('brlp2')
    var pb = document.getElementsByClassName('poxp2')
    if (this.id==0&&para>=10) {
    

        adamand = Math.floor(adamand) + 1
        adam = adamand
        localStorage.setItem("adam", adam)
    
        para = Math.floor(para) - 10
        par = para
        localStorage.setItem("para", par)
    
    
    
 
        bb[0].innerHTML = adamand
    
    
        pb[0].innerHTML = para
    
    
    } 

    else if (this.id==1&&para>=80) {
        adamand = Math.floor(adamand) + 10
        adam = adamand
        localStorage.setItem("adam", adam)
    
        para = Math.floor(para) - 80
        par = para
        localStorage.setItem("para", par)
    
    
    
 
        bb[0].innerHTML = adamand
    
    
        pb[0].innerHTML = para
    
    }
    else if (this.id==2&&para>=700) {
        adamand = Math.floor(adamand) + 100
        adam = adamand
        localStorage.setItem("adam", adam)
    
        para = Math.floor(para) - 700
        par = para
        localStorage.setItem("para", par)
    
    
    
 
        bb[0].innerHTML = adamand
    
    
        pb[0].innerHTML = para
    
    }
    else if (this.id==3&&para>=800) {
        adamand = Math.floor(adamand) + 150
        adam = adamand
        localStorage.setItem("adam", adam)
    
        para = Math.floor(para) - 800
        par = para
        localStorage.setItem("para", par)
    
    
    
 
        bb[0].innerHTML = adamand
    
    
        pb[0].innerHTML = para
    
    }
    else if (this.id==4&&para>=1000) {
        adamand = Math.floor(adamand) + 200
        adam = adamand
        localStorage.setItem("adam", adam)
    
        para = Math.floor(para) - 1000
        par = para
        localStorage.setItem("para", par)
    
    
    
 
        bb[0].innerHTML = adamand
    
    
        pb[0].innerHTML = para
    
    }
}
    




// brp.style.height = plusmej.offsetHeight/10  + "px"



}


var nbrl = document.getElementsByClassName("brp")
var npox = document.getElementsByClassName("para")

for (let v = 0; v < nbrl.length; v++) {
    nbrl[v].innerHTML = hognbrl[v] + "-"
    npox[v].innerHTML = hognpox[v]
}

var cac = document.createElement("div")

plusdiv.append(cac)
cac.setAttribute("class","cac")

var dom = document.createElement("img")
dom.setAttribute("class","dom")
dom.src = "img/home.png"
cac.append(dom)
dom.addEventListener("click",doms)
}

function brlver(params) {
    var xaxayin = document.getElementsByClassName("shahum")
var plusdiv =document.getElementsByClassName("plusdiv") 




    var verev = document.createElement("div")
    verev.setAttribute("class", "vererv")
    plusdiv[0].append(verev)
    
    var brldiv = document.createElement("div")
    brldiv.setAttribute("class", "brldiv")
    verev.append(brldiv)
    
    // var brlplus = document.createElement("img")
    // brlplus.setAttribute("src", "img/plus.png")
    // brlplus.setAttribute("class", "plus")
    // brldiv.append(brlplus)
    // brlplus.addEventListener("click",brlaynd)
    
    var brl = document.createElement("img")
    brl.setAttribute("src", "img/brliand.png")
    brl.setAttribute("class", "brl")
    brl.setAttribute("id", "adamans")
    brldiv.append(brl)
    
    brl.style.width = ((plusdiv[0].offsetHeight/16)+3)+"px"
    brl.style.height = ((plusdiv[0].offsetHeight/16)+3)+"px"
    // brlplus.style.width = (brl.offsetHeight-17)+"px"
    // brlplus.style.height = (brl.offsetHeight-17)+"px"
    
    
    
    var brlp = document.createElement("p")
    brlp.setAttribute("class", "brlp2")
    brlp.innerHTML = adamand
    brldiv.append(brlp)
    brlp.style.fontSize = (brl.offsetHeight-12) + "px"
    
    var poxdiv = document.createElement("div")
    poxdiv.setAttribute("class", "poxdiv")
    verev.append(poxdiv)
    
    var poxp = document.createElement("p")
    poxp.setAttribute("class", "poxp2")
    poxp.innerHTML = para
    poxdiv.append(poxp)
    poxp.style.fontSize = (brl.offsetHeight-12) + "px"
    
    
    var pox = document.createElement("img")
    pox.setAttribute("src", "img/pox.png")
    pox.setAttribute("class", "pox")
    poxdiv.append(pox)
    var poxplus = document.createElement("img")
    poxplus.setAttribute("src", "img/poxplus.png")
    poxplus.setAttribute("class", "poxplus")
    poxdiv.append(poxplus)
    
    
    pox.style.width = ((brl.offsetHeight+3))+"px"
    pox.style.height = ((brl.offsetHeight+3))+"px"
    poxplus.style.width = (brl.offsetHeight-15)+"px"
    poxplus.style.height = (brl.offsetHeight-15)+"px"


}

function futer2(params) {
      var opshi = document.getElementsByClassName("opshuc")[0]
      var harcdividiv =  document.getElementsByClassName("harcdividiv")[0] 


    var futer = document.createElement("div")
    if (opshi) {
        opshi.append(futer)
    }
    else if (harcdividiv) {
        harcdividiv.append(futer)
    }
   
    futer.setAttribute("class", "futer")


    var zvuk = document.createElement("img")
    futer.append(zvuk)
    zvuk.setAttribute("class", "zvuk")
zvuk.src = "img/zvuk.png"



var dom = document.createElement("img")

futer.append(dom)
dom.setAttribute("class", "dom")
dom.src = "img/home.png"
dom.addEventListener("click",doms)
var drosh = document.createElement("img")
futer.append(drosh)
drosh.setAttribute("class", "drosh")
drosh.addEventListener("click",drosh2)
// drosh.addEventListener("click",droshinna)
if (fla==0) {
    drosh.src = "img/rus.png"
}
else if (fla==1) {
    
    drosh.src = "img/arm.png"
    drosh.style.width = "47px"
    drosh.style.height = "47px"

}

}

function dostijenia(params) {
k1.play()
setTimeout(() => {
    document.body.removeChild(document.body.children[1]) 
    document.body.style.backgroundImage = "url()"
    document.body.style.backgroundColor = "antiquewhite"
    var opshuc = document.createElement("div")
    opshuc.setAttribute('class',"opshuc")
    document.body.append(opshuc)



           var h1div = document.createElement("div")
           h1div.setAttribute("class","h1idiv")
           opshuc.append(h1div)

           var h1 = document.createElement("h1")
           h1.setAttribute("class","h1dast")
           h1div.append(h1)
           if (fla==0) {
            h1.innerHTML = tarhy[2]
           }
           else{
            h1.innerHTML = tarru[2]
           }

           var dastidiv = document.createElement("div")
           opshuc.append(dastidiv)
           dastidiv.setAttribute("class","dastdiv")
        dastidiv.style.height = (opshuc.offsetHeight-200) + 'px'
            for (let i = 0; i < 4; i++) {
               
                var dast = document.createElement("div")
                dastidiv.append(dast)
                dast.setAttribute("class","dast")
                dast.id = i
                dast.style.height = (dastidiv.offsetHeight/4) + "px"
                
                var dastimg = document.createElement("img")
              
                dast.append(dastimg)
                dastimg.setAttribute("class","dastimg")
                var dastpdiv= document.createElement("div")
                dast.append(dastpdiv)
                dastpdiv.setAttribute("class","dastpdiv")

                var dastp = document.createElement("div")
           
                dastpdiv.append(dastp)
                dastp.setAttribute("class","dastp")
                dastp.id = i+4
                dastp.setAttribute("align","center")
                var dastpdiv2= document.createElement("div")
                dast.append(dastpdiv2)
                dastpdiv2.setAttribute("class","dastpdiv2")

                var dastp2 = document.createElement("div")
                dastpdiv2.append(dastp2)
                dastp2.setAttribute("class","dastp2")
     
                var dastcomple = document.createElement("img")
                dast.append(dastcomple)
                dastcomple.setAttribute("class","dastcomple")
                if (opshuc.offsetHeight>600) {

                    dastcomple.style.height = dast.offsetHeight-40 + "px"
                    dastcomple.style.width = dast.offsetHeight-40 + "px"
                    dastimg.style.height = dast.offsetHeight-40 + "px"
                    dastimg.style.width = dast.offsetHeight-40 + "px"
                    dastp.style.fontSize = (opshuc.offsetHeight/36) + "px"
                    dastp2.style.fontSize = (opshuc.offsetHeight/25) + "px"
                }
               else{
                dastcomple.style.height = dast.offsetHeight-10 + "px"
                dastcomple.style.width = dast.offsetHeight-10 + "px"
                dastimg.style.height = dast.offsetHeight-10 + "px"
                dastimg.style.width = dast.offsetHeight-10 + "px"

               }
     

                if (dast.id==0) {
                    dast.style.borderTopLeftRadius = "20px"
                    dast.style.borderTopRightRadius = "20px"
               
                    dastimg.src = "img/lev.png"
                    dastp.style.color = "brown"
                    dast.style.backgroundColor = "beige"
                    dastp2.style.color = "brown"
                
                        if (lev >= 5) {
                      
                            dastcomple.src = "img/comp.png"
                            dastp2.innerHTML = "5/5"
                            
                        }
                        else {
                        dastcomple.src = "img/d1.png"
                        if (lev==0) {
                            dastp2.innerHTML = lev + "/5"
                        }
                        else{
                            dastp2.innerHTML = lev-1 + "/5"
                        }
                      
                        } 
                    
        
           
                    if (fla==0) {
                              dastp.innerHTML = tarhy[9]
                       }
                       else{
                        dastp.innerHTML = tarru[9]
                       }
            
                   
                }
                else if(dast.id==1){
                    dastimg.src = "img/lev.png"
                    dastp.style.color = "blue"
                    dastp2.style.color = "blue"
                    dast.style.backgroundColor = "aquamarine"
            
                    dastimg.src = "img/d2.png"
                    if (ka2==0) {
                        if (adamand >= 46) {
                            ka2 = 1
                            localStorage.setItem("ka2",1)
                            dastcomple.src = "img/comp.png"
                            dastp2.innerHTML = "46/46"
                        }
                        else {
                        dastcomple.src = "img/d1.png"
                        dastp2.innerHTML = adamand + "/46"
                        }
                     
               
                     
                    }
              else{
                dastcomple.src = "img/comp.png"
                dastp2.innerHTML = "46/46"
              }
              if (fla==0) {
                dastp.innerHTML = tarhy[10]
         }
         else{
          dastp.innerHTML = tarru[10]
         }

}   
      else if(dast.id==2){

        dastp.style.color = "gold"
                    dastp2.style.color = "gold"
                    dast.style.backgroundColor = "limegreen"
            
        
    dastimg.src = "img/poxs.png"
    
    if (ka==0) {
        if (para >= 180) {
          ka = 1
            localStorage.setItem("ka",1)
            dastcomple.src = "img/comp.png"
            dastp2.innerHTML = "180/180"
        }
        else {
            dastcomple.src = "img/d1.png"
            dastp2.innerHTML = para + "/180"
            }
    }
    else{
        dastcomple.src = "img/comp.png"
        dastp2.innerHTML = "180/180"

    }


 
 

    if (fla==0) {
              dastp.innerHTML = tarhy[11]
       }
       else{
        dastp.innerHTML = tarru[11]
       }


}
else if(dast.id==3){
      dast.style.backgroundColor = "aliceblue"
    dast.style.borderBottomLeftRadius  = "20px"
    dast.style.borderBottomRightRadius  = "20px"
    dastimg.src = "img/dzaxs.png"
    dastcomple.src = "img/ajs.png"
  
    dastcomple.style.border = "1px solid black"
    dastcomple.style.borderRadius =  "52%";
      
    dastimg.style.border = "1px solid black"
    dastimg.style.borderRadius =  "52%";
 




}

            
            }

            

futer2()
 
}, 150);






}


function drosh2(params) {
    k1.play()
    var p1 = document.getElementById("4")
    var p2 = document.getElementById("5")
    var p3 = document.getElementById("6")
    var hner = document.getElementsByClassName("h1dast")
    if (localStorage.getItem("tetev", tetev) == 0) {
        fl = 1
        localStorage.setItem("flay", fl)
        fla = 1

        this.src = "img/arm.png"
        this.style.width = "45px"
        this.style.height = "45px"

        tetev = 1
        localStorage.setItem("tetev", tetev)

        p1.innerHTML = tarru[9]
        p2.innerHTML = tarru[10]
        p3.innerHTML = tarru[11]
        hner[0].innerHTML = tarru[2]
      



    }
    else if (localStorage.getItem("tetev", tetev) == 1) {

        fl = 0
        localStorage.setItem("flay", fl)
        fla = 0


        this.src = "img/rus.png"
        this.style.width = "64px"
        this.style.height = "50px"

        tetev = 0
        localStorage.setItem("tetev", tetev)

        p1.innerHTML = tarhy[9]
        p2.innerHTML = tarhy[10]
        p3.innerHTML = tarhy[11]
        hner[0].innerHTML = tarhy[2]



    }
}


function harcakan(){
    k1.play()
document.body.removeChild(document.body.children[1])
  document.body.style.backgroundImage = "url()"      
  document.body.style.backgroundColor= "antiquewhite"  
  




var harcopshidiv = document.createElement("div")
document.body.append(harcopshidiv)
 harcopshidiv.setAttribute("class","harcodiv")
 harcopshidiv.style.width = window.innerWidth + "px"
 harcopshidiv.style.height = window.innerHeight + "px"

 
var harcdividiv = document.createElement("div")
harcopshidiv.append(harcdividiv)
harcdividiv.setAttribute("class","harcdividiv")
harcdividiv.style.width = window.innerWidth + "px"
harcdividiv.style.height = window.innerHeight + "px"


var hndiv = document.createElement("div")
hndiv.setAttribute("class",'hndiv')
harcdividiv.appendChild(hndiv)



var hn = document.createElement("h1")
hndiv.append(hn)
hn.setAttribute("class","harch1")
hn.innerHTML = "Կանոններ"
hn.setAttribute("align","center")

 var harcdiv = document.createElement("div")
 harcdividiv.append(harcdiv)
 harcdiv.setAttribute("class","harcdiv")
 harcdiv.style.width =   harcopshidiv.offsetWidth-100 +"px"
 harcdiv.style.height =   harcopshidiv.offsetHeight-200 +"px"

 var divichap = Math.floor(harcdiv.offsetHeight/22)

 var p1 = document.createElement("p")
 harcdiv.append(p1)
 p1.setAttribute("class","p1kanon")
 p1.innerHTML = "Խաղի նպատակն է գտնել կատվին"
 p1.setAttribute("align","center")
 p1.style.fontSize =  + divichap + "px"


 var p3 = document.createElement("p")
 harcdiv.append(p3)
 p3.setAttribute("class","p3kanon")
 p3.innerHTML = "Այս խաղը գրված է միայն javascript-ով"
 p3.setAttribute("align","center")
 p3.style.fontSize = divichap-1 + "px"


 var p2 = document.createElement("p")
 harcdiv.append(p2)
 p2.setAttribute("class","p2kanon")
 p2.innerHTML = "Անձնակազմ"
 p2.setAttribute("align","center")
 p2.style.fontSize = divichap+9 + "px"


 var p4 = document.createElement("p")
 harcdiv.append(p4)
 p4.setAttribute("class","p4kanon")
 p4.innerHTML = "Նկարներ - A.Mkrtchyan "
 p4.setAttribute("align","center")
  p4.style.fontSize = divichap+1 + "px"
//  var p5 = document.createElement("p")
//  harcdiv.append(p5)
//  p5.setAttribute("class","p5kanon")
//  p5.innerHTML = "Դիզայն - H.Martirosyan"
//  p5.setAttribute("align","center")
 
 var p6 = document.createElement("p")
 harcdiv.append(p6)
 p6.setAttribute("class","p6kanon")
 p6.innerHTML = "կոդ - A.Sargsyan "
 p6.setAttribute("align","center")
 p4.style.fontSize = divichap+1 + "px"
 //p5.style.fontSize = divichap+1 + "px"
 p6.style.fontSize = divichap+1 + "px"
//  var p7 = document.createElement("p")
//  harcdiv.append(p7)
//  p7.setAttribute("class","p7kanon")
//  p7.innerHTML = "Բոլոր կաննոնները պաշպանված են"
//  p7.setAttribute("align","center")
 
 
 

futer2()


}





// locacl stronge
// cound	0	
// lev	0	
// game	1	
// cl1	0	
// erekor	2	
// timess	1	
// adam	40	
// vercra	0	
// para	160	
// erekamis	7	
// flay	1	
// tetev	1	
// ej	1	



 function ognutyun(level) {
    var v = document.getElementsByTagName("td")
    var ga = document.getElementsByClassName("gamediv")[0]
    var ogndiv  = document.createElement("div")
    var b
    for (let f = 0; f < v.length; f++) {
        if (v[f].id==20-10&&v[f].parentElement.id==11-3) {
          b=v[f]  
          
          break
        }
        
    }
    if (level==0) {
     
        v[152].append(ogndiv)
    }
   else if (level== 1) {

    b.append(ogndiv)

    }
    else if (level== 2) {
        v[156].append(ogndiv)
    }
    else if (level== 3) {
        v[190].append(ogndiv)
    }
  
  
 
    ogndiv.setAttribute("class","klors")
//   ogndiv.style.width = ga.offsetWidth/1.5-2 + "px"
//   ogndiv.style.height = ga.offsetWidth/1.5-2  + "px"
       var tbl = document.createElement('table')
       ogndiv.appendChild(tbl)
       tbl.setAttribute("class", "table2")
  
       var tbd = document.createElement('tbody')
  
       tbl.appendChild(tbd)
       var m = 20
       var n = 20
  
       var chap1 = ga.offsetHeight
  
  var verj = ga.offsetWidth/32
       
       for (let i = 0; i < m; i++) {
           var tr = document.createElement('tr')
           tbd.appendChild(tr)
           tr.setAttribute("id", i)
  
        //    tr.style.height = verj-2 + 'px'
        tr.style.height = verj + 'px'
           for (let j = 0; j < n; j++) {
               var td = document.createElement('td')
               tr.appendChild(td)
               td.setAttribute("class", "td")
               td.setAttribute("id", j)
               td.style.backgroundColor = "transparent"
td.style.width = verj   + "px"
              //  td.style.width = 30 + 'px'
               // td.style.height = 42 + 'px'

    td.onclick = function (params) {
        if (level==0) {
        if (this.id == 7 && this.parentElement.id == 0 || this.id == 8 && this.parentElement.id == 0 || this.id == 6 && this.parentElement.id == 1 || this.id == 7 && this.parentElement.id == 1 || this.id == 8 && this.parentElement.id == 1 || this.id == 9 && this.parentElement.id == 1 || this.id == 6 && this.parentElement.id == 2 || this.id == 7 && this.parentElement.id == 2 || this.id == 8 && this.parentElement.id == 2 || this.id == 9 && this.parentElement.id == 2 || this.id == 10 && this.parentElement.id == 2 || this.id == 12 && this.parentElement.id == 2 || this.id == 13 && this.parentElement.id == 2 || this.id == 5 && this.parentElement.id == 3 || this.id == 6 && this.parentElement.id == 3 || this.id == 7 && this.parentElement.id == 3|| this.id == 8 && this.parentElement.id == 3|| this.id ==9 && this.parentElement.id == 3|| this.id == 10 && this.parentElement.id == 3|| this.id == 12 && this.parentElement.id == 3|| this.id == 13 && this.parentElement.id == 3|| this.id == 5 && this.parentElement.id == 4|| this.id == 6 && this.parentElement.id == 4|| this.id ==7 && this.parentElement.id == 4|| this.id == 8 && this.parentElement.id == 4|| this.id == 9 && this.parentElement.id == 4|| this.id == 10 && this.parentElement.id == 4|| this.id == 11 && this.parentElement.id == 4|| this.id == 12 && this.parentElement.id == 4|| this.id == 13 && this.parentElement.id == 4|| this.id == 5 && this.parentElement.id == 5|| this.id == 6 && this.parentElement.id == 5|| this.id == 7 && this.parentElement.id == 5|| this.id == 8 && this.parentElement.id == 5|| this.id == 9 && this.parentElement.id == 5|| this.id == 10 && this.parentElement.id == 5|| this.id == 11 && this.parentElement.id == 5|| this.id == 12 && this.parentElement.id == 5|| this.id == 5 && this.parentElement.id == 6|| this.id == 6 && this.parentElement.id == 6|| this.id == 7 && this.parentElement.id == 6|| this.id == 8 && this.parentElement.id == 6|| this.id == 9 && this.parentElement.id == 6|| this.id == 10 && this.parentElement.id == 6|| this.id == 11 && this.parentElement.id == 6|| this.id==12 && this.parentElement.id == 6|| this.id == 13 && this.parentElement.id == 6|| this.id == 14 && this.parentElement.id == 6|| this.id == 4 && this.parentElement.id == 7|| this.id == 5 && this.parentElement.id == 7|| this.id == 6 && this.parentElement.id == 7|| this.id == 7 && this.parentElement.id == 7|| this.id == 8 && this.parentElement.id == 7|| this.id == 9 && this.parentElement.id == 7|| this.id == 10 && this.parentElement.id == 7|| this.id == 11 && this.parentElement.id == 7|| this.id == 12 && this.parentElement.id == 7|| this.id == 13 && this.parentElement.id == 7|| this.id == 14 && this.parentElement.id == 7|| this.id == 4 && this.parentElement.id == 8|| this.id == 5 && this.parentElement.id == 8|| this.id == 6 && this.parentElement.id == 8|| this.id == 7 && this.parentElement.id == 8|| this.id == 9 && this.parentElement.id == 8|| this.id == 10 && this.parentElement.id == 8|| this.id == 11 && this.parentElement.id == 8|| this.id == 12 && this.parentElement.id == 8|| this.id == 13 && this.parentElement.id == 8|| this.id == 14 && this.parentElement.id == 8|| this.id == 4 && this.parentElement.id == 9|| this.id == 5 && this.parentElement.id == 9|| this.id == 6 && this.parentElement.id == 9|| this.id == 7 && this.parentElement.id == 9|| this.id == 8 && this.parentElement.id == 9|| this.id == 10 && this.parentElement.id == 9|| this.id == 11 && this.parentElement.id == 9|| this.id == 12 && this.parentElement.id == 9|| this.id == 13 && this.parentElement.id == 9|| this.id == 14 && this.parentElement.id == 9|| this.id == 15 && this.parentElement.id == 9|| this.id == 3 && this.parentElement.id == 10|| this.id == 4 && this.parentElement.id == 10|| this.id == 5 && this.parentElement.id == 10|| this.id == 6 && this.parentElement.id == 10|| this.id == 7 && this.parentElement.id == 10|| this.id == 8 && this.parentElement.id == 10|| this.id == 9 && this.parentElement.id == 10|| this.id == 10 && this.parentElement.id == 10|| this.id == 11 && this.parentElement.id == 10|| this.id == 12 && this.parentElement.id == 10|| this.id == 13 && this.parentElement.id == 10|| this.id == 14 && this.parentElement.id == 10|| this.id == 15 && this.parentElement.id == 10|| this.id == 3 && this.parentElement.id == 11|| this.id == 4 && this.parentElement.id == 11|| this.id == 5 && this.parentElement.id == 11|| this.id == 6 && this.parentElement.id == 11|| this.id == 7 && this.parentElement.id == 11|| this.id == 8|| this.id == 11 && this.parentElement.id == 9|| this.id == 11 && this.parentElement.id == 10|| this.id == 11&& this.parentElement.id == 11|| this.id == 12 && this.parentElement.id == 11|| this.id == 13 && this.parentElement.id == 11|| this.id == 14 && this.parentElement.id == 11|| this.id == 3 && this.parentElement.id == 12|| this.id == 4 && this.parentElement.id == 12|| this.id == 5 && this.parentElement.id == 12|| this.id == 6 && this.parentElement.id == 12|| this.id == 7 && this.parentElement.id == 12||  this.id == 8 && this.parentElement.id == 12|| this.id == 9 && this.parentElement.id == 12|| this.id == 10 && this.parentElement.id == 12|| this.id == 11 && this.parentElement.id == 12|| this.id == 12 && this.parentElement.id == 12|| this.id == 13 && this.parentElement.id == 12|| this.id ==3 && this.parentElement.id == 13|| this.id == 4 && this.parentElement.id == 13|| this.id == 5 && this.parentElement.id == 13|| this.id == 6 && this.parentElement.id == 13|| this.id == 7 && this.parentElement.id == 13|| this.id == 8 && this.parentElement.id == 13|| this.id == 10 && this.parentElement.id == 13|| this.id == 11 && this.parentElement.id == 13|| this.id == 12 && this.parentElement.id == 13|| this.id == 13 && this.parentElement.id == 13|| this.id == 4 && this.parentElement.id == 14|| this.id == 11 && this.parentElement.id == 13|| this.id == 12 && this.parentElement.id == 13|| this.id == 11 && this.parentElement.id == 13|| this.id == 12 && this.parentElement.id == 13|| this.id == 11 && this.parentElement.id == 13|| this.id == 12 && this.parentElement.id == 13|| this.id == 11 && this.parentElement.id == 13|| this.id == 12 && this.parentElement.id == 13|| this.id == 11 && this.parentElement.id == 13|| this.id == 12 && this.parentElement.id == 13|| this.id == 11 && this.parentElement.id == 13|| this.id == 12 && this.parentElement.id == 13|| this.id == 13 && this.parentElement.id == 13|| this.id == 4 && this.parentElement.id == 14|| this.id == 5 && this.parentElement.id == 14|| this.id == 6 && this.parentElement.id == 14|| this.id == 7 && this.parentElement.id == 14|| this.id == 8 && this.parentElement.id == 14|| this.id == 9 && this.parentElement.id == 14|| this.id == 10 && this.parentElement.id == 14|| this.id == 11 && this.parentElement.id == 14|| this.id == 12 && this.parentElement.id == 14|| this.id == 4 && this.parentElement.id == 15|| this.id == 5 && this.parentElement.id == 15|| this.id == 6 && this.parentElement.id == 15|| this.id == 7 && this.parentElement.id == 15|| this.id == 8 && this.parentElement.id == 15|| this.id == 9 && this.parentElement.id == 15|| this.id == 10 && this.parentElement.id == 15|| this.id == 11 && this.parentElement.id == 15|| this.id == 4 && this.parentElement.id == 16||this.id == 5 && this.parentElement.id == 16|| this.id == 6 && this.parentElement.id == 16|| this.id == 7 && this.parentElement.id == 16|| this.id == 8&& this.parentElement.id == 16|| this.id == 9 && this.parentElement.id == 16|| this.id == 10 && this.parentElement.id == 16|| this.id == 11 && this.parentElement.id == 16|| this.id == 6 && this.parentElement.id == 17|| this.id == 7 && this.parentElement.id == 17|| this.id == 8 && this.parentElement.id == 17|| this.id == 9 && this.parentElement.id == 17|| this.id == 10 && this.parentElement.id == 17|| this.id == 11 && this.parentElement.id == 17|| this.id == 6 && this.parentElement.id == 18|| this.id == 7 && this.parentElement.id == 18|| this.id == 8 && this.parentElement.id == 18|| this.id == 9 && this.parentElement.id == 18|| this.id == 11 && this.parentElement.id == 18) {
            var ts = document.getElementsByClassName("table")[0]
    
        
            ts.classList.add("comp")
                
            
                ts.style.backgroundImage = "url(img/compl/1.png)"
                paraadam()
                gamelev = 1
                lev = 1
                localStorage.setItem("lev", gamelev)


                setTimeout(() => {
                    
                    l1()
                }, chap); 
            
       }
       else{
        paraadamdel()

        tanel(this)
       }

     }
     else if (level==1) {
        if (this.id == 12 && this.parentElement.id == 7 || this.id == 13 && this.parentElement.id == 7 || this.id == 14 && this.parentElement.id == 7 || this.id == 12 && this.parentElement.id == 8 || this.id == 13 && this.parentElement.id == 8 || this.id == 14 && this.parentElement.id == 8|| this.id == 15 && this.parentElement.id == 8|| this.id == 16 && this.parentElement.id == 8|| this.id == 17 && this.parentElement.id == 8|| this.id == 18 && this.parentElement.id == 8|| this.id == 13 && this.parentElement.id == 9|| this.id == 14 && this.parentElement.id == 9 || this.id == 15 && this.parentElement.id == 9|| this.id == 16 && this.parentElement.id == 9|| this.id == 17 && this.parentElement.id == 9|| this.id == 18 && this.parentElement.id == 19|| this.id == 13 && this.parentElement.id == 10|| this.id == 14 && this.parentElement.id == 10|| this.id == 15 && this.parentElement.id == 10|| this.id == 16 && this.parentElement.id == 10|| this.id == 17 && this.parentElement.id == 10|| this.id == 18 && this.parentElement.id == 10|| this.id == 19 && this.parentElement.id == 10) {
            var ts = document.getElementsByClassName("table")[0]
    
        
            ts.classList.add("comp")
                 paraadam()
            
                ts.style.backgroundImage = "url(img/compl/7.png)"
            gamelev = 2
            lev = 2
            localStorage.setItem("lev", gamelev)


            setTimeout(() => {
                l3()
            }, 2000);

        }
        else {
            paraadamdel()
            tanel(this)
        }
     }
     else if (level==2) {
        if (this.id == 6 && this.parentElement.id == 7 || this.id == 7 && this.parentElement.id == 7 || this.id == 5 && this.parentElement.id == 8 || this.id == 6 && this.parentElement.id == 8 || this.id == 7 && this.parentElement.id == 8 || this.id == 8 && this.parentElement.id == 8|| this.id == 5 && this.parentElement.id == 9|| this.id == 6 && this.parentElement.id == 9|| this.id == 7 && this.parentElement.id == 9|| this.id == 8 && this.parentElement.id == 9|| this.id == 5 && this.parentElement.id == 10|| this.id == 6 && this.parentElement.id == 10 || this.id == 7 && this.parentElement.id == 10|| this.id == 8 && this.parentElement.id == 10|| this.id == 6 && this.parentElement.id == 11|| this.id == 7 && this.parentElement.id == 11|| this.id == 6 && this.parentElement.id == 12|| this.id == 7 && this.parentElement.id == 12|| this.id == 8 && this.parentElement.id == 12|| this.id == 7 && this.parentElement.id == 13) {
            var ts = document.getElementsByClassName("table")[0]
    
        
            ts.classList.add("comp")
                 paraadam()
            
                ts.style.backgroundImage = "url(img/compl/5.png)"
            gamelev = 3
            lev = 3
            localStorage.setItem("lev", gamelev)


            setTimeout(() => {
                l4()
            }, chap);

        }
        else {
            paraadamdel()
            tanel(this)
        }
     }
     else if (level==3) {
        if (this.id == 6 && this.parentElement.id == 7 || this.id == 7 && this.parentElement.id == 7 || this.id == 5 && this.parentElement.id == 8 || this.id == 6 && this.parentElement.id == 8 || this.id == 7 && this.parentElement.id == 8 || this.id == 8 && this.parentElement.id == 8|| this.id == 5 && this.parentElement.id == 9|| this.id == 6 && this.parentElement.id == 9|| this.id == 7 && this.parentElement.id == 9|| this.id == 8 && this.parentElement.id == 9|| this.id == 5 && this.parentElement.id == 10|| this.id == 6 && this.parentElement.id == 10 || this.id == 7 && this.parentElement.id == 10|| this.id == 8 && this.parentElement.id == 10|| this.id == 6 && this.parentElement.id == 11|| this.id == 7 && this.parentElement.id == 11|| this.id == 6 && this.parentElement.id == 12|| this.id == 7 && this.parentElement.id == 12|| this.id == 8 && this.parentElement.id == 12|| this.id == 7 && this.parentElement.id == 13) {
            var ts = document.getElementsByClassName("table")[0]
    
        
            ts.classList.add("comp")
                 paraadam()
            
                ts.style.backgroundImage = "url(img/compl/4.png)"
            gamelev = 4
            lev = 4
            localStorage.setItem("lev", gamelev)


            setTimeout(() => {
                l5()
            }, chap);

        }
        else {
            paraadamdel()
            tanel(this)
        }
     }
}

           
       }
    
  
    }
    ogndiv.style.width = 10*20 + "px"
    ogndiv.style.height = 10*20  + "px"

}




