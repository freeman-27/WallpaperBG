let HexColorSelection = document.getElementById('HexColorSelect');
let R_channel = document.getElementById('rChannelSelect');
let G_channel = document.getElementById('gChannelSelect');
let B_channel = document.getElementById('bChannelSelect');
let savedColor;

////TODO
function GenerateImage(){
    let HexColorSelection = document.getElementById('HexColorSelect');
    // let Rval = HexColorSelection.attributes[2].value;
    // let Rval1 = HexColorSelection.getAttribute("value");
    // window.alert(Rval);
    // window.alert(savedColor);
}
let ColorInput;
function GetInputHexColor(){
    let GetInputHexColor = document.getElementById('HexColorSelect').value;
    ColorInput = GetInputHexColor;
    document.getElementById('HexColorSelect').
    console.log('value-2:'+ ColorInput);
    return ColorInput;
}
function saveColors(){
    savedColor = ColorInput;
    // savedRed = R_channel.attributes[2].value;
    console.log('Saved-value:'+ savedColor);
    // console.log('R-chanel:'+ savedRed);
    return savedColor;
}


    //Случайные значения для подстановки в BackgroundColor по два значения в формат HEX colour: #RRGGBB
    var varR1 = Math.floor(Math.random() * 8) + 1; // R добавить шестнадцатеричные
    var varR2 = Math.floor(Math.random() * 8) + 1; // R
    var varG1 = Math.floor(Math.random() * 8) + 1; // G
    var varG2 = Math.floor(Math.random() * 8) + 1; // G
    var varB1 = Math.floor(Math.random() * 8) + 1; // B
    var varB2 = Math.floor(Math.random() * 8) + 1; // B

    //массив 16 номеров для пространства цветов HEX colour: #RRGGBB
    const Array_RGB_numbers = ["0","1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"]

    //случайный номер для выбора по индексу из массива Array_RGB_numbers
    var genIndexNumber1 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    var genIndexNumber2 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    var genIndexNumber3 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    var genIndexNumber4 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    var genIndexNumber5 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    var genIndexNumber6 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    //выбор из массива по случайному номеру:
    var select_R1 = Array_RGB_numbers[genIndexNumber1];
    var select_R2 = Array_RGB_numbers[genIndexNumber2];
    var select_G1 = Array_RGB_numbers[genIndexNumber3];
    var select_G2 = Array_RGB_numbers[genIndexNumber4];
    var select_B1 = Array_RGB_numbers[genIndexNumber5];
    var select_B2 = Array_RGB_numbers[genIndexNumber6];



    var RedChanel = Math.floor(Math.random() * 255);
    var GreenChanel = Math.floor(Math.random() * 255);
    var BlueChanel = Math.floor(Math.random() * 255);