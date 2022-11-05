function uni1() {
    alert(prompt('Введите сумму, руб.') * 0.05 + "$");
}

function unit2() {
    let n = prompt('Введите число');

    n = +n;

    if (isNaN(n)) {
        alert('NaN');
    } else {
        if (typeof(n) == 'number') {
            if (n % 2 == 0) {
                alert('Четное!');
            } else {
                alert('Нечетное');
            }
        } else {
            alert('Упс, кажется, вы ошиблись');
        }
    }
}

function unit3() {
    let s = prompt('Введите строку');
    let r = ''
    for (let i = s.length - 1; i >= 0; i--) {
        r += s[i];
    }
    alert("Перевернутая строка: ", r);
}

function unit4() {
    let n = Math.round(Math.random() * 100);
    alert('Случайное число: ', n);
}

function unit5() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9];

    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function unit6() {
    let a1 = [1, 1, 1];
    let a2 = [1, 2, 3];

    function compare(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1]) {
                console.log(arr, 'Элементы массива разные.')
                return;
            }
        }
        console.log(arr, 'Элементы массива одинаковые.');
    }

    compare(a1);
    compare(a2);
}

function unit7() {
    let arr = [1, 3, 4, 5, "", "4", 0, NaN, undefined];
    let chet = 0,
        nechet = 0;
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        if (!isNaN(n)) {
            if (typeof(n) == 'number') {
                if (n == 0) {
                    console.log('Элемент №' + i + " равен 0.");
                } else {
                    console.log(n);
                    (n % 2 == 0) ? chet++ : nechet++;
                }
            }

        }
    }
    console.log('Четных:', chet);
    console.log('Нечетных:', nechet);
}

function unit8() {
    let cities = new Map([
        ["Moscow", "Russia"],
        ["Kiev", "Ukrain"],
        ["NewYork", "USA"]
    ]);

    for (let city of cities.keys()) {
        console.log(city, ' in ', cities.get(city))
    }
}