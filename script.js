let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;

    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    counterup();
  }, 5);
});
let rankingCounts = document.querySelectorAll(".ranking-count");
let rankingArray = Array.from(rankingCounts);

rankingArray.map(function (item) {
  let currentCount = 0;

  function updateCounter() {
    let step = Math.ceil(item.dataset.count / 100); // Increment by a step
    currentCount += step;

    if (currentCount >= item.dataset.count) {
      currentCount = item.dataset.count; // Ensure it stops at the target
      clearInterval(counterInterval);
    }

    item.innerHTML = currentCount + (item.dataset.count > 100 ? "+" : ""); // Add "+" for large numbers
  }

  let counterInterval = setInterval(updateCounter, 20); // Speed up the counter
});
