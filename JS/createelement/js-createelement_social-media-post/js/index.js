console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const article = document.createElement("article");
article.classList.add("post");
document.body.append(article);

const paragraph = document.createElement("p");
paragraph.classList.add("post__content");
paragraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
article.append(paragraph);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
article.append(footer);

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username";
footer.append(span);

const button = document.createElement("button");
button.classList.add("post__button");
button.type = "button";
button.setAttribute("data-js", "like-button");
button.textContent = "♥ Like";
button.addEventListener("click", handleLikeButtonClick);
footer.append(button);
