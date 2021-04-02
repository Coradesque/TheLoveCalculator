document.querySelector("Button").onclick = function(){
  var name_1 = document.querySelector("input[name='name1']").value;
  var name_2 = document.querySelector("input[name='name2']").value;

  var number_1 = calculateNumerology(name_1);
  var number_2 = calculateNumerology(name_2);

  var result = match(number_1, number_2);

  document.querySelector("#result h2").innerHTML = "<mark>Your result is:</mark> "+ "  " + result;
};

var matchArray = [
  ["Share a lot in common. Ego clashes possible", "Good partnership", "Very Stimulating", "Incompatible", "Vibrant. Jealousy possible", "Very Compatible", "Platonic. Great friendship", "Materialistic combination. Compatible", "Volatile. Incompatible"],
  ["Compatible","Too much in common; neutral", "Impatience; incompatible","Compatible", "Opposite attraction; compatible", "Jealousy and possessiveness possible; compatible", "Very compatible", "Most compatible", "Incompatible"],
  ["Excitingly compatible", "Impatience; incompatible", "Comfortable", "Incompatible", "Short-term compatibility",	"Compatible", "Incompatible", "Short-term compatibility", "Competitive but compatible"],
  ["Incompatible", "Compatible", "Incompatible", "Very compatible", "Incompatible", "Ideal Compatibility", "Cold; incompatible", "Very compatible", "Very incompatible"],
  ["Vibrant; Jealousy possible", "Opposite attraction; compatible", "Short-term compatibility", "Incompatible",	"Adventurous; compatible", "Incompatible", "Creative; compatible", "Ideal compatibility", "Great friends, lousy partners / spouses"],
  ["Compatible",	"Jealousy and possessiveness possible; compatible",	"Compatible", "Ideal compatibility", "Incompatible",	"Very compatible", "Difficult",	"Very compatible",	"Friendly; compatible"],
  ["Platonic; great friendship", "Very compatible", "Incompatible", "Cold; incompatible", "Creative compatibility", "Difficult", "Incompatible", "Compatible for business, not relationships", "Soulmates"],
  ["Materialistic combination; compatible", "Most compatible", "Short-term compatibility", "Very compatible", "Ideal compatibility", "Extremely compatible", "Compatible for business, not relationships", "Excellent compatibility", "Better friends than spouses or partners"],
  ["Volatile; incompatible", "Incompatible", "Competitive but compatible", "Extremely incompatible", "Great friends, lousy partners / spouses", "Friendly; compatible", "Soulmates", "Better as friends; bad spouses / partners", "Ideal compatibility"]
];

function calculateNumerology(name) {
  var name_lc = name.replace(/ /g, "").toLowerCase();
  var name_lc_length = name_lc.length;

  var sum = 0;

  for(var i = 0; i < name_lc_length; i++) {
      sum = sum + name_lc.charCodeAt(i);
  }

  return sum % 9;
}

function match(numerology_1, numerology_2) {
  return matchArray[numerology_1][numerology_2];
}
