<script setup>
import { ref } from 'vue';

const schoolGrades = ref({
  name: "",
  subject: "",
  points: ""
});

const grades = ref([]);

function save() {
  grades.value.push(schoolGrades.value);
  schoolGrades.value = {
    name: "",
    subject: "",
    points: ""
  };
}
function validate() {
  if (schoolGrades.value.name == "") {
    alert("Debes añadir un nombre");
    return false;
  }
  if (schoolGrades.value.subject == "") {
    alert("Debes añadir una asignatura");
    return false;
  }
  if (schoolGrades.value.points == "") {
    alert("Debes añadir una nota");
    return false;
  }
  alert("Nota añadida");
  return true;
}

function submit() {
  if (validate()) {
    save();
  }
}


  
const GetGrades = num =>  {
  if (num < 0) return `"${num}", no es posible`;
  if (num > 10) return `${num}, no es posible`;
  if (num <= 3) return "Muy deficiente";
  if (num < 5) return "Insuficiente";
  if (num <= 6) return "Suficiente";
  if (num <= 8) return "Notable";
  if (num <= 10) return "Sobresaliente";
};
</script>

<template>
  <div class="container">
    <form>
      <h1> Notas del alumno</h1>

      <label for="name" class="form-label">Nombre</label>
      <input v-model="schoolGrades.name" id="name" type="text" placeholder="Nombre" />

      <label for="subject" class="form-label">Asignatura</label>
      <select v-model="schoolGrades.subject" name="Mates">
        <option value="Mates">Mates</option>
        <option value="Lengua">Lengua</option>
        <option value="Inglés">Inglés</option>
        <option value="EF">Educación física</option>
        <option value="Historia">Historia</option>

      </select>

      <label for="points" class="form-label">Puntuación</label>
      <input v-model="schoolGrades.points" type="number" placeholder="nota">

      <button @click.prevent="submit"  class="btn-enviar" type="submit">Enviar</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Asignatura</th>
          <th>Puntuación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grade in grades">
          <td>{{ grade.name }}</td>
          <td>{{ grade.subject }}</td>
          <td>{{ GetGrades(grade.points) }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
  <footer>
    &copy; Xavier Villaverde 
  </footer>
</template>
<style scoped>
.container {
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
}
h1{
  text-align: center;
}
form {
  width: 28em;
  height: 24em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
}

input, select, button {
  width: 80%;
  border-radius: 5px;
  padding: 1em;
}

.btn-enviar {
  background-color: #0eda15;
}

table {
  margin-top: 2em;
  border-collapse: collapse;
  width: 100%;
}

th {
  background-color: #791b20;
  color: white;
  text-align: left;
  padding: 8px;
}

td {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

td, tr {
  background-color: antiquewhite;
}

footer {
  background-color: #791b20;
  color: white;
  text-align: center;
  padding: 1em;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 7.5vh;
}

</style>