import { isUrlValid } from "./Ahad";
document.addEventListener('DOMContentLoaded',function(){
const form = document.getElementById('urlForm');
form.addEventListener('submit',handleSubmit);
});
function handleSubmit(event){
event.preventDefault();
const formEntry = document.getElementById('name').value;    
if (isUrlValid(formEntry)){
urlData('/api',{url:formEntry})
.then(function(res){
console.log("server response:",res); 
document.getElementById("polarity").innerHTML="Polarity:"+res.score_tag;
document.getElementById("agreement").innerHTML="Agreement:"+res.agreement;
document.getElementById("subjectivity").innerHTML="Subjectivity:"+res.subjectivity;
document.getElementById("trust").innerHTML="Trust:"+res.trust;
document.getElementById("irony").innerHTML="Irony:"+res.irony;
 })}}
const urlData=async(url="",data={})=>{
console.log('Analyzig:',data)
try{
const res = await fetch(url,{method:'POST',haader:{'Content-Type':'application/json'},
body: JSON.stringify(data)})
return res.json();}
catch (error){throw error;
}}
export {handleSubmit};
