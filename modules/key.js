let keyInput = (element) => {

  element.addEventListener("keydown", function (e) {
    let key = e.code;
    let event = new CustomEvent('key', { detail: key });
    element.dispatchEvent(event);
  })
}

export default keyInput;
