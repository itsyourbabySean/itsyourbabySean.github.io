const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")

const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")

function hitLikes1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)

function hitLikes2() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)

function hitdisLikes1() {
  let totalDisLikes1 = parseInt(countidsLikes1.value) + 1
   countDiikes1.textContent = totaldisLikes1.toString()
}
btnDisLike1.addEventListener("click",DisLikes1)

function hitdisLikes2() {
  let totalDisLikes2 = parseInt(countdisLikes2.value) + 1
   countDisLikes2.textContent = totaldisLikes2.toString()
}
btnDisLike2.addEventListener("click",disLikes2)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
  commentbox.textContent += comment1.value.toString() + "\n"
}
submit.addEventListener("click",submitComment)
