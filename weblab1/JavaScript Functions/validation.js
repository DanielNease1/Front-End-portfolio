

function valForm()
{
    var customerName = document.getElementById("firstname").value;
    
    {
        if (document.getElementById("cEmail1").checked && document.getElementById("cPhone1").checked)
        {
            alert("Please check only ONE - email or phone");
            return false;
        } else if (document.getElementById("cEmail1").checked)
        {
            alert("Thank you for your feedback " + customerName + ", Someone will contact you by email soon.");
            return true;
        } else if (document.getElementById("cPhone1").checked)
        {
            alert("Thank you for your feedback " + customerName + ", Someone will contact you by phone soon.");
            return true;
        } else
        {
            alert("Please check one - email or phone");
            return false;
        }
    }
}