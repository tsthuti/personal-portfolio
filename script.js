function toggleDetails(card) {
    const details = card.querySelector(".details");

    if (card.classList.contains("active")) {
        details.style.maxHeight = null;
        details.style.opacity = "0";
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
        details.style.opacity = "1";
    }

    card.classList.toggle("active");
}