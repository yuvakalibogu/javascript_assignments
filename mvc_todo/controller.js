const app = new AppModel();

document
        .getElementById('input')
        .addEventListener('keypress', (e) => {
        if (e.keyCode == 13) {
        let value = document.getElementById('input').value;
        if(value === '') return;
        let item = new TodoItemModel(value);
        app.addTodoitem(item);
        app.render();
        document.getElementById('input').value = '';
    }
});

document.getElementById("all").addEventListener("click",()=>{
  
    app.filter="All";
    app.render();
    })
    document.getElementById("active").addEventListener("click",()=>{
    app.filter="Active";
  
    app.render();
    })
    document.getElementById("completed").addEventListener("click",()=>{
    app.filter="Completed";
    app.render();
    })
    