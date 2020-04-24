var a = prompt("Пожалуйста,введите минерализацию воды в мг/л")
document.writeln("Введена минерализация: "+a+" мг/л. \n")
if (a > 125){
    document.writeln("Жесткая вода. \n")
}else document.writeln("Мягкая вода. \n")
if (a >= 360){
    document.writeln("!!! Очень жесткая вода. \n")
}
var b = a*0.4
var c = a*0.24
document.writeln("Содержание в воде двухзарядных катионов кальция Ca2+ при минерализации = "+a+" мг/л = "+b+" мг/л. \n")
if (b > 100){
    document.writeln("! Превышение. \n")
}else document.writeln("Норма.  \n")
document.writeln("Содержание в воде двухзарядных катионов магния Mg2+ при минерализации = "+a+" мг/л = "+c+" мг/л. \n")
if (c > 85){
    document.writeln("! Превышение. \n")
}else document.writeln("Норма. \n")