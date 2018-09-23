# is-in-dom
Test if elements from object exist in DOM.

If element is not found in DOM, message with element name will by shown in devTools console.

# example of usage

```
npm i is-in-dom
```

```javascript
import Test from 'is-in-dom'

var elements = {
  // list of elements to test
  btn: $('.btn'),
  head: document.querySelector('.head'),
  menuItems: document.querySelectorAll('.menu-item'),
  // insert lib here
  test: Test.elements
}

elements.test()
```

