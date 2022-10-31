const searchForm = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const beforeFooter = document.querySelector("#beforeFooter");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userSearchQuery = input.value;
  console.log(userSearchQuery);
  const searchRequestFromUser = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${userSearchQuery}`
  );
  console.log(searchRequestFromUser);
  const firstImageResult = searchRequestFromUser.data[0].show.image.medium;
  const newImg = document.createElement("img");
  newImg.src = firstImageResult;
  beforeFooter.append(newImg);
  // const secondImageResult = searchRequestFromUser.data[1].show.image.medium;
  // const newImg2 = document.createElement("img");
  // newImg2.src = secondImageResult;
  // beforeFooter.append(newImg2);
  // const thirdImageResult = searchRequestFromUser.data[1].show.image.medium;
  // const newImg3 = document.createElement("img");
  // newImg3.src = thirdImageResult;
  // beforeFooter.append(newImg3);
  // const fourthImageResult = searchRequestFromUser.data[1].show.image.medium;
  // const newImg4 = document.createElement("img");
  // newImg4.src = fourthImageResult;
  // beforeFooter.append(newImg4);
  // const fifthImageResult = searchRequestFromUser.data[1].show.image.medium;
  // const newImg5 = document.createElement("img");
  // newImg5.src = fifthImageResult;
  // beforeFooter.append(newImg5);
  // userSearchQuery = "";
});

beforeFooter;
