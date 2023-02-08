//Marksheet Program
var Name = prompt("Enter your name");
var clas = prompt("Enter your Class");
var hindi = prompt("Enter hindi marks");
var english = prompt("Enter english marks");
var computer = prompt("Enter computer marks");
var business = prompt("Enter business marks");
var accounts = prompt("Enter accounts marks");
var obtained_marks = parsefloat(hindi) + parsefloat(english) + parsefloat(computer) + parsefloat(business) + parsefloat(accounts);
var percentage = obtained_marks*100/500;

document.write("name: " + Name + "<br/>");
document.write("Class: " + clas + "<br/>");
document.write("hindi marks: " + hindi + "<br/>");
document.write("english marks: " + english + "<br/>");
document.write("computer marks: " + computer + "<br/>");
document.write("business marks: " + business + "<br/>");
document.write("accounts marks: " + accounts + "<br/>");
document.write("Total Marks: " + obtained_marks + "<br/>");
document.write("Your Percentage is: " + percentage + "%" + "<br/>");

if(percentage >= 81)
{
    document.write("Grade: A+");
}
else if(percentage >= 71)
{
    document.write("Grade: A");
}
else if(percentage >= 61)
{
    document.write("Grade: B+");
}
else if(percentage >= 50)
{
    document.write("Grade: B");
}
else if(percentage >= 40)
{
    document.write("Grade: C");
}
else
{
    document.write("Result Fail");
} 