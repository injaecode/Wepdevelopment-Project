let todo  =  prompt("What would you like to do?");

if (todo === "new"){

    const addList = [prompt("Type new schedule!")];
    addList.push();
    
}else if (todo === "list"){
    console.log("**************");
    for (let item of todo) {
        console.log(todo[item] + item);
    }
    console.log("**************");
}else if (todo === "delete"){
    const deleteMsg = prompt("Type the number you want to delete")
    
    if(!deleteMsg){
        deleteMsg = prompt("Type right number!");
    }else{
        todo = todo.splice(parseInt(deleteMsg),1);
    
    }
}else if (todo === "quit"){
   
    console.log("bye bye~")
    
}else{
    prompt("Type vaild request!");
}
