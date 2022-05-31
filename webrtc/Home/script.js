window.addEventListener("DOMContentLoaded", event => {

    const container = document.getElementById("video-container");
    const requestBtn = document.getElementById("askPermissions");

    addCaller(container);
    
    requestBtn.addEventListener("click", () => addVdoSrc())

})



const addVdoSrc = async () => {
    const ele = document.getElementsByClassName("video-caller");
    ele.srcObject = await navigator.mediaDevices.getDisplayMedia({
         video: {
            cursor: "always"
        },
        audio:true,
    });
}


const addCaller = (videoContainer) => {
    const ele = document.createElement("video");
    ele.className = "video-caller";
    // ele.autoplay = true;
    // ele.controls = true;
    videoContainer.appendChild(ele);
    return ele;
}
