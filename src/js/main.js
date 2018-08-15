let mainUrl ="https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";

fetch(mainUrl)
.then (Response => Response.json())
.then(data => {
    const students = computeStudentsStats(data);
    const campus = computeGenerationsStats(data);
    studentsPaint(students)//funcion pintar studiantes
    campusPaint(campus);
})

const studentsPaint=(studentsData) =>{
    let n = 1;
    for (let i = 0; i < studentsData.length; i++) {
        // console.log(studentsData.length);
        const studentsTable = document.getElementById('students-table');
         studentsTable.innerHTML +=`<tr>
            <td scope="row"">${studentsData[i].name}</td>
            <td>${studentsData[i].email}</td>
            <td>${studentsData[i].campus}</td>
            <td>${studentsData[i].completedPercentage}</td>
          </tr>`
    }
};
