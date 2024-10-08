class Calculate {
    constructor() {
        this.initHour = document.querySelector('#initHour');
        this.lastHour = document.querySelector('#lastHour');
        this.operation()
    }

    operation() {
        const cleanInitHour = this.initHour.value.replace(/\D+/g, '')
        const cleanLastHour = this.lastHour.value.replace(/\D+/g, '')

        let hours = cleanInitHour.slice(0,2) - cleanLastHour.slice(0,2)
        let minutes = cleanInitHour.slice(2,4) - cleanLastHour.slice(2,4)

        if(cleanInitHour.slice(2,4) > cleanLastHour.slice(2,4)) {
            hours += 1
            minutes += cleanInitHour.slice(5,7) - 60
        }

        if(cleanInitHour.slice(0,2) > cleanLastHour.slice(0,2)) {
            hours = hours - 24  
        }

        let decimalMinutes = minutes / 60;

        const result = document.querySelector('.result').innerHTML = `Hora padrão = ${this.formatTime(hours)}:${this.formatTime(minutes)} </br> Hora convertida = ${this.format(hours)},${decimalMinutes.toFixed(3).slice(3)}`
        return result
    }

    format(time) {
        if(time < 0) time = time * -1
        return time
    }

    formatTime(time) {
        if(time < 0) time = time * -1
        time < 10 ? time = `0${time}` : time
        return time
    }
}   