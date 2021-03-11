import winston, { format } from 'winston';

const { combine, simple, colorize, label } = format;

export default winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }),
        label({ message: true, label: 'Server scripts' }),
        simple(),
      ),
    }),
  ],
});
