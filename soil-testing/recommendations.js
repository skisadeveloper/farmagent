function showRecommendation(soilClass) {
  const rec = {
    "High N / Medium P / Low K / Neutral pH":
      "Reduce nitrogen use. Apply Potassium-rich fertilizer. Verify fertilizer authenticity before use.",

    "Medium N / High P / Medium K / Acidic pH":
      "Avoid DAP. Apply lime to correct pH. Scan QR before buying fertilizer.",

    "Low N / Medium P / High K / Alkaline pH":
      "Apply Nitrogen fertilizer like Urea. Avoid Potash. Verify product source.",

    "High N / Low P / Medium K / Acidic pH":
      "Reduce Nitrogen input. Apply Phosphorus fertilizer. Correct soil acidity.",

    "Medium N / Medium P / Medium K / Neutral pH":
      "Balanced soil. Use only verified fertilizers if needed.",

    "Low N / High P / Low K / Neutral pH":
      "Apply Nitrogen and Potassium fertilizers. Avoid excess Phosphorus.",

    "High N / High P / High K / Alkaline pH":
      "Excess nutrients detected. Avoid fertilization temporarily.",

    "Medium N / Low P / High K / Acidic pH":
      "Apply Phosphorus fertilizer. Reduce Potassium use.",

    "Low N / Low P / Medium K / Neutral pH":
      "Apply balanced NPK fertilizer after QR verification.",

    "Medium N / High P / Low K / Alkaline pH":
      "Apply Potassium fertilizer. Avoid DAP. Verify fertilizer source."
  };

  document.getElementById("recommendation").innerHTML =
    `<b>FarmAgent Recommendation:</b><br>${rec[soilClass] || "No recommendation available."}
     <br><br>
     <a href="../verify.html">🔍 Verify Fertilizer via QR</a>`;
}
