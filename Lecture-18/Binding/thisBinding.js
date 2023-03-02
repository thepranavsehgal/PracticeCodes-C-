console.log(this);
// console.log(this.alert('Hello'));

function updatePlacementStatus(studentName,status){
    this.placementStatus = status;
    this.studentName = studentName;
}

updatePlacementStatus("vaibhav", "Adobe");
updatePlacementStatus("Rishabh","Amazon");