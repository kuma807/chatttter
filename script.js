let last_key = "";
let last_time = "";
let bad_key = [];
let good_key = [];

function update_array() {
  const goodArrayContainer = document.getElementById("good-array");
  while (goodArrayContainer.lastChild) {
    goodArrayContainer.removeChild(goodArrayContainer.lastChild);
  }
  for (let index = 0; index < good_key.length; index++) {
    const element = good_key[index];
    goodArrayContainer.appendChild(document.createTextNode(element));
  }

  const badArrayContainer = document.getElementById("bad-array");
  while (badArrayContainer.lastChild) {
    badArrayContainer.removeChild(badArrayContainer.lastChild);
  }
  for (let index = 0; index < bad_key.length; index++) {
    const element = bad_key[index];
    badArrayContainer.appendChild(document.createTextNode(element));
  }
}

document.addEventListener("keydown", function (event) {
  // キーボードが押されたときに呼び出される関数
  const outputElement = document.getElementById("key-display");
  let time = new Date();
  outputElement.textContent = `押されたキー: ${event.key} ${time - last_time}`;
  if (event.key === last_key) {
    if (time - last_time <= 60 && !bad_key.includes(event.key)) {
      if (good_key.includes(event.key)) {
        good_key.splice(good_key.indexOf(event.key), 1);
      }
      bad_key.push(event.key);
    }
  }
  else {
    if (!good_key.includes(event.key) && !bad_key.includes(event.key)) {
      good_key.push(event.key);
    }
  }
  last_key = event.key;
  last_time = time;
  update_array();
});

