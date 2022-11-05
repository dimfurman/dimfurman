function unit1(params) {
    let arr = [1, 3, 4, 5, "", "4", 0, NaN, undefined];

    function recount(a) {
        let chet = 0,
            nechet = 0;
        for (let i = 0; i < a.length; i++) {
            const n = a[i];
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
    recount(arr);
}

function unit2() {

    is_Simple(2);
    is_Simple(17);
    is_Simple(666);
    is_Simple(997);

    function is_Simple(n) {
        if (!isNaN(n) && (typeof(n) == 'number')) {
            if (n == 0) {
                return console.log('0 - не простое число');
            }
            if (n == 1) {
                return console.log('1 - не простое число');
            }
            if (n > 1000) {
                return console.log('Вы ввели число больше 1000');
            } else {
                for (let i = 2; i < n; i++) {
                    if (n % i == 0) {
                        return console.log(n, ' - не простое число');
                    }
                }
                return console.log(n, ' - простое число');
            }

        }
    }
}

function unit3() {

    function first(a) {
        return function(s) {
            return a + s;
        }
    }

    console.log(first(1)(2));
}

function unit4() {

    function metronom(a, b) {
        let t = setInterval(function() {
            (a <= b) ? console.log(a++): clearInterval(t);
        }, 1000);
    }

    metronom(5, 10);
}

function unit5() {
    const multiply = (x, n) => Math.pow(x, n);
    console.log(multiply(2, 3));
}