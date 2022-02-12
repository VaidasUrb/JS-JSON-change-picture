let dataObj = [
    {
        imgSrc: "https://www.farmersalmanac.com/wp-content/uploads/2020/11/words-for-snow-AdobeStock_301401130.jpg",
        text: "Baltas sniegas"
    },
    {
        imgSrc: "https://www.paneveziokeliai.lt/uploads/_CGSmartImage/smelis-03_1999-2fa7300fab30e6f562ce4d29e5108f8f.jpg",
        text: "Minkstas smelis"
    },
    {
        imgSrc: "https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg",
        text: "Skanus vanduo"
    },
    {
        imgSrc: "https://gray-ksnb-prod.cdn.arcpublishing.com/resizer/Tngd9uUm69GuPsVQvYnKbuHQbDY=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/NQQS5AUHUVE4XOG7NSQYLA2XWI.jpg",
        text: "Karsta ugnis"
    },
    {
        imgSrc: "https://ewscripps.brightspotcdn.com/7e/fe/08bb589543588f1b97e8384ba1cf/wx-rain-1.png",
        text: "Saltas lietus"
    },
]


function pakeitimas(data) {
    document.querySelector("img").setAttribute("src", data.imgSrc);
    let text = document.getElementsByClassName("img-text")[0];
    text.innerHTML = data.text;
}


function randomIndex(size) {
    let randimInd = Math.floor(Math.random() * size);
    return randimInd
}


let btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
    let randInd = randomIndex(dataObj.length)
    pakeitimas(dataObj[randInd]);
})

// async function getData() {
//     const requestURL = 'https://raw.githubusercontent.com/VaidasUrb/JSON/main/data.json';
//     const request = new Request(requestURL);
//     const response = await fetch(request);
//     const JSON = await response.json();
//     console.log(JSON);
//     pakeitimas(JSON[randomIndex(JSON.lenght)]);
// }
// getData();

btn.addEventListener("click", function (e) {
    confetti({ particleCount: 300, spread: 180, startVelocity: 60 });
    //getData();
})