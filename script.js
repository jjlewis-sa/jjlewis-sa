    $('#getJokeButton').click(function() {
        if(document.getElementById("joke_id")){
            document.getElementById("joke_id").remove();
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
            // Create span element
            var span = document.createElement("span");
            span.className = "joke";
            span.id = "joke_id";
            span.innerHTML = data.joke;
            var br = document.createElement("br");
            // Append to another element:
            document.getElementById("joke-section").appendChild(span);
            document.getElementById("joke-section").appendChild(br);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
    });