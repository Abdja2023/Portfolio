"use-strict;";

// Scroll Into Screens

const home = document.querySelector(".introduction");
const services = document.querySelector(".services");
const Prices = document.querySelector(".Prices");
const recommendations = document.querySelector(".recommendations");
const Education = document.querySelector(".Education");
const Work = document.querySelector(".Work");
const RecentProjects = document.querySelector(".RecentProjects");
const ContactBoxes = document.querySelector(".ContactBoxes");
const ScrollDown = document.querySelector("main .introduction .Left a");

const HomeAside = document.querySelector(".HomeAside");
const ServiceAside = document.querySelector(".ServiceAside");
const EducationAside = document.querySelector(".EducationAside");
const WorkAside = document.querySelector(".WorkAside");
const ProjectAside = document.querySelector(".ProjectAside");
const ContactAside = document.querySelector(".ContactAside");

HomeAside.addEventListener("click", function (e) {
  e.preventDefault();
  home.scrollIntoView({ behavior: "smooth" });
});
ServiceAside.addEventListener("click", function (e) {
  e.preventDefault();
  services.scrollIntoView({ behavior: "smooth" });
});
ScrollDown.addEventListener("click", function (e) {
  e.preventDefault();
  services.scrollIntoView({ behavior: "smooth" });
});
EducationAside.addEventListener("click", function (e) {
  e.preventDefault();
  Education.scrollIntoView({ behavior: "smooth" });
});
WorkAside.addEventListener("click", function (e) {
  e.preventDefault();
  Work.scrollIntoView({ behavior: "smooth" });
});
ProjectAside.addEventListener("click", function (e) {
  e.preventDefault();
  RecentProjects.scrollIntoView({ behavior: "smooth" });
});
ContactAside.addEventListener("click", function (e) {
  e.preventDefault();
  ContactBoxes.scrollIntoView({ behavior: "smooth" });
});

// Prices Plane chosen
const OrderNow = document.querySelectorAll(".OrderNow");
const [OrderNow1, OrderNow2, OrderNow3] = OrderNow;
const SubjectInput = document.querySelector("#subject");
const Message = document.querySelector("#Message");
const sendMessage = document.querySelector(".SendMessage");
OrderNow.forEach((a) =>
  a.addEventListener("click", function (e) {
    e.preventDefault();
    OrderNow.forEach((b) => (b.style.backgroundColor = "#d3cecee0"));
    let SelectedPrice = a.parentElement.querySelector("h3").textContent;
    let SelectedPlan = a.parentElement.querySelector("h2").textContent;
    console.log(SelectedPlan);
    a.style.backgroundColor = "#ffb400";
    // ContactBoxes.scrollIntoView({ behavior: "smooth" });
    SubjectInput.value = "Asking for Service";
    Message.value = `Hello Abdelkhalek , I selected "${SelectedPlan}" plan  , I hope we discuss more by email . `;
  })
);

sendMessage.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(sendMessage.getAttribute("href"));
});
// Order

// Aside bar motion

const aside = document.querySelector("aside");
const buttonShow = document.querySelector("main .introduction .fa-bars ");
const buttonHide = document.querySelector("aside .fa-circle-xmark");
let AsideAfter;
let AsideBeforeHeight;
let AsideBeforeWidth;
// AsideAfter.addEven tListener("click", function (e) {
//   e.preventDefault();
//   console.log("hello");
// });
// console.log(AsideAfter.backgroundColor);
buttonShow.addEventListener("click", function () {
  aside.style.transform = "translateX(0%)";
  aside.style.transition = "all 500ms  ease-in-out";
  aside.style.zIndex = "2";
  let BodyHeight = Number(body.offsetHeight);
  let BodyWidth = Number(body.offsetWidth);
  let AsideHeight = Number(aside.offsetHeight);
  let AsideWidth = Number(aside.offsetWidth);
  AsideBeforeHeight = BodyHeight;
  AsideBeforeWidth = BodyWidth - AsideWidth;
  AsideAfter = BodyHeight - AsideHeight;

  console.log(`Aside Before width : ${AsideBeforeWidth}`);
  console.log(`Aside Before height : ${AsideBeforeHeight}`);
  console.log(`Aside After height : ${AsideAfter}`);

  aside.style.setProperty("--heightAfter", `${AsideAfter}px`);
  aside.style.setProperty("--heightBefore", `${AsideBeforeHeight}px`);
  aside.style.setProperty("--widthBefore", `${AsideBeforeWidth}px`);
});

buttonHide.addEventListener("click", function () {
  aside.style.transform = "translateX(-100%)";
  aside.style.transition = "all 500ms  ease-in-out";
  console.log("hello");
  aside.style.setProperty("--heightAfter", `0px`);
  aside.style.setProperty("--heightBefore", `0px`);
  aside.style.setProperty("--widthBefore", `0pxpx`);
});

window.addEventListener("resize", function (e) {
  if (this.window.innerWidth > 1100) {
    aside.style.transform = "translateX(0)";
  } else {
    aside.style.transform = "translateX(-100%)";
    aside.style.setProperty("--heightAfter", `0px`);
    aside.style.setProperty("--heightBefore", `0px`);
    aside.style.setProperty("--widthBefore", `0pxpx`);
  }
});

// Hire me button Motion

const hireMeButton = document
  .querySelector("main .introduction .Left a")
  .closest("a");
console.log(hireMeButton);
hireMeButton.addEventListener("mouseenter", function (e) {
  console.log(hireMeButton);
  hireMeButton.style.transform = "scale(1.05)";
  hireMeButton.style.transition = "all 200ms ease-in-out";
  hireMeButton.lastChild.style.transform = "translateY(5px)";
  hireMeButton.lastChild.style.transition = "all 100ms ease-in-out";
});

