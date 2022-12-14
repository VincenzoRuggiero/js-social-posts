const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];

const containerHTML = document.getElementById("container");

let likedArr = [];

posts.forEach((post, index) => {
  //Header del Post
  const postCard = document.createElement("div");
  postCard.className = "post";

  const postHeader = document.createElement("div");
  postHeader.className = "post__header";
  postCard.appendChild(postHeader);

  const postMeta = document.createElement("div");
  postMeta.className = "post-meta";
  postHeader.appendChild(postMeta);

  const postMetaIcon = document.createElement("div");
  postMetaIcon.className = "post-meta__icon";
  postMeta.appendChild(postMetaIcon);

  const profilePic = document.createElement("img");
  profilePic.className = "profile-pic";
  profilePic.src = post.author.image;
  postMetaIcon.appendChild(profilePic);

  const postMetaData = document.createElement("div");
  postMetaData.className = "post-meta__data";
  postMeta.appendChild(postMetaData);

  const postMetaAuthor = document.createElement("div");
  postMetaAuthor.className = "post-meta__author";
  postMetaAuthor.appendChild(document.createTextNode(post.author.name));
  postMetaData.appendChild(postMetaAuthor);

  const postMetaTime = document.createElement("div");
  postMetaTime.className = "post-meta__time";
  postMetaTime.appendChild(document.createTextNode(post.created));
  postMetaData.appendChild(postMetaTime);

  //Main del post
  const postText = document.createElement("div");
  postText.className = "post__text";
  postText.appendChild(document.createTextNode(post.content));
  postCard.appendChild(postText);

  const postImageDiv = document.createElement("div");
  postImageDiv.className = "post__image";
  postCard.appendChild(postImageDiv);

  const postImage = document.createElement("img");
  postImage.src = post.media;
  postImageDiv.appendChild(postImage);

  //Footer del post
  const postFooter = document.createElement("div");
  postFooter.className = "post__footer";
  postCard.appendChild(postFooter);

  const likesDiv = document.createElement("div");
  likesDiv.className = "likes js-likes";
  postFooter.appendChild(likesDiv);

  const likesCTA = document.createElement("div");
  likesCTA.className = "likes__cta";
  likesDiv.appendChild(likesCTA);

  const likeBtn = document.createElement("a");
  likeBtn.className = "like-button  js-like-button";
  likeBtn.href = "#";
  likeBtn.setAttribute("data-postid", `${post.id}`);
  likesCTA.appendChild(likeBtn);

  const likeBtnIcon = document.createElement("i");
  likeBtnIcon.className = "like-button__icon fas fa-thumbs-up";
  likeBtnIcon.setAttribute("aria-hidden", "=true");
  likeBtn.appendChild(likeBtnIcon);

  const likeBtnLabel = document.createElement("span");
  likeBtnLabel.className = "like-button__label";
  likeBtnLabel.appendChild(document.createTextNode("Mi piace"));
  likeBtn.appendChild(likeBtnLabel);

  const likesCounter = document.createElement("div");
  likesCounter.classList.add("likes__counter");
  let totalLikes = post.likes;
  likesCounter.innerHTML = `Piace a ${post.likes} persone`;

  likesDiv.appendChild(likesCounter);

  containerHTML.appendChild(postCard);

  likeBtn.addEventListener("click", function () {
    totalLikes++;
    likesCounter.innerHTML = `Piace a ${totalLikes} persone`;
    likeBtn.classList.add("like-button--liked");
    likedArr.push(post.id);
    console.log(likedArr);
  });
});
