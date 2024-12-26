var countdiv = 0;

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
            countdiv++;
            // Create div element
            var div = document.createElement("div");
            div.className = "joke_box";
            div.id = "joke_box" + countdiv;
            // Create span element
            var span = document.createElement("span");
            span.className = "joke";
            span.id = "joke_id";
            span.innerHTML = data.joke;
            var br = document.createElement("br");
            // Append to another element:
            document.getElementById("joke-section").appendChild(div);
            document.getElementById("joke_box" + countdiv).appendChild(span);
            document.getElementById("joke-section").appendChild(br);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
    });
    const fs = null;
    const fileName = './count.json';

    function counter_fn() {
        //get json data
        var content = JSON.parse(fs.readFileSync(fileName, 'utf8'));
        // edit or add property
        content.expiry_date = 999999999999;
        //get json data
        var counter = document.getElementById("cntr");
        var count = 0;
        count = parseInt(counter.innerHTML);
        count = count + 1;
        counter.innerHTML = count;
        //write file
        fs.writeFileSync('count.json', JSON.stringify(content));
        console.log(content);
      }
      window.onload = counter_fn;