class classTemperature {
    constructor(Celsius) {
        this.celsius = Celsius;
    }

    getFahrenheit() {
        let F = (this.celsius + 32) * 1.8;
        return parseFloat(F.toFixed(2));
    }

    getKelvin() {
        let K = this.celsius + 273;
        return K;
    }
}

let T = new classTemperature(25);
document.write("Celsius: " + T.celsius + " equal to " + T.getFahrenheit() + " Fahrenheit" + "<br>");
document.write("Celsius: " + T.celsius + " equal to " + T.getKelvin() + " Kelvin");