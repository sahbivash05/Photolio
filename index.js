console.log("Its working")

let clickButton = document.getElementsByClassName('s1-button')
for (var i = 0; clickButton.length > i; i++) {
    clickButton[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('Option clicked', mode)
        setGap(mode)
    })
}
function setGap(mode) {
    if (mode == 'click1') {
        document.getElementById('set-gap').href = 'toggle.css'
    }
}