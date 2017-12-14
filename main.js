//MIT License

//Copyright (c) 2017 Luís Victor Müller Fabris

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

var vm = require("vm");
var fs = require("fs");
var math = require("mathjs");
const commandLineArgs = require('command-line-args')
var daemon = 1;
maincmdargs = "";


function proccmdargs() {
    try {
        const optionDefinitions = [{
                name: 'daemon',
                type: Boolean
            },
            {
                name: 'eq',
                type: String,
                multiple: false
            },
            {
                name: 'error',
                type: String,
                multiple: false
            },
            {
                name: 'initial-guess',
                type: String,
                multiple: false
            },
        ];
        maincmdargs = commandLineArgs(optionDefinitions);
        if (maincmdargs.eq + "" != "undefined") {
            daemon = 0;
        }
        if (maincmdargs.daemon) {
            daemon = 1;
            console.log("Named pipe open on:");
        }
        return "" + maincmdargs.eq;
    } catch (e) {
        daemon = 1;
        console.log("Equation help:\n------------------\n  Commands:\n\n   --daemon   Listen to named pipe. If this option is used eq, error or initial-guess can't be used.\n\n   --eq=<equation>   Solve equation or equations system.\n\n   --error=<error>   Maximun Y-error.\n\n   --initial-guess<a,b,c,...,x,y,z>   Initial guesses for variable values at alphabetical order listing only used variables.\n\n\n  Examples:\n   equation --eq=\"x^2-9=y*x,y=sin(y)");
    }
}


var constantearredondamentoderivada = 1000000;

var erromaximometodonumerico = "10^-5";
//Por ordem alfabetica e variaveis presentes.
//Por exemplo se existem as variaveis a,b e x o primeiro valor é de a o segundo é de b e o terceiro é de x. Se existe somente x o primeiro valor é de x.


var valorvariaveis = ["1+1*i", "1+1*i"];



var debugvar = "";
var debugvarb = "";

var valoresvariaveisentrada = ["1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i", "1+1*i"];
var contador = 0;
while (contador < valorvariaveis.length) {
    if (math.re(math.eval("" + valorvariaveis[contador])) + "" == "0") {
        valoresvariaveis[contador] = "" + math.eval(valorvariaveis[contador] + "+0.01");
    }
    if (math.im(math.eval("" + valorvariaveis[contador])) + "" == "0") {
        valoresvariaveis[contador] = "" + math.eval(valorvariaveis[contador] + "+0.01*i");
    }
    valoresvariaveisentrada[contador] = valorvariaveis[contador];
    contador = contador + 1;
}

var script_code = fs.readFileSync(__dirname + '/script.js');
var variavelretorna = "";
var variavelentrada = proccmdargs();

var gfgjdgdhj = "";
try {
    //!!!!IMPORTANTE!!!!!!--------por este eval em uma sandbox------------------------!!!!IMPORTANTE!!!!!!
    gfgjdgdhj = math.eval(maincmdargs.error);
} catch (e) {
    gfgjdgdhj = "10^-5";
}
erromaximometodonumerico = "" + gfgjdgdhj;
//Não convergindo dependendo nas condições iniciais???
//O valor do erro Y retornado está variando de forma estranha com o erro minimo fornecido???
if (daemon + "" == "0") {
    var sandbox = {
        "variavelretorna": variavelretorna,
        "variavelentrada": variavelentrada,
        "math": math,
        "erromaximometodonumerico": erromaximometodonumerico,
        "valoresvariaveisentrada": valoresvariaveisentrada,
        "debugvar": debugvar,
        "debugvarb": debugvarb,
        "constantearredondamentoderivada": constantearredondamentoderivada
    };
    var script = vm.createScript(script_code);
    script.runInNewContext(sandbox);
    //console.log(""+sandbox.debugvar);
    console.log(sandbox.variavelretorna);
    //console.log(sandbox.debugvarb);
}
