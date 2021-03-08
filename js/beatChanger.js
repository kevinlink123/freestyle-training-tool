export function test() {
  console.log("Exportado con exito");
}
document.querySelector(".button").addEventListener("click", cargarLink);
function cargarLink() {
  const YTLinkStart = "https://www.youtube.com/embed/"
  var YTLink = document.getElementById("url-input").value;
  var player = document.getElementById("player");
  var index = YTLink.indexOf("=") + 1;
  console.log(index);
  YTLink = YTLinkStart + YTLink.slice(index);
  player.src = YTLink;
  console.log(YTLink);
};