console.log("lesson 03");
// =======================
var the_input = document.querySelector(".the_input")
var plus_button = document.querySelector(".plus_button")
var tasks_content = document.querySelector(".tasks_content")
var no_message = document.querySelector(".no_message")
var count = document.querySelector(".count span")
var completed = document.querySelector(".completed span")

window.onload = function () {
    the_input.focus()
}

plus_button.onclick = function () {
    if (the_input.value === "") {
        console.log("no");
    } else {
        no_message.remove()
        var create_main_span = document.createElement("span")
        var create_delete_span = document.createElement("span")
        var create_Text = document.createTextNode(the_input.value)
        var create_delete = document.createTextNode("Delete")

        create_main_span.appendChild(create_Text)
        create_main_span.className = "task_box"

        create_delete_span.appendChild(create_delete)
        create_delete_span.className = "delete_class"

        create_main_span.appendChild(create_delete_span)
        tasks_content.appendChild(create_main_span)

        the_input.value = ""
        the_input.focus()

    }
}