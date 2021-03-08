export function test() {
  console.log("Exportado con exito");
}
document.querySelector(".button").addEventListener("click", cargarLink);
function cargarLink() {
  const YTLinkStart = "https://www.youtube.com/embed/"
  var YTLink = document.getElementById("url-input").value;
  var player = document.getElementById("player");
  var index = YTLink.indexOf("=") + 1;
  if (YTLink.indexOf(".be") != -1) {
    console.log("Es un link acortado");
    index = YTLink.indexOf(".be") + 4;
  }
  console.log(index);
  var youtubeLinkId = YTLink.slice(index);
  if (youtubeLinkId.indexOf("&") != -1) {
    var auxIndex = youtubeLinkId.indexOf("&");
    youtubeLinkId = youtubeLinkId.slice(0, auxIndex);
  }
  YTLink = YTLinkStart + youtubeLinkId;
  player.src = YTLink;
  console.log(YTLink);
};