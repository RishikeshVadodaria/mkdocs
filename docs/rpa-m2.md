## Create a Power Apps application showcasing login functionality with validation. 


[login-screen-1.txt](txt-files/m2/login-1.txt)  
[login-screen-2.txt](txt-files/m2/login-2.txt)

## Create a SharePoint List and Implement Cascading Dropdowns in Power Apps  

Create a new list in SharePoint under the team **RPA Sem 12**  

📌 **Code Reference:**  
[cascading-dropdown.txt](txt-files/m2/cascading-dropdown.txt)  

![alt text](image-24.png)  

The list should look similar to this:  

![alt text](image-25.png)  

### **Power Apps Configuration**  

1. **Connect the SharePoint List**  
   - Open **Power Apps** → Create a **Canvas App**  
   - Connect to the **"LocationData"** SharePoint list  

2. **Add Cascading Dropdowns**  
   - **Country Dropdown (`ddlCountry`)**  
     ```powerapps
     Distinct(LocationData, Country)
     ```  
   - **City Dropdown (`ddlCity`)**  
     ```powerapps
     Filter(LocationData, Country = ddlCountry.Selected.Result).City
     ```  

3. **Add Personalization (Bottom-Left Corner)**  
   - Add a **Label**  
   - Set `Text` to:  
     ```powerapps
     "Welcome, " & User().FullName
     ```  