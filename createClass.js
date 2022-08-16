class Logger {

    constructor(mes) {
        this.mes = mes;
    }
    log() {
        console.log(this.mes)
        
    }
}
const logger = new Logger("Hello World!");
logger.log();