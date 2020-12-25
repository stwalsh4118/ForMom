var tick = 10;
var lastUpdate = Date.now();
var now;
var deltaTime;
var tickCount = 0;
var Resources = 100;
var manualCoupons = 0;

var saveResources = JSON.stringify(manualCoupons);
console.log(saveResources);
localStorage.setItem("manualCoupons", saveResources);

loadSave();

function gameLoop() {
    now = Date.now();
    deltaTime = now - lastUpdate;
    lastUpdate = now;
    tickCount++;

    setTimeout(gameLoop, 100 / tick);

    save();
    $(".couponNumber").text(Resources);
}

gameLoop();





function save() {
    var saveResources = localStorage.getItem("manualCoupons");
    if (saveResources != 0) {
        Resources = saveResources;
    }
    var saveResources = JSON.stringify(Resources);
    console.log(saveResources);
    localStorage.setItem("saveResources", saveResources);

};

function loadSave() {
    var saveResources = localStorage.getItem("saveResources");
    Resources = JSON.parse(saveResources);


};

function removeCoupon() {
    Resources--;
}