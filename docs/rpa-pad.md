<div class="nav-wrapper">
    <a href="https://rishikeshvadodaria.github.io/mkdocs/rpa-pad/" class="nav-item mobile-computing" data-title="RPA PAD">Power automate desktop</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/rpa-app/" class="nav-item mobile-computing" data-title="Power Apps">Power Apps</a>
   </div>

# Power Automate Desktop

## Check Palindrome Number
Create a bot to **check whether the given number is Palindrome** or not.

!!! Palindrome
    1️⃣ **Input** a number.  
    2️⃣ **Convert** the input to a number.  
    3️⃣ **Initialize** `reversedNumber = 0` and store the original number as `tempNumber`.  
    4️⃣ **Loop** while `originalNumber` is not 0:  
        - **Extract** the last digit (`originalNumber mod 10`).  
        - **Update** `reversedNumber` (`reversedNumber * 10 + last digit`).  
        - **Remove** the last digit from `originalNumber` (`originalNumber / 10`).  
    5️⃣ **Compare** `reversedNumber` with `tempNumber`.  
    6️⃣ **Print** "Palindrome" if equal, else "Not a Palindrome".  

[palindrome.txt](txt-files/palindrome.txt)

<div class="bright-line"></div>

## Check Vowel or Consonant
Create a PAD flow to **determine if the input character is a vowel or consonant**.

!!! Vowel-Consonant
    1️⃣ **Take input** from the user (a single character).  
    2️⃣ **Convert** the character to **lowercase** for case insensitivity.  
    3️⃣ **Check** if the character is a vowel (`a, e, i, o, u`) using a switch case:  
        - ✅ If it matches, **display** "It is a vowel".  
        - ❌ Otherwise, **display** "It is a consonant".  

[vowel-consonant.txt](txt-files/vowel-consonant.txt)

<div class="bright-line"></div>

## Move PDF and DOCX Files
Create a PAD flow to **move PDF and DOCX files** from the download location to a designated folder on your machine.

!!! Note
    **Choose a filter** to limit the files retrieved. This allows wild cards, for example, `*.txt` or `document?.doc`. To allow for **multiple file filters**, separate the choices with a semi-colon, for example, `*.txt;*.exe`.

[move-files.txt](txt-files/move-files.txt)

<div class="bright-line"></div>

## Check Even or Odd Number
Take a **number input** from the user and **display** whether it is **Even or Odd** (e.g., "Even Number" or "Odd Number").

!!! Note
    Use **% Number mod 2 %** to determine if the number is even or odd.

[even-odd.txt](txt-files/even-odd.txt)

<div class="bright-line"></div>

## Process Full Name to Uppercase
**Prompt the user** to provide their complete name, **convert it to UPPERCASE**, count the characters, and display the result.

!!! Note
    Display: **Your Full Name is %TextWithNewCase% and is of %TextWithNewCase.length% characters**.

[name-uppercase.txt](txt-files/name-uppercase.txt)

<div class="bright-line"></div>

## Validate Mobile Number
**Ask the user** for a mobile number, **ensure it is 10 digits**, and **print** it using a message dialog box.

!!! Note
    **Use split text** to separate the numbers and store into a list, then **iterate** through the list to validate.

[verify-mobile-number.txt](txt-files/verify-mobile-number.txt)

<div class="bright-line"></div>

## Perform Addition and Subtraction
Take **two number inputs** from the user, **calculate Addition and Subtraction**, and **display** the results using a Message Box.

!!! Note
    **You are in 12th semester**, so this should be straightforward.

[add-subtract.txt](txt-files/add-subtract.txt)

<div class="bright-line"></div>

## Group Employees by Salary
**Read Employee Salary Data** from an Excel file, categorize employees based on salary, and **write the group** into the Excel Group column.

!!! Note
    **Open Excel**, read **salary data**, and categorize employees into **"Group1" (>= 50k)** or **"Group2" (< 50k)** based on their salary.

[salary-excel.txt](txt-files/salary-excel.txt)

<div class="bright-line"></div>

## Extract Tutorial Titles from Website
Create a bot to **extract all tutorial titles** from [https://www.xelplus.com/all-tutorials/](https://www.xelplus.com/all-tutorials/) and **display** the extracted data in a message box.

!!! Note
    **Change the link** if needed and **enable the Power Automate extension**.

[web-to-excel.txt](txt-files/web-to-excel.txt)

<div class="bright-line"></div>

## Collect Family Holiday Destination Suggestions
Create a bot that **collects family holiday destination suggestions** from three members (India, US, UK), adds them to a list, **randomly removes two destinations**, and **displays** the remaining options in a message box.

!!! Note
    Use a **shuffle list** to **remove destinations randomly**.

[family-holiday.txt](txt-files/family-holiday.txt)

<div class="bright-line"></div>

## HR Onboarding Process
Create a bot for the **HR onboarding process** that reads data from an Excel file (`EmployeeID Generation.xlsx`), **fills data dynamically** on the portal, generates **Employee ID and Corporate ID**, and **stores** them in an Excel file ([http://happybots.in/Employee-Onboarding-Process.html](http://happybots.in/Employee-Onboarding-Process.html)).

!!! Note
    **Skip this question** in the exam if possible.

[hr-main.txt](txt-files/hr-main.txt)

[hr-subflow.txt](txt-files/hr-subflow.txt)

<div class="bright-line"></div>

## Multiplication Table
Create a PAD flow to **generate a Multiplication Table**.

!!! Note
    This is an **easy** task.

[multiplication-table.txt](txt-files/multiplication-table.txt)

