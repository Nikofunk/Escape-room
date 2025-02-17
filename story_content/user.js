window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Obtener el valor de la variable en Storyline
var player = GetPlayer();
var score = player.GetVar("userScore");

// Enviar los datos a Google Apps Script
var url = "140SJOPXiIVQ6gircIkPcBGOLqK1njKzQSscoiF-e0Nl1Vi_jmqs4k9p-"; // Reemplaza con tu Script ID
var data = {
    "score": score,
    "timestamp": new Date().toISOString()
};

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log("Datos enviados:", data))
.catch(error => console.error("Error:", error));

}

window.Script2 = function()
{
  // Obtener el valor de la variable en Storyline
var player = window.GetPlayer ? window.GetPlayer() : parent.GetPlayer();
var score = player.GetVar("userScore");

// Enviar los datos a Google Apps Script
var url = "https://script.google.com/macros/s/AKfycbxugp0P4iOQFl8C6eLl2mnPp7XEnS0BLtMJ1Hc0CJ8EUnrrk_9eCMs94Vch9B--f0nV/exec"; // Reemplaza con tu Script ID
var data = {
    "score": score,
    "timestamp": new Date().toISOString()
};

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log("Datos enviados:", data))
.catch(error => console.error("Error:", error));

}

};
