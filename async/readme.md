# JS Async project : - Unlimited Colors
- Javascript Code
```

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalhai;
  
  const startColor = function () {
    function colorSet() {
      document.body.style.backgroundColor = randomColor();
    }
    if (!intervalhai) {
      intervalhai = setInterval(colorSet, 100);
    }
  };
  const stopColor = function () {
    clearInterval(intervalhai);
    intervalhai = null;
  };
  
  const start = document
    .querySelector('#start')
    .addEventListener('click', startColor);
  
  const stop = document
    .querySelector('#stop')
    .addEventListener('click', stopColor);

  ```