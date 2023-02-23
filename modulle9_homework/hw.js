function unit1() {

    const parser = new DOMParser();

    const xml1 = `
    <list>
        <student>
            <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>`;

    const xmlDom = parser.parseFromString(xml1, 'text/xml');

    const result = {
        list: []
    }

    const list = xmlDom.querySelector('list');
    const student = list.querySelectorAll('student');
    student.forEach(s => {
        const qlang = s.querySelector('name');
        result.list.push({
            name: qlang.querySelector('first') + ' ' + qlang.querySelector('second'),
            age: parseInt(s.querySelector('age')),
            prof: s.querySelector('prof'),
            lang: qlang.getAttribute('lang')
        });
    });

    console.log(result);
}

unit1();

function unit2() {

    const jsonstring = `
    {
        "list": [
         {
          "name": "Petr",
          "age": "20",
          "prof": "mechanic"
         },
         {
          "name": "Vova",
          "age": "60",
          "prof": "pilot"
         }
        ]
    }`;

    const data = JSON.parse(jsonstring);
    const result = {
        list: []
    }
    data.list.forEach(el => {
        result.list.push({
            name: el.name,
            age: parseInt(el.age),
            prof: el.prof
        })
    });

    console.log(result);
}

unit2();

function unit3() {


    const btn = document.getElementById("btn1");
    btn.addEventListener("click", f1);

    function f1() {

        let s = document.getElementById('number1').value;

        if (s > 10 && s < 0) {
            document.getElementById('p').innerHTML = 'число вне диапазона от 1 до 10'
        } else {
            const xhr = new XMLHttpRequest();

            xhr.onload = function () {
                const response = JSON.parse(xhr.response);
                const img_block = document.getElementById('img');
                response.forEach(img_r => {

                    let pic = document.createElement("IMG");
                    pic.src = img_r.download_url;
                    img_block.append(pic);

                });
            };

            xhr.onerror = function () {
                console.log('Ошибка запроса');
            };

            xhr.open("get", "https://picsum.photos/v2/list?limit=" + s, true);
            xhr.send();
        }

    }

}

function unit4() {

    const btn = document.getElementById("btn2");
    btn.addEventListener("click", f1);
    function f1() {

        let s1 = document.getElementById('n1').value;
        let s2 = document.getElementById('n2').value;

        if ((s1 > 300 && s1 < 100) || (s2 > 300 && s2 < 100)) {
            document.getElementById('p').innerHTML = 'одно из чисел вне диапазона от 100 до 300'
        } else {
            fetch('https://picsum.photos/' + s1 + '/' + s2)
                .then((response) => {
                    let pic = document.createElement("IMG");
                    pic.src = response.url;
                    const img_block = document.getElementById('img2');
                    img_block.append(pic);
                })

                .catch(() => { console.log('error') });
        }

    }

}

document.addEventListener('DOMContentLoaded', function () {
    unit3();
    unit4();
});