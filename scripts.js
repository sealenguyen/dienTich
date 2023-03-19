function areaShow(){
    let inputWidth = prompt("enter width: ");
    let inputHeight = prompt("enter height: ");

    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);

    let area = width * height ;
    document.write("The area is: " + area);
}