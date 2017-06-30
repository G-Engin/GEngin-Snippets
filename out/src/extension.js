// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
// var ai_hover = require('./ai_hover');
// var ai_completion = require('./ai_completion');
// var ai_signature = require('./ai_signature');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "g-engin" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    // var disposable = vscode.commands.registerCommand('extension.sayHello', function () {
    //     // The code you place here will be executed every time your command is executed

    //     // Display a message box to the user
    //     vscode.window.showInformationMessage('Hello World!');
    // });
    // context.subscriptions.push(disposable);

    // context.subscriptions.push(ai_hover);
    // context.subscriptions.push(ai_completion);
    // context.subscriptions.push(ai_signature);

    // context.subscriptions.push(languages.setLanguageConfiguration(
    //     'autoit', { wordPattern: /([^`~!#\%\^\&*()-\=+[{\]}\|\;\:\'\"\,.\<>\/\?\s][A-z0-9]+)/ }));
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;