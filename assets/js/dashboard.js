
var studentsListView = document.getElementById("studentsListView");
async function GetStudents() {
    let studentsAPIResponse = await fetch('http://localhost:8000/students/getStudents');
    let studentsJSON = await studentsAPIResponse.json();
    let studentsList = studentsJSON.students;

    studentsList.forEach(student => {

        addToList(student);
    });
}

function addToList(student) {
    const li = document.createElement("li");

    li.innerHTML = `<li>
    <div style="display:flex;justify-content: space-around; align-items: center; 
                border: 1px solid black; border-radius: 5px; padding: 15px;margin-top: 10px;width: 900px;  border-radius: 25px;">
                <a id=${student._id}  style="font-size: 17px;width: 45%" text-decoration:none;>${student.name}</a>
                <a id=${student.id}  style="font-size: 17px;width: 45%" text-decoration:none;>${student.batch}</a>
                <a id=${student.id}  style="font-size: 17px;width: 10%" text-decoration:none;>${student.college}</a>
                <div> 
    </li>`;
    studentsListView.append(li);
}

GetStudents();