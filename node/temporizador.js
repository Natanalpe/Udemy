const schedule = require('node-schedule')

// segundos / minuto / horas / dia-do-mês / mês / dia-da-semana
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Execueando tarefa 1', new Date().getSeconds())
})

// após 20 segundo da tarefa 1 rodando, o setTimeout
// usará p cancel() a parara a tarefa 1
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')    
}, 20000)


const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // 1 = segunda a 5 = sexta
regra.hour = 19
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})