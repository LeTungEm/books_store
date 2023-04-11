const changeAnimation = ({ className, from, to }) => {
    let arrElement = document.getElementsByClassName(className);
    if (arrElement) {
        for (var i = 0; i < arrElement.length; i++) {
            arrElement[i].classList.toggle(from);
            arrElement[i].classList.toggle(to);
        }
    }
}

export default changeAnimation