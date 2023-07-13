const data=[
    {
        "name":"John",
        "age":30,
        "isMarried":true
    },
    {
        "name":"Jone",
        "age":23,
        "isMarried":true
    },
    {
        "name":"BOb",
        "age":33,
        "isMarried":false
    }
];

const Json=document.getElementById("Json");

for(let i=0; i<data.length ;i++){
    const div=document.createElement("div");
    const dat=data[i];
    div.innerHTML=`Name:${dat.name},Age:${dat.age},Status:${dat.isMarried}`;
    Json.appendChild(div);
}