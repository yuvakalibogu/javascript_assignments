class TodoItemModel {
    constructor(caption, iscompleted) {
        this.caption = caption;
        this.iscompleted = iscompleted;
    }
    toggle() {
        this.iscompleted = !this.iscompleted;
    }

}



class AppModel {
    constructor() {
        this.input = document.getElementById("input");
        this.todoCollection = [];
        this.filter = "All";

    }
    addTodoitem(todoitem) {
        this.todoCollection.push(todoitem);
    }



    render() {

        document.getElementById("list").innerHTML = '';
        var self = this;
        document.getElementById('input').value = '';
        for (let i in this.todoCollection) {
            // let itemDOM = document.createElement("li");
            // itemDOM.innerHTML = this.todoCollection[i].caption;
            // document.getElementById("list").appendChild(itemDOM);

            // document.getElementById('input') = "";
            let itemDOM = document.createElement("li");
            let itemcheckbox = document.createElement("input");
            itemcheckbox.type = "checkbox";
            itemcheckbox.addEventListener('click', () => {
                this.todoCollection[i].iscompleted = !this.todoCollection[i].iscompleted;
                if (this.todoCollection[i].iscompleted) {
                    itemcaption.style.textDecoration = 'line-through';
                } else {
                    itemcaption.style.textDecoration = 'none';
                }
                
            });
            itemcheckbox.id = 'checkbox';
            let itemcaption = document.createElement("span");
            itemcaption.innerHTML = this.todoCollection[i].caption;


            if (this.todoCollection[i].iscompleted) {
                itemcaption.style.textDecoration = 'line-through';


            }



            let itemdeletebtn = document.createElement("button");
            itemdeletebtn.innerHTML = "X";
            // //    item.innerHTML=this.todocollection[i].caption;
            itemdeletebtn.onclick = () => {
                this.todoCollection.splice(i, 1);
                this.render();
            }


            itemDOM.appendChild(itemcheckbox);
            itemDOM.appendChild(itemcaption);
            itemDOM.appendChild(itemdeletebtn);






            if (app.filter === "All") {
                document.getElementById("list").appendChild(itemDOM);


            } else if (app.filter === "Active" && !this.todoCollection[i].iscompleted) {
                document.getElementById("list").appendChild(itemDOM);


            } else if (app.filter === "Completed" && this.todoCollection[i].iscompleted) {
                document.getElementById("list").appendChild(itemDOM);


            }



        }


    }
}