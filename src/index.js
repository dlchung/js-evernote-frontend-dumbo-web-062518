document.addEventListener("DOMContentLoaded", init)

function init(){

  renderNotes()

}

function renderNotes(){
  const sidebar = document.querySelector("#sidebar")
  sidebar.innerHTML=""
  const notesData = fetchNotes()
  const newNote = document.createElement("button")
  newNote.innerText = "Add Note"
  newNote.onclick = () => renderForm()
  const ul = document.createElement("ul")
  ul.id = "note-list"
  sidebar.append(newNote,ul)

  notesData.then( notes => {
    notes.forEach(note => {
      const li = document.createElement("li")
      li.innerText = note.title
      li.onclick = () => renderNote(note.id)
      ul.append(li)
    })
  })


}

function renderNote(id){
  const noteData = fetchNote(id)
  const noteBody = document.querySelector("#note-body")
  noteBody.innerHTML = ''
  noteData.then( note => {
    const h1 = document.createElement("h1")
    h1.innerText = note.title
    const p = document.createElement("p")
    p.innerText = note.body
    const div = document.createElement("div")
    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")
    editBtn.innerText = "Edit Note"
    editBtn.onclick = () => editBtnAction(note)
    deleteBtn.innerText = "Delete Note"
    deleteBtn.onclick = () => deleteBtnAction(note.id)

    div.append(editBtn,deleteBtn)
    noteBody.append(h1,p,div)
  })
}

function renderForm(){
  const noteBody = document.querySelector("#note-body")
  noteBody.innerHTML = `
    <form>
      <label>Title</label>
      <input id="input-title" type="text" name="title"/>
      <label>Body</label>
      <input id="input-body" type="text" name="body"/>
      <button onclick="submitForm()" type="button" name="submit" id="submit">Submit</button>
    </form>
  `

}


function submitForm(id=null){
  const inputTitle = document.querySelector("#input-title")
  const inputBody = document.querySelector("#input-body")
  const noteBody = document.querySelector("#note-body")

  const post = {
      title: inputTitle.value,
      body: inputBody.value
    }

  // if (note===null) {
  //   const post = {
  //     title: inputTitle.value,
  //     body: inputBody.value
  //   }
  // } else {
  //   const post = {
  //     title: note.title,
  //     body: note.body
  //   }
  // }

// console.log(note.id, post)
  if(event.target.id==="submit"){
    postNote(post).then(() => renderNotes())
    noteBody.innerHTML = ""
  } else if (event.target.id==="edit"){
    editNote(post, id).then(() => {
      renderNote(id)
      renderNotes()
    })
  }




}

function deleteBtnAction(id){
  deleteNote(id)
  const noteBody = document.querySelector("#note-body")
  noteBody.innerHTML = ''
  renderNotes()
}

function editBtnAction(note){
  const noteBody = document.querySelector("#note-body")
  noteBody.innerHTML = `
    <form>
      <label>Title</label>
      <input id="input-title" type="text" name="title" value="${note.title}"/>
      <label>Body</label>
      <input id="input-body" type="text" name="body" value="${note.body}"/>
      <button onclick="submitForm(${note.id})" type="button" name="edit" id="edit">Edit Note</button>
    </form>
  `

}

// {
// "id": 2,
// "title": "Amita celebrer id vulticulus.",
// "body": "Nisi suspendo conventus. Turpis cetera et. Correptius verus vesper.\\nPorro xiphias stillicidium. Ut neque at. Ipsum candidus tumultus.\\nApparatus et animus. Subnecto eligendi pauper. Umquam talis vomica.",
// "user": {
// "id": 1,
// "name": "dchung"
// }
// }
