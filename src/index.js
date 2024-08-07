import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';

operation()

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
    }]).then((answer) => {
        const action = answer['action']

        if( action === 'Criar Conta') {
            createAccount()
        } else if (action === 'Depositar') {
            deposito()
        } else if (action === 'Consultar Saldo') {

        } else if (action === 'Sacar') {

        } else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o Gringotts Wizarding Bank!'))
            process.exit()
        }

    })
    .catch((err) => console.log('Erro na Function operation:',err))
}

// criar uma conta VVV

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    buildAccont()
}

// buildar a conta agora VVVV

function buildAccont() {

    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite um nome para a sua conta: '
    }]).then(answer => {
        const accountName = answer['accountName']

        console.info(accountName)

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(
                chalk.bgRed.black('Esta conta já existe, escolha outro nome!')
            )
            buildAccont()
            return
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`, 
            '{"balance": 0}', 
            function (err) {console.log('Erro na criação do json accountName: ',err)})
        
        console.log(chalk.green('Parabéns, a sua conta foi criada!'))
        operation()

    }).catch(err => console.log('Erro na function buildAccount:', err))

}

 // função para add dinheiro na conta!!

function deposito () {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then((answer) => {
        
        const accountName = answer['accountName']

        // tenho que verificar se a conta existe!

        if(!checkACcount(accountName)) {
            return deposito()
        }

    })
    .catch(err => console.log('erro na function deposito:', err))
}

function checkACcount(accountName) {
    if(!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, tente novamente!'))
        return false
    }

    return true 
}