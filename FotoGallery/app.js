const galleryWrapper = document.querySelector(".gallery-wrapper")
const dugunButton = document.querySelector("#dugun")


const bebekButton = document.querySelector("#bebek")
const hamileButton = document.querySelector("#hamile")
const aileButton = document.querySelector("#aile")






async function getDugunImages () {
  galleryWrapper.innerHTML =""
  let Images = await getImagesData("wedding");
  console.log(Images)
  addToGallery(Images)
}
async function getHamileImages (){
  galleryWrapper.innerHTML =""
  let Images = await getImagesData("pregnant");
  addToGallery(Images)
}
async function getAileImages  (){
  galleryWrapper.innerHTML =""
  let Images = await getImagesData("family");
  addToGallery(Images)
}
async function getBebekImages (){
  galleryWrapper.innerHTML =""
  let Images = await getImagesData("baby");
  addToGallery(Images)
}

const addToGallery = (datas) => {

for (data of datas) {

  let divGallery = document.createElement("div")
  divGallery.className = "gallery"

  let divImage = document.createElement("div")
  divImage.className = "image"

  let image = document.createElement ("img")
  image.setAttribute("src",data.urls.regular )

  console.log(data.urls.regular )

  divImage.appendChild(image)
  divGallery.appendChild(divImage)
  galleryWrapper.appendChild(divGallery)
}



}

async function getImagesData(searchContent) {

 let res = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${searchContent}`,{
    method : "GET",
    headers : {
        Authorization : "Client-ID 3st8DInuo0nrfx9Ent-4ciFN4iy3qs55ubI15VjUjvM"
    }
  })
  let data = await res.json()
 return data.results

}



dugunButton.addEventListener("click",getDugunImages)
hamileButton.addEventListener("click",getHamileImages)
aileButton.addEventListener("click",getAileImages)
bebekButton.addEventListener("click",getBebekImages)

