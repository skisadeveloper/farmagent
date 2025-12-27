const URL = "./model/";
let model;
let imageReady = false;

async function loadModel() {
  model = await tmImage.load(URL + "model.json", URL + "metadata.json");
  document.getElementById("status").innerText = "Model loaded. Upload image.";
}
loadModel();

document.getElementById("upload").addEventListener("change", (e) => {
  const img = document.getElementById("preview");
  img.src = URL.createObjectURL(e.target.files[0]);
  imageReady = true;
});

async function predict() {
  if (!model) {
    alert("Model still loading. Please wait.");
    return;
  }

  if (!imageReady) {
    alert("Please upload an image first.");
    return;
  }

  document.getElementById("status").innerText = "Analyzing image...";

  const img = document.getElementById("preview");
  const predictions = await model.predict(img);

  predictions.sort((a, b) => b.probability - a.probability);
  const top = predictions[0];

  document.getElementById("result").innerHTML =
    `Result: <b>${top.className}</b><br>
     Confidence: ${(top.probability * 100).toFixed(2)}%`;

  document.getElementById("status").innerText = "Done.";
}


