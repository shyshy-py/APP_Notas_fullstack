async function login(user: any, pass: any) {
  const url = "http://localhost:8000/login";
  const credentials = {
    username: user,
    password: pass,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("Error en la llamada a la API:", error);
    throw new Error(error.detail);
  }

  const data = await response.json();
  const token = data.token;
  const id = data.id;
  localStorage.setItem("token", token);
  localStorage.setItem("id", id);
  console.log("Token:", token);
  console.log("id", id);
  return id;
}

async function register(user: any, pass: any) {
  const url = "http://localhost:8000/users/";
  const credentials = {
    username: user,
    password: pass,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("Error en la llamada a la API:", error);
    throw new Error(error.detail);
  }
}

async function getNotes() {
  try {
    const response = await fetch("http://localhost:8000/all");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error getNotes service", error);
  }
}

async function myNotes() {
  const response = await fetch(
    "http://localhost:8000/notas/" + localStorage.getItem("id")
  );
  const data = await response.json();
  console.log(data);
  console.log("funciona myNotes");
  return data;
}

async function createNote(
  titulo: any,
  texto: any,
  idUser: any,
  color: any,
  imagen: any,
  likes: any,
  fecha: any,
  hora: any
) {
  const response = await fetch("http://localhost:8000/notas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      texto: texto,
      usuario_id: idUser,
      color: color,
      imagen: imagen,
      likes: likes,
      fecha: fecha,
      hora: hora,
    }),
  });

  if (response.ok) {
    // la solicitud se realizó con éxito
    console.log("Nota guardada con éxito");
  } else {
    // la solicitud falló
    console.error("Error service");
  }
}

export { login, register, getNotes, createNote, myNotes };
