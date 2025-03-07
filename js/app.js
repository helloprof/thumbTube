// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { channels, videos } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ channels, videos }, "App Data");


function generateVideos(channelID) {
    let mainContent = document.querySelector(".main")
    let videosByChannel = videos.filter((video) => {
        return video.channelID === channelID
    })
    // let table = document.createElement("table")
    videosByChannel.forEach((video) => {
        let row = document.createElement("tr")
    })
}

function generateChannelsButtons() {
    let mainContent = document.querySelector(".main")
    channels.forEach((channel) => {
        // console.log(channel)
        // let channelButton = document.createElement("button")
        // channelButton.className = "channel-button"
        // channelButton.innerText = channel.name

        let channelIcon = document.createElement("img")
        channelIcon.className = "channel-button"
        channelIcon.src = channel.imageURL

        channelIcon.addEventListener("click", () => {
            generateVideos(channel.channelID)
        })


        mainContent.appendChild(channelIcon)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded!")
    generateChannelsButtons()
})