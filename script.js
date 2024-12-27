var counter = 0;

$('#getJokeButton').click(function() {
        if(document.getElementById("joke_box" + '1')) {
            document.getElementById("joke_box" + "1").remove();
            document.getElementsByTagName("br")[0].remove();
        } else if(document.getElementById("joke_box" + '2')) {
            document.getElementById("joke_box" + "2").remove();
            document.getElementsByTagName("br")[0].remove();
        } else {
            
        }
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            counter++;
            if (counter > 2) {
                counter = 1;
            }
            // Create div element
            var div = document.createElement("div");
            div.className = "joke_box";
            div.id = "joke_box" + counter;
            // Create span element
            var span = document.createElement("span");
            span.className = "joke";
            span.id = "joke_id" + counter;
            span.innerHTML = data.joke;
            var br = document.createElement("br");
            // Append to another element:
            document.getElementById("joke-section").appendChild(div);
            document.getElementById("joke_box" + counter).appendChild(span);
            document.getElementById("joke-section").appendChild(br);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
    });
    function cb(response) {
        document.getElementById('visits').innerText = response.value;
    }