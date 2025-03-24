// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { channels, videos } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ channels, videos }, "App Data");


function generateVideos(channelID) {
    let videoList = document.querySelector(".video-list")
    let videosByChannel = videos.filter((video) => {
        return video.channelID === channelID
    })
    // let table = document.createElement("table")
    videosByChannel.forEach((video) => {
        // let row = document.createElement("tr")
        let videoCard = document.createElement("div")
        let videoTitle = document.createElement("h3")
        videoTitle.textContent = video.title
        // let videoDescription = document.createElement("p")
        // videoDescription.innerText = video.title
        let videoImage = document.createElement("img")
        videoImage.src = video.thumbnailURL
        // videoImage.className = "video-thumbnail"

        videoCard.appendChild(videoImage)
        videoCard.appendChild(videoTitle)
        // videoCard.appendChild(videoDescription)
        videoCard.className = "video-card"
        videoCard.addEventListener("click", () => {
            window.open(video.videoURL, '_blank').focus();
        })

        videoList.appendChild(videoCard)
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
            let videoList = document.querySelector(".video-list")
            if (videoList) {
                videoList.innerHTML = ""
            }  
            generateVideos(channel.channelID)
        })


        mainContent.appendChild(channelIcon)

    })
    let videoList = document.createElement("div")
    videoList.className = "video-list"
    mainContent.appendChild(videoList)
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded!")
    generateChannelsButtons()
})