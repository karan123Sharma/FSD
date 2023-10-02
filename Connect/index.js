const happens = () => {
  const val = "Hey You clicked on the Questions tabs";
  var var1 = document.getElementById("Questions");
  var1.innerHTML = val;
};
const category = () => {
  const val = "Hey You clicked on the Category tabs";
  var var1 = document.getElementById("Questions");
  var1.innerHTML = val;
};
const displayimages = () =>{
    console.log("Hey You called me") 
    const  imageUrls = [
        "https://www.cnet.com/a/img/resize/f92ae43457ac52e0b761737181264a82aa0765bb/hub/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
        "https://mitisbj.edu.in/images/mitlogo.png",
        "https://149695847.v2.pressablecdn.com/wp-content/uploads/2022/08/aim-banner.jpeg"
    ];
    var imageContainer = document.getElementById('imageContainer');
    if(imageUrls.length > 0){
        for (var i = 0; i < imageUrls.length; i++) {
            var img = document.createElement('img');
            img.src = imageUrls[i];
            imageContainer.appendChild(img);
        }
    }
}

