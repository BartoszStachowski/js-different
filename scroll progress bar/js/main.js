const html = document.documentElement;
const progress = document.createElement("div");
const progressInner = document.createElement("div");

progress.className = "progress";
progressInner.className = "progress__inner";

progress.append(progressInner);
document.body.prepend(progress);

window.addEventListener("scroll", () => {
  const height = html.scrollHeight - window.innerHeight;
  const scrolled = (html.scrollTop / height) * 100;
  progressInner.style.width = `${scrolled}%`;
});

console.log(html);
