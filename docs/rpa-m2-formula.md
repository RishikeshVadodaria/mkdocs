# RPA Formulae

## 1. Cascading Dropdown
Two Dropdown applications, set the **Items** field as follows:

### **Dropdown 1 (DD1)**
```PowerApps
Distinct(Country_City, Country)
```

### **Dropdown 2 (DD2)**
```PowerApps
Filter(Country_City, Country = Dropdown1.SelectedText.Value)
```

---

## 2. Form Validation

### **Digit Validation for Employee ID**
- Border turns red if there aren’t **5 digits**  
- Set in the **BorderColor** field:
```PowerApps
If(
    IsMatch(DataCardValue1.Text, Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit),
    Parent.BorderColor,
    Color.Red
)
```

### **Remove * (Required Field) if Textbox is Filled**
- Set in the **Required Field**:
```PowerApps
If(IsBlank(DataCardValue1.Text), true, false)
```

---

## 3. CRUD Operations

### **Setup**
1. Add a **Data Source**
2. Insert **Form** & **Gallery**  
3. Connect to **Data Source**  
4. Set **Form Mode** to `New`

### **View Data**
- **OnSelect** (Gallery)
```PowerApps
ViewForm(Form1)
```
- **Items Property (Form)**
```PowerApps
Gallery1.Selected
```

### **Add New Entry**
```PowerApps
NewForm(Form1)
```

### **Edit Existing Entry**
```PowerApps
EditForm(Form1)
```

### **Submit Form with Notification**
```PowerApps
SubmitForm(Form1);
Notify("Entry Added", NotificationType.Information)
```

### **Delete Entry**
- **OnSelect Property** of Delete Button:
```PowerApps
Remove(CRUD_Table, ThisItem)
```

---

## 4. Personalization
- **User Profile Details:**
```PowerApps
User().Image   // Inserted Image
User().FullName   // Inserted Text Label
User().Email   // Inserted Text Label
```

---

## 5. Variables

### **Local Variables**
1. Set **TextInput1** and **TextInput2**
2. **OnSelect (Button)**
```PowerApps
UpdateContext({N1:TextInput1.Text, N2:TextInput2.Text})
```
3. **Set in Label (Addition)**
```PowerApps
N1 + N2
```

### **Global Variables**
1. **OnSelect (Button)**
```PowerApps
Set(Fname, TextInput1_1.Text);
Set(Lname, TextInput2_1.Text)
```
2. **Set in Label**
```PowerApps
Fname & " " & Lname
```
OR  
```PowerApps
Concatenate(Fname, " ", Lname)
```

### **Collections**
1. **Add Item to Collection**
```PowerApps
Collect(mycollection, {Product:TextInput1.Text, Price: TextInput2.Text})
```
2. **Reset Collection**
```PowerApps
Clear(mycollection)
```

---

## 6. Navigation
Create **Home Screen** and **Detail Screen**, then add buttons for navigation.

### **Home Button (OnSelect)**
```PowerApps
Navigate(DetailScreen, ScreenTransition.Cover)
```

### **Detail Button (OnSelect)**
```PowerApps
Navigate(HomeScreen, ScreenTransition.Cover)
```

---

## 7. Login System

### **Static Login**
#### **Inputs**:  
- **Username** (`txt_username`)
- **Password** (`txt_password`)  

Set **Password Mode:**
```PowerApps
TextMode.Password
```

**OnSelect Property (Submit Button)**
```PowerApps
If(
    txt_Password.Text = "pass",
    Navigate('Welcome Screen', ScreenTransition.None),
    Notify("Invalid Password!!! Please Enter a Valid Password", NotificationType.Error)
);
Reset(txt_Username);
Reset(txt_Password);
```

---

### **Login Using SharePoint List**
1. Create **SharePoint Credentials List** (`credentials_list`)
2. **OnStart Property (App Object)**
```PowerApps
ClearCollect(
    colUserCredentials,
    'credentials_list'
)
```
3. **OnSelect Property (Login Button)**
```PowerApps
If(
    CountRows(
        Filter(
            colUserCredentials,
            And(
                txt_Username.Text = Title,
                txt_Password.Text = Password
            )
        )
    ) = 1,
    Navigate('Welcome', ScreenTransition.None),
    Notify("Invalid Login Details", NotificationType.Error)
);
Reset(txt_Username);
Reset(txt_Password);
```

---

## 8. Filtering
1. Create a **Dropdown (Dropdown1)**
2. Set **Items Property**
```PowerApps
["All", "Pen", "Pencil", "Mouse", "Pad"]
```
3. Set **Gallery Items Property**
```PowerApps
Filter(
    Table1,
    If(Dropdown1.SelectedText.Value = "All", true, Product = Dropdown1.SelectedText.Value)
)
```

---

## 9. Search Functionality
1. Create **Search Input (SearchText)**
2. Set **Gallery Items Property**
```PowerApps
Search(Table1, SearchText.Text, 'Product', 'Country')
```

---

## 10. Combined Search & Filter
- **Apply to Gallery Items Property**
```PowerApps
Search(
    Filter(
        Table1,
        If(Dropdown1_2.SelectedText.Value = "All", true, Country = Dropdown1_2.SelectedText.Value)
    ),
    search_inp_2.Text,
    Product
)
```
```

