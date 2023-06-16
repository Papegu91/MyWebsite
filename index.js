<script>
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDay();
let myDate = document.querySelector("date");
if(month == 5){
   month = "May"

}
myDate.textContent =' ${day}th of ${month} ${year};'
</script>