(() => {
  let activeTooltip = null;

  const createTooltip = (text, options) => {
    const tooltip = document.createElement("div");

    tooltip.className = "tooltip hidden";
    tooltip.textContent = text;

    document.body.append(tooltip);

    tooltip.style.left = `${options.width / 2 + options.x - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${options.y - tooltip.offsetHeight - 10}px`;

    tooltip.classList.remove("hidden");

    activeTooltip = tooltip;
  };

  const showTooltip = (e) => {
    const { width, x, y } = e.currentTarget.getBoundingClientRect();
    const text = e.currentTarget.getAttribute("title");

    createTooltip(text, (options = { width, x, y }));
    e.currentTarget.removeAttribute("title");
  };

  const hideTooltip = (e) => {
    if (activeTooltip) {
      e.currentTarget.setAttribute("title", activeTooltip.textContent);
      activeTooltip.remove();
    }
  };

  const init = (elems) => {
    for (let elem of elems) {
      elem.addEventListener("mouseenter", showTooltip);
      elem.addEventListener("mouseleave", hideTooltip);
    }
  };

  window.makeTooltip = init;
})();

makeTooltip(document.querySelectorAll("[title]"));
