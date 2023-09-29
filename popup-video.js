if (document.querySelectorAll(".section-project-object-video-row-card")) {
  document
    .querySelectorAll(".section-project-object-video-row-card")
    .forEach((element) => {
      getVideo(element);
    });
}

if (document.querySelectorAll(".video-card")) {
  document.querySelectorAll(".video-card").forEach((element) => {
    getVideo(element);
  });
}

function getVideo(element) {
  element.addEventListener("click", function (e) {
    e.stopPropagation();
    let linkHref = "";
    // Если элемент содержит класс "video", создаем iframe для YouTube-видео
    if (this.classList.contains("video")) {
      // URL-адрес видео на YouTube
      let youtubeUrl = this.getAttribute("data-link");
      // Извлечение идентификатора видео из URL-адреса
      let videoId = youtubeUrl.match(/(?:\?|&)v=([^&]+)/)[1];

      linkHref = "https://www.youtube.com/embed/" + videoId;

      let iframe = document.createElement("iframe");
      iframe.setAttribute("class", "player-iframe");
      iframe.setAttribute("src", linkHref);

      document.querySelector(".player-box").appendChild(iframe);
      document.querySelector(".popup-video").classList.add("visible");
    }
    // Если элемент содержит класс "faq-video", создаем video для локальных видео
    if (this.classList.contains("faq-video")) {
      linkHref = this.getAttribute("data-link");

      let video = document.createElement("video");
      video.setAttribute("controls", "controls");

      let source = document.createElement("source");
      source.setAttribute("src", linkHref);
      source.setAttribute("type", "video/mp4");

      video.appendChild(source);

      document.querySelector(".player-box").appendChild(video);
      document.querySelector(".player-box").classList.add("short");
      document.querySelector(".popup-video").classList.add("visible");
    }
    document.querySelector(".popup-video").onclick = function (event) {
      if (event.target === this) {
        this.classList.remove("visible");
        const playerIframe = document.querySelector(".popup-video iframe");
        const playerVideo = document.querySelector(".popup-video video");
        const playerBox = document.querySelector(".player-box");

        if (playerIframe) {
          playerIframe.remove();
        }
        if (playerVideo) {
          playerVideo.remove();
        }
        playerBox.classList.remove("short");
      }
    };
  });
}
