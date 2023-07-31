let exampleCsv = `
48.30,32.16,Кропивницький,200000,
44.38,34.33,Алушта,31440,
44.38,34.33,Сміле,31440,
44.38,34.33,Біле,31140,
44.38,34.33,Крута,31340,
44.38,34.33,Тарс,3240,
44.38,34.33,Уженець,32240,
44.38,34.33,Гайки,3143,
44.38,34.33,Низина,240,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в цьому файлі три рядки-коментаря :)
`;
exampleCsv = transliterate(exampleCsv);
let countOfCall = 0;

let rechText = csvToReachText(exampleCsv);
console.log(rechText(`Потрібно відвідати місто Vinnitsya де багато історично цікавих місць.`));
console.log(rechText(`Також потрібно відвідати міста Dzhankoi,Berdichiv,Alushta де багато історично цікавих місць.`));

function csvToReachText(townsCsv) {
    console.log(`%cFunction calls ${++countOfCall} times!`, 'color: red')
    let townsArray = townsCsv
        .split(`\n`) //to string array
        .map(line => line.replace(/[^a-z0-9,.]/gi, ''))
        .filter(a => a.split(`,`).length > 2 && (a[0] !== `#`))
        .map(line => line.split(`,`))
        .map((line) => ({x: line[0], y: line[1], townName: line[2], population: line[3]}))
        .sort((a, b) => (b.population || 0) - (a.population || 0))
        .slice(0, 10)
        .reduce((accumulator, currentValue, currentIndex) => {
            accumulator[currentValue.townName] = {population: currentValue.population, rating: currentIndex + 1};
            return accumulator; // <---- added return statement
        }, {});
    console.log(townsArray);

    return (anyText) => {
        Object.entries(townsArray).map(object => {
            const townName = object[0];
            const rating = Object.values(object)[1].rating;
            const population = Object.values(object)[1].population;
            anyText=anyText.replaceAll(townName, `"${townName}":(${rating} місце в ТОП найбільших міст України, населення ${population} людина/людини/людей)`);
        })
        return anyText;
    }
}


function transliterate(word) {

    var answer = "";
    var a = {}

    a["Ё"] = "YO";
    a["Й"] = "I";
    a["Ц"] = "Ts";
    a["У"] = "U";
    a["К"] = "K";
    a["Е"] = "E";
    a["Н"] = "N";
    a["Г"] = "G";
    a["Ш"] = "SH";
    a["Щ"] = "SCH";
    a["З"] = "Z";
    a["Х"] = "H";
    a["Ъ"] = "'";
    a["ё"] = "yo";
    a["й"] = "i";
    a["ц"] = "ts";
    a["у"] = "u";
    a["к"] = "k";
    a["е"] = "e";
    a["н"] = "n";
    a["г"] = "g";
    a["ш"] = "sh";
    a["щ"] = "sch";
    a["з"] = "z";
    a["х"] = "h";
    a["ъ"] = "'";
    a["Ф"] = "F";
    a["Ы"] = "I";
    a["В"] = "V";
    a["А"] = "A";
    a["П"] = "P";
    a["Р"] = "R";
    a["О"] = "O";
    a["Л"] = "L";
    a["Д"] = "D";
    a["Ж"] = "ZH";
    a["Э"] = "E";
    a["ф"] = "f";
    a["ы"] = "i";
    a["в"] = "v";
    a["а"] = "a";
    a["п"] = "p";
    a["р"] = "r";
    a["о"] = "o";
    a["л"] = "l";
    a["д"] = "d";
    a["ж"] = "zh";
    a["э"] = "e";
    a["Я"] = "Ya";
    a["Ч"] = "CH";
    a["С"] = "S";
    a["М"] = "M";
    a["И"] = "I";
    a["Т"] = "T";
    a["Ь"] = "'";
    a["Б"] = "B";
    a["Ю"] = "YU";
    a["я"] = "ya";
    a["ч"] = "ch";
    a["с"] = "s";
    a["м"] = "m";
    a["и"] = "i";
    a["т"] = "t";
    a["ь"] = "'";
    a["б"] = "b";
    a["ю"] = "yu";
    a["і"] = "i";
    a["ї"] = "yi";
    a["І"] = "I";
    a["Ї"] = "Yi";
    for (i = 0; i < word.length; ++i) {

        answer += a[word[i]] === undefined ? word[i] : a[word[i]];
    }
    return answer;
}