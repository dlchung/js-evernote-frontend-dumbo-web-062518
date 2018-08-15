async function fetchNotes(){
  const response = await fetch("http://localhost:3000/api/v1/notes")
  return await response.json()
}

async function fetchNote(id){
  const response = await fetch(`http://localhost:3000/api/v1/notes/${id}`)
  return await response.json()
}

async function postNote(body){
  await fetch(`http://localhost:3000/api/v1/notes`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
  })
}

async function deleteNote(id){
  await fetch(`http://localhost:3000/api/v1/notes/${id}`, {
    method: "DELETE"
  })
}

async function editNote(body, id){
  console.log(id)
  await fetch(`http://localhost:3000/api/v1/notes/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
  })
}