hireMeButton.addEventListener("mouseleave", function (e) {
  console.log(hireMeButton);
  hireMeButton.style.transform = "scale(1)";
  hireMeButton.style.transition = "all 200ms ease-in-out";
  hireMeButton.lastChild.style.transform = "translateY(0)";
  hireMeButton.lastChild.style.transition = "all 100ms ease-in-out";
});
//  Plans Pic transofmation

const img = document.querySelectorAll(".RecentProjects .ProjCard img ");
const box = document.querySelectorAll(".RecentProjects .ProjCard ");

box.forEach((b) => b.addEventListener("click", function (e) {}));

// Let's try dark mode ;

const buttonDark = document.querySelector(".BlackMode");
const body = document.querySelector("body");
const AsideProfileName = document.querySelector("aside .name");
const AllSpans = document.querySelectorAll("span");
const SpecificSpan = document.querySelector("main .introduction .Left h3 span");
const H3s = document.querySelectorAll("h3");
const H2s = document.querySelectorAll("h2");
const H4s = document.querySelectorAll("h4");
const H5s = document.querySelectorAll("h5");
const p = document.querySelectorAll("p");
const boxes = document.querySelectorAll(".Box");
const plans = document.querySelectorAll(".plan");
const educards = document.querySelectorAll(".EduCard");
const workcards = document.querySelectorAll(".WorkCard");
const projcards = document.querySelectorAll(".ProjCard");
const informationCards = document.querySelectorAll(
  ".ContactBoxes .Right .Boxes div"
);
const inputBox = document.querySelector(".ContactBoxes .Left .Inputs");
const labels = document.querySelectorAll("label");
const Navside = document.querySelector(".NavigationSide");
const sideIcons = document.querySelectorAll(".NavigationSide div a");
const CloseSide = document.querySelector(".fa-circle-xmark");
const ShowSide = document.querySelector(".fa-bars");
const buttonDarkRes = document.querySelector("main .BlackModeResponsive");
let Dark = 0;
const DarkFunction = function (e) {
  if (Dark === 0) {
    console.log(`Now it's dark`);
    aside.style.backgroundColor = "#18122B";
    body.style.backgroundColor = "#635985";
    AsideProfileName.style.color = "#fff";
    AllSpans.forEach((a) => (a.style.color = "#fff"));
    SpecificSpan.style.color = "#ffb400";
    home.style.backgroundColor = "#18122B";
    p.forEach((a) => (a.style.color = "#fff"));
    H2s.forEach((a) => (a.style.color = "#fff"));
    H3s.forEach((a) => (a.style.color = "#fff"));
    H4s.forEach((a) => (a.style.color = "#fff"));
    H5s.forEach((a) => (a.style.color = "#fff"));
    boxes.forEach((a) => (a.style.backgroundColor = "#18122B"));
    plans.forEach((a) => (a.style.backgroundColor = "#18122B"));
    educards.forEach((a) => (a.style.backgroundColor = "#18122B"));
    workcards.forEach((a) => (a.style.backgroundColor = "#18122B"));
    projcards.forEach((a) => (a.style.backgroundColor = "#18122B"));
    informationCards.forEach((a) => (a.style.backgroundColor = "#18122B"));
    inputBox.style.backgroundColor = "#18122B";
    labels.forEach((a) => (a.style.backgroundColor = "#18122B"));
    Navside.style.backgroundColor = "#18122B";
    sideIcons.forEach((a) => (a.style.color = "#fff"));
    buttonDark.style.color = "#fff";
    CloseSide.style.color = "#fff";
    ShowSide.style.color = "#fff";
    buttonDarkRes.firstChild.style.color = "#fff";
    Dark = 1;
  } else {
    console.log(`Now it's white`);
    aside.style.backgroundColor = "#fff";
    body.style.backgroundColor = "rgba(219, 213, 213, 0.692)";
    AllSpans.forEach((a) => (a.style.color = "#000"));
    SpecificSpan.style.color = "#ffb400";
    home.style.backgroundColor = "#fff";
    p.forEach((a) => (a.style.color = "#000"));
    H2s.forEach((a) => (a.style.color = "#000"));
    H3s.forEach((a) => (a.style.color = "#000"));
    H4s.forEach((a) => (a.style.color = "#000"));
    H5s.forEach((a) => (a.style.color = "#000"));
    boxes.forEach((a) => (a.style.backgroundColor = "#fff"));
    plans.forEach((a) => (a.style.backgroundColor = "#fff"));
    educards.forEach((a) => (a.style.backgroundColor = "#fff"));
    workcards.forEach((a) => (a.style.backgroundColor = "#fff"));
    projcards.forEach((a) => (a.style.backgroundColor = "#fff"));
    informationCards.forEach((a) => (a.style.backgroundColor = "#fff"));
    inputBox.style.backgroundColor = "#fff";
    labels.forEach((a) => (a.style.backgroundColor = "#fff"));
    Navside.style.backgroundColor = "#fff";
    sideIcons.forEach((a) => (a.style.color = "#000"));
    buttonDark.style.color = "#000";
    CloseSide.style.color = "#000";
    ShowSide.style.color = "#000";
    buttonDarkRes.firstChild.style.color = "#000";
    Dark = 0;
  }
};
buttonDark.addEventListener("click", DarkFunction);
buttonDarkRes.addEventListener("click", DarkFunction);

body.onresize = function (e) {
  console.log(innerHeight);
};
