
let parent = document.querySelector(".image__wrapper")
let btns = document.querySelector(".image__buttons")
let input = document.getElementById("inputImage")
let btn = document.getElementById("buttonSend")
let imageTrigger = document.getElementById("imageTrigger")
let list = document.querySelector(".image__list")
let file = ""
let ActiveFormat = ".png"
let formats = document.querySelectorAll(".image__format")

let el = document.createElement("img")
let download = document.createElement("a")

input.addEventListener("input", event => {
  file = event.target.files[0]
  btn.classList.remove("hide")

  el.remove()
  download.remove()
})

imageTrigger.addEventListener("click", () => {
  list.classList.toggle("hide")
})

formats.forEach(item => {
  item.addEventListener("click", event => {
    ActiveFormat = event.target.innerHTML
    for (let i = 0; i < list.childNodes.length; i++) {
      if (i % 2 != 0 && list.childNodes[i].classList.contains("image__active") == true) {
        list.childNodes[i].classList.remove("image__active")
      }
    }
    item.classList.add("image__active")
  })
})

btn.addEventListener("click", async () => {
  let formData = new FormData()
  if (file) {
    formData.set("image", file, file.name)
    formData.set("format", ActiveFormat)
    try {
      let res = await axios.post("/edit-image", formData,
        { headers: { "Content-Type": undefined }})
      
      el.setAttribute("src", res.data)
      el.setAttribute("class", "image__image")

      download.innerHTML = "Скачать"
      download.href = res.data
      download.setAttribute("class", "image__download")
      download.setAttribute("download", "")

      parent.insertBefore(el, btns)
      parent.appendChild(download)

      file = ""
      btn.classList.add("hide")
    } catch (err) {
      console.log("еррор -", err.message)
    }
  }
})