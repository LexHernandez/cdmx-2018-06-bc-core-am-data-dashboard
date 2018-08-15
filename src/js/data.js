const generacion = [];
let campus = '';
let average = 0;
let count = 0;

window.computeGenerationsStats = (laboratoria) => {

  for (key in laboratoria) {
    campus = key;
    const generaciones = Object.keys(laboratoria[key].generacion);

    generaciones.forEach((generation) => {
      generation = generation;

      const students = laboratoria[key].generacion[generation].estudiantes;
      average = 0;

      for (let i = 0; i < students.length; i++) {
        let progress = students[i].progreso.porcentajeCompletado;

        average += progress;
        count = students.length;
      }
      average = Math.round(average / count);
      generacion.push({
        campus,
        generation,
        average,
        count,
      });
    });
  }
  return generacion;
};

let name;
let email;
let generation;
let stats;
let completedPercentage;

window.computeStudentsStats = (laboratoria) => {
  let studentsArray = []; //array=[] vacio
  // let studentObjet = {}; //objetos
  for (key in laboratoria) {

    campus = key;
    let generations = Object.keys(laboratoria[campus].generacion);
    generations.forEach((generation) => {
      generation = generation;
      let students = (laboratoria[campus].generacion[generation].estudiantes);

      for (i = 0; i < students.length; i++) {
        name = students[i].nombre;
        email = students[i].correo;
        stats = students[i].progreso;
        completedPercentage = stats.porcentajeCompletado;

        studentsArray.push({
          campus,
          name,
          email,
          stats,
          completedPercentage
        }); 
      };
    });
  };
  return studentsArray;
    
}
