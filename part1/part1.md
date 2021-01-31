##Answers For Part 1  
1. in line 11, the value of i (which is 1 less than the length of the prices array) will be printed out because we are declaring it with the var variable which is global within a function regardless of whether it was declared within a for loop.
2. in line 12, the value of discountedPrice will be printed out because we are declaring it with the var variable which is global within a function regardless of whether it was declared within a for loop. The discountedPrice that is printed is the one that is calculated the last time that the for loop is ran.
3. in line 13, the value of finalPrice will be printed out because we are declaring it with the var variable which is global within a function regardless of whether it was declared within a for loop. The finalPrice that is printed is the one that is calculated the last time that the for loop is ran.
4. the function will return [50, 100, 150] because first the funtion declares the discounted and finalPrice variable then it enters the for loop where it iterates throur the prices array. For each iteration, it calculates the discountedPrice to be whatever is at that index in prices multiplied by 1 minus the discount. In this case it is 100 * .50 = 50. Then it calculates the finalPrice by muliplying that price by 100 then rounding it then dividing it by 100. 50 * 100 = 5000/100 = 50. Then that value is pushed to the back of the discounted array. This is repeated for 100 and 200 so the final array [50, 100, 150] is returned.
5. There will be an error at line 11 because the let variable i is declared inside the for loop using let and therefore the value of i isnt recognized outside of it.
6. There will be an error at line 12 because the let variable discountedPrice is declared inside the for loop using let and therefore  the value of discountedPrice isnt recognized outside of it.
7. There will not be an error at line 13 because finalPrice was declare outside of the for loop. Therefore, the value printed out is what ever finalPrice is set to after the for loop is finished.
8. If the previous lines did not have any errors discountPrices([100, 200, 300], .5) would return [50, 100, 150] because first the funtion declares the discounted and finalPrice variable then it enters the for loop where it iterates throur the prices array. For each iteration, it calculates the discountedPrice to be whatever is at that index in prices multiplied by 1 minus the discount. In this case it is 100 * .50 = 50. Then it calculates the finalPrice by muliplying that price by 100 then rounding it then dividing it by 100. 50 * 100 = 5000/100 = 50. Then that value is pushed to the back of the discounted array. This is repeated for 100 and 200 so the final array [50, 100, 150] is returned.
9. There will be an error at line 11 because the let variable i is declared inside the for loop using let and therefore the value of i isnt recognized outside of it.
10. Line 10 will print the discountedPrice that is assigned when the for loop ends (when i = prices.length - 1). This is because, although this variable is a constant that isnt able to change its value, it gets re-declared each time the loop iterates.
11. Line 13 will print out 0 because the finalPrice cannot be reassigned after it is initially assigned to 0. Therefore, in the for loop where it tries to reassign finalPrice it will cause an error.
12. Assumming that the code casues no errors, the funtion will return [0,0,0] because in the for loop it is finalPrice that is pushed to the array that gets returned after each iteration and since finalPrice is a constant it cannot be changed.
13. 
    A. student.name;  
    B. student["Grad Year"];  
    C. student.function();  
    D. student["Favorite Teacher"].name;  
    E. student.courseLoad[0];  

14. 
    A.'32' - it converts the 2 into '2' and concatenates them because javascript recognizes the + as concatenation when given a '' input  
    B. 1  -  it converts the '3' into a integer and substracts 2.  
    C. 3 - it converts null to be a 0 value therefore nothing is added.  
    D. '3null' - it converts the null into  'null' and concatenates them because javascript recognizes the + as concatenation when given a '' input  
    E. 4 - it recognizes the true boolean as a 1 and then adds the 3 integer  
    F. 0 - it recognizes the false boolean as a 0 and null as 0 then adds them  
    G. '3undefined' - it it converts the undefined into 'undefined' and concatenates them because javascript recognizes the + as concatenation when given a '' input  
    H. NaN - the "3" is converted to an integer and undefined is NaN. 3 - NaN is NaN.

15. 
    A. true - the string '2' becomes a number 2 because JavaScript converts values to numbers when the operands are different types and 2 is greater than 1.  
    B. false - when comparing the 2 strings it first only compares the leading char which is '2' and '1'. '1' is not greater than '2' so it is false.  
    C. true - the string '2' becomes a number 2 because JavaScript converts values to numbers when the operands are different types and 2 is equal to 2.  
    D. false - the strict equality operator checks the equality without type conversion so 2 is not equal to '2'.  
    E. false - the true boolean converts to the number 1 and 1 is not equal to 2.  
    F. true - the Boolean() operator converts 2 into true because it is not equal to 0. Therefore it is comparing true and true which is true.
16. the == will convert values to numbers if it is comparing different types. The === is strict equality checks the equality without type conversion. For example, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.
17. 'How are you?' will get printed because the first if statement is false since the true boolean converts to the number 1 and 1 is not equal to 2. Then the second if statement is true because 2 exists and isnt 0 so it isn't false so it's contents get printed. 
18. [Question 18](part1-question18.js)
19. [6, 8, 10] - the fuction modifyArray gets called and it makes a new array. Then for each element in the entered array it calls the function doSomething which calls the another function on the element + 2. The other function then takes the element + 2 and multiplies it by 2. Then it gets pushed to the new array. Finally, modifyArray then returns the new updated array.
20. [Question 20](part1-question20.js)
21. This will output 1 then 4 then 3 then 2 because in the function printNums() console.log(1) is executed first then both console.log(2) and console.log(3) are in other functions so first the last line console.log(4) will execute. Then console.log(3) because it has no delay and then console.log(2) because it has an delay of a second.