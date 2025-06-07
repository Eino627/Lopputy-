finished_messages=[
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "looking for someone",
        "body": "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?"
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Let's ask around. What's his name?"
    },
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Yeah, his name is Seymore Butz."
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Is there a Butz here? Everybody! I wanna Seymore Butz!"
    },
    {
        "sender": "Barney",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "LOL"
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!"
    },
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "😂😂😂😂😂😂😂😂😂😂😂"
    }
]


let messages = document.getElementById("messages");

function render_messages() {
    messages.innerHTML = "";

for (let i = 0; i < finished_messages.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `${finished_messages[i].sender}  -  ${finished_messages[i].date}<br><em>${finished_messages[i].title}</em><br>${finished_messages[i].body}`;
    messages.append(div);
    }
}

function open_dialog(){
    let dialog = document.getElementById("dialog");
    dialog.showModal();
}

function create_message() {
    let input_name = document.getElementById("name_input").value;
    let input_title = document.getElementById("title_input").value;
    let input_message = document.getElementById("input_message").value;
    let today = new Date();
    let formattedDate = today.toISOString().split('T')[0];
    
    let newMessage = {
        "sender": input_name,
        "date": formattedDate,
        "title": input_title,
        "body": input_message
    };

    finished_messages.push(newMessage);

    render_messages(); 

    close_dialog();
}

function close_dialog() {
    let dialog = document.getElementById("dialog");
    document.getElementById("name_input").value = "";
    document.getElementById("title_input").value = "";
    document.getElementById("input_message").value = "";
    dialog.close();
}

render_messages();