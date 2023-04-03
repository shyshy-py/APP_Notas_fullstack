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
  console.log("Token:", token);
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

export { login, register };
