document.addEventListener('DOMContentLoaded', function () {
    unit1();
    unit2();
    unit3();
});

function unit1() {
    let svg1 = document.getElementById("svg1");
    svg1.addEventListener('click', () => {
        svg1.classList.toggle('active');
    });
}

function unit2() {
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener('click', () => {
        alert("Width: " + window.screen.width + ", Height: " + window.screen.height);
    });
}

function unit3() {

    let chat_window = document.getElementById('chat_window');
    let send_geo = false;
    const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com/');

    websocket.onmessage = (evt) => {
        if (!send_geo) {
            let p = document.createElement('div');
            p.classList.add('server');
            p.innerHTML = evt.data;
            chat_window.append(p);
        } else {
            send_geo = false;
        }
    }

    let send_btn = document.getElementById('send');
    send_btn.addEventListener('click', () => {
        let txt = document.getElementById('input_text').value;
        if (txt !== '') {
            let p = document.createElement('div');
            p.classList.add('user');
            p.innerHTML = txt;
            chat_window.append(p);
            websocket.send(txt);
            document.getElementById('input_text').value = '';
        }
    });
    let geo = document.getElementById('geo');
    geo.addEventListener('click', () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { coords } = position;
                let p = document.createElement('a');
                p.classList.add('user');
                p.href = 'https://www.openstreetmap.org/#map=19/' + coords.latitude + "/" + coords.longitude
                p.innerHTML = "Геолокация";
                chat_window.append(p);
                websocket.send('[Geo:' + coords.latitude + "/" + coords.longitude + "]");
                send_geo = true;
            });
        }
    });


}