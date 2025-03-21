## Create a Power Apps application showcasing login functionality with validation. 


[login-screen-1.txt](txt-files/m2/login-1.txt)  
[login-screen-2.txt](txt-files/m2/login-2.txt)

## Create a list on SharePoint with fields Country, City and demonstrate cascading list using canvas app. Add personalization at the bottom of the left corner  

Create a new list in SharePoint under the team **RPA Sem 12**  

![alt text](image-24.png)  

The list should look something similar to this:  

![alt text](image-25.png)  

### **Power Apps Configuration**  

1. **Connect the SharePoint List**  
   - Open **Power Apps** → Create a **Canvas App**  
   - Connect to the SharePoint list **"LocationData"**  

2. **Add Cascading Dropdowns**  
   - **Country Dropdown** (`ddlCountry`)  
     ```powerapps
     Distinct(LocationData, Country)
     ```  
   - **City Dropdown** (`ddlCity`)  
     ```powerapps
     Filter(LocationData, Country = ddlCountry.Selected.Result).City
     ```  

3. **Add Personalization (Bottom-Left Corner)**  
   - Add a **Label**  
   - Set `Text` to:  
     ```powerapps
     "Welcome, " & User().FullName
     ```  
