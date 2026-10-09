"use strict";

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});

(function () {
    "use strict";

    const music = document.getElementById("backgroundMusic");
    const musicToggle = document.getElementById("musicToggle");

    if (!music || !musicToggle) {
        return;
    }

    music.volume = 0.25;

    function updateMusicButton(isPlaying) {
        musicToggle.classList.toggle("is-playing", isPlaying);

        musicToggle.textContent = isPlaying
            ? "❚❚ PAUSE MUSIC"
            : "▶ PLAY MUSIC";

        musicToggle.setAttribute(
            "aria-pressed",
            String(isPlaying)
        );
    }

    musicToggle.addEventListener("click", async function () {
        if (music.paused) {
            try {
                await music.play();
                updateMusicButton(true);
            } catch (error) {
                updateMusicButton(false);

                musicToggle.textContent = "▶ TRY AGAIN";
            }
        } else {
            music.pause();
            updateMusicButton(false);
        }
    });

    music.addEventListener("play", function () {
        updateMusicButton(true);
    });

    music.addEventListener("pause", function () {
        updateMusicButton(false);
    });

    music.addEventListener("ended", function () {
        updateMusicButton(false);
    });

    updateMusicButton(false);
})();