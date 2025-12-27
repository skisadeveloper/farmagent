const SOIL_URL = "./model/";
let soilModel;

async function loadSoilModel() {
  soilModel = await tmImage.load(
    SOIL_URL + "model.json",
    SOIL_URL + "metadata.json"
  );
}
loadSoilModel();

document.getElementById("soilUpload").addEventListener("change", async (e) => {
  const img = document.getElementById("soilPreview");
  img.src = URL.createObjectURL(e.target.files[0]);

  img.onload = async () => {
    const predictions = await soilModel.predict(img);
    predictions.sort((a, b) => b.probability - a.probability);

    const result = predictions[0].className;
    document.getElementById("soilResult").innerText = result;

    showRecommendation(result);
  };
});
