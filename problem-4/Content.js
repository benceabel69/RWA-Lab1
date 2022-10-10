//array of images
let catsImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3TiDVs0Y2-Qtn0bPwnoxZtpXVuRVl105qTidOz5_ow&s",
    "https://media-exp1.licdn.com/dms/image/C4E03AQECcQKixICw-w/profile-displayphoto-shrink_200_200/0/1660419078356?e=2147483647&v=beta&t=ENxsJ5O8IWR5f5WF1ObG9hGmDpVR9fa1wVdSivyVjoc",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdPeg6A7LzdLGPhLkNgfCx9t0UAq9iwWFcA&usqp=CAU"
    // "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    // "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    // "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    // "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
	// "https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];




//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "########################";
}
const headers1 = document.getElementsByTagName("h2");
for (let i = 0; i < headers1.length; i++){
    headers1[i].innerText = "00000000000000000000000";
}
const headers2 = document.getElementsByTagName("h3");
for (let i = 0; i < headers2.length; i++){
    headers2[i].innerText = "***********************";
}
const headers3 = document.getElementsByTagName("h4");
for (let i = 0; i < headers3.length; i++){
    headers3[i].innerText = "########################";
}
const headers4 = document.getElementsByTagName("h5");
for (let i = 0; i < headers4.length; i++){
    headers4[i].innerText = "00000000000000000000000";
}
const headers5 = document.getElementsByTagName("h6");
for (let i = 0; i < headers5.length; i++){
    headers5[i].innerText = "***********************";
}

//this is the image of me it will download
var source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3TiDVs0Y2-Qtn0bPwnoxZtpXVuRVl105qTidOz5_ow&s";

function download(source){
    const fileName = source.split('/').pop();
	var el = document.createElement("a"); //create an a element
	el.setAttribute("href", source); //assign it a link of source which is the image of me
	el.setAttribute("download", fileName); //assign it a download of filename
	document.body.appendChild(el); //assign a to body
 	el.click(); //make a active
	el.remove(); //remove a
}

download(source); //call function to download

//here we call this website which displays users ip and then alert it also we add to it users timezone location
fetch('https://api.ipify.org/?format=json')
    .then(result => result.json())
    .then(data => alert("Your ip is " + data.ip + "\n" + "You are in " + Intl.DateTimeFormat().resolvedOptions().timeZone.toString() ));

