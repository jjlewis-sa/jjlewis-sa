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
    var theUrl = "./count.php";
    var callback = function(response) {
        console.log(response);
    }
    function httpGetAsync(theUrl, callback)
    {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    }
    window.onload = httpGetAsync(theUrl, callback);
    function counter_fn() {
        //Get visitor count

        //Get visitor count
        var counter = document.getElementById("cntr");
        var count = 0;
        count = parseInt(counter.innerHTML);
        count = count + 1;
        counter.innerHTML = count;
        //write file
        
        //console.log(count);
      }
      window.onload = counter_fn;