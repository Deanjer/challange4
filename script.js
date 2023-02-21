const container = document.getElementById('container');
for(let x=0; x<588; x++)
{
    const div = document.createElement('div')
    div.className = 'vakje';
    div.id = "a"+x;
    container.appendChild(div);

}

