const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLike1 = document.getElementById("countLike1")
const countLike2 = document.getElementById("countLike2")

function hitLikes1() {
  let totalLikes1=parseInt(countLike1.value) + 1
  countLike1.textContent=totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)
