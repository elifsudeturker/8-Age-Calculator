function birth_year2age(){
    event.preventDefault();//formu gönderme!
    
    birth_year = document.getElementById('birth_year').value

    var d = new Date();
    var current_year;
    var age;

    current_year = d.getFullYear();

    age = current_year - birth_year;

    console.log(age)

    document.getElementById('result').innerHTML = age
}
