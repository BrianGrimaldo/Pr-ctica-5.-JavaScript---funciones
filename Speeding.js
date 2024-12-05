function isGoodMusic (speed) {
    if (speed > 120) {
        return true;
    }else{
        return false;
    }
}

console.log(isGoodMusic(120));