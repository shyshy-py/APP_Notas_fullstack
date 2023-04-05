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

async function myNotes(id: any) {
  const response = await fetch("http://localhost:8000/notas/" + id);
  if (response.status === 401) {
    throw new Error("No autenticado");
  }
  const data = await response.json();
  console.log(data);
  return data;
}

async function createNote(
  titulo: any,
  texto: any,
  idUser: any,
  color: any,
  likes: any,
  fecha: any,
  hora: any
) {
  const response = await fetch("http://localhost:8000/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      titulo: titulo,
      texto: texto,
      hora: hora,
      fecha: fecha,
      likes: likes,
      color: color,
      usuario_id: idUser,
    }),
  });

  if (response.ok) {
    // la solicitud se realizó con éxito
    console.log("Nota guardada con éxito");
  } else {
    // la solicitud falló
    console.error("Error service createNote");
  }
}

async function deleteNote(id: any) {
  try {
    const response = await fetch(`http://localhost:8000/delete/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la nota");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function updateNote(notaId: any, titulo: any, texto: any) {
  const url = `http://localhost:8000/update/${notaId}`;
  const credentials = {
    titulo: titulo,
    texto: texto,
  };

  const response = await fetch(url, {
    method: "PUT",
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
  console.log("Nota actualizada:", data);
  return data;
}

export {
  login,
  register,
  getNotes,
  createNote,
  myNotes,
  deleteNote,
  updateNote,
};
