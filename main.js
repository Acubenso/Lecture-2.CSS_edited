document.addEventListener("DOMContentLoaded", () => {
  const buttonHeader = document.getElementById("header-burger");
  if (buttonHeader) {
    buttonHeader.addEventListener("click", (e) => {
      e.preventDefault();

      toggleClassFunc();
    });
  }

  function toggleClassFunc() {
    const contentTitleBox = document.querySelector(".content-list__box");

    if (contentTitleBox) {
      contentTitleBox.classList.toggle("open");
    }
  }
});

// const App = {
//   data: function () {
//     return {
//       btn: "&#9776",
//     };
//   },
//   methods: {
//     toggleClass() {
//       this.btn.toggleClass("open");
//     },
//   },
// };

// Vue.createApp(App).mount("#app");
