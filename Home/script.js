window.addEventListener("DOMContentLoaded", event => {
    const button = document.getElementById("askPermissions");
    button.addEventListener("click", () => {
        sendRequest();
        button.style.display = "none";
    })
})

const sendRequest = async () => {
    const ele = document.getElementById("vid");
    ele.srcObject = await navigator.mediaDevices.getDisplayMedia({
        video: {
            cursor: "always"
        },
        audio: true,
    });
}
// const setStream = (videoElement) => {
//     navigator.mediaDevices.getDisplayMedia()
//     .then(function (stream){
//         console.log(stream);
//         videoElement.setStream(stream);
//     })
//     .catch( function(err){
//         // test
//     })
//     // const stream = (await navigator.mediaDevices.getDisplayMedia());
//     // videoElement.srcObject = await stream.getVideoTracks();
// }

// const test = async () => {
//     elem = document.getElementById("vid");
//     var options = {
//         video:{
//             cursor:"always",
//         },
//         audio:false,
//     }
//     try{
//     elem.srcObject = await navigator.mediaDevices.getDisplayMedia(options);
//     }
//     catch (err) {
//         console.log(err);
//     }

// }