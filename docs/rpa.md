### 📄 Robot Process Automation

### Create a bot to check whether the given number is Palindrome or not. 

!!! Palindrome

    1️⃣ **Input a number.**  
    2️⃣ **Convert the input to a number.**  
    3️⃣ **Initialize `reversedNumber = 0` and store the original number as `tempNumber`.**  
    4️⃣ **Loop while `originalNumber` is not 0:**  
    - Extract the last digit (`originalNumber mod 10`).  
    - Update `reversedNumber` (`reversedNumber * 10 + last digit`).  
    - Remove the last digit from `originalNumber` (`originalNumber / 10`).  
    5️⃣ **Compare `reversedNumber` with `tempNumber`.**  
    6️⃣ **If they are equal, print "Palindrome", else print "Not a Palindrome".**  



[palindrome.txt](txt-files/palindrome.txt)

<div class="bright-line"></div>

### Create PAD to know if the input character is a vowel or consonant.

!!! Vowel-Consonant

    1️⃣ **Take input from the user (a single character).**  
    2️⃣ **Convert the character to lowercase** to ensure case insensitivity.  
    3️⃣ **Check if the character is a vowel (`a, e, i, o, u`) using a switch case.**  
    - ✅ If it matches any of these, **display "It is a vowel".**  
    - ❌ Otherwise, **display "It is a consonant".**  


[vowel-consonant.txt](txt-files/vowel-consonant.txt)

<div class="bright-line"></div>

### Create a PAD flow to move PDF and DOCX files from the download location to a folder created in the drive present on your machine.

!!! Note
    Choose a filter to limit the files retrieved. This allows 
    wild cards, for example, *.txt or document?.doc. To 
    allow for multiple file filters, separate the choices 
    with a semi-colon, for example, *.txt;*.exe. 

[move-files.txt](txt-files/move-files.txt)

<div class="bright-line"></div>

### Take a number input from the user and Display the given number as Even or odd(e.g. If Even Display the message "Even Number" else "Odd Number" )

!!! Note
    % Number mod 2 %

[even-odd.txt](txt-files/even-odd.txt)

<div class="bright-line"></div>

### Prompt the user to provide their complete name, Change the case to UPPER, Count the characters and display Your full name is %name% and is of %number% characters

!!! Note
    Your Full Name is %TextWithNewCase% and is of %TextWithNewCase.length% characters.

[name-uppercase.txt](txt-files/name-uppercase.txt)

<div class="bright-line"></div>

### Ask the user for a mobile number, ensure it is 10 digits and print it using a message dialogue box.

!!! Note
    Use split text to separate the numbers and store into list, then iterate through the list

[verify-mobile-number.txt](txt-files/verify-mobile-number.txt)

<div class="bright-line"></div>

### Take two number inputs from the user and Derive the Addition, Subtraction and Display using the Message Box.

!!! Note 
    you are in 12 sem for fucks sake

[add-subtract.txt](txt-files/add-subtract.txt)

<div class="bright-line"></div>

### Read the Employee Salary Data from the Excel As per the Salary value divide the Employee into the groups like if Salary>40k then Group A Else Group B Write the Group into the excel Group column Save and Close Excel

!!! Note 
    Open Excel, read salary data, and categorize employees into "Group1" (>= 50k) or "Group2" (< 50k) based on their salary.

[salary-excel.txt](txt-files/salary-excel.txt)

<div class="bright-line"></div>

### Create a bot to Extract all the tutorial titles from https://www.xelplus.com/all-tutorials/ and display the extracted data in a message box. Did it for web to excel

!!! Note
    Change link, enable power automate extension

[web-to-excel.txt](txt-files/web-to-excel.txt)

<div class="bright-line"></div>

### Create a bot that collects family holiday destination suggestions from three members(India, US, UK), adds them to a list, randomly removes two destinations, and displays the remaining options through a message box

!!! Note 
    Shuffle list used to remove destination randomly

[family-holiday.txt](txt-files/family-holiday.txt)

<div class="bright-line"></div>


### Create a bot for the HR onboarding process that reads data from an Excel file(EmployeeID Generation.xlsx), fills in data dynamically on the portal, generates Employee ID and Corporate ID, and stores them in an Excel file (http://happybots.in/Employee-Onboarding-Process.html).

!!! Note 
    Skip this question in exam if you can 

[hr-main.txt](txt-files/hr-main.txt)

[hr-subflow.txt](txt-files/hr-subflow.txt)


