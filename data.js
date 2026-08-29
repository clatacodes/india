

const STATE_DATA = {
  "Jammu and Kashmir": {
    capital: "Srinagar / Jammu",
    population: "~13.6 million",
    majorReligion: "Islam",
    religions: { Islam: 68, Hinduism: 28, Sikhism: 2, Buddhism: 1, Other: 1 },
    languages: ["Kashmiri", "Dogri", "Urdu"]
  },
  "Ladakh": {
    capital: "Leh",
    population: "~0.3 million",
    majorReligion: "Buddhism",
    religions: { Buddhism: 46, Islam: 46, Hinduism: 6, Other: 2 },
    languages: ["Ladakhi", "Tibetan", "Urdu"]
  },
  "Himachal Pradesh": {
    capital: "Shimla",
    population: "~7.3 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 95, Sikhism: 2, Buddhism: 1, Islam: 1, Other: 1 },
    languages: ["Hindi", "Pahari"]
  },
  "Punjab": {
    capital: "Chandigarh",
    population: "~30 million",
    majorReligion: "Sikhism",
    religions: { Sikhism: 58, Hinduism: 39, Islam: 2, Other: 1 },
    languages: ["Punjabi"]
  },
  "Chandigarh": {
    capital: "Chandigarh",
    population: "~1.1 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 78, Sikhism: 13, Islam: 5, Other: 4 },
    languages: ["Punjabi", "Hindi"]
  },
  "Uttarakhand": {
    capital: "Dehradun",
    population: "~11 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 83, Islam: 14, Sikhism: 2, Other: 1 },
    languages: ["Hindi", "Garhwali", "Kumaoni"]
  },
  "Haryana": {
    capital: "Chandigarh",
    population: "~28.9 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 87, Islam: 7, Sikhism: 5, Other: 1 },
    languages: ["Hindi", "Haryanvi", "Punjabi"]
  },
  "NCT of Delhi": {
    capital: "New Delhi",
    population: "~19 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 82, Islam: 13, Sikhism: 3, Jainism: 1, Other: 1 },
    languages: ["Hindi", "Punjabi", "Urdu"]
  },
  "Rajasthan": {
    capital: "Jaipur",
    population: "~77 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 88, Islam: 9, Jainism: 1, Sikhism: 1, Other: 1 },
    languages: ["Hindi", "Rajasthani", "Marwari"]
  },
  "Uttar Pradesh": {
    capital: "Lucknow",
    population: "~230 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 80, Islam: 19, Other: 1 },
    languages: ["Hindi", "Urdu", "Awadhi", "Bhojpuri"]
  },
  "Bihar": {
    capital: "Patna",
    population: "~125 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 82, Islam: 17, Other: 1 },
    languages: ["Hindi", "Bhojpuri", "Maithili", "Magahi"]
  },
  "Sikkim": {
    capital: "Gangtok",
    population: "~0.6 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 58, Buddhism: 27, Christianity: 10, Other: 5 },
    languages: ["Nepali", "Sikkimese", "Lepcha"]
  },
  "West Bengal": {
    capital: "Kolkata",
    population: "~99 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 70, Islam: 27, Christianity: 1, Other: 2 },
    languages: ["Bengali", "Hindi", "Santali"]
  },
  "Jharkhand": {
    capital: "Ranchi",
    population: "~38 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 68, Islam: 14, Christianity: 4, Other: 14 },
    languages: ["Hindi", "Santali", "Bengali"]
  },
  "Assam": {
    capital: "Dispur",
    population: "~35 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 61, Islam: 34, Christianity: 4, Other: 1 },
    languages: ["Assamese", "Bengali", "Bodo"]
  },
  "Meghalaya": {
    capital: "Shillong",
    population: "~3.4 million",
    majorReligion: "Christianity",
    religions: { Christianity: 75, Hinduism: 12, Islam: 4, Other: 9 },
    languages: ["Khasi", "Garo", "English"]
  },
  "Nagaland": {
    capital: "Kohima",
    population: "~2.2 million",
    majorReligion: "Christianity",
    religions: { Christianity: 88, Hinduism: 9, Other: 3 },
    languages: ["Naga languages", "English", "Nagamese"]
  },
  "Manipur": {
    capital: "Imphal",
    population: "~3.1 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 41, Christianity: 41, Islam: 8, Other: 10 },
    languages: ["Meitei (Manipuri)", "English"]
  },
  "Mizoram": {
    capital: "Aizawl",
    population: "~1.2 million",
    majorReligion: "Christianity",
    religions: { Christianity: 87, Buddhism: 8, Hinduism: 3, Other: 2 },
    languages: ["Mizo", "English"]
  },
  "Tripura": {
    capital: "Agartala",
    population: "~4 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 84, Islam: 8, Christianity: 4, Other: 4 },
    languages: ["Bengali", "Kokborok"]
  },
  "Arunachal Pradesh": {
    capital: "Itanagar",
    population: "~1.6 million",
    majorReligion: "Christianity",
    religions: { Christianity: 30, Hinduism: 29, "Indigenous faiths": 26, Buddhism: 12, Other: 3 },
    languages: ["Nyishi", "Adi", "English", "Hindi"]
  },
  "Madhya Pradesh": {
    capital: "Bhopal",
    population: "~85 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 91, Islam: 7, Other: 2 },
    languages: ["Hindi", "Malvi", "Bundeli"]
  },
  "Chhattisgarh": {
    capital: "Raipur",
    population: "~29 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 93, Islam: 2, Christianity: 2, Other: 3 },
    languages: ["Hindi", "Chhattisgarhi"]
  },
  "Gujarat": {
    capital: "Gandhinagar",
    population: "~63 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 89, Islam: 9, Jainism: 1, Other: 1 },
    languages: ["Gujarati", "Hindi"]
  },
  "Dadra and Nagar Haveli and Daman and Diu": {
    capital: "Daman",
    population: "~0.6 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 92, Islam: 3, Christianity: 3, Other: 2 },
    languages: ["Gujarati", "Hindi", "Konkani"]
  },
  "Maharashtra": {
    capital: "Mumbai",
    population: "~123 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 80, Islam: 12, Buddhism: 6, Other: 2 },
    languages: ["Marathi", "Hindi"]
  },
  "Odisha": {
    capital: "Bhubaneswar",
    population: "~46 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 94, Christianity: 2, Islam: 2, Other: 2 },
    languages: ["Odia"]
  },
  "Telangana": {
    capital: "Hyderabad",
    population: "~39 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 85, Islam: 13, Other: 2 },
    languages: ["Telugu", "Urdu"]
  },
  "Andhra Pradesh": {
    capital: "Amaravati",
    population: "~53 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 90, Islam: 7, Christianity: 2, Other: 1 },
    languages: ["Telugu"]
  },
  "Karnataka": {
    capital: "Bengaluru",
    population: "~67 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 84, Islam: 13, Christianity: 2, Other: 1 },
    languages: ["Kannada"]
  },
  "Goa": {
    capital: "Panaji",
    population: "~1.5 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 66, Christianity: 25, Islam: 8, Other: 1 },
    languages: ["Konkani", "Marathi"]
  },
  "Kerala": {
    capital: "Thiruvananthapuram",
    population: "~35 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 55, Islam: 27, Christianity: 18 },
    languages: ["Malayalam"]
  },
  "Tamil Nadu": {
    capital: "Chennai",
    population: "~72 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 88, Christianity: 6, Islam: 6 },
    languages: ["Tamil"]
  },
  "Puducherry": {
    capital: "Puducherry",
    population: "~1.4 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 87, Christianity: 7, Islam: 6 },
    languages: ["Tamil", "French", "Telugu"]
  },
  "Lakshadweep": {
    capital: "Kavaratti",
    population: "~0.07 million",
    majorReligion: "Islam",
    religions: { Islam: 96, Hinduism: 3, Other: 1 },
    languages: ["Malayalam", "Jeseri"]
  },
  "Andaman and Nicobar": {
    capital: "Port Blair",
    population: "~0.4 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 69, Christianity: 21, Islam: 8, Other: 2 },
    languages: ["Hindi", "Bengali", "Tamil", "Nicobarese"]
  }
};

const NAME_ALIASES = {
  "Delhi": "NCT of Delhi",
  "Orissa": "Odisha",
  "Pondicherry": "Puducherry",
  "Uttaranchal": "Uttarakhand",
  "Jammu & Kashmir": "Jammu and Kashmir",
  "Andaman & Nicobar Islands": "Andaman and Nicobar",
  "Andaman and Nicobar Islands": "Andaman and Nicobar",
  "Dadra and Nagar Haveli": "Dadra and Nagar Haveli and Daman and Diu",
  "Daman and Diu": "Dadra and Nagar Haveli and Daman and Diu"
};

function resolveStateName(rawName) {
  if (!rawName) return null;
  const trimmed = rawName.trim();
  if (STATE_DATA[trimmed]) return trimmed;
  if (NAME_ALIASES[trimmed]) return NAME_ALIASES[trimmed];
  // last resort: case-insensitive match
  const lower = trimmed.toLowerCase();
  const found = Object.keys(STATE_DATA).find(k => k.toLowerCase() === lower);
  return found || trimmed;
}

const ALL_RELIGIONS = ["Hinduism", "Islam", "Christianity", "Sikhism", "Buddhism", "Jainism"];

const ALL_LANGUAGES = [...new Set(
  Object.values(STATE_DATA).flatMap(s => s.languages)
)].sort();
