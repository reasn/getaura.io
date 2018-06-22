(() => {

    const slogan = document.getElementById("slogan");
    let index = 0;
    const slogans = [
        "Wear Data.",
        "Free your Thoughts.",
        "Express Yourself.",
        "Freedom of Speech.",
        "Open up.",
    ];

    setInterval(() => {
        slogan.textContent = slogans[index];
        index = (index + 1) % slogans.length;
    }, 3000);
})();