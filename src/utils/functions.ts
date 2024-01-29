export const removeStopMarquee = () => {
  const nodeList = document.querySelectorAll(".react-simple-marquee");

  function handleMouseEnter() {
    console.log("Mouse enter");
  }

  function handleMouseLeave() {
    console.log("Mouse leave");
  }

  nodeList.forEach((el) => {
    el.removeEventListener("mouseenter", handleMouseEnter);
    el.removeEventListener("mouseenter", handleMouseLeave);
  });
};
