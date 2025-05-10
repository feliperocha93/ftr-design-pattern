const Logger = require('./Logger');

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log('Log 1');
logger2.log('Log 2');

logger1.print(); // Saída: 2
logger2.print(); // Saída: 2
