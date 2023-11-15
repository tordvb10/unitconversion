
document.addEventListener("DOMContentLoaded", (event) => {
    const convert = document.getElementById("converting")

//1 meter = 0.264 gallons
//1 liter = 0.264 gallon
//1 kilogram = 2.204 pound
    convert.addEventListener("click",function(){
        let toconvert = Number(document.querySelector("#numbertoconvert > input").value)
        console.log(typeof toconvert)
        console.log("It's converting...")
        document.querySelector("#length .litentekst").innerHTML = `${toconvert} meters = ${Math.round(toconvert*3.281*1000)/1000} feet | ${toconvert} feet = ${Math.round(toconvert/3.281*1000)/1000} meters`
        document.querySelector("#volume .litentekst").innerHTML = `${toconvert} liters = ${Math.round(toconvert*0.264*1000)/1000} gallons | ${toconvert} gallons = ${Math.round(toconvert/0.264*1000)/1000} liters`
        document.querySelector("#mass .litentekst").innerHTML = `${toconvert} kilos = ${Math.round(toconvert*2.204*1000)/1000} pounds | ${toconvert} pounds = ${Math.round(toconvert/2.204*1000)/1000} kilos`
    })
});
