const FavoriteItems = [
    {
        image: "./assets/image/ico/atom.png",
        name: "ATOM",
        price: "7.89$"
    },
    {
        image: "./assets/image/ico/1inch.png",
        name: "1INCH",
        price: "0.76$"
    },
    {
        image: "./assets/image/ico/gods.png",
        name: "GODS",
        price: "0.0076$"
    },
    {
        image: "./assets/image/ico/elon.png",
        name: "ELON",
        price: "0.00000084$"
    },
    {
        image: "./assets/image/ico/move.png",
        name: "MOVE",
        price: "0.84$"
    },
    {
        image: "./assets/image/ico/jewel.png",
        name: "JEWEL",
        price: "7.89$"
    },
    {
        image: "./assets/image/ico/atom.png",
        name: "ATOM",
        price: "7.89$"
    }
]
var myFavorites = "";
for (let i = 0; i < FavoriteItems.length; i++) {
    myFavorites += `<div class="subscrollx mr-2 p-3 grid grid-cols-2" style="width: 230px; background: #242839;"><div class="items-center"><img src=${FavoriteItems[i].image} alt=""></div><div class="flex justify-end"><div class="text-end"><span class="text-white" style="font-size : 15px; font-weight:400;">${FavoriteItems[i].name}</span><p class="text-white" style="font-size : 13px; font-weight:400;">${FavoriteItems[i].price}</p><img src="./assets/image/Vector 8.png" alt=""></div></div></div>`
}
document.getElementById("myFavorites").innerHTML = myFavorites;

// coinnavbar

const coins = [
    {
        image: "./assets/image/Icone_Side-Menu/coinnavbar/dash.svg",
        name: "DASH",
        price: "44.12$",
        rate: "+7.33%"
    },
    {
        image: "./assets/image/Icone_Side-Menu/coinnavbar/doge.svg",
        name: "DOGE",
        price: "0.65$",
        rate: "+7.17%"
    },
    {
        image: "./assets/image/Icone_Side-Menu/coinnavbar/ergo.svg",
        name: "ERGO",
        price: "4.12$",
        rate: "+7.06%"
    },
    {
        image: "./assets/image/Icone_Side-Menu/coinnavbar/enj.svg",
        name: "ENJ",
        price: "0.12$",
        rate: "+6.13%"
    },
    {
        image: "./assets/image/Icone_Side-Menu/coinnavbar/fil.svg",
        name: "FIL",
        price: "6.36$",
        rate: "+6.01%"
    },
    {
        image: "./assets/image/Icone_Side-Menu/coinnavbar/floki.svg",
        name: "FLOKI",
        price: "0.000756$",
        rate: "+4.37%"
    },
    {
        image: "./assets/image/Icone_Side-Menu/coinnavbar/pyr.svg",
        name: "PYR",
        price: "1.53$",
        rate: "+4.18%"
    },
    {
        image: "./assets/image/Icone_Side-Menu/coinnavbar/rfox.svg",
        name: "ROFX",
        price: "0.12$",
        rate: "+3.88%"
    },
    {
        image: "./assets/image/Icone_Side-Menu/coinnavbar/ewt.svg",
        name: "EWT",
        price: "0.000756$",
        rate: "+4.37%"
    }
]
var coinNavbar = "";
for (let i = 0; i < coins.length; i++) {
    coinNavbar += `<div class="subscrollx items-center-around" style="min-width: 180px;">
        <img src=${coins[i].image} alt="">
        <span class="text-white navname" style="font-size: 15px; font-weight: 700;">${coins[i].name}</span><br>
        <span class="text-white navprice" style="font-size: 11px; font-weight: 400;">${coins[i].price}</span><br>
        <span class="navrate">${coins[i].rate}</span>
    </div>`;
}
document.getElementById("coinnavbar").innerHTML = coinNavbar;


const coinrankings = [
    {
        coinicon: "./assets/image/rankingpage/IconBTC.svg",
        activestate: "./assets/image/rankingpage/ActivatedStar.svg",
        coin: "BITCOIN",
        coinshort: "BTC",
        price: "18,100,102$",
        Btcprice: "1",
        cap: "349,665,100,102$",
        volume: "349,665,100,102$",
        volume1: "683.297",
        supply: "19,576,765BTC",
        rsi: "44",
        rsistate: "success",
        chart: "./assets/image/rankingpage/Mini-Chart.svg",
        percent: "0.15%",
        percentstate: "success"
    },
    {
        coinicon: "./assets/image/rankingpage/IconETH.svg",
        activestate: "./assets/image/rankingpage/DeactivatedStar.svg",
        coin: "BITCOIN",
        coinshort: "BTC",
        price: "18,100,102$",
        Btcprice: "1",
        cap: "349,665,100,102$",
        volume: "349,665,100,102$",
        volume1: "683.297",
        supply: "19,576,765BTC",
        rsi: "44",
        rsistate: "success",
        chart: "./assets/image/rankingpage/Mini-Chart-bad.svg",
        percent: "0.15%",
        percentstate: "success"
    },
    {
        coinicon: "./assets/image/rankingpage/IconBNB.svg",
        activestate: "./assets/image/rankingpage/ActivatedStar.svg",
        coin: "BITCOIN",
        coinshort: "BTC",
        price: "18,100,102$",
        Btcprice: "1",
        cap: "349,665,100,102$",
        volume: "349,665,100,102$",
        volume1: "683.297",
        supply: "19,576,765BTC",
        rsi: "44",
        rsistate: "success",
        chart: "./assets/image/rankingpage/Mini-Chart.svg",
        percent: "0.15%",
        percentstate: "success"
    },
    {
        coinicon: "./assets/image/rankingpage/IconUSDC.svg",
        activestate: "./assets/image/rankingpage/DeactivatedStar.svg",
        coin: "BITCOIN",
        coinshort: "BTC",
        price: "18,100,102$",
        Btcprice: "1",
        cap: "349,665,100,102$",
        volume: "349,665,100,102$",
        volume1: "683.297",
        supply: "19,576,765BTC",
        rsi: "44",
        rsistate: "success",
        chart: "./assets/image/rankingpage/Mini-Chart-bad.svg",
        percent: "0.15%",
        percentstate: "success"
    },
    {
        coinicon: "./assets/image/rankingpage/IconXRP.svg",
        activestate: "./assets/image/rankingpage/DeactivatedStar.svg",
        coin: "BITCOIN",
        coinshort: "BTC",
        price: "18,100,102$",
        Btcprice: "1",
        cap: "349,665,100,102$",
        volume: "349,665,100,102$",
        volume1: "683.297",
        supply: "19,576,765BTC",
        rsi: "44",
        rsistate: "success",
        chart: "./assets/image/rankingpage/Mini-Chart-bad.svg",
        percent: "0.15%",
        percentstate: "success"
    },
    {
        coinicon: "./assets/image/rankingpage/IconSOL.svg",
        activestate: "./assets/image/rankingpage/DeactivatedStar.svg",
        coin: "BITCOIN",
        coinshort: "BTC",
        price: "18,100,102$",
        Btcprice: "1",
        cap: "349,665,100,102$",
        volume: "349,665,100,102$",
        volume1: "683.297",
        supply: "19,576,765BTC",
        rsi: "44",
        rsistate: "success",
        chart: "./assets/image/rankingpage/Mini-Chart-bad.svg",
        percent: "0.15%",
        percentstate: "success"
    }
]
var coinRankingmenu = "";
coinRankingmenu += `<div class="justify-align-center text-white bg-black w-150 h-50"><span>#</span></div>`;
for (let i = 0; i < coinrankings.length; i++) {
    coinRankingmenu += `<div class="items-center-around w-150 h-80">
                    <img src=${coinrankings[i].activestate} alt="">
                    <p class="text-white">${i + 1}</p>
                    <img style="width: 30px; height: 30px;" src=${coinrankings[i].coinicon} alt="">
                </div>`;
}
document.getElementById("coinRankingmenu").innerHTML = coinRankingmenu;

var coin = "";
coin += `<div class="justify-align-center text-white bg-black w-150 h-50">coin</div>`;
for (let i = 0; i < coinrankings.length; i++) {
    coin += `<div class="justify-align-center text-white font-12 w-150 h-80"><span class="font-400">${coinrankings[i].coin}</span><span class="font-700">${coinrankings[i].coinshort}</span></div>`;
}
document.getElementById("coin").innerHTML = coin;

var price = "";
price += `<div class="justify-align-center text-white bg-black w-150 h-50">price</div>`;
for (let i = 0; i < coinrankings.length; i++) {
    price += `<div class="items-center w-150 h-80">
                    <div class="text-end px-3 w-full">
                        <p class="text-white font-15">${coinrankings[i].price}</p>
                        <p style="color: rgba(255, 255, 255, 0.41);" class="text-13">${coinrankings[i].Btcprice}BTC</p>
                    </div>
                </div>`;
}
document.getElementById("price").innerHTML = price;

var cap = "";
cap += `<div class="justify-align-center text-white bg-black w-150 h-50">market cap</div>`;
for (let i = 0; i < coinrankings.length; i++) {
    cap += `<div class="text-white font-15 justify-align-center w-150 h-80">${coinrankings[i].cap}</div>`;
}
document.getElementById("cap").innerHTML = cap;

var volume = "";
volume += `<div class="justify-align-center text-white bg-black w-150 h-50">volume 24H</div>`;
for (let i = 0; i < coinrankings.length; i++) {
    volume += `<div class="items-center w-150 h-80">
                    <div class="text-end px-3 w-full">
                        <p class="text-white font-15">${coinrankings[i].volume}</p>
                        <p style="color: rgba(255, 255, 255, 0.41);" class="font-12">${coinrankings[i].volume1}</p>
                    </div>
                </div>`;
}
document.getElementById("volume").innerHTML = volume;

var supply = "";
supply += `<div class="justify-align-center text-white bg-black w-150 h-50">circulating supply</div>`;
for (let i = 0; i < coinrankings.length; i++) {
    supply += `<div class="items-center w-150 h-80">
                    <div class="px-3 w-full">
                        <p class="text-white font-15 pb-1">${coinrankings[i].supply}</p>
                        <div class="w-full bg-gray-200 rounded-full h-15 dark:bg-gray-700">
                            <div class="h-15 rounded-full dark:bg-blue-500" style="width: 45%; background: #5C5CEA;"></div>
                        </div>
                    </div>
                </div>`;
}
document.getElementById("supply").innerHTML = supply;

var rsi = "";
rsi += `<div class="relative justify-align-center text-white bg-black w-150 h-50">
    <p>RSI</p>
    <div class="absolute bottom-10"><div class="text-white text-13 px-3 py-05 rounded font-700" style="background : linear-gradient(70.83deg, #7B08D6 11.16%, #3687FF 80.51%);">NEW</div></div>
    </div>`;
for (let i = 0; i < coinrankings.length; i++) {
    rsi += `<div class="items-center w-150 h-80">
                    <div class="w-full px-3">
                        <div class="justify-between pb-1">
                            <p class="text-white font-15">RSI 24</p>
                            <div class="items-center">
                                <p class="font-15" style="color: #9AA2EA;">${coinrankings[i].rsi}</p>
                                <img class=" pl-2" src="./assets/image/rankingpage/success.svg" alt="">
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-15">
                            <div class="h-15 rounded-full" style="width: 44%; background: #5C5CEA;"></div>
                        </div>
                    </div>
                </div>`;
}
document.getElementById("rsi").innerHTML = rsi;

var chart = "";
chart += `<div class="justify-align-center text-white bg-black w-150 h-50">24H chart</div>`;
for (let i = 0; i < coinrankings.length; i++) {
    chart += `<div><img src=${coinrankings[i].chart} alt="" class=" w-150 h-80"></div>`;
}
document.getElementById("chart").innerHTML = chart;

var percent = "";
percent += `<div class="justify-align-center text-white bg-black w-150 h-50">% 24H</div>`;
for (let i = 0; i < coinrankings.length; i++) {
    percent += `<div class="justify-align-center w-150 h-80">
                    <button class="border-green-600 rounded justify-between-align-center p-1">
                        <img src="./assets/image/rankingpage/raise.svg" alt="">
                        <span class="text-green-600 text-10 pl-3">0.15%</span>
                    </button>
                </div>`;
}
document.getElementById("percent").innerHTML = percent;

var market = "";
market += `<div class="justify-align-center text-white bg-black w-150 h-50">Market DOM</div>`;
for (let i = 0; i < coinrankings.length; i++) {
    market += `<div class="justify-align-center w-150 h-80">
                    <button class="border-green-600 rounded justify-between-align-center p-1">
                        <img src="./assets/image/rankingpage/raise.svg" alt="">
                        <span class="text-green-600 text-10 pl-3">0.15%</span>
                    </button>
                </div>`;
}
document.getElementById("market").innerHTML = market;

var loginflag = false;
if(!loginflag) {
    document.getElementById("login").innerHTML = "Login or Register"
}

function chooseMethod() {
    if(!loginflag) {
        document.getElementById("login").innerHTML ="Choose Method";
        document.getElementById("method").classList.remove("hidden");
        loginflag = !loginflag;
    }
    else {
        document.getElementById("login").innerHTML ="Login or Register";
        document.getElementById("method").classList.add("hidden");
        loginflag = !loginflag;
    }
}

var flag = false;
if (!flag) {
    document.getElementById("mySidebar").style.width = "280px";
    // document.getElementById("main").style.marginLeft = "280px";
    document.getElementById("logo").style.width = "";
}

var isflag = false;

function closeNav() {
    flag = !flag
    if (!flag) {
        document.getElementById("maingap").classList.remove("gap-8");
        document.getElementById("maingap").classList.add("gap-3");
        document.getElementById("mySidebar").style.width = "280px";
        // document.getElementById("mySidebar").style.overflowY = "scroll";
        document.getElementById("main").style.marginLeft = "280px";
        document.getElementById("logo").style.width = "93px";
        document.getElementById("logo").style.width = "93px";
        document.getElementById("btnGroup1").classList.remove("grid-cols-1");
        document.getElementById("btnGroup1").classList.add("grid-cols-3");
        document.getElementById("btnSocial").classList.remove("grid-cols-1");
        document.getElementById("btnSocial").classList.add("grid-cols-3");
        const item = document.getElementsByClassName("sidebarItem");
        for (let i = 0; i < item.length; i++) {
            item[i].style.display = "";
        }
        const items = document.getElementsByClassName("items");
        for (let i = 0; i < items.length; i++) {
            items[i].style.paddingLeft = "32px";
            items[i].classList.remove("justify-center");
        }
    }
    else {
        document.getElementById("maingap").classList.remove("gap-3");
        document.getElementById("maingap").classList.add("gap-8");
        document.getElementById("mySidebar").style.width = "50px";
        // document.getElementById("mySidebar").style.overflowY = "hidden";
        document.getElementById("main").style.marginLeft = "50px";
        document.getElementById("logo").style.width = "100%";
        document.getElementById("logo").style.height = "auto";
        document.getElementById("btnGroup1").classList.remove("grid-cols-3");
        document.getElementById("btnGroup1").classList.add("grid-cols-1");
        document.getElementById("btnSocial").classList.remove("grid-cols-3");
        document.getElementById("btnSocial").classList.add("grid-cols-1");
        const item = document.getElementsByClassName("sidebarItem");
        for (let i = 0; i < item.length; i++) {
            item[i].style.display = "none";
        }
        const items = document.getElementsByClassName("items");
        for (let i = 0; i < items.length; i++) {
            items[i].style.paddingLeft = "8px";
            items[i].classList.add("justify-center");
        }
    }
}
function btnSocial(event, socialName) {
    const socialIcon = document.getElementsByClassName("socialicon");
    for (let i = 0; i < socialIcon.length; i++) {
        socialIcon[i].style.fill = "grey";
    }
    const socialactive1 = document.getElementsByClassName("active1");
    const socialactive2 = document.getElementsByClassName("active2");
    for (let i = 0; i < socialactive1.length; i++) {
        socialactive1[i].classList.remove("active1");
    }
    for (let i = 0; i < socialactive2.length; i++) {
        socialactive2[i].classList.remove("active2");
    }
    document.getElementById(socialName).style.fill = "white";
    if (socialName == "instagram") {
        document.getElementById("follower").style.left = "28px";
        document.getElementById("ingradient1").classList.add("active1");
        document.getElementById("ingradient2").classList.add("active2");
    }
    else if (socialName == "telegram") {
        document.getElementById("follower").style.left = "128px";
        document.getElementById("tegradient1").classList.add("active1");
        console.log(document.getElementById("tegradient1"));
        document.getElementById("tegradient2").classList.add("active2");
    }
    else {
        document.getElementById("follower").style.left = "230px";
        document.getElementById("twgradient1").classList.add("active1");
        document.getElementById("twgradient2").classList.add("active2");
    }
}
function sidebarTab(event, sidebarName) {
    const items = document.getElementsByClassName("items");
    for (let i = 0; i < items.length; i++) {
        items[i].style.background = "none";
    }
    document.getElementById(sidebarName).style.background = "#202343";
    if (sidebarName == "ranking") {
        document.getElementById("subranking").style.display = "block";
        document.getElementById("subdashboard").style.display = "none";
    }
    else if (sidebarName == "dashboard") {
        document.getElementById("subranking").style.display = "none";
        document.getElementById("subdashboard").style.display = "block";
    }
    else {
        document.getElementById("subranking").style.display = "none";
        document.getElementById("subdashboard").style.display = "none";
    }
}
function btnGroup(evnet, state) {
    if (state == "lightdrap") {
        document.getElementById("lightdrap").style.display = "none";
        document.getElementById("darkdrap").style.display = "block";
    }
    else {
        document.getElementById("lightdrap").style.display = "block";
        document.getElementById("darkdrap").style.display = "none";
    }
}
function filter() {
    if (!isflag) {
        document.getElementById("filter").classList.remove("hidden");
        isflag = !isflag;
    }
    else {
        document.getElementById("filter").classList.add("hidden");
        isflag = !isflag;
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth < 992) {
      document.getElementById("main").style.marginLeft = "0px";
    }
    else{
        if(!flag) {
        document.getElementById("main").style.marginLeft = "280px";
        }
        else if(flag) {
            document.getElementById("main").style.marginLeft = "50px";
        }

    }
  }, true);