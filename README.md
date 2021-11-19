# multiple-inputs

This library lets you listen to multiple input events at once and is 3KB when minified.

## Getting started

Choose an element to send events to:


```
let element = document.getElementById('any-element');
multipleInputs(element);

```


### Mouse, pointer, or touch inputs
```
element.addEventListener('tap', function (e) {

console.log(e.target)

});

```
Credit to [Tap](https://github.com/pukhalski/tap).


### Keyboard input
```
element.addEventListener('key', function (e) {

console.log(e.key)

});

```
