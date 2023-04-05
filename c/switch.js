const OffBtn = document.getElementById("off");
const OnBtn = document.getElementById("on");
const switchContainer = document.querySelector(".switch-container");

// console.log(offbtn, onbtn, switchcontainer);

OnBtn.onclick = () => {
    /*offbtn.classList.remove("active");
    onbtn.classList.add("active");*/
    if (OffBtn.classList.contains("active")) {
    addRemoveActive(OffBtn, OnBtn);
    removeStandby();
    } else {
        return
    }
};

OffBtn.onclick = () => {
    /*onbtn.classList.remove("active");
    offbtn.classList.add("active");*/
    if (OnBtn.classList.contains("active")) {
    addRemoveActive(OnBtn, OffBtn);
    removeStandby();
    } else {
        return
    }
};

// todo: Utility function addRemove

function addRemoveActive(remove,add) {
    remove.classList.remove("active");
    remove.classList.add("active");
}

function removeStandby() {
    switchContainer.classList.remove("standby");
    if (OffBtn.classList.contains("active")) {
        startStandby();
    }

    else {
        switchContainer.classList.remove("standby");
        clearTimeout(standby);
    }
}

let standby;

function startStandby() {
    standby = setTimeout ( () => {
        switchContainer.classList.add("standby");
        OffBtn.classList.remove("active");
    }, 5000);

}