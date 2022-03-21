#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 200) => new Promise((r) => setTimeout(r,ms));

async function welcome() {
    const title = chalkAnimation.glitch(
        'Who Wants To Be A SCRT Millionaire?'
    );

    await sleep();
    title.stop();

    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
        I am a process on your computer.
        If you get any questions wrong I will be ${chalk.bgRed('killed')}
        So get all of the questions right...
    `)
}

await welcome()

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?\n',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;
}

await askName()
await question1()
await question2()
await question3()
await question4()
await question5()
await question6()
await question7()
await question8()
await question9()
await question10()
await question11()
await question12()
await question13()
await question14()
await question15()
await question16()
await question17()
await question18()
await winner()

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'What is the first NFT collection that launched on Secret Network?\n',
        choices: [
            'Anons',
            'Stashh',
            'Redacted Club',
            'Tarantino NFTs',
        ]
    });
    return handleAnswer(answers.question_1 == 'Anons');
}

async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'When did Secret Smart Contracts launch on mainnet?\n',
        choices: [
            'August 2019',
            'November 2015',
            'September 2020',
            'March 2017',
        ]
    });
    return handleAnswer(answers.question_2 == 'September 2020');
}

async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'Who contributed to the Shockwave funding campaign that managed to raise $400M?\n',
        choices: [
            'Top-tier investment firms',
            'Coinbase Ventures',
            'the community through an ICO',
            'all of the above',
        ]
    });
    return handleAnswer(answers.question_3 == 'Top-tier investment firms');
}

async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'Where can I swap $SCRT for other assets with protection from front running & MEV?\n',
        choices: [
            'SecretSwap',
            'SiennaSwap',
            'ButtonSwap',
            'all of the above',
        ]
    });
    return handleAnswer(answers.question_4 == 'all of the above');
}

async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'How would you describe the Secret Network token logo?\n',
        choices: [
            'a white S on a black background',
            'a horizontal golden S on a black background',
            'an emoji with a zipped mouth',
            'a lightning followed by an explosione',
        ]
    });
    return handleAnswer(answers.question_5 == 'a white S on a black background');
}

async function question6() {
    const answers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: 'Which of these is a Secret Network blockchain explorer? (2 correct answers)\n',
        choices: [
            'SecretNodes',
            'EtherScan',
            'BlockChair',
            'MintScan',
        ]
    });
    return handleAnswer(answers.question_6 == 'SecretNodes' || 'MintScan');
}

async function question7() {
    const answers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: 'The Secret Network source code is:\n',
        choices: [
            'Private by Default',
            'Protected',
            'Open Source',
            'Copyrighted',
        ]
    });
    return handleAnswer(answers.question_7 == 'Open Source');
}

async function question8() {
    const answers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'What are the active community contributors of Secret Network called?\n',
        choices: [
            'Private Agents',
            'Secret Agents',
            'Agents of the round table',
            'Anons',
        ]
    });
    return handleAnswer(answers.question_8 == 'Secret Agents');
}

async function question9() {
    const answers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: 'Which official Secret Network Telegram and Discord channels links should you bookmark?\n',
        choices: [
            't.me/SCRTcommunity, chat.scrt.network',
            't.me/SCRTsociety, chat.secret.network',
            't.me/SecretNetwork, discord.scrt.network',
            't.me/SecretNetwork, community.secret.network',
        ]
    });
    return handleAnswer(answers.question_9 == 't.me/SCRTcommunity, chat.scrt.network');
}

async function question10() {
    const answers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: 'Where should the community discuss a governance proposal?\n',
        choices: [
            'on the Secret Network Forum',
            'in the governance channel in Discord',
            'on-chain through Keplr wallet',
            'First in the #governance channel in Discord, then on the Secret Network Forum',
        ]
    });
    return handleAnswer(answers.question_10 == 'First in the #governance channel in Discord, then on the Secret Network Forum');
}

async function question11() {
    const answers = await inquirer.prompt({
        name: 'question_11',
        type: 'list',
        message: 'What sentence best describes the Secret Network ethos/philosophy?\n',
        choices: [
            'Privacy is a human right',
            'Blockchain is meaningless without privacy',
            'Educating the world a block at a time',
            'Making blockchain great again',
        ]
    });
    return handleAnswer(answers.question_11 == 'Privacy is a human right');
}

async function question12() {
    const answers = await inquirer.prompt({
        name: 'question_12',
        type: 'list',
        message: `Where can people ask for some SCRT if they're out of gas?\n`,
        choices: [
            'on the official testnet faucet',
            'on the website by filling a form',
            'via @SecretNetwork twitter DMs',
            'in the #secret-pizza channel on the official discord server',
        ]
    });
    return handleAnswer(answers.question_12 == 'in the #secret-pizza channel on the official discord server');
}

async function question13() {
    const answers = await inquirer.prompt({
        name: 'question_13',
        type: 'list',
        message: `What is a viewing key?\n`,
        choices: [
            'a passphrase protecting your wallet',
            'a user generated key to view private metadata',
            'the secret key to access the source code',
            'the key needed to sign all smart contracts on Secret Network',
        ]
    });
    return handleAnswer(answers.question_13 == 'a user generated key to view private metadata');
}

async function question14() {
    const answers = await inquirer.prompt({
        name: 'question_14',
        type: 'list',
        message: `What makes Secret Network different from other privacy blockchains?\n`,
        choices: [
            'Privacy Preserving Smart Contracts',
            'Decentralisation',
            'fast TPS',
            'Pizza Delivery',
        ]
    });
    return handleAnswer(answers.question_14 == 'Privacy Preserving Smart Contracts');
}



async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    const responses = [`That's a legit answer.`,`Woo-hoo!`,`Ooh wee.`,`In the pipe, 5x5.`,`Keep going!`];
    
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}. ${responses[Math.floor(Math.random() * responses.length)]}` });
    } else {
        spinner.error({ text: `${chalk.bgRed(`Game Over`)}, you lose ${playerName}!`});
        process.exit(1);
    }
}

function winner() {
    console.clear();
    const msg = `Congrats ${playerName}!\n$ 1 , 0 0 0 , 0 0 0`;

    figlet.text(msg, {
        font: 'Slant',

    }, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    });
}