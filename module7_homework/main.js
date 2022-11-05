function unit1() {
    const person = {
        city: "Moscow",
        country: "Russia"
    }
    const student = Object.create(person);
    student.ownCity = "Piter";
    student.inst = "MGU";

    function f1(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                console.log(key, obj[key]);
            }
        }
    }
    f1(student);
}

function unit2() {
    const person = {
        city: "Moscow",
        country: "Russia"
    }

    function f2(s, obj) {
        for (let key in obj) {
            if (key == s) return true;
        }
        return false;
    }
    console.log('city', f2('city', person));
}

function unit3() {
    function simple_obj() {
        return {};
    }
    let obj = simple_obj();
    console.log(obj);
}

function unit4() {
    let curentEnergy = 1000;
    console.log('Текущая загрузка: ' + curentEnergy + 'кВт./ч');

    const Pribor = {
        name: "Pribor",
        active: false,
        energy: 0,
        model: '',
        brend: '',
        location: "room",

        getInfo() {
            console.log("Устройство '" + this.name + "': " + (this.active ? "выключено" : "включено") + ". Потребляемая мощность: " + this.energy + "кВт./ч");
        },
        OnOff() {
            this.active = this.active ? false : true;
            if (this.active) {
                console.log("Устройство '" + this.name + "' включили!");
                curentEnergy += this.energy;
            } else {
                console.log("Устройство '" + this.name + "' выключили!");
                curentEnergy -= this.energy;
            }
        }
    }
    const PriborIT = Object.create(Pribor);
    const ProborInKitchen = Object.create(Pribor);

    Pribor.name = 'Пылесос';
    Pribor.energy = 500;
    Pribor.OnOff();
    Pribor.getInfo();

    PriborIT.reboot = function() {
        this.OnOff();
        this.OnOff();
        console.log("Устройство '" + this.name + "' перезагружено!");
    }
    PriborIT.name = 'Компьютер';
    PriborIT.energy = 800;
    PriborIT.active = false;
    PriborIT.OnOff();
    PriborIT.getInfo();
    PriborIT.reboot();

    ProborInKitchen.isClear = true;
    ProborInKitchen.wash = function() {
        if (this.isClear) {
            console.log("Прибор '" + this.name + "' и так уже чистый!");
        } else {
            this.isClear = true;
            console.log("Прибор '" + this.name + "' помыт! Он теперь чистый!");
        }
    }
    ProborInKitchen.name = "Миксер";
    ProborInKitchen.energy = 80;
    ProborInKitchen.isClear = false;
    ProborInKitchen.getInfo();
    ProborInKitchen.wash();

    console.log('Текущая загрузка: ' + curentEnergy + 'кВт./ч');
}

function unit5() {
    let curentEnergy = 1000;
    console.log('Текущая загрузка: ' + curentEnergy + 'кВт./ч');

    class Pribor {
        constructor(n, e) {
            this.name = n;
            this.active = false;
            this.energy = e;
            this.model = '';
            this.brend = '';
            this.location = "room";
        }
        getInfo() {
            console.log("Устройство '" + this.name + "': " + (this.active ? "выключено" : "включено") + ". Потребляемая мощность: " + this.energy + "кВт./ч");
        }
        OnOff() {
            this.active = this.active ? false : true;
            if (this.active) {
                console.log("Устройство '" + this.name + "' включили!");
                curentEnergy += this.energy;
            } else {
                console.log("Устройство '" + this.name + "' выключили!");
                curentEnergy -= this.energy;
            }
        }
    }

    class PriborIT extends Pribor {

        constructor(n, e) {
            super();
            this.name = n;
            this.active = false;
            this.energy = e;
        }
        reboot() {
            super.OnOff();
            super.OnOff();
            console.log("Устройство '" + this.name + "' перезагружено!");
        }
    }

    class ProborInKitchen extends Pribor {
        constructor(n, e, isClear) {
            super();
            this.name = n;
            this.active = false;
            this.energy = e;
            this.isClear = isClear ? true : false;
        }
        wash() {
            if (this.isClear) {
                console.log("Прибор '" + this.name + "' и так уже чистый!");
            } else {
                this.isClear = true;
                console.log("Прибор '" + this.name + "' помыт! Он теперь чистый!");
            }
        }
    }

    const vacuumCleaner = new Pribor('Пылесос', 700);
    vacuumCleaner.OnOff();
    vacuumCleaner.getInfo();

    const computer = new PriborIT('Компьютер', 850);
    computer.OnOff();
    computer.getInfo();
    computer.reboot();

    const mixer = new ProborInKitchen("Миксер", 80);
    mixer.getInfo();
    mixer.wash();

    const microvawe = new ProborInKitchen("Микроволновка", 100, true);
    microvawe.wash();

    console.log('Текущая загрузка: ' + curentEnergy + 'кВт./ч');
}