let arr = []
fetch("https://cors-anywhere.herokuapp.com/https://www.esist.org.tw/api/v1/zone/monthly/9/1",
)
.then(res => res.json())
.then(data => {
console.log(data)


})