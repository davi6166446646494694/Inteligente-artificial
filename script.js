document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let inputData = document.getElementById("inputData").value;
    
    // Enviar os dados para o servidor PHP
    fetch('process.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputData: inputData }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("output").innerHTML = data.output;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
