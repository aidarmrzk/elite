let allCoundtiesObj = [
  {
    name: "Afghanistan (افغانستان)",
    phone_code: "93",
    country_code: "af",
    phone_mask: "93-99-999-9999",
  },
  {
    name: "Albania (Shqipëri)",
    phone_code: "355",
    country_code: "al",
    phone_mask: "355(999) 999-999",
  },
  {
    name: "Algeria (الجزائر)",
    phone_code: "213",
    country_code: "dz",
    phone_mask: "213-99-999-9999",
  },
  {
    name: "Andorra",
    phone_code: "376",
    country_code: "ad",
    phone_mask: "376-999-999",
  },
  {
    name: "Angola",
    phone_code: "244",
    country_code: "ao",
    phone_mask: "244(999) 999-999",
  },
  {
    name: "Armenia (Հայաստան)",
    phone_code: "374",
    country_code: "am",
    phone_mask: "374-99-999-999",
  },
  {
    name: "Antigua and Barbuda",
    phone_code: "1 (268)",
    country_code: "ag",
    phone_mask: "1 (268)999-9999",
  },
  {
    name: "Argentina",
    phone_code: "54",
    country_code: "ar",
    phone_mask: "54(999) 9999-9999",
  },
  {
    name: "Australia",
    phone_code: "61",
    country_code: "au",
    phone_mask: "61-99-9999-9999",
  },
  {
    name: "Austria (Österreich)",
    phone_code: "43",
    country_code: "at",
    phone_mask: "43(999) 999-99999",
  },
  {
    name: "Azerbaijan (Azərbaycan)",
    phone_code: "994",
    country_code: "az",
    phone_mask: "994-99-999-99-99",
  },
  {
    name: "Bahamas",
    phone_code: "1 (242)",
    country_code: "bs",
    phone_mask: "1 (242)999-9999",
  },
  {
    name: "Bahrain (البحرين)",
    phone_code: "973",
    country_code: "bh",
    phone_mask: "973-9999-9999",
  },
  {
    name: "Bangladesh (বাংলাদেশ)",
    phone_code: "880",
    country_code: "bd",
    phone_mask: "880-9999-999999",
  },
  {
    name: "Barbados",
    phone_code: "1 (246)",
    country_code: "bb",
    phone_mask: "1 (246)999-9999",
  },
  {
    name: "Belarus (Беларусь)",
    phone_code: "375",
    country_code: "by",
    phone_mask: "375(99) 999-99-99",
  },
  {
    name: "Belgium (België)",
    phone_code: "32",
    country_code: "be",
    phone_mask: "32(999) 999-999",
  },
  {
    name: "Belize",
    phone_code: "501",
    country_code: "bz",
    phone_mask: "501-999-9999",
  },
  {
    name: "Benin (Bénin)",
    phone_code: "229",
    country_code: "bj",
    phone_mask: "229-99-99-9999",
  },
  {
    name: "Bhutan (འབྲུག)",
    phone_code: "975",
    country_code: "bt",
    phone_mask: "975-9-999-9999",
  },
  {
    name: "Bolivia",
    phone_code: "591",
    country_code: "bo",
    phone_mask: "591-9-999-9999",
  },
  {
    name: "Bosnia and Herzegovina",
    phone_code: "387",
    country_code: "ba",
    phone_mask: "387-99-999-999",
  },
  {
    name: "Botswana",
    phone_code: "267",
    country_code: "bw",
    phone_mask: "267-99-999-999",
  },
  {
    name: "Brazil (Brasil)",
    phone_code: "55",
    country_code: "br",
    phone_mask: "55(99) 99999-9999",
  },
  {
    name: "Brunei",
    phone_code: "673",
    country_code: "bn",
    phone_mask: "673-999-9999",
  },
  {
    name: "Bulgaria (България)",
    phone_code: "359",
    country_code: "bg",
    phone_mask: "359(999) 999-999",
  },
  {
    name: "Burkina Faso",
    phone_code: "226",
    country_code: "bf",
    phone_mask: "226-99-99-9999",
  },
  {
    name: "Burundi (Uburundi)",
    phone_code: "257",
    country_code: "bi",
    phone_mask: "257-99-99-9999",
  },
  {
    name: "Cambodia (កម្ពុជា)",
    phone_code: "855",
    country_code: "kh",
    phone_mask: "855-99-999-999",
  },
  {
    name: "Cameroon (Cameroun)",
    phone_code: "237",
    country_code: "cm",
    phone_mask: "237-9-99-99-99-99",
  },
  {
    name: "Canada",
    phone_code: "1",
    country_code: "ca",
    phone_mask: "1(999) 999-9999",
  },
  {
    name: "Cape Verde (Kabu Verdi)",
    phone_code: "238",
    country_code: "cv",
    phone_mask: "238(999) 99-99",
  },
  {
    name: "Central African Republic (République centrafricaine)",
    phone_code: "236",
    country_code: "cf",
    phone_mask: "236-99-99-9999",
  },
  {
    name: "Chad (Tchad)",
    phone_code: "235",
    country_code: "td",
    phone_mask: "235-99-99-99-99",
  },
  {
    name: "Chile",
    phone_code: "56",
    country_code: "cl",
    phone_mask: "56-9-9999-9999",
  },
  {
    name: "China (中国)",
    phone_code: "86",
    country_code: "cn",
    phone_mask: "86(999) 9999-9999",
  },
  {
    name: "Colombia",
    phone_code: "57",
    country_code: "co",
    phone_mask: "57(999) 999-9999",
  },
  {
    name: "Comoros (جزر القمر)",
    phone_code: "269",
    country_code: "km",
    phone_mask: "269-99-99999",
  },
  {
    name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
    phone_code: "243",
    country_code: "cd",
    phone_mask: "243(999) 999-999",
  },
  {
    name: "Congo (Republic) (Congo-Brazzaville)",
    phone_code: "242",
    country_code: "cg",
    phone_mask: "242-99-999-9999",
  },
  {
    name: "Cook Islands",
    phone_code: "682",
    country_code: "ck",
    phone_mask: "682-99-999",
  },
  {
    name: "Costa Rica",
    phone_code: "506",
    country_code: "cr",
    phone_mask: "506-9999-9999",
  },
  {
    name: "Cote d’Ivoire",
    phone_code: "225",
    country_code: "ci",
    phone_mask: "225-99-999-999",
  },
  {
    name: "Croatia (Hrvatska)",
    phone_code: "385",
    country_code: "hr",
    phone_mask: "385-99-999-9999",
  },
  {
    name: "Cuba",
    phone_code: "53",
    country_code: "cu",
    phone_mask: "53-9-999-9999",
  },
  {
    name: "Cyprus (Κύπρος)",
    phone_code: "357",
    country_code: "cy",
    phone_mask: "357-99-999-999",
  },
  {
    name: "Czech Republic (Česká republika)",
    phone_code: "420",
    country_code: "cz",
    phone_mask: "420(999) 999-999",
  },
  {
    name: "Denmark (Danmark)",
    phone_code: "45",
    country_code: "dk",
    phone_mask: "45-99-99-99-99",
  },
  {
    name: "Djibouti",
    phone_code: "253",
    country_code: "dj",
    phone_mask: "253-99-99-99-99",
  },
  {
    name: "Dominica",
    phone_code: "1 (767)",
    country_code: "dm",
    phone_mask: "1 (767)999-9999",
  },
  {
    name: "Dominican Republic (República Dominicana)",
    phone_code: "1",
    country_code: "do",
    phone_mask: "1(999) 999-9999",
  },
  {
    name: "Ecuador",
    phone_code: "593",
    country_code: "ec",
    phone_mask: "593-99-999-9999",
  },
  {
    name: "Egypt (مصر)",
    phone_code: "20",
    country_code: "eg",
    phone_mask: "20(999) 999-9999",
  },
  {
    name: "El Salvador",
    phone_code: "503",
    country_code: "sv",
    phone_mask: "503-99-99-9999",
  },
  {
    name: "Equatorial Guinea (Guinea Ecuatorial)",
    phone_code: "240",
    country_code: "gq",
    phone_mask: "240-99-999-9999",
  },
  {
    name: "Eritrea",
    phone_code: "291",
    country_code: "er",
    phone_mask: "291-9-999-999",
  },
  {
    name: "Estonia (Eesti)",
    phone_code: "372",
    country_code: "ee",
    phone_mask: "372-9999-9999",
  },
  {
    name: "Ethiopia",
    phone_code: "251",
    country_code: "et",
    phone_mask: "251-99-999-9999",
  },
  {
    name: "Fiji",
    phone_code: "679",
    country_code: "fj",
    phone_mask: "679-999-9999",
  },
  {
    name: "Finland (Suomi)",
    phone_code: "358",
    country_code: "fi",
    phone_mask: "358-999-9999999",
  },
  {
    name: "France",
    phone_code: "33",
    country_code: "fr",
    phone_mask: "33(999) 999-9999",
  },
  {
    name: "Gabon",
    phone_code: "241",
    country_code: "ga",
    phone_mask: "241-9-99-99-99",
  },
  {
    name: "Gambia",
    phone_code: "220",
    country_code: "gm",
    phone_mask: "220(999) 99-99",
  },
  {
    name: "Georgia (საქართველო)",
    phone_code: "995",
    country_code: "ge",
    phone_mask: "995(999) 999-999",
  },
  {
    name: "Germany (Deutschland)",
    phone_code: "49",
    country_code: "de",
    phone_mask: "49(999) 999-99999",
  },
  {
    name: "Ghana (Gaana)",
    phone_code: "233",
    country_code: "gh",
    phone_mask: "233(999) 999-999",
  },
  {
    name: "Greece (Ελλάδα)",
    phone_code: "30",
    country_code: "gr",
    phone_mask: "30(999) 999-9999",
  },
  {
    name: "Grenada",
    phone_code: "1 (473)",
    country_code: "gd",
    phone_mask: "1 (473)999-9999",
  },
  {
    name: "Guatemala",
    phone_code: "502",
    country_code: "gt",
    phone_mask: "502-9-999-9999",
  },
  {
    name: "Guinea (Guinée)",
    phone_code: "224",
    country_code: "gn",
    phone_mask: "224-999-99-99-99",
  },
  {
    name: "Guinea-Bissau (Guiné Bissau)",
    phone_code: "245",
    country_code: "gw",
    phone_mask: "245-9-999999",
  },
  {
    name: "Guyana",
    phone_code: "592",
    country_code: "gy",
    phone_mask: "592-999-9999",
  },
  {
    name: "Haiti",
    phone_code: "509",
    country_code: "ht",
    phone_mask: "509-99-99-9999",
  },
  {
    name: "Honduras",
    phone_code: "504",
    country_code: "hn",
    phone_mask: "504-9999-9999",
  },
  {
    name: "Hong Kong (香港)",
    phone_code: "852",
    country_code: "hk",
    phone_mask: "852-9999-9999",
  },
  {
    name: "Hungary (Magyarország)",
    phone_code: "36",
    country_code: "hu",
    phone_mask: "36(999) 999-999",
  },
  {
    name: "Iceland (Ísland)",
    phone_code: "354",
    country_code: "is",
    phone_mask: "354-999-9999",
  },
  {
    name: "India (भारत)",
    phone_code: "91",
    country_code: "in",
    phone_mask: "91(9999) 999-999",
  },
  {
    name: "Indonesia",
    phone_code: "62",
    country_code: "id",
    phone_mask: "62(999) 999-99-9999",
  },
  {
    name: "Iran (ایران)",
    phone_code: "98",
    country_code: "ir",
    phone_mask: "98(999) 999-9999",
  },
  {
    name: "Iraq (العراق)",
    phone_code: "964",
    country_code: "iq",
    phone_mask: "964(999) 999-9999",
  },
  {
    name: "Ireland",
    phone_code: "353",
    country_code: "ie",
    phone_mask: "353(999) 999-999",
  },
  {
    name: "Israel (ישראל)",
    phone_code: "972",
    country_code: "il",
    phone_mask: "972-999-999-9999",
  },
  {
    name: "Italy (Italia)",
    phone_code: "39",
    country_code: "it",
    phone_mask: "39(999) 9999-999",
  },
  {
    name: "Jamaica",
    phone_code: "1",
    country_code: "jm",
    phone_mask: "1(999) 999-9999",
  },
  {
    name: "Japan (日本)",
    phone_code: "81",
    country_code: "jp",
    phone_mask: "81-99-9999-9999",
  },
  {
    name: "Jordan (الأردن)",
    phone_code: "962",
    country_code: "jo",
    phone_mask: "962-9-9999-9999",
  },
  {
    name: "Kazakhstan (Казахстан)",
    phone_code: "7",
    country_code: "kz",
    phone_mask: "7(999) 999-99-99",
  },
  {
    name: "Kenya",
    phone_code: "254",
    country_code: "ke",
    phone_mask: "254-999-999999",
  },
  {
    name: "Kiribati",
    phone_code: "686",
    country_code: "ki",
    phone_mask: "686-99-999",
  },
  {
    name: "Kosovo (Republic)",
    phone_code: "383",
    country_code: "xk",
    phone_mask: "383-99-999-999",
  },
  {
    name: "Kuwait (الكويت)",
    phone_code: "965",
    country_code: "kw",
    phone_mask: "965-9999-9999",
  },
  {
    name: "Kyrgyzstan (Кыргызстан)",
    phone_code: "996",
    country_code: "kg",
    phone_mask: "996(999) 999-999",
  },
  {
    name: "Laos (ລາວ)",
    phone_code: "856",
    country_code: "la",
    phone_mask: "856-99-999-999",
  },
  {
    name: "Latvia (Latvija)",
    phone_code: "371",
    country_code: "lv",
    phone_mask: "371-99-999-999",
  },
  {
    name: "Lebanon (لبنان)",
    phone_code: "961",
    country_code: "lb",
    phone_mask: "961-99-999-999",
  },
  {
    name: "Lesotho",
    phone_code: "266",
    country_code: "ls",
    phone_mask: "266-9-999-9999",
  },
  {
    name: "Liberia",
    phone_code: "231",
    country_code: "lr",
    phone_mask: "231-99-999-9999",
  },
  {
    name: "Libya (ليبيا)",
    phone_code: "218",
    country_code: "ly",
    phone_mask: "218-99-999-999",
  },
  {
    name: "Liechtenstein",
    phone_code: "423",
    country_code: "li",
    phone_mask: "423-999-99-99",
  },
  {
    name: "Lithuania (Lietuva)",
    phone_code: "370",
    country_code: "lt",
    phone_mask: "370(999) 99-999",
  },
  {
    name: "Luxembourg",
    phone_code: "352",
    country_code: "lu",
    phone_mask: "352(999) 999-999",
  },
  {
    name: "Macao",
    phone_code: "853",
    country_code: "mo",
    phone_mask: "853-9999-9999",
  },
  {
    name: "Macedonia (FYROM) (Македонија)",
    phone_code: "389",
    country_code: "mk",
    phone_mask: "389-99-999-999",
  },
  {
    name: "Madagascar (Madagasikara)",
    phone_code: "261",
    country_code: "mg",
    phone_mask: "261-99-99-99999",
  },
  {
    name: "Malawi",
    phone_code: "265",
    country_code: "mw",
    phone_mask: "265-9-9999-9999",
  },
  {
    name: "Malaysia",
    phone_code: "60",
    country_code: "my",
    phone_mask: "60-99-999-9999",
  },
  {
    name: "Maldives",
    phone_code: "960",
    country_code: "mv",
    phone_mask: "960-999-9999",
  },
  {
    name: "Mali",
    phone_code: "223",
    country_code: "ml",
    phone_mask: "223-99-99-9999",
  },
  {
    name: "Malta",
    phone_code: "356",
    country_code: "mt",
    phone_mask: "356-9999-9999",
  },
  {
    name: "Marshall Islands",
    phone_code: "692",
    country_code: "mh",
    phone_mask: "692-999-9999",
  },
  {
    name: "Mauritania (موريتانيا)",
    phone_code: "222",
    country_code: "mr",
    phone_mask: "222-99-99-9999",
  },
  {
    name: "Mauritius (Moris)",
    phone_code: "230",
    country_code: "mu",
    phone_mask: "230-999-99999",
  },
  {
    name: "Mexico (México)",
    phone_code: "52",
    country_code: "mx",
    phone_mask: "52(999) 999-9999",
  },
  {
    name: "Mexico (México)",
    phone_code: "521",
    country_code: "mb",
    phone_mask: "521(999) 999-9999",
  },
  {
    name: "Micronesia",
    phone_code: "691",
    country_code: "fm",
    phone_mask: "691-999-9999",
  },
  {
    name: "Moldova (Republica Moldova)",
    phone_code: "373",
    country_code: "md",
    phone_mask: "373-9999-9999",
  },
  {
    name: "Monaco",
    phone_code: "377",
    country_code: "mc",
    phone_mask: "377-99-999-999",
  },
  {
    name: "Mongolia (Монгол)",
    phone_code: "976",
    country_code: "mn",
    phone_mask: "976-99-99-9999",
  },
  {
    name: "Montenegro (Crna Gora)",
    phone_code: "382",
    country_code: "me",
    phone_mask: "382-99-999-999",
  },
  {
    name: "Morocco (المغرب)",
    phone_code: "212",
    country_code: "ma",
    phone_mask: "212-99-9999-999",
  },
  {
    name: "Mozambique (Moçambique)",
    phone_code: "258",
    country_code: "mz",
    phone_mask: "258-99-999-999",
  },
  {
    name: "Myanmar (Burma) (မြန်မာ)",
    phone_code: "95",
    country_code: "mm",
    phone_mask: "95-99-999-999",
  },
  {
    name: "Namibia (Namibië)",
    phone_code: "264",
    country_code: "na",
    phone_mask: "264-99-999-9999",
  },
  {
    name: "Nauru",
    phone_code: "674",
    country_code: "nr",
    phone_mask: "674-999-9999",
  },
  {
    name: "Nepal (नेपाल)",
    phone_code: "977",
    country_code: "np",
    phone_mask: "977-999-999-9999",
  },
  {
    name: "Netherlands (Nederland)",
    phone_code: "31",
    country_code: "nl",
    phone_mask: "31-99-999-9999",
  },
  {
    name: "New Zealand",
    phone_code: "64",
    country_code: "nz",
    phone_mask: "64(999) 999-999",
  },
  {
    name: "Nicaragua",
    phone_code: "505",
    country_code: "ni",
    phone_mask: "505-9999-9999",
  },
  {
    name: "Niger (Nijar)",
    phone_code: "227",
    country_code: "ne",
    phone_mask: "227-99-99-9999",
  },
  {
    name: "Nigeria",
    phone_code: "234",
    country_code: "ng",
    phone_mask: "234-999-999-9999",
  },
  {
    name: "Niue",
    phone_code: "683",
    country_code: "nu",
    phone_mask: "683-9999",
  },
  {
    name: "North Korea (조선 민주주의 인민 공화국)",
    phone_code: "850",
    country_code: "kp",
    phone_mask: "850-99-999-999",
  },
  {
    name: "Norway (Norge)",
    phone_code: "47",
    country_code: "no",
    phone_mask: "47(999) 99-999",
  },
  {
    name: "Oman (عُمان)",
    phone_code: "968",
    country_code: "om",
    phone_mask: "968-99-999-999",
  },
  {
    name: "Panama",
    phone_code: "507",
    country_code: "pa",
    phone_mask: "507 9999-9999",
  },
  {
    name: "Pakistan (پاکستان)",
    phone_code: "92",
    country_code: "pk",
    phone_mask: "92(999) 999-9999",
  },
  {
    name: "Palau",
    phone_code: "680",
    country_code: "pw",
    phone_mask: "680-999-9999",
  },
  {
    name: "Palestinian Territory",
    phone_code: "970",
    country_code: "ps",
    phone_mask: "970 99 999 9999",
  },
  {
    name: "Papua New Guinea",
    phone_code: "675",
    country_code: "pg",
    phone_mask: "675(999) 99-999",
  },
  {
    name: "Paraguay",
    phone_code: "595",
    country_code: "py",
    phone_mask: "595(999) 999-999",
  },
  {
    name: "Peru (Perú)",
    phone_code: "51",
    country_code: "pe",
    phone_mask: "51(999) 999-999",
  },
  {
    name: "Philippines",
    phone_code: "63",
    country_code: "ph",
    phone_mask: "63(999) 999-9999",
  },
  {
    name: "Poland (Polska)",
    phone_code: "48",
    country_code: "pl",
    phone_mask: "48(999) 999-999",
  },
  {
    name: "Portugal",
    phone_code: "351",
    country_code: "pt",
    phone_mask: "351-99-999-9999",
  },
  {
    name: "Qatar (قطر)",
    phone_code: "974",
    country_code: "qa",
    phone_mask: "974-9999-9999",
  },
  {
    name: "Romania (România)",
    phone_code: "40",
    country_code: "ro",
    phone_mask: "40-99-999-9999",
  },
  {
    name: "Russian Federation (Российская Федерация)",
    phone_code: "7",
    country_code: "ru",
    phone_mask: "7(999) 999-99-99",
  },
  {
    name: "Rwanda",
    phone_code: "250",
    country_code: "rw",
    phone_mask: "250(999) 999-999",
  },
  {
    name: "Saint Kitts and Nevis",
    phone_code: "1 (869)",
    country_code: "kn",
    phone_mask: "1 (869)999-9999",
  },
  {
    name: "Saint Lucia",
    phone_code: "1 (758)",
    country_code: "lc",
    phone_mask: "1 (758)999-9999",
  },
  {
    name: "Saint Vincent and the Grenadines",
    phone_code: "1 (784)",
    country_code: "vc",
    phone_mask: "1 (784)999-9999",
  },
  {
    name: "Samoa",
    phone_code: "685",
    country_code: "ws",
    phone_mask: "685-99-9999",
  },
  {
    name: "San Marino",
    phone_code: "378",
    country_code: "sm",
    phone_mask: "378-9999-999999",
  },
  {
    name: "Sao Tome and Principe (São Tomé e Príncipe)",
    phone_code: "239",
    country_code: "st",
    phone_mask: "239-99-99999",
  },
  {
    name: "Saudi Arabia (المملكة العربية السعودية)",
    phone_code: "966",
    country_code: "sa",
    phone_mask: "966-9-9999-9999",
  },
  {
    name: "Senegal (Sénégal)",
    phone_code: "221",
    country_code: "sn",
    phone_mask: "221-99-999-9999",
  },
  {
    name: "Serbia (Србија)",
    phone_code: "381",
    country_code: "rs",
    phone_mask: "381-99-999-9999",
  },
  {
    name: "Seychelles",
    phone_code: "248",
    country_code: "sc",
    phone_mask: "248-9-999-999",
  },
  {
    name: "Sierra Leone",
    phone_code: "232",
    country_code: "sl",
    phone_mask: "232-99-999999",
  },
  {
    name: "Singapore",
    phone_code: "65",
    country_code: "sg",
    phone_mask: "65-9999-9999",
  },
  {
    name: "Slovakia (Slovensko)",
    phone_code: "421",
    country_code: "sk",
    phone_mask: "421(999) 999-999",
  },
  {
    name: "Slovenia (Slovenija)",
    phone_code: "386",
    country_code: "si",
    phone_mask: "386-99-999-999",
  },
  {
    name: "Solomon Islands",
    phone_code: "677",
    country_code: "sb",
    phone_mask: "677-999-9999",
  },
  {
    name: "Somalia (Soomaaliya)",
    phone_code: "252",
    country_code: "so",
    phone_mask: "252-99-999-999",
  },
  {
    name: "South Africa",
    phone_code: "27",
    country_code: "za",
    phone_mask: "27-99-999-9999",
  },
  {
    name: "South Korea (대한민국)",
    phone_code: "82",
    country_code: "kr",
    phone_mask: "82-99-9999-9999",
  },
  {
    name: "South Sudan (جنوب السودان)",
    phone_code: "211",
    country_code: "ss",
    phone_mask: "211-99-999-9999",
  },
  {
    name: "Spain (España)",
    phone_code: "34",
    country_code: "es",
    phone_mask: "34(999) 999-999",
  },
  {
    name: "Sri Lanka (ශ්‍රී ලංකාව)",
    phone_code: "94",
    country_code: "lk",
    phone_mask: "94-99-999-9999",
  },
  {
    name: "Sudan (السودان)",
    phone_code: "249",
    country_code: "sd",
    phone_mask: "249-99-999-9999",
  },
  {
    name: "Suriname",
    phone_code: "597",
    country_code: "sr",
    phone_mask: "597-999-9999",
  },
  {
    name: "Swaziland",
    phone_code: "268",
    country_code: "sz",
    phone_mask: "268-99-99-9999",
  },
  {
    name: "Sweden (Sverige)",
    phone_code: "46",
    country_code: "se",
    phone_mask: "46-99-999-9999",
  },
  {
    name: "Switzerland (Schweiz)",
    phone_code: "41",
    country_code: "ch",
    phone_mask: "41-99-999-9999",
  },
  {
    name: "Syria (سوريا)",
    phone_code: "963",
    country_code: "sy",
    phone_mask: "963-99-9999-999",
  },
  {
    name: "Taiwan (台灣)",
    phone_code: "886",
    country_code: "tw",
    phone_mask: "886-9999-9999",
  },
  {
    name: "Tajikistan",
    phone_code: "992",
    country_code: "tj",
    phone_mask: "992-99-999-9999",
  },
  {
    name: "Tanzania",
    phone_code: "255",
    country_code: "tz",
    phone_mask: "255-99-999-9999",
  },
  {
    name: "Thailand (ไทย)",
    phone_code: "66",
    country_code: "th",
    phone_mask: "66-99-999-9999",
  },
  {
    name: "Togo",
    phone_code: "228",
    country_code: "tg",
    phone_mask: "228-99-999-999",
  },
  {
    name: "Tonga",
    phone_code: "676",
    country_code: "to",
    phone_mask: "676-99999",
  },
  {
    name: "Trinidad and Tobago",
    phone_code: "1 (868)",
    country_code: "tt",
    phone_mask: "1 (868)999-9999",
  },
  {
    name: "Tunisia (تونس)",
    phone_code: "216",
    country_code: "tn",
    phone_mask: "216-99-999-999",
  },
  {
    name: "Turkey (Türkiye)",
    phone_code: "90",
    country_code: "tr",
    phone_mask: "90(999) 999-9999",
  },
  {
    name: "Turkmenistan",
    phone_code: "993",
    country_code: "tm",
    phone_mask: "993-9-999-9999",
  },
  {
    name: "Tuvalu",
    phone_code: "688",
    country_code: "tv",
    phone_mask: "688-999999",
  },
  {
    name: "Uganda",
    phone_code: "256",
    country_code: "ug",
    phone_mask: "256(999) 999-999",
  },
  {
    name: "Ukraine (Україна)",
    phone_code: "380",
    country_code: "ua",
    phone_mask: "380(99) 999-99-99",
  },
  {
    name: "United Arab Emirates (الإمارات العربية المتحدة)",
    phone_code: "971",
    country_code: "ae",
    phone_mask: "971-99-999-9999",
  },
  {
    name: "United Kingdom",
    phone_code: "44",
    country_code: "gb",
    phone_mask: "44-99-9999-99999",
  },
  {
    name: "USA",
    phone_code: "1",
    country_code: "us",
    phone_mask: "1(999) 999-9999",
  },
  {
    name: "Uruguay",
    phone_code: "598",
    country_code: "uy",
    phone_mask: "598-9-999-99-99",
  },
  {
    name: "Uzbekistan (Oʻzbekiston)",
    phone_code: "998",
    country_code: "uz",
    phone_mask: "998-99-999-9999",
  },
  {
    name: "Vanuatu",
    phone_code: "678",
    country_code: "vu",
    phone_mask: "678-99-99999",
  },
  {
    name: "Vatican City (Città del Vaticano)",
    phone_code: "39",
    country_code: "va",
    phone_mask: "39-9-999-99999",
  },
  {
    name: "Venezuela",
    phone_code: "58",
    country_code: "ve",
    phone_mask: "58(999) 999-9999",
  },
  {
    name: "Vietnam (Việt Nam)",
    phone_code: "84",
    country_code: "vn",
    phone_mask: "84-99-9999-999",
  },
  {
    name: "Yemen (اليمن)",
    phone_code: "967",
    country_code: "ye",
    phone_mask: "967-9-999-999",
  },
  {
    name: "Zambia",
    phone_code: "260",
    country_code: "zm",
    phone_mask: "260-99-999-9999",
  },
  {
    name: "Zimbabwe",
    phone_code: "263",
    country_code: "zw",
    phone_mask: "263-9-999999",
  },
];
// Функция для создания простого кода страны
function createSimpleCountryCode(parentIdorClass) {
  const elements = document.querySelectorAll(
    parentIdorClass + " .middle-phone-input"
  );
  // Ищем все элементы с классом "middle-phone-input" в родительском элементе с заданным ID или классом
  document
    .querySelectorAll(parentIdorClass + " .middle-phone-input")
    .forEach(function (elem) {
      let thisBlock = elem,
        countryCode = "ru",
        countryCallingCode = "+7";
      // Получаем значение cookie с кодом страны и кодом вызова страны
      let countryCodeCookie = getCookie("country_code");
      if (countryCodeCookie) {
        // Если cookie существует, разбиваем его на две части и получаем код страны и код вызова страны
        const countryCodeCookieArr = countryCodeCookie.split(":");
        countryCode = countryCodeCookieArr[0];
        countryCallingCode = countryCodeCookieArr[1];
        // Устанавливаем код страны и код вызова страны для текущего элемента
        setCountryCode(
          thisBlock,
          countryCode.toLowerCase(),
          countryCallingCode
        );
      } else {
        // Если cookie не существует, отправляем AJAX-запрос на ipapi.co для получения информации о местоположении пользователя
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipapi.co/json/", false);
        xhr.onload = function () {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            countryCode = response.country_code;
            countryCallingCode = response.country_calling_code;
            countryCodeCookie = countryCode + ":" + countryCallingCode;
            // Устанавливаем cookie с кодом страны и кодом вызова страны
            setCookie("country_code", countryCodeCookie, {
              secure: true,
              "max-age": 600,
            });
          } else {
            // Если запрос не удался, устанавливаем код страны и код вызова страны по умолчанию
            countryCode = "ru";
            countryCallingCode = "+7";
          }
        };
        xhr.send();
        // Устанавливаем код страны и код вызова страны для текущего элемента
        setCountryCode(
          thisBlock,
          countryCode.toLowerCase(),
          countryCallingCode
        );
      }
    });
}
createSimpleCountryCode(".callback-quiz-form");
createSimpleCountryCode(".callback-banner-form");
createSimpleCountryCode(".callback-popup-form");

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
  };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}

// Функция устанавливает код страны и код звонка этой страны для блока с телефоном
function setCountryCode(thisBlock, countryCode, countryCallingCode) {
  // Если передан "nocookie", то берем код языка из html, иначе используем переданный код страны
  if (countryCode == "nocookie") {
    countryCode =
      document.querySelector("html").getAttribute("lang") == "en" ? "gb" : "ru";
  }
  // Добавляем обработчик клика для блока ввода телефона, который остановит всплытие события
  thisBlock.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  // Находим все элементы со спанами, отвечающими за флаги стран, и меняем класс на переданный код страны
  thisBlock
    .querySelectorAll(".middle-country-flag span")
    .forEach(function (element) {
      element.classList.remove(...element.classList);
      element.classList.toggle(countryCode);
    });
  // Находим все элементы со спанами, отвечающими за код звонка страны, и меняем текст на переданный код звонка
  thisBlock
    .querySelectorAll(".middle-country-code .middle-dial-code span")
    .forEach(function (element) {
      element.textContent = countryCallingCode;
    });
  // Добавляем обработчик клика на блок, отвечающий за код звонка, который открывает и закрывает выпадающий список кодов стран
  thisBlock
    .querySelector(".middle-country-code")
    .addEventListener("click", function () {
      if (!thisBlock.classList.contains("open")) {
        thisBlock.classList.remove("open");
      }
      thisBlock.classList.toggle("open");
    });
  // Получаем список стран из HTML-кода
  let countriesList = thisBlock.querySelector("ul");
  // Проходим циклом по объекту всех стран
  for (let countryCodeObjKey in allCoundtiesObj) {
    // Получаем название страны
    let name = allCoundtiesObj[countryCodeObjKey]["name"];
    // Если в названии есть скобки, убираем их и все, что идет после
    if (name.indexOf("(") > 0) {
      name = name.split("(")[0];
    }
    // Получаем код телефона и код страны для текущей страны
    let phone_code = allCoundtiesObj[countryCodeObjKey]["phone_code"];
    let country_code = allCoundtiesObj[countryCodeObjKey]["country_code"];
    // Получаем маску телефона для текущей страны
    let phone_mask = allCoundtiesObj[countryCodeObjKey]["phone_mask"];
    // Формируем HTML-код для текущей страны
    let resultStr = '<li class="middle-countries-item">';
    resultStr += '<div class="middle-country-flag-item">';
    resultStr += '<span class="' + country_code + '"></span></div>';
    resultStr += '<span class="middle-code" ';
    resultStr += 'data-code="' + phone_code + '" ';
    resultStr += 'data-mask="' + phone_mask + '">';
    resultStr += name + " +" + phone_code + "</span></li>";
    // Добавляем HTML-код для текущей страны в список стран
    countriesList.insertAdjacentHTML("beforeend", resultStr);
  }
  // Получаем маску телефона для выбранной страны
  let placeholder = thisBlock.querySelector(
    ".middle-country-flag-item span." + countryCode
  ).parentElement.nextElementSibling.dataset.mask;
  // Получаем код телефона для выбранной страны
  let dataCode = thisBlock.querySelector(
    ".middle-country-flag-item span." + countryCode
  ).parentElement.nextElementSibling.dataset.code;
  // Удаляем код телефона из маски
  placeholder = placeholder.split(dataCode)[1];
  // Если первый символ маски является знаком минус, удаляем его
  if (placeholder[0] == "-") {
    placeholder = placeholder.replace(/^-/, "");
  }
  // Ищем input и вставляем в него полученное значение placeholder
  thisBlock
    .querySelector('input[name="phone"]')
    .setAttribute("placeholder", placeholder);
  // Найти все элементы на странице с классом "middle-countries-item" внутри блока с классом "thisBlock"
  thisBlock
    .querySelectorAll(".middle-countries-item")
    // Для каждого элемента добавить слушатель события клика
    .forEach(function (element) {
      element.addEventListener("click", function () {
        // Получить значение атрибута "class" элемента "middle-country-flag-item span" и сохранить его в переменной "dataFlag"
        let dataFlag = this.querySelector(
          ".middle-country-flag-item span"
        ).getAttribute("class");
        // Получить значение атрибута "data-code" элемента "middle-code" и сохранить его в переменной "code"
        let code = this.querySelector(".middle-code").dataset.code;
        // Для всех элементов на странице с классом "middle-country-flag" удалить все текущие классы и добавить новый класс "dataFlag"
        thisBlock
          .querySelectorAll(".middle-country-flag span")
          .forEach(function (element) {
            element.classList.remove(...element.classList);
            element.classList.toggle(dataFlag);
          });
        // Для всех элементов на странице с классом "middle-country-code" обновить текстовое содержимое элементов с классом "middle-dial-code span", добавив к тексту значения "code"
        thisBlock
          .querySelectorAll(".middle-country-code .middle-dial-code span")
          .forEach(function (element) {
            element.textContent = "+" + code;
          });
        // Получить значение атрибута "data-mask" элемента "middle-code" и сохранить его в переменной "placeholder"
        let placeholder = this.querySelector(".middle-code").dataset.mask;
        // Разбить значение "placeholder" на две части, используя значение "code" в качестве разделителя, и сохранить вторую часть в переменной "placeholder"
        placeholder = placeholder.split(code)[1];
        // Если значение "placeholder" начинается с дефиса, удалить его
        if (placeholder[0] == "-") {
          placeholder = placeholder.replace(/^-/, "");
        }
        // Очистить значение поля ввода "phone"
        thisBlock.querySelector('input[name="phone"]').value = "";
        // Установить значение атрибута "placeholder" поля ввода "phone" равным значению "placeholder"
        thisBlock
          .querySelector('input[name="phone"]')
          .setAttribute("placeholder", placeholder);
      });
    });
  // Добавить слушатель события "focus" на элемент с атрибутом "name" равным "phone" внутри блока с классом "thisBlock"
  thisBlock
    .querySelector('input[name="phone"]')
    .addEventListener("focus", function (event) {
      // Получить значение атрибута "placeholder" элемента и сохранить его в переменной "mask"
      let mask = this.getAttribute("placeholder");
      // Если первый символ значения "mask" равен открывающей скобке и значение поля ввода "phone" пустое, установить значение поля ввода "phone" равным открывающей скобке
      if (mask[0] == "(" && this.value.length == 0) {
        this.value = "(";
      }
    });
  // Добавляем обработчик ввода данных в поле ввода телефона
  thisBlock
    .querySelector('input[name="phone"]')
    .addEventListener("input", function (event) {
      // Отменяем стандартное поведение события ввода данных
      event.preventDefault();
      // Получаем введенный пользователем символ
      let originalEvent = event.data;
      // Если нажата клавиша Backspace (код 8)...
      if (event.keyCode == 8) {
        // ...возвращаем значение поля ввода телефона к начальному состоянию
        this.value = thisVal.slice(0, maskLength);
        return;
      }
      // Получаем маску для ввода номера телефона
      let mask = this.getAttribute("placeholder");
      // Получаем длину маски
      let maskLength = mask.length;
      // Получаем текущее значение поля ввода телефона
      let thisVal = this.value;
      // Получаем длину текущего значения поля ввода телефона
      let valLength = thisVal.length;
      // Если маска начинается с открывающейся скобки и длина значения поля ввода телефона равна нулю...
      if (mask[0] == "(" && valLength == 0) {
        // ...вставляем открывающуюся скобку
        this.value = "(";
      }
      // Если длина маски меньше длины текущего значения поля ввода телефона...
      if (maskLength < valLength) {
        // ...возвращаем значение поля ввода телефона к начальному состоянию
        this.value = thisVal.slice(0, maskLength);
        return;
      }
      // Если введенный символ не является цифрой...
      if (isNaN(1 * originalEvent)) {
        // ...удаляем последний введенный символ
        this.value = thisVal.slice(0, valLength - 1);
      }
      // Если следующий символ маски после текущего символа равен закрывающейся скобке и введенный символ не пустой...
      if (mask[valLength] == ")" && originalEvent) {
        // ...добавляем закрывающуюся скобку
        this.value = this.value + ")";
      }
      // Если следующий символ маски после текущего символа равен дефису и введенный символ не пустой...
      if (mask[valLength] == "-" && originalEvent) {
        // ...добавляем дефис
        this.value = this.value + "-";
      }
      // Если следующий символ маски после текущего символа равен пробелу и введенный символ не пустой...
      if (mask[valLength + 1] == " " && originalEvent) {
        // ...добавляем пробел
        this.value = this.value + " ";
      }
    });
}

// Подготовка данных к отправке формы
const globalHtmlLang = document.documentElement.lang;
const sendFormButtons = document.querySelectorAll(
  ".callback-banner-form-button"
);
sendFormButtons.forEach(function (sendFormButton) {
  sendFormButton.addEventListener("click", function (event) {
    event.preventDefault();
    let executeOnceFlag = true; // Флаг для проверки, запускалась ли функция уже один раз

    let parentForm = this.closest("form");
    let thisButton = this;

    // Проверяем введенные пользователем данные в форме
    if (checkInput(parentForm)) {
      return;
    }
    // Получаем код страны из формы
    let countryCode = parentForm.querySelector(
      ".middle-dial-code span"
    ).textContent;

    // Если в коде страны нет знака "+", перезагружаем страницу
    if (countryCode.indexOf("+") < 0) {
      window.location.reload();
    }

    // Получаем заголовок формы и другие данные для отправки на сервер
    let formTitle = parentForm.getAttribute("data-title");
    let siteUrl = "elit.ae";
    let lang = globalHtmlLang;
    let page = window.location.href;
    let userName = "";
    let quizInfo = "";
    let inputName = parentForm.querySelector('input[name="name"]');
    if (inputName) {
      userName = inputName.value;
    }
    let userPhone =
      String(countryCode) +
      String(parentForm.querySelector('input[name="phone"]').value);
    let userIp = "00.00.000.000";
    let intent = "";
    let message = "";

    // Создаем строку с деталями заказа
    let orderDetails = userName + ":" + userPhone;
    // Сохраняем детали заказа в cookie с настройками безопасности и временем жизни 10 минут
    document.cookie =
      "order_details=" + orderDetails + "; secure; max-age=600;";
    // Если не указан код страны, перезагружаем страницу
    if (!countryCode) {
      location.reload();
    }
    // Если есть метатег "ip", сохраняем его значение
    if (document.querySelector('meta[name="ip"]')) {
      userIp = document
        .querySelector('meta[name="ip"]')
        .getAttribute("content");
    }
    // Если на форме есть поле "message", сохраняем его значение
    if (parentForm.querySelector('input[name="message"]')) {
      message = parentForm.querySelector('input[name="message"]').value;
    }
    // Если текущий элемент имеет класс "quiz-button", сохраняем ответы на вопросы квиза
    if (this.classList.contains("quiz-button")) {
      document
        .querySelectorAll(".section-quiz .quiz-box.selected span")
        .forEach(function (element) {
          let dataQuestion = element
            .closest(".quiz-block")
            .getAttribute("data-question");
          dataQuestion =
            dataQuestion.charAt(0).toUpperCase() + dataQuestion.slice(1);
          quizInfo += dataQuestion + ": " + element.textContent + ", ";
        });
      quizInfo = quizInfo.slice(0, -2);
    }
    let postData = {
      "form-title": formTitle,
      name: userName,
      county_code: countryCode,
      phone: userPhone,
      userIp: userIp,
      lang: lang,
      siteUrl: siteUrl,
      page: page,
      message: message,
      intent: intent,
      quizInfo: quizInfo,
    };
    console.log(postData);
  });
});

// Функция для проверки введенных данных в форме
function checkInput(parentForm) {
  let allInput = parentForm.querySelectorAll("input");

  allInput.forEach(function (input) {
    if (input.value == "" && input.getAttribute("name") != "message") {
      input.classList.add("error");
    }

    if (input.getAttribute("name") == "phone") {
      const re = /\d/gi;
      let mask = input.getAttribute("placeholder").replace(re, "1"),
        phone = input.value.replace(re, "1");
      if (mask != phone) {
        input.classList.add("error");
      }
    }
  });
  if (parentForm.querySelectorAll(".error").length > 0) {
    return true;
  } else {
    return false;
  }
}
const inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
  input.addEventListener("click", function () {
    if (this.classList.contains("error")) {
      this.classList.remove("error");
    }
  });
});
