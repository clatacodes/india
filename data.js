

const REGIONS = [
  {
    id: "jk",
    name: "Jammu & Kashmir",
    country: "India",
    capital: "Srinagar / Jammu",
    population: "~13.6 million",
    majorReligion: "Islam",
    religions: { Islam: 68, Hinduism: 28, Sikhism: 2, Buddhism: 1, Other: 1 },
    languages: ["Kashmiri", "Dogri", "Urdu", "Ladakhi"],
    x: 230, y: 140
  },
  {
    id: "ladakh",
    name: "Ladakh",
    country: "India",
    capital: "Leh",
    population: "~0.3 million",
    majorReligion: "Buddhism",
    religions: { Buddhism: 46, Islam: 46, Hinduism: 6, Other: 2 },
    languages: ["Ladakhi", "Tibetan", "Urdu"],
    x: 300, y: 110
  },
  {
    id: "hp",
    name: "Himachal Pradesh",
    country: "India",
    capital: "Shimla",
    population: "~7.3 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 95, Sikhism: 2, Buddhism: 1, Islam: 1, Other: 1 },
    languages: ["Hindi", "Pahari", "Kangri"],
    x: 275, y: 195
  },
  {
    id: "pb",
    name: "Punjab",
    country: "India",
    capital: "Chandigarh",
    population: "~30 million",
    majorReligion: "Sikhism",
    religions: { Sikhism: 58, Hinduism: 39, Islam: 2, Other: 1 },
    languages: ["Punjabi"],
    x: 220, y: 215
  },
  {
    id: "uk",
    name: "Uttarakhand",
    country: "India",
    capital: "Dehradun",
    population: "~11 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 83, Islam: 14, Sikhism: 2, Other: 1 },
    languages: ["Hindi", "Garhwali", "Kumaoni"],
    x: 315, y: 225
  },
  {
    id: "hr",
    name: "Haryana",
    country: "India",
    capital: "Chandigarh",
    population: "~28.9 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 87, Islam: 7, Sikhism: 5, Other: 1 },
    languages: ["Hindi", "Haryanvi", "Punjabi"],
    x: 245, y: 245
  },
  {
    id: "dl",
    name: "Delhi (NCT)",
    country: "India",
    capital: "New Delhi",
    population: "~19 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 82, Islam: 13, Sikhism: 3, Jainism: 1, Other: 1 },
    languages: ["Hindi", "Punjabi", "Urdu"],
    x: 262, y: 250
  },
  {
    id: "rj",
    name: "Rajasthan",
    country: "India",
    capital: "Jaipur",
    population: "~77 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 88, Islam: 9, Jainism: 1, Sikhism: 1, Other: 1 },
    languages: ["Hindi", "Rajasthani", "Marwari"],
    x: 190, y: 290
  },
  {
    id: "up",
    name: "Uttar Pradesh",
    country: "India",
    capital: "Lucknow",
    population: "~230 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 80, Islam: 19, Other: 1 },
    languages: ["Hindi", "Urdu", "Awadhi", "Bhojpuri"],
    x: 330, y: 280
  },
  {
    id: "br",
    name: "Bihar",
    country: "India",
    capital: "Patna",
    population: "~125 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 82, Islam: 17, Other: 1 },
    languages: ["Hindi", "Bhojpuri", "Maithili", "Magahi"],
    x: 405, y: 285
  },
  {
    id: "sk",
    name: "Sikkim",
    country: "India",
    capital: "Gangtok",
    population: "~0.6 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 58, Buddhism: 27, Christianity: 10, Other: 5 },
    languages: ["Nepali", "Sikkimese", "Lepcha"],
    x: 435, y: 255
  },
  {
    id: "wb",
    name: "West Bengal",
    country: "India",
    capital: "Kolkata",
    population: "~99 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 70, Islam: 27, Christianity: 1, Other: 2 },
    languages: ["Bengali", "Hindi", "Santali"],
    x: 445, y: 325
  },
  {
    id: "jh",
    name: "Jharkhand",
    country: "India",
    capital: "Ranchi",
    population: "~38 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 68, Islam: 14, Christianity: 4, Other: 14 },
    languages: ["Hindi", "Santali", "Bengali"],
    x: 395, y: 335
  },
  {
    id: "as",
    name: "Assam",
    country: "India",
    capital: "Dispur",
    population: "~35 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 61, Islam: 34, Christianity: 4, Other: 1 },
    languages: ["Assamese", "Bengali", "Bodo"],
    x: 490, y: 275
  },
  {
    id: "ml",
    name: "Meghalaya",
    country: "India",
    capital: "Shillong",
    population: "~3.4 million",
    majorReligion: "Christianity",
    religions: { Christianity: 75, Hinduism: 12, Islam: 4, Other: 9 },
    languages: ["Khasi", "Garo", "English"],
    x: 475, y: 295
  },
  {
    id: "nl",
    name: "Nagaland",
    country: "India",
    capital: "Kohima",
    population: "~2.2 million",
    majorReligion: "Christianity",
    religions: { Christianity: 88, Hinduism: 9, Other: 3 },
    languages: ["Naga languages", "English", "Nagamese"],
    x: 520, y: 270
  },
  {
    id: "mn",
    name: "Manipur",
    country: "India",
    capital: "Imphal",
    population: "~3.1 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 41, Christianity: 41, Islam: 8, Other: 10 },
    languages: ["Meitei (Manipuri)", "English"],
    x: 515, y: 300
  },
  {
    id: "mz",
    name: "Mizoram",
    country: "India",
    capital: "Aizawl",
    population: "~1.2 million",
    majorReligion: "Christianity",
    religions: { Christianity: 87, Buddhism: 8, Hinduism: 3, Other: 2 },
    languages: ["Mizo", "English"],
    x: 500, y: 325
  },
  {
    id: "tr",
    name: "Tripura",
    country: "India",
    capital: "Agartala",
    population: "~4 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 84, Islam: 8, Christianity: 4, Other: 4 },
    languages: ["Bengali", "Kokborok"],
    x: 470, y: 335
  },
  {
    id: "mp",
    name: "Madhya Pradesh",
    country: "India",
    capital: "Bhopal",
    population: "~85 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 91, Islam: 7, Other: 2 },
    languages: ["Hindi", "Malvi", "Bundeli"],
    x: 295, y: 355
  },
  {
    id: "cg",
    name: "Chhattisgarh",
    country: "India",
    capital: "Raipur",
    population: "~29 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 93, Islam: 2, Christianity: 2, Other: 3 },
    languages: ["Hindi", "Chhattisgarhi"],
    x: 355, y: 375
  },
  {
    id: "gj",
    name: "Gujarat",
    country: "India",
    capital: "Gandhinagar",
    population: "~63 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 89, Islam: 9, Jainism: 1, Other: 1 },
    languages: ["Gujarati", "Hindi"],
    x: 150, y: 355
  },
  {
    id: "mh",
    name: "Maharashtra",
    country: "India",
    capital: "Mumbai",
    population: "~123 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 80, Islam: 12, Buddhism: 6, Other: 2 },
    languages: ["Marathi", "Hindi"],
    x: 235, y: 425
  },
  {
    id: "od",
    name: "Odisha",
    country: "India",
    capital: "Bhubaneswar",
    population: "~46 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 94, Christianity: 2, Islam: 2, Other: 2 },
    languages: ["Odia"],
    x: 405, y: 405
  },
  {
    id: "tg",
    name: "Telangana",
    country: "India",
    capital: "Hyderabad",
    population: "~39 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 85, Islam: 13, Other: 2 },
    languages: ["Telugu", "Urdu"],
    x: 295, y: 450
  },
  {
    id: "ap",
    name: "Andhra Pradesh",
    country: "India",
    capital: "Amaravati",
    population: "~53 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 90, Islam: 7, Christianity: 2, Other: 1 },
    languages: ["Telugu"],
    x: 315, y: 490
  },
  {
    id: "ka",
    name: "Karnataka",
    country: "India",
    capital: "Bengaluru",
    population: "~67 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 84, Islam: 13, Christianity: 2, Other: 1 },
    languages: ["Kannada"],
    x: 245, y: 490
  },
  {
    id: "ga",
    name: "Goa",
    country: "India",
    capital: "Panaji",
    population: "~1.5 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 66, Christianity: 25, Islam: 8, Other: 1 },
    languages: ["Konkani", "Marathi"],
    x: 215, y: 470
  },
  {
    id: "kl",
    name: "Kerala",
    country: "India",
    capital: "Thiruvananthapuram",
    population: "~35 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 55, Islam: 27, Christianity: 18 },
    languages: ["Malayalam"],
    x: 235, y: 565
  },
  {
    id: "tn",
    name: "Tamil Nadu",
    country: "India",
    capital: "Chennai",
    population: "~72 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 88, Christianity: 6, Islam: 6 },
    languages: ["Tamil"],
    x: 285, y: 565
  },
  {
    id: "pk",
    name: "Pakistan",
    country: "Pakistan",
    capital: "Islamabad",
    population: "~240 million",
    majorReligion: "Islam",
    religions: { Islam: 96, Hinduism: 2, Christianity: 1, Other: 1 },
    languages: ["Urdu", "Punjabi", "Sindhi", "Pashto"],
    x: 110, y: 220
  },
  {
    id: "np",
    name: "Nepal",
    country: "Nepal",
    capital: "Kathmandu",
    population: "~30 million",
    majorReligion: "Hinduism",
    religions: { Hinduism: 81, Buddhism: 9, Islam: 4, Other: 6 },
    languages: ["Nepali", "Maithili", "Bhojpuri"],
    x: 355, y: 235
  },
  {
    id: "bt",
    name: "Bhutan",
    country: "Bhutan",
    capital: "Thimphu",
    population: "~0.8 million",
    majorReligion: "Buddhism",
    religions: { Buddhism: 75, Hinduism: 23, Other: 2 },
    languages: ["Dzongkha", "Nepali"],
    x: 465, y: 235
  },
  {
    id: "bd",
    name: "Bangladesh",
    country: "Bangladesh",
    capital: "Dhaka",
    population: "~173 million",
    majorReligion: "Islam",
    religions: { Islam: 91, Hinduism: 8, Other: 1 },
    languages: ["Bengali"],
    x: 445, y: 355
  },
  {
    id: "lk",
    name: "Sri Lanka",
    country: "Sri Lanka",
    capital: "Colombo / Sri Jayawardenepura Kotte",
    population: "~22 million",
    majorReligion: "Buddhism",
    religions: { Buddhism: 70, Hinduism: 13, Islam: 10, Christianity: 7 },
    languages: ["Sinhala", "Tamil"],
    x: 280, y: 630
  }
];

const ALL_RELIGIONS = ["Hinduism", "Islam", "Christianity", "Sikhism", "Buddhism", "Jainism"];

const ALL_LANGUAGES = [...new Set(REGIONS.flatMap(r => r.languages))].sort();
