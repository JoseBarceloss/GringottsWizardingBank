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

        console.log(action)
    })
    .catch((err) => console.log('Erro na Function operation:',err))
}

