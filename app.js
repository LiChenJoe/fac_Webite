function descriptionShow(e) {
    let eTarget = e.parentElement.parentElement.parentElement;
    console.log(eTarget);
    let description = e.parentElement.parentElement.parentElement.querySelector(".description");
    console.log(description);
    description.classList.toggle("descriptionShow");
}