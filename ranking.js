{
  var svgRanking;

  //functions for scaling the data to the x and y axes, set in makeBarChart
  var xRanking;
  var yRanking;

  var xAxis;
  var yAxis;

  var marginRanking, widthRanking, heightRanking;

  var myRect;

  var myData;

  var category = "Gesamtwertung"; //for one of th five main categories (filter), initial is main score

  //var cityDetails= [{"name": "Aachen", "url": "https://de.wikipedia.org/wiki/Aachen", "name_url": "Aachen", "lat_lng": {"lat": "50.776666666667", "lng": "6.0836111111111"}, "land": "Nordrhein-Westfalen", "kreis": "St\u00e4dteregion Aachen", "height": "175\u00a0m \u00fc.\u00a0NHN\n", "size": "160,85\u00a0km2\n", "inhabitants": "247.380 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1538\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "765 Aachen, erste urkundliche Erw\u00e4hnung als \u201eAquis villa\u201c", "year": "765"}, "founded": {"txt": "1166 Aachen", "year": "1166"}}, {"name": "Augsburg", "url": "https://de.wikipedia.org/wiki/Augsburg", "name_url": "Augsburg", "lat_lng": {"lat": "48.371666666667", "lng": "10.898333333333"}, "land": "Bayern", "height": "494\u00a0m \u00fc.\u00a0NHN\n", "size": "146,84\u00a0km2\n", "inhabitants": "295.135 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2010\u00a0Einwohner je km2\n", "founded": {"txt": "15 v. Chr. Augsburg, Gr\u00fcndung als r\u00f6misches Legionslager (lat. Augusta Vindelicorum)", "year": "15 v. Chr."}}, {"name": "Bergisch Gladbach", "url": "https://de.wikipedia.org/wiki/Bergisch_Gladbach", "name_url": "Bergisch_Gladbach", "lat_lng": {"lat": "50.991666666667", "lng": "7.1361111111111"}, "land": "Nordrhein-Westfalen", "height": "100\u00a0m \u00fc.\u00a0NHN\n", "size": "83,09\u00a0km2\n", "inhabitants": "111.966 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1348\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1271 Bergisch Gladbach, erste urkundliche Erw\u00e4hnung", "year": "1271"}, "founded": {"txt": "1856 Bergisch Gladbach", "year": "1856"}}, {"name": "Berlin", "url": "https://de.wikipedia.org/wiki/Berlin", "name_url": "Berlin",  "lat_lng": {"lat": "52.520008", "lng": "13.404954"}, "size": "891,68\u00a0km2\n", "inhabitants":"3.644.826 ", "founded": {"txt": "um 1250 Berlin", "year": "um 1250 "}}, {"name": "Bielefeld", "url": "https://de.wikipedia.org/wiki/Bielefeld", "name_url": "Bielefeld", "lat_lng": {"lat": "52.02042", "lng": "8.53188"}, "land": "Nordrhein-Westfalen", "height": "118\u00a0m \u00fc.\u00a0NHN\n", "size": "258,82\u00a0km2\n", "inhabitants": "333.786 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1290\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1214 Bielefeld, erste urkundliche Erw\u00e4hnung", "year": "1214 "}}, {"name": "Bochum", "url": "https://de.wikipedia.org/wiki/Bochum", "name_url": "Bochum", "lat_lng": {"lat": "51.4825", "lng": "7.2169444444444"}, "land": "Nordrhein-Westfalen", "height": "100\u00a0m \u00fc.\u00a0NHN\n", "size": "145,66\u00a0km2\n", "inhabitants": "364.628 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2503\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1041 Bochum, erste urkundliche Erw\u00e4hnung als \u201eCofbuokheim\u201c", "year": "1041"}}, {"name": "Bonn", "url": "https://de.wikipedia.org/wiki/Bonn", "name_url": "Bonn", "lat_lng": {"lat": "50.733991666667", "lng": "7.0998138888889"}, "land": "Nordrhein-Westfalen", "height": "60\u00a0m \u00fc.\u00a0NHN\n", "size": "141,06\u00a0km2\n", "inhabitants": "327.258 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2320\u00a0Einwohner je km2\n", "founded": {"txt": "12 v. Chr. Bonn, r\u00f6mische Gr\u00fcndung eines Erkundungslagers im Bereich einer ubischen Siedlung (lat. Bonna)", "year": "12 v. Chr."}}, {"name": "Bottrop", "url": "https://de.wikipedia.org/wiki/Bottrop", "name_url": "Bottrop", "lat_lng": {"lat": "51.524722222222", "lng": "6.9227777777778"}, "land": "Nordrhein-Westfalen", "height": "55\u00a0m \u00fc.\u00a0NHN\n", "size": "100,61\u00a0km2\n", "inhabitants": "117.383 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1167\u00a0Einwohner je km2\n"}, {"name": "Braunschweig", "url": "https://de.wikipedia.org/wiki/Braunschweig", "name_url": "Braunschweig", "lat_lng": {"lat": "52.269166666667", "lng": "10.521111111111"}, "land": "Niedersachsen", "height": "75\u00a0m \u00fc.\u00a0NHN\n", "size": "192,18\u00a0km2\n", "inhabitants": "248.292 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1292\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1031 Braunschweig, erste urkundliche Erw\u00e4hnung als \u201eBrunesguik\u201c (der Stadtgr\u00fcndungssage nach soll Braunschweig aber bereits 861 gegr\u00fcndet worden sein)", "year": "1031"}}, {"name": "Bremen", "url": "https://de.wikipedia.org/wiki/Bremen", "name_url": "Bremen", "lat_lng": {"lat": "53.075877777778", "lng": "8.8073111111111"}, "land": "Bremen", "height": "11\u00a0m \u00fc.\u00a0NHN\n", "size": "325,56\u00a0km2\n", "inhabitants": "569.352 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1749\u00a0Einwohner je km2\n", "founded": {"txt": "782 Bremen", "year": "782"}}, {"name": "Bremerhaven", "url": "https://de.wikipedia.org/wiki/Bremerhaven", "name_url": "Bremerhaven", "lat_lng": {"lat": "53.541938888889", "lng": "8.5780388888889"}, "land": "Bremen", "height": "2\u00a0m \u00fc.\u00a0NHN\n", "size": "93,82\u00a0km2\n", "inhabitants": "113.634 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1211\u00a0Einwohner je km2\n", "founded": {"txt": "1827 Bremerhaven (Stadtrechte 1851)", "year": "1827"}}, {"name": "Chemnitz", "url": "https://de.wikipedia.org/wiki/Chemnitz", "name_url": "Chemnitz", "lat_lng": {"lat": "50.832222222222", "lng": "12.924166666667"}, "land": "Sachsen", "height": "298\u00a0m \u00fc.\u00a0NHN\n", "size": "221,05\u00a0km2\n", "inhabitants": "247.237 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1118\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1143 Chemnitz, erste urkundliche Erw\u00e4hnung", "year": "1143"}}, {"name": "Cottbus", "url": "https://de.wikipedia.org/wiki/Cottbus", "name_url": "Cottbus", "lat_lng": {"lat": "51.760555555556", "lng": "14.334166666667"}, "land": "Brandenburg", "height": "75\u00a0m \u00fc.\u00a0NHN\n", "size": "165,15\u00a0km2\n", "inhabitants": "100.219 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "607\u00a0Einwohner je km2\n", "founded": {"txt": "1357 Cottbus", "year": "1357"}}, {"name": "Darmstadt", "url": "https://de.wikipedia.org/wiki/Darmstadt", "name_url": "Darmstadt", "lat_lng": {"lat": "49.872833333333", "lng": "8.6512222222222"}, "land": "Hessen", "height": "144\u00a0m \u00fc.\u00a0NHN\n", "size": "122,09\u00a0km2\n", "inhabitants": "159.207 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1304\u00a0Einwohner je km2\n"}, {"name": "Dortmund", "url": "https://de.wikipedia.org/wiki/Dortmund", "name_url": "Dortmund", "lat_lng": {"lat": "51.514166666667", "lng": "7.4638888888889"}, "land": "Nordrhein-Westfalen", "height": "86\u00a0m \u00fc.\u00a0NHN\n", "size": "280,71\u00a0km2\n", "inhabitants": "587.010 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2091\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "882 Dortmund, erste urkundliche Erw\u00e4hnung als \u201eThrotmanni\u201c", "year": "882"}}, {"name": "Dresden", "url": "https://de.wikipedia.org/wiki/Dresden", "name_url": "Dresden", "lat_lng": {"lat": "51.049259", "lng": "13.73836"}, "land": "Sachsen", "height": "112\u00a0m \u00fc.\u00a0NHN\n", "size": "328,48\u00a0km2\n", "inhabitants": "554.649 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1689\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1206 Dresden, erste urkundliche Erw\u00e4hnung", "year": "1206 "}}, {"name": "Duisburg", "url": "https://de.wikipedia.org/wiki/Duisburg", "name_url": "Duisburg", "lat_lng": {"lat": "51.435147222222", "lng": "6.7626916666667"}, "land": "Nordrhein-Westfalen", "height": "33\u00a0m \u00fc.\u00a0NHN\n", "size": "232,8\u00a0km2\n", "inhabitants": "498.590 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2142\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "883 Duisburg, erste urkundliche Erw\u00e4hnung, m\u00f6glicherweise bereits im 1. Jahrhundert n. Chr. ein rechtsrheinischer r\u00f6mischer Vorpfosten namens Dispargum gegen\u00fcber dem linksrheinischen r\u00f6mischen Auxiliarlager Asciburgium.", "year": "883"}}, {"name": "D\u00fcsseldorf", "url": "https://de.wikipedia.org/wiki/D%C3%BCsseldorf", "name_url": "D%C3%BCsseldorf", "lat_lng": {"lat": "51.225555555556", "lng": "6.7827777777778"}, "land": "Nordrhein-Westfalen", "height": "38\u00a0m \u00fc.\u00a0NHN\n", "size": "217,41\u00a0km2\n", "inhabitants": "619.294 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2848\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1135 D\u00fcsseldorf, erste urkundliche Erw\u00e4hnung (Verleihung der Stadtrechte 1288)", "year": "1135 "}, "founded": {"txt": "1288 D\u00fcsseldorf (bereits 1135 ersterw\u00e4hnt)", "year": "1288 "}}, {"name": "Erfurt", "url": "https://de.wikipedia.org/wiki/Erfurt", "name_url": "Erfurt", "lat_lng": {"lat": "50.978055555556", "lng": "11.029166666667"}, "land": "Th\u00fcringen", "height": "194\u00a0m \u00fc.\u00a0NHN\n", "size": "269,91\u00a0km2\n", "inhabitants": "213.699 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "792\u00a0Einwohner je km2\n", "founded": {"txt": "um 1120 Erfurt (Urkunden sprechen erstmals von \u201eB\u00fcrgern\u201c)", "year": "1120"}}, {"name": "Erlangen", "url": "https://de.wikipedia.org/wiki/Erlangen", "name_url": "Erlangen", "lat_lng": {"lat": "49.596361111111", "lng": "11.004311111111"}, "land": "Bayern", "height": "279\u00a0m \u00fc.\u00a0NHN\n", "size": "76,95\u00a0km2\n", "inhabitants": "111.962 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1455\u00a0Einwohner je km2\n", "founded": {"txt": "1686 Neustadt Erlangen, Gr\u00fcndung als eigenst\u00e4ndige Hugenottenstadt, seit 1701 Christian-Erlang, 1812 Zusammenlegung mit der Altstadt zum heutigen Erlangen", "year": "1686"}}, {"name": "Essen", "url": "https://de.wikipedia.org/wiki/Essen", "name_url": "Essen", "lat_lng": {"lat": "51.458069444444", "lng": "7.0147611111111"}, "land": "Nordrhein-Westfalen", "height": "116\u00a0m \u00fc.\u00a0NHN\n", "size": "210,34\u00a0km2\n", "inhabitants": "583.109 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2772\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1003 Essen, erste urkundliche Erw\u00e4hnung als Stadt", "year": "1003 "}}, {"name": "Frankfurt am Main", "url": "https://de.wikipedia.org/wiki/Frankfurt_am_Main", "name_url": "Frankfurt_am_Main", "lat_lng": {"lat": "50.110555555556", "lng": "8.6822222222222"}, "land": "Hessen", "height": "112\u00a0m \u00fc.\u00a0NHN\n", "size": "248,31\u00a0km2\n", "inhabitants": "753.056 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "3033\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "794 Frankfurt am Main, erste urkundliche Erw\u00e4hnung anl\u00e4sslich der von Karl dem Gro\u00dfen einberufenen Synode von Frankfurt", "year": "794"}}, {"name": "Freiburg im Breisgau", "url": "https://de.wikipedia.org/wiki/Freiburg_im_Breisgau", "name_url": "Freiburg_im_Breisgau", "lat_lng": {"lat": "47.994828", "lng": "7.849881"}, "land": "Baden-W\u00fcrttemberg", "height": "278\u00a0m \u00fc.\u00a0NHN\n", "size": "153,06\u00a0km2\n", "inhabitants": "230.241 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1504\u00a0Einwohner je km2\n"}, {"name": "F\u00fcrth", "url": "https://de.wikipedia.org/wiki/F%C3%BCrth", "name_url": "F%C3%BCrth", "lat_lng": {"lat": "49.478333333333", "lng": "10.990277777778"}, "land": "Bayern", "height": "294\u00a0m \u00fc.\u00a0NHN\n", "size": "63,35\u00a0km2\n", "inhabitants": "127.748 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2017\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1007 F\u00fcrth, J\u00fcterbog, erste urkundliche Erw\u00e4hnung", "year": "1007"}}, {"name": "Gelsenkirchen", "url": "https://de.wikipedia.org/wiki/Gelsenkirchen", "name_url": "Gelsenkirchen", "lat_lng": {"lat": "51.511111111111", "lng": "7.1005555555556"}, "land": "Nordrhein-Westfalen", "height": "48\u00a0m \u00fc.\u00a0NHN\n", "size": "104,94\u00a0km2\n", "inhabitants": "260.654 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2484\u00a0Einwohner je km2\n", "founded": {"txt": "1875 Gelsenkirchen", "year": "1875"}}, {"name": "G\u00f6ttingen", "url": "https://de.wikipedia.org/wiki/G%C3%B6ttingen", "name_url": "G%C3%B6ttingen", "lat_lng": {"lat": "51.533888888889", "lng": "9.9355555555556"}, "land": "Niedersachsen", "kreis": "G\u00f6ttingen", "height": "150\u00a0m \u00fc.\u00a0NHN\n", "size": "116,89\u00a0km2\n", "inhabitants": "119.801 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1025\u00a0Einwohner je km2\n"}, {"name": "G\u00fctersloh", "url": "https://de.wikipedia.org/wiki/G%C3%BCtersloh", "name_url": "G%C3%BCtersloh", "lat_lng": {"lat": "51.90607", "lng": "8.37855"}, "land": "Nordrhein-Westfalen", "height": "75\u00a0m \u00fc.\u00a0NHN\n", "size": "112,02\u00a0km2\n", "inhabitants": "100.194 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "894\u00a0Einwohner je km2\n"}, {"name": "Hagen", "url": "https://de.wikipedia.org/wiki/Hagen", "name_url": "Hagen", "lat_lng": {"lat": "51.359444444444", "lng": "7.475"}, "land": "Nordrhein-Westfalen", "height": "106\u00a0m \u00fc.\u00a0NHN\n", "size": "160,45\u00a0km2\n", "inhabitants": "188.814 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1177\u00a0Einwohner je km2\n"}, {"name": "Halle (Saale)", "url": "https://de.wikipedia.org/wiki/Halle_(Saale)", "name_url": "Halle_(Saale)", "lat_lng": {"lat": "51.482777777778", "lng": "11.97"}, "land": "Sachsen-Anhalt", "height": "88\u00a0m \u00fc.\u00a0NHN\n", "size": "135,02\u00a0km2\n", "inhabitants": "239.257 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1772\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "806 Halle (Saale), erste urkundliche Erw\u00e4hnung als \u201eHalla\u201c", "year": "806"}}, {"name": "Hamburg", "url": "https://de.wikipedia.org/wiki/Hamburg", "name_url": "Hamburg", "lat_lng": {"lat": "53.551086", "lng": "9.993682"}, "size":"755,22\u00a0km2\n", "inhabitants":"1.841.179 ", "first_mentioned": {"txt": "832 Hamburg, erste Erw\u00e4hnung des Ortes Hamburg", "year": "832"}}, {"name": "Hamm", "url": "https://de.wikipedia.org/wiki/Hamm", "name_url": "Hamm", "lat_lng": {"lat": "51.681069444444", "lng": "7.8171166666667"}, "land": "Nordrhein-Westfalen", "height": "63\u00a0m \u00fc.\u00a0NHN\n", "size": "226,43\u00a0km2\n", "inhabitants": "179.111 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "791\u00a0Einwohner je km2\n", "founded": {"txt": "1226 Hamm", "year": "1226 "}}, {"name": "Hannover", "url": "https://de.wikipedia.org/wiki/Hannover", "name_url": "Hannover", "lat_lng": {"lat": "52.374444444444", "lng": "9.7386111111111"}, "land": "Niedersachsen", "kreis": "Region Hannover", "height": "55\u00a0m \u00fc.\u00a0NHN\n", "size": "204,14\u00a0km2\n", "inhabitants": "538.068 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2636\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1150 Hannover, erste urkundliche Erw\u00e4hnung als \u201evicus Hanovere\u201c", "year": "1150"}}, {"name": "Heidelberg", "url": "https://de.wikipedia.org/wiki/Heidelberg", "name_url": "Heidelberg", "lat_lng": {"lat": "49.412222222222", "lng": "8.71"}, "land": "Baden-W\u00fcrttemberg", "height": "114\u00a0m \u00fc.\u00a0NHN\n", "size": "108,84\u00a0km2\n", "inhabitants": "160.355 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1473\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1196 Heidelberg, erste urkundliche Erw\u00e4hnung", "year": "1196 "}}, {"name": "Heilbronn", "url": "https://de.wikipedia.org/wiki/Heilbronn", "name_url": "Heilbronn", "lat_lng": {"lat": "49.141666666667", "lng": "9.2222222222222"}, "land": "Baden-W\u00fcrttemberg", "height": "157\u00a0m \u00fc.\u00a0NHN\n", "size": "99,88\u00a0km2\n", "inhabitants": "125.960 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1261\u00a0Einwohner je km2\n", "founded": {"txt": "1281 Heilbronn", "year": "1281 "}}, {"name": "Herne", "url": "https://de.wikipedia.org/wiki/Herne", "name_url": "Herne", "lat_lng": {"lat": "51.541944444444", "lng": "7.2238888888889"}, "land": "Nordrhein-Westfalen", "height": "65\u00a0m \u00fc.\u00a0NHN\n", "size": "51,42\u00a0km2\n", "inhabitants": "156.374 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "3041\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "um 880 Herne, erste urkundliche Erw\u00e4hnung als \u201eHaranni\u201c in einem Urbar des Klosters Werden", "year": "um 880 "}}, {"name": "Hildesheim", "url": "https://de.wikipedia.org/wiki/Hildesheim", "name_url": "Hildesheim", "lat_lng": {"lat": "52.15", "lng": "9.95"}, "land": "Niedersachsen", "kreis": "Hildesheim", "height": "81\u00a0m \u00fc.\u00a0NHN\n", "size": "92,18\u00a0km2\n", "inhabitants": "101.990 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1106\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "815 Hildesheim, erste urkundliche Erw\u00e4hnung", "year": "815 "}}, {"name": "Ingolstadt", "url": "https://de.wikipedia.org/wiki/Ingolstadt", "name_url": "Ingolstadt", "lat_lng": {"lat": "48.76415", "lng": "11.42434"}, "land": "Bayern", "height": "374\u00a0m \u00fc.\u00a0NHN\n", "size": "133,37\u00a0km2\n", "inhabitants": "136.981 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1027\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "806 Ingolstadt, erste urkundliche Erw\u00e4hnung als \u201eIngoldesstat\u201c", "year": "806 "}, "founded": {"txt": "1250 Ingolstadt", "year": "1250 "}}, {"name": "Jena", "url": "https://de.wikipedia.org/wiki/Jena", "name_url": "Jena", "lat_lng": {"lat": "50.927205555556", "lng": "11.586361111111"}, "land": "Th\u00fcringen", "height": "143\u00a0m \u00fc.\u00a0NHN\n", "size": "114,77\u00a0km2\n", "inhabitants": "111.407 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "971\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1182 Jena, erste urkundliche Erw\u00e4hnung", "year": "1182"}, "founded": {"txt": "1230 Jena", "year": "1230"}}, {"name": "Karlsruhe", "url": "https://de.wikipedia.org/wiki/Karlsruhe", "name_url": "Karlsruhe", "lat_lng": {"lat": "49.014", "lng": "8.4043"}, "land": "Baden-W\u00fcrttemberg", "height": "115\u00a0m \u00fc.\u00a0NHN\n", "size": "173,46\u00a0km2\n", "inhabitants": "313.092 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1805\u00a0Einwohner je km2\n", "founded": {"txt": "1715 Karlsruhe", "year": "1715"}}, {"name": "Kassel", "url": "https://de.wikipedia.org/wiki/Kassel", "name_url": "Kassel", "lat_lng": {"lat": "51.316666666667", "lng": "9.5"}, "land": "Hessen", "height": "167\u00a0m \u00fc.\u00a0NHN\n", "size": "106,78\u00a0km2\n", "inhabitants": "201.585 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1888\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "913 Kassel, erste urkundliche Erw\u00e4hnung als \u201eChassalla\u201c", "year": "913"}}, {"name": "Kiel", "url": "https://de.wikipedia.org/wiki/Kiel", "name_url": "Kiel", "lat_lng": {"lat": "54.32321", "lng": "10.14019"}, "land": "Schleswig-Holstein", "height": "5\u00a0m \u00fc.\u00a0NHN\n", "size": "118,65\u00a0km2\n", "inhabitants": "247.548 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2086\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1233 Kiel, erste urkundliche Erw\u00e4hnung", "year": "1233"}, "founded": {"txt": "1242 Kiel", "year": "1242"}}, {"name": "Koblenz", "url": "https://de.wikipedia.org/wiki/Koblenz", "name_url": "Koblenz", "lat_lng": {"lat": "50.356666666667", "lng": "7.5938888888889"}, "land": "Rheinland-Pfalz", "height": "73\u00a0m \u00fc.\u00a0NHN\n", "size": "105,13\u00a0km2\n", "inhabitants": "114.024 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1085\u00a0Einwohner je km2\n", "founded": {"txt": "9 v. Chr. Koblenz, r\u00f6mische Gr\u00fcndung (lat. Confluentes)", "year": "9 v. Chr."}}, {"name": "K\u00f6ln", "url": "https://de.wikipedia.org/wiki/K%C3%B6ln", "name_url": "K%C3%B6ln", "lat_lng": {"lat": "50.938055555556", "lng": "6.9569444444444"}, "land": "Nordrhein-Westfalen", "height": "53\u00a0m \u00fc.\u00a0NHN\n", "size": "405,02\u00a0km2\n", "inhabitants": "1.085.664 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2681\u00a0Einwohner je km2\n", "founded": {"txt": "50 K\u00f6ln, Erhebung zur r\u00f6mischen Kolonie (= Stadt r\u00f6mischen Rechts) Colonia Claudia Ara Agrippinensium (CCAA) der 19 v. Chr. (oder auch 38 v. Chr., wie noch manche meinen) gegr\u00fcndeten r\u00f6mischen Ubiersiedlung Oppidum Ubiorum", "year": "50"}}, {"name": "Krefeld", "url": "https://de.wikipedia.org/wiki/Krefeld", "name_url": "Krefeld", "lat_lng": {"lat": "51.336944444444", "lng": "6.5641666666667"}, "land": "Nordrhein-Westfalen", "height": "38\u00a0m \u00fc.\u00a0NHN\n", "size": "137,77\u00a0km2\n", "inhabitants": "227.020 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1648\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1105 Krefeld, erste urkundliche Erw\u00e4hnung als \u201eKrinvelde\u201c", "year": "1105 "}, "founded": {"txt": "1373 Krefeld, Ersterw\u00e4hnung 1105, verliehen durch Kaiser Karl IV.", "year": "1373"}}, {"name": "Leipzig", "url": "https://de.wikipedia.org/wiki/Leipzig", "name_url": "Leipzig", "lat_lng": {"lat": "51.340333333333", "lng": "12.37475"}, "land": "Sachsen", "height": "113\u00a0m \u00fc.\u00a0NHN\n", "size": "297,8\u00a0km2\n", "inhabitants": "587.857 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1974\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1015 Leipzig, erste urkundliche Erw\u00e4hnung als \u201eurbs Libzi\u201c", "year": "1015"}, "founded": {"txt": "1165 Leipzig", "year": "1165"}}, {"name": "Leverkusen", "url": "https://de.wikipedia.org/wiki/Leverkusen", "name_url": "Leverkusen", "lat_lng": {"lat": "51.033333333333", "lng": "6.9833333333333"}, "land": "Nordrhein-Westfalen", "height": "60\u00a0m \u00fc.\u00a0NHN\n", "size": "78,87\u00a0km2\n", "inhabitants": "163.838 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2077\u00a0Einwohner je km2\n", "founded": {"txt": "1930 Leverkusen wird am 1.\u00a0April 1930 aus der Stadt Wiesdorf und den Gemeinden Schlebusch, Steinb\u00fcchel und Rheindorf gebildet", "year": "1930"}}, {"name": "L\u00fcbeck", "url": "https://de.wikipedia.org/wiki/L%C3%BCbeck", "name_url": "L%C3%BCbeck", "lat_lng": {"lat": "53.866111111111", "lng": "10.683888888889"}, "land": "Schleswig-Holstein", "height": "13\u00a0m \u00fc.\u00a0NHN\n", "size": "214,21\u00a0km2\n", "inhabitants": "217.198 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1014\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1076 L\u00fcbeck, erste urkundliche Erw\u00e4hnung als \u201eLiubice\u201c (Stadtrecht 1160)", "year": "1076"}, "founded": {"txt": "1160 L\u00fcbeck erh\u00e4lt Soester Stadtrecht (Ersterw\u00e4hnung 1076)", "year": "1160 "}}, {"name": "Ludwigshafen am Rhein", "url": "https://de.wikipedia.org/wiki/Ludwigshafen_am_Rhein", "name_url": "Ludwigshafen_am_Rhein", "lat_lng": {"lat": "49.483055555556", "lng": "8.4477777777778"}, "land": "Rheinland-Pfalz", "height": "95\u00a0m \u00fc.\u00a0NHN\n", "size": "77,55\u00a0km2\n", "inhabitants": "171.061 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2206\u00a0Einwohner je km2\n", "founded": {"txt": "1853 Ludwigshafen am Rhein (Stadtrechte 1859)", "year": "1853"}}, {"name": "Magdeburg", "url": "https://de.wikipedia.org/wiki/Magdeburg", "name_url": "Magdeburg", "lat_lng": {"lat": "52.133333333333", "lng": "11.616666666667"}, "land": "Sachsen-Anhalt", "height": "55\u00a0m \u00fc.\u00a0NHN\n", "size": "201\u00a0km2\n", "inhabitants": "238.697 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1188\u00a0Einwohner je km2\n", "founded": {"txt": "805 Magdeburg, erstmals im Diedenhofener Kapitular Karls des Gro\u00dfen als Magadoburg urkundlich erw\u00e4hnt", "year": "805"}}, {"name": "Mainz", "url": "https://de.wikipedia.org/wiki/Mainz", "name_url": "Mainz", "lat_lng": {"lat": "50", "lng": "8.2711111111111"}, "land": "Rheinland-Pfalz", "height": "89\u00a0m \u00fc.\u00a0NHN\n", "size": "97,74\u00a0km2\n", "inhabitants": "217.118 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2221\u00a0Einwohner je km2\n", "founded": {"txt": "13 v. Chr. Mainz, r\u00f6mische Gr\u00fcndung (lat. Mogontiacum)", "year": "13 v. Chr."}}, {"name": "Mannheim", "url": "https://de.wikipedia.org/wiki/Mannheim", "name_url": "Mannheim", "lat_lng": {"lat": "49.487777777778", "lng": "8.4661111111111"}, "land": "Baden-W\u00fcrttemberg", "height": "97\u00a0m \u00fc.\u00a0NHN\n", "size": "144,96\u00a0km2\n", "inhabitants": "309.370 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2134\u00a0Einwohner je km2\n", "founded": {"txt": "1607 Mannheim, durch Kurf\u00fcrst Friedrich IV.", "year": "1607"}}, {"name": "Moers", "url": "https://de.wikipedia.org/wiki/Moers", "name_url": "Moers", "lat_lng": {"lat": "51.451666666667", "lng": "6.6263888888889"}, "land": "Nordrhein-Westfalen", "height": "30\u00a0m \u00fc.\u00a0NHN\n", "size": "67,68\u00a0km2\n", "inhabitants": "103.725 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1533\u00a0Einwohner je km2\n"}, {"name": "M\u00f6nchengladbach", "url": "https://de.wikipedia.org/wiki/M%C3%B6nchengladbach", "name_url": "M%C3%B6nchengladbach", "lat_lng": {"lat": "51.191111111111", "lng": "6.4419444444444"}, "land": "Nordrhein-Westfalen", "height": "70\u00a0m \u00fc.\u00a0NHN\n", "size": "170,47\u00a0km2\n", "inhabitants": "261.454 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1534\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "974 M\u00f6nchengladbach, erste urkundliche Erw\u00e4hnung", "year": "974"}, "founded": {"txt": "1364 M\u00f6nchengladbach", "year": "1364 "}}, {"name": "M\u00fclheim an der Ruhr", "url": "https://de.wikipedia.org/wiki/M%C3%BClheim_an_der_Ruhr", "name_url": "M%C3%BClheim_an_der_Ruhr", "lat_lng": {"lat": "51.433055555556", "lng": "6.8830555555556"}, "land": "Nordrhein-Westfalen", "height": "40\u00a0m \u00fc.\u00a0NHN\n", "size": "91,28\u00a0km2\n", "inhabitants": "170.880 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1872\u00a0Einwohner je km2\n", "founded": {"txt": "1808 M\u00fclheim an der Ruhr", "year": "1808 "}}, {"name": "M\u00fcnchen", "url": "https://de.wikipedia.org/wiki/M%C3%BCnchen", "name_url": "M%C3%BCnchen", "lat_lng": {"lat": "48.137222222222", "lng": "11.575555555556"}, "land": "Bayern", "height": "519\u00a0m \u00fc.\u00a0NHN\n", "size": "310,7\u00a0km2\n", "inhabitants": "1.471.508 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "4736\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1158 M\u00fcnchen, erste urkundliche Erw\u00e4hnung als \u201eforum apud Munichen\u201c im Augsburger Schied", "year": "1158"}, "founded": {"txt": "1175 M\u00fcnchen", "year": "1175"}}, {"name": "M\u00fcnster", "url": "https://de.wikipedia.org/wiki/M%C3%BCnster", "name_url": "M%C3%BCnster", "lat_lng": {"lat": "51.962944444444", "lng": "7.6286944444444"}, "land": "Nordrhein-Westfalen", "height": "60\u00a0m \u00fc.\u00a0NHN\n", "size": "303,28\u00a0km2\n", "inhabitants": "314.319 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1036\u00a0Einwohner je km2\n", "founded": {"txt": "um 1170 M\u00fcnster \u2013 offizielle Verleihung der Stadtrechte", "year": "um 1170 "}}, {"name": "Neuss", "url": "https://de.wikipedia.org/wiki/Neuss", "name_url": "Neuss", "lat_lng": {"lat": "51.198611111111", "lng": "6.6913888888889"}, "land": "Nordrhein-Westfalen", "height": "40\u00a0m \u00fc.\u00a0NHN\n", "size": "99,52\u00a0km2\n", "inhabitants": "153.796 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1545\u00a0Einwohner je km2\n", "founded": {"txt": "1190 Neuss", "year": "1190"}}, {"name": "N\u00fcrnberg", "url": "https://de.wikipedia.org/wiki/N%C3%BCrnberg", "name_url": "N%C3%BCrnberg", "lat_lng": {"lat": "49.455555555556", "lng": "11.078611111111"}, "land": "Bayern", "height": "309\u00a0m \u00fc.\u00a0NHN\n", "size": "186,38\u00a0km2\n", "inhabitants": "518.365 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2781\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1050 N\u00fcrnberg, erste urkundliche Erw\u00e4hnung", "year": "1050"}}, {"name": "Oberhausen", "url": "https://de.wikipedia.org/wiki/Oberhausen", "name_url": "Oberhausen", "lat_lng": {"lat": "51.470277777778", "lng": "6.8522222222222"}, "land": "Nordrhein-Westfalen", "height": "35\u00a0m \u00fc.\u00a0NHN\n", "size": "77,09\u00a0km2\n", "inhabitants": "210.829 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2735\u00a0Einwohner je km2\n", "founded": {"txt": "1874 Oberhausen", "year": "1874 "}}, {"name": "Offenbach am Main", "url": "https://de.wikipedia.org/wiki/Offenbach_am_Main", "name_url": "Offenbach_am_Main", "lat_lng": {"lat": "50.099444444444", "lng": "8.7708333333333"}, "land": "Hessen", "height": "98\u00a0m \u00fc.\u00a0NHN\n", "size": "44,89\u00a0km2\n", "inhabitants": "128.744 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2868\u00a0Einwohner je km2\n"}, {"name": "Osnabr\u00fcck", "url": "https://de.wikipedia.org/wiki/Osnabr%C3%BCck", "name_url": "Osnabr%C3%BCck", "lat_lng": {"lat": "52.278888888889", "lng": "8.0430555555556"}, "land": "Niedersachsen", "height": "63\u00a0m \u00fc.\u00a0NHN\n", "size": "119,8\u00a0km2\n", "inhabitants": "164.748 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1375\u00a0Einwohner je km2\n", "founded": {"txt": "780 Osnabr\u00fcck", "year": "780"}}, {"name": "Paderborn", "url": "https://de.wikipedia.org/wiki/Paderborn", "name_url": "Paderborn", "lat_lng": {"lat": "51.719444444444", "lng": "8.7572222222222"}, "land": "Nordrhein-Westfalen", "height": "110\u00a0m \u00fc.\u00a0NHN\n", "size": "179,59\u00a0km2\n", "inhabitants": "150.580 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "838\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "777 Paderborn, erste urkundliche Erw\u00e4hnung / Sitz eines Reichstags unter Karl dem Gro\u00dfen", "year": "777 "}}, {"name": "Pforzheim", "url": "https://de.wikipedia.org/wiki/Pforzheim", "name_url": "Pforzheim", "lat_lng": {"lat": "48.891111111111", "lng": "8.6988888888889"}, "land": "Baden-W\u00fcrttemberg", "height": "261\u00a0m \u00fc.\u00a0NHN\n", "size": "98\u00a0km2\n", "inhabitants": "125.542 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1281\u00a0Einwohner je km2\n", "founded": {"txt": "90 Pforzheim, erstmals erw\u00e4hnt als Portus", "year": "90"}, "first_mentioned": {"txt": "1067 Pforzheim, erste urkundliche Erw\u00e4hnung", "year": "1067 "}}, {"name": "Potsdam", "url": "https://de.wikipedia.org/wiki/Potsdam", "name_url": "Potsdam", "lat_lng": {"lat": "52.395833333333", "lng": "13.061388888889"}, "land": "Brandenburg", "height": "32\u00a0m \u00fc.\u00a0NHN\n", "size": "188,61\u00a0km2\n", "inhabitants": "178.089 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "944\u00a0Einwohner je km2\n", "founded": {"txt": "1317 Potsdam", "year": "1317"}}, {"name": "Recklinghausen", "url": "https://de.wikipedia.org/wiki/Recklinghausen", "name_url": "Recklinghausen", "lat_lng": {"lat": "51.616666666667", "lng": "7.2"}, "land": "Nordrhein-Westfalen", "height": "85\u00a0m \u00fc.\u00a0NHN\n", "size": "66,5\u00a0km2\n", "inhabitants": "112.267 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1688\u00a0Einwohner je km2\n"}, {"name": "Regensburg", "url": "https://de.wikipedia.org/wiki/Regensburg", "name_url": "Regensburg", "lat_lng": {"lat": "49.017222222222", "lng": "12.096944444444"}, "land": "Bayern", "height": "337\u00a0m \u00fc.\u00a0NHN\n", "size": "80,7\u00a0km2\n", "inhabitants": "152.610 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1891\u00a0Einwohner je km2\n", "founded": {"txt": "179 Regensburg, nahe einem Kastell aus dem 1. Jahrhundert von Marc Aurel als Legionslager Castra Regina gegr\u00fcndet", "year": "179"}}, {"name": "Remscheid", "url": "https://de.wikipedia.org/wiki/Remscheid", "name_url": "Remscheid", "lat_lng": {"lat": "51.178333333333", "lng": "7.1994444444444"}, "land": "Nordrhein-Westfalen", "height": "365\u00a0m \u00fc.\u00a0NHN\n", "size": "74,52\u00a0km2\n", "inhabitants": "110.994 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1490\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "um 1173 Remscheid, erste urkundliche Erw\u00e4hnung", "year": "um 1173 "}, "founded": {"txt": "1808 Remscheid", "year": "1808 "}}, {"name": "Reutlingen", "url": "https://de.wikipedia.org/wiki/Reutlingen", "name_url": "Reutlingen", "lat_lng": {"lat": "48.483333333333", "lng": "9.2166666666667"}, "land": "Baden-W\u00fcrttemberg", "kreis": "Reutlingen", "height": "382\u00a0m \u00fc.\u00a0NHN\n", "size": "87,06\u00a0km2\n", "inhabitants": "115.966 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1332\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1089 Reutlingen, erste urkundliche Erw\u00e4hnung", "year": "1089"}}, {"name": "Rostock", "url": "https://de.wikipedia.org/wiki/Rostock", "name_url": "Rostock", "lat_lng": {"lat": "54.08816", "lng": "12.13468"}, "land": "Mecklenburg-Vorpommern", "height": "14\u00a0m \u00fc.\u00a0NHN\n", "size": "181,26\u00a0km2\n", "inhabitants": "208.886 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1152\u00a0Einwohner je km2\n", "founded": {"txt": "1218 Rostock, Best\u00e4tigung des Stadtrechts", "year": "1218"}}, {"name": "Saarbr\u00fccken", "url": "https://de.wikipedia.org/wiki/Saarbr%C3%BCcken", "name_url": "Saarbr%C3%BCcken", "lat_lng": {"lat": "49.23265", "lng": "6.99619"}, "land": "Saarland", "kreis": "Regionalverband Saarbr\u00fccken", "height": "230\u00a0m \u00fc.\u00a0NHN\n", "size": "167,09\u00a0km2\n", "inhabitants": "180.374 (31.\u00a0Dez.\u00a02019)[1]\n", "inhabitants_km": "1080\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "999 Saarbr\u00fccken, erste urkundliche Erw\u00e4hnung als \u201eCastellum Sarabrucca\u201c", "year": "999"}, "founded": {"txt": "1321 Saarbr\u00fccken", "year": "1321 "}}, {"name": "Salzgitter", "url": "https://de.wikipedia.org/wiki/Salzgitter", "name_url": "Salzgitter", "lat_lng": {"lat": "52.153657", "lng": "10.405849"}, "land": "Niedersachsen", "height": "90\u00a0m \u00fc.\u00a0NHN\n", "size": "223,92\u00a0km2\n", "inhabitants": "104.948 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "469\u00a0Einwohner je km2\n"}, {"name": "Siegen", "url": "https://de.wikipedia.org/wiki/Siegen", "name_url": "Siegen", "lat_lng": {"lat": "50.874444444444", "lng": "8.0244444444444"}, "land": "Nordrhein-Westfalen", "height": "267\u00a0m \u00fc.\u00a0NHN\n", "size": "114,69\u00a0km2\n", "inhabitants": "102.836 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "897\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "1079 Siegen, erste urkundliche Erw\u00e4hnung als \u201eSigena\u201c", "year": "1079"}, "founded": {"txt": "1303 Siegen erh\u00e4lt Soester Stadtrecht (bereits um 1170 als civitas bezeichnet)", "year": "1303"}}, {"name": "Solingen", "url": "https://de.wikipedia.org/wiki/Solingen", "name_url": "Solingen", "lat_lng": {"lat": "51.171388888889", "lng": "7.0833333333333"}, "land": "Nordrhein-Westfalen", "height": "221\u00a0m \u00fc.\u00a0NHN\n", "size": "89,54\u00a0km2\n", "inhabitants": "159.360 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1780\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "965 Solingen, erste urkundliche Erw\u00e4hnung", "year": "965"}, "founded": {"txt": "1374 Solingen", "year": "1374 "}}, {"name": "Stuttgart", "url": "https://de.wikipedia.org/wiki/Stuttgart", "name_url": "Stuttgart", "lat_lng": {"lat": "48.775555555556", "lng": "9.1827777777778"}, "land": "Baden-W\u00fcrttemberg", "height": "247\u00a0m \u00fc.\u00a0NHN\n", "size": "207,35\u00a0km2\n", "inhabitants": "634.830 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "3062\u00a0Einwohner je km2\n", "founded": {"txt": "1219 Stuttgart", "year": "1219 "}}, {"name": "Trier", "url": "https://de.wikipedia.org/wiki/Trier", "name_url": "Trier", "lat_lng": {"lat": "49.7596", "lng": "6.6439"}, "land": "Rheinland-Pfalz", "height": "136\u00a0m \u00fc.\u00a0NHN\n", "size": "117,13\u00a0km2\n", "inhabitants": "110.636 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "945\u00a0Einwohner je km2\n", "founded": {"txt": "18/17 v. Chr. Trier, r\u00f6mische Gr\u00fcndung (lat. Augusta Treverorum)", "year": "18/17 v. Chr."}}, {"name": "Ulm", "url": "https://de.wikipedia.org/wiki/Ulm", "name_url": "Ulm", "lat_lng": {"lat": "48.400833333333", "lng": "9.9872222222222"}, "land": "Baden-W\u00fcrttemberg", "height": "478\u00a0m \u00fc.\u00a0NHN\n", "size": "118,69\u00a0km2\n", "inhabitants": "126.329 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1064\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "854 Ulm, erste urkundliche Erw\u00e4hnung als \u201eHulma\u201c", "year": "854"}}, {"name": "Wiesbaden", "url": "https://de.wikipedia.org/wiki/Wiesbaden", "name_url": "Wiesbaden", "lat_lng": {"lat": "50.0825", "lng": "8.24"}, "land": "Hessen", "height": "117\u00a0m \u00fc.\u00a0NHN\n", "size": "203,93\u00a0km2\n", "inhabitants": "278.342 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1365\u00a0Einwohner je km2\n", "founded": {"txt": "121 Wiesbaden, erstmals als Aquae Mattiacorum erw\u00e4hnt", "year": "121"}}, {"name": "Wolfsburg", "url": "https://de.wikipedia.org/wiki/Wolfsburg", "name_url": "Wolfsburg", "lat_lng": {"lat": "52.423055555556", "lng": "10.787222222222"}, "land": "Niedersachsen", "height": "63\u00a0m \u00fc.\u00a0NHN\n", "size": "204,09\u00a0km2\n", "inhabitants": "124.151 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "608\u00a0Einwohner je km2\n"}, {"name": "Wuppertal", "url": "https://de.wikipedia.org/wiki/Wuppertal", "name_url": "Wuppertal", "lat_lng": {"lat": "51.256176", "lng": "7.150829"}, "land": "Nordrhein-Westfalen", "height": "160\u00a0m \u00fc.\u00a0NHN\n", "size": "168,39\u00a0km2\n", "inhabitants": "354.382 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "2105\u00a0Einwohner je km2\n", "founded": {"txt": "1929 Wuppertal, Vereinigung von Barmen, Elberfeld, Ronsdorf, Vohwinkel und Cronenberg.", "year": "1929"}}, {"name": "W\u00fcrzburg", "url": "https://de.wikipedia.org/wiki/W%C3%BCrzburg", "name_url": "W%C3%BCrzburg", "lat_lng": {"lat": "49.794444444444", "lng": "9.9294444444444"}, "land": "Bayern", "height": "177\u00a0m \u00fc.\u00a0NHN\n", "size": "87,63\u00a0km2\n", "inhabitants": "127.880 (31.\u00a0Dez.\u00a02018)[1]\n", "inhabitants_km": "1459\u00a0Einwohner je km2\n", "first_mentioned": {"txt": "704 W\u00fcrzburg, erste urkundliche Erw\u00e4hnung", "year": "704"}}];

  d3.csv(
    "https://raw.githubusercontent.com/phuje/Data-test/master/smartCity-score-general.csv",
    function(data) {
      myData = data.slice();

      numberCities = data.length;

      // sort data
      /*myData.sort(function(b, a) {
        return a.Gesamtwertung - b.Gesamtwertung;
      });*/

      /*var txt="Rang,Stadt,Gesamtwertung,Verwaltung,IT und Kommunikation,Energie und Umwelt,Mobilität,Gesellschaft,Einwohner\n";
      for (var i = 0; i < data.length; i++) {
        var row = data[i];
        txt+= row.Rang+","+row.Stadt+","+row.Gesamtwertung+","+row.Verwaltung+","+row["IT und Kommunikation"]+","+row["Energie und Umwelt"]+","+row["Mobilität"]+","+row.Gesellschaft;
      
        var inh;
        var found = false;
        
        for(var j=0; j<cityDetails.length; j++){
          
          if(cityDetails[j].name==row.Stadt){
            if(cityDetails[j].inhabitants == null){
              console.log("no inhabitants "+cityDetails[j].name);
              
              txt+=",UNDEFINED";
              continue;
            } else{
              inh= cityDetails[j].inhabitants;
              inh=inh.substring(0,inh.indexOf(' '));
              inh=inh.replace(/\./g,'');
              inh=parseInt(inh);
                    
              txt+=","+inh+"";
            }
            found = true;
          }
        }
        if(!found){
          console.log("not found "+row.Stadt);
        }
        txt+="\n";
      }

      console.log(txt);*/


      console.log("Staedte Insgesamt: ", numberCities);
      console.log("data", data);

      makeBarChart();
    }
  );



  //draws y axis, and adds labels
  function makeBarChart(){

      marginRanking = {top: 30, right: 30, bottom: 100, left: 50},
      //widthRanking = 1400 - marginRanking.left - marginRanking.right,
      heightRanking = 400 - marginRanking.top - marginRanking.bottom;

      // append the svg object to the body of the page
      svgRanking = d3.select("#barchart")
        .append("svg")
          .attr("class", "svgBarChart")
          .attr("height", heightRanking + marginRanking.top + marginRanking.bottom)
          //.attr("width", widthRanking + marginRanking.left + marginRanking.right)
          .append("g")
            .attr("transform",
                  "translate(" + marginRanking.left + "," + marginRanking.top + ")");


        xAxis = svgRanking.append("g");

        // Y axis
        yRanking = d3.scaleLinear()
          .range([ heightRanking, 0 ])
          .domain([0, 100]);

        yAxis = svgRanking.append("g")
        .call(d3.axisLeft(yRanking));

        // Add the text label for the Y axis
        svgRanking.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - marginRanking.left)
        .attr("x",0 - (heightRanking / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Score");

        drawRanking(myData);

  }

  //needed to update bar chart depending on filter and ordering
  function drawRanking(newData){

    addBars(newData);
    drawChart(newData); // render visualisation for specific device width
    
  }

  //adds bars of bar chart 
  function addBars(thisData){


      //reset, remove last bars
      d3.selectAll(".bar").remove();


      //Bars
      myRect = svgRanking.selectAll("myRect")
      .data(thisData)
      .enter()
      .append("rect")
        .attr("class", "bar")
        //.attr("x", function(d) { return x(d.Stadt); } )
        //.attr("width", x.bandwidth())
        .attr("y", function(d) { return yRanking(0); })
        .attr("height", 0)
        .attr("fill", /*"#69b3a2"*/getColor)
        .on("mouseover", showTooltip)
        .on("mouseleave", hideTooltip);

  }



  // ---------------------------//
  //      RESPONSIVE            //
  // ---------------------------//
  // A function that finishes to draw the chart for a specific device size.
  function drawChart() {

    // get the current width of the div where the chart appear, and attribute it to Svg
    currentWidth = parseInt(d3.select('#barChart').style('width'), 10);
    d3.select(".svgBarChart").attr("width", currentWidth);

    // Update the X scale and Axis (here the 20 is just to have a bit of margin)

    // X axis: scale and draw:
    xRanking = d3.scaleBand()
      .domain(myData.map(function(d) { return d.Stadt; })) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
      .range([0, currentWidth-marginRanking.left-marginRanking.right])
      .padding(0.1);

    xAxis
      .attr("transform", "translate(0," + heightRanking + ")")
      .call(d3.axisBottom(xRanking))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
        

    // Add the last information needed: their X position
    myRect
      .attr("x", function(d) { return xRanking(d.Stadt); } )
      .attr("width", xRanking.bandwidth())
      .transition().duration(800)
        .attr("y", function(d) { return yRanking(d[category]); })
        .attr("height", function(d) { return heightRanking - yRanking(d[category]); });
    }


  // Add an event listener that run the function when dimension change
  window.addEventListener('resize', drawChart );




  // ---------------------------//
  //      TOOLTIP               //
  // ---------------------------//

  // -1- Create a tooltip div that is hidden by default:
  var tooltip = d3
    .select("#barchart")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white")
    .style("position", "absolute");
    //.style("display", "inline-flex");

  // -2- Create 3 functions to show / update (when mouse move) / hide the tooltip
  var showTooltip = function(d) {
    //console.log("showTooltip"+x(d.Stadt));
    tooltip
      .style("opacity", 1)
      .html(d.Stadt +", Score: "+ d[category])
      //.style("left", (d3.mouse(this)[0]+70) + "px")
      //.style("top", (d3.mouse(this)[1]) + "px")
      .style("top", yRanking(d[category])+160+ "px")
      //.style("left", xRanking(d.Stadt) + "px")
      .style("left", event.pageX + "px");
      //.style("top", event.pageY+ "px");
  };

  var hideTooltip = function(d) {
    tooltip
      .style("opacity", 0);
  };




  function filterRanking(){
    if(document.getElementById("radioGesamtwertung").checked){
      category = "Gesamtwertung";
    } else if(document.getElementById("radioVerwaltung").checked){
      category = "Verwaltung";
    } else if(document.getElementById("radioIT").checked){
      category = "IT und Kommunikation";
    } else if(document.getElementById("radioUmwelt").checked){
      category = "Energie und Umwelt";
    } else if(document.getElementById("radioMobility").checked){
      category = "Mobilität";
    } else if(document.getElementById("radioGesellschaft").checked){
      category = "Gesellschaft";
    }
    highlightFilterLabel(category);

    updateRanking();
  }

  function highlightFilterLabel(label){
    //unhighlight all
    d3.selectAll(".filterLabel")
      .style("background", "#eeeeee")
      .style("color", "black");
    
    switch(label){
      case "Gesamtwertung": 
        d3.select("#gesamtwertungLabel").style("background", "#82006E").style("color", "white");
        break;
      case "Verwaltung": 
        d3.select("#verwaltungLabel").style("background", "#82006E").style("color", "white");
        break;
      case "IT und Kommunikation":
        d3.select("#ITLabel").style("background", "#82006E").style("color", "white");
        break;
      case "Energie und Umwelt": 
        d3.select("#umweltLabel").style("background", "#82006E").style("color", "white");
        break;
      case "Mobilität": 
        d3.select("#mobilityLabel").style("background", "#82006E").style("color", "white");
        break;
      case "Gesellschaft": 
        d3.select("#gesellschaftLabel").style("background", "#82006E").style("color", "white");
        break;

    }
  }

  //orders ranking from highest to lowest score in selected category
  function updateRanking(){
    var orderedData;
    orderedData = myData;

    if(document.getElementById("orderCheckbox").checked){ //order by current category
      console.log("orderRanking");
        
      orderedData.sort(function(b, a) {
        return a[category] - b[category];
      });

    } 
    else{ // take initial order from high to low Gesamtwertung
      orderedData.sort(function(b, a) {
        return a["Gesamtwertung"] - b["Gesamtwertung"];
      });
    }
      
    drawRanking(orderedData);
    //console.log("FINAL ordereddata",orderedData);

  }

}