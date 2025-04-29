<div class="nav-wrapper">
    <a href="https://rishikeshvadodaria.github.io/mkdocs/rpa-pad/" class="nav-item mobile-computing" data-title="RPA PAD">Power automate desktop</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/rpa-app/" class="nav-item mobile-computing" data-title="Power Apps">Power Apps</a>
   </div>


# Power Apps

## Login Functionality with Validation
Create an app that demonstrates the Login Functionality with validation in the power app.

!!! onselect-property
        If(
    pass.Text = "122345",
    Navigate(
    'Welcome',
    ScreenTransition.None
    ),
    Notify(
    "Invalid Password!!! Please Enter a Valid Password",
    NotificationType.Error
    )
    );
    Reset(user);
    Reset(pass);

## Login Credentials with SharePoint List
Create a list with login credentials like username and password and connect to Canvas App.

!!! login-validation-logic

    If(
    IsBlank(TextInput1.Text) || IsBlank(TextInput2.Text),
    Notify("Username and Password cannot be blank", NotificationType.Warning),

    !IsBlank(LookUp(CreditList, UserName = TextInput1.Text && Password = TextInput2.Text).Title), 
    Navigate(Screen2), 

    Notify("Invalid Username or Password", NotificationType.Error);
    UpdateContext({ShowForgetMessage: true})
    )


## Cascading List with SharePoint
Create a list on SharePoint with fields Country, City and demonstrate cascading list using canvas app. Add personalization at the bottom of the left corner.

!!! dropdown-list-1 
    Distinct (C114_Country_City, Country)

!!! dropdown-list-2 
    Filter(C114_Country_City, Country = Dropdown1.SelectedText.Value)


## Search and Filter Functionality in Power App
Create an app that demonstrates the Search functionality in a Power app and creates a list, as mentioned in Snap.

!!! search-formula
    Search(Table1, SearchText.Text, 'Product','Country')

!!! filter-formula-gallery 
    Filter(Table1, If(Dropdown1.SelectedText.Value="All", true, Product =
    Dropdown1.SelectedText.Value))

!!! filter-formula-dropdown-items
    ["All", "Pen", "Pencil", "Mouse","Pad"]




## Form Validation and Save
Perform validation on the form. Employee ID and Age must be 5 and 3 digits respectively. Add a 'Save' button. Clicking on this button will save the list data.

!!! 5-digit-logic
    If(IsMatch(DataCardValue1.Text,Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit),Parent.BorderColor, Color.Red)

!!! is-blank-logic
    If(IsBlank(DataCardValue1.Text), true, false)
## Global Variables in Canvas App
Create a Canvas app that demonstrates how to use global variables.

!!! global-variable
    Set(Fname, TextInput1_1.Text);
    Set(Lname, TextInput2_1.Text)

!!! screen-2
    Concatenate(Fname," ",Lname)

## Collection Variables in Canvas App
Create a Canvas app that demonstrates how to use collection variables.

!!! collection
    Collect(mycollection,{Product:TextInput1.Text,Price: TextInput2.Text})

!!! reset 
    Clear(mycollection)


## Screen Navigation in Canvas App
Create a Canvas app that demonstrates how to navigate from one screen to another.

!!! screen-1 
    Navigate(DetailScreen,ScreenTransition.Cover)

!!! screen-2
    Navigate(HomeScreen,ScreenTransition.Cover)

## Patch Function
Patch Function

!!! create-new-record
    Patch(EmployeeList, Defaults(EmployeeList), {Name: "Rishikesh", Age: 25})

!!! patch-update
    Patch(EmployeeList, LookUp(EmployeeList, Name = "Rishikesh"), {Age: 26})



