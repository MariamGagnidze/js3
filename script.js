//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

const pension = (pensionAge,currentAge)=>{
    let left = pensionAge - currentAge;
    
    
    return left
    }
    
    console.log(pension(65,21))
      






//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.





const calculator = (num1 , num2 , operation) => { 
if (operation === "+"){
    let incrementResult = num1 + num2;
    return incrementResult;
}else if (operation === "-"){
    let incrementResult = num1 - num2;
    return incrementResult;
}else if (operation === "/"){
    let incrementResult = num1 - num2;
    return incrementResult;
}else if (operation === "*"){
    let incrementResult = num1 * num2;
    return incrementResult;
}else {
    console.log("Error")
}
}
console.log(calculator(10,20,"+"))

//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.


const checkPasswordStrength= (password)=>{
    if (password.length < 8)
    {console.log("should be at least 8 characters")}
else if(password.length > 16)
{console.log("should be up to 16 characters")}
else if(password === '')
{console.log("This field is required")}
else{
    console.log("hello")
}

}
checkPasswordStrength("35796") 


//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!




const garden = (flowers)=>{
    switch (flowers) {
        case "rose":
            console.log("roses are found")
            break;
        case "tulips":
         console.log("tulips are found")
         break;
         case "wisteria":
         console.log("wisterias are found")
         break;
    
        default:
            console.log("flowers can't be found")
            break;
    }

}
garden("ragac")




//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!


const biggestNumber=(x,y,z)=>{

    if (x>y && x>z)
    {console.log(`the biggest number is ${x}`)}
else if(y>x && y>z)
{console.log(`the biggest number is ${y}`)}
else if(z>x && z>y)
{console.log(`the biggest number is ${z}`)}
else if(z===x && z===y)
{console.log(`equal`)}
else{
    console.log("NaN")
}
return biggestNumber

}

biggestNumber(7,9,0)



