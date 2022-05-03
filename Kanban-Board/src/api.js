const API_URL = "http://localhost:3000";

export async function getTasks() {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function addTask(task) {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      body: JSON.stringify(task),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function removeTask(id) {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    if (response.status == 204) {
      return true;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function updateTask(id, status) {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
    });
    if (response.status == 204) {
      return true;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
