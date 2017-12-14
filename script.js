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

var eq = ["x", "y", "z-0"];
var valorvariaveis = valoresvariaveisentrada;
debugvar = debugvar + "a";
var erro = math.eval(erromaximometodonumerico + "");
var metodoconvergiu = 1;
var valorerroantigo = 0;
var convergenciafinalissimo = "0";
//----------------------------------------------------------------------------------------
var variaveis = [];
var jacobiano = [];
var matrizresultados = [];

function achavariaveis() {
    var stringfuncoes = 0;
    var numeroeq = eq.length;
    var contadorfunc = 0;
    var contadorfuncb = 0;
    var resultadovariavelnaoencontrada = "-1";
    var erroatual = erro + 1000;
    while (contadorfunc < numeroeq) {
        stringfuncoes = stringfuncoes + "+" + eq[contadorfunc] + "";
        contadorfunc = contadorfunc + 1;
    }
    var str = stringfuncoes;
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])a(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "a";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])b(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "b";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])c(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "c";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])d(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "d";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])e(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "e";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])f(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "f";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])g(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "g";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])h(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "h";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])j(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "j";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])k(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "k";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])l(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "l";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])m(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "m";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])n(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "n";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])o(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "o";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])p(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "p";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])q(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "q";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])r(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "r";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])s(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "s";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])t(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "t";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])u(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "u";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])v(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "v";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])w(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "w";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])x(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "x";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])y(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "y";
        contadorfuncb = contadorfuncb + 1;
    }
    if ("" + str.search("([^abcdefghijklmnopqrstuvwxyz])z(?=[^abcdefghijklmnopqrstuvwxyz])") != resultadovariavelnaoencontrada) {
        variaveis[contadorfuncb] = "z";
        contadorfuncb = contadorfuncb + 1;
    }
}

function substituifuncoestrigonometricasfinal(a, b, c) {
    var hfjjhfhjjfjhacthhtr = new RegExp("\\" + b, "g");
    var resultado = a.replace(hfjjhfhjjfjhacthhtr, "" + c + "");
    //console.log(resultado);
    return resultado;
}

function substituifuncoestrigonometricasfinalb(a, b, c) {
    var hfjjhfhjjfjhacthhtr = new RegExp("" + b, "g");
    var resultado = a.replace(hfjjhfhjjfjhacthhtr, "" + c + "");
    //console.log("b"+a+b+c+":"+resultado);
    return resultado;
}

function substituifuncoestrigonometricas(funcao) {
    funcao = substituifuncoestrigonometricasfinal(funcao, "T", "asech"); //189
    funcao = substituifuncoestrigonometricasfinal(funcao, "#", "sin");
    funcao = substituifuncoestrigonometricasfinal(funcao, "A", "cos");
    funcao = substituifuncoestrigonometricasfinal(funcao, "!", "tan");
    funcao = substituifuncoestrigonometricasfinal(funcao, "@", "atan");
    funcao = substituifuncoestrigonometricasfinal(funcao, "I", "acos");
    funcao = substituifuncoestrigonometricasfinal(funcao, "M", "asin");
    funcao = substituifuncoestrigonometricasfinal(funcao, "X", "sinh"); //199
    funcao = substituifuncoestrigonometricasfinal(funcao, "Y", "cosh"); //198
    funcao = substituifuncoestrigonometricasfinal(funcao, "Z", "tanh"); //197
    funcao = substituifuncoestrigonometricasfinal(funcao, "L", "asinh"); //196
    funcao = substituifuncoestrigonometricasfinal(funcao, "G", "acosh"); //195
    funcao = substituifuncoestrigonometricasfinal(funcao, "P", "acsc"); //194
    funcao = substituifuncoestrigonometricasfinal(funcao, "J", "log10"); //193
    funcao = substituifuncoestrigonometricasfinal(funcao, "Q", "sec"); //192
    funcao = substituifuncoestrigonometricasfinal(funcao, "E", "asec"); //191
    funcao = substituifuncoestrigonometricasfinal(funcao, "R", "csch"); //190
    funcao = substituifuncoestrigonometricasfinal(funcao, "$", "csc"); //188
    funcao = substituifuncoestrigonometricasfinal(funcao, "P", "acsc"); //190
    funcao = substituifuncoestrigonometricasfinal(funcao, "R", "csch"); //189
    funcao = substituifuncoestrigonometricasfinal(funcao, "O", "acsch"); //188
    funcao = substituifuncoestrigonometricasfinal(funcao, "V", "sech"); //190
    funcao = substituifuncoestrigonometricasfinal(funcao, "H", "cot"); //189
    funcao = substituifuncoestrigonometricasfinal(funcao, "F", "acot"); //188
    //funcao=substituifuncoestrigonometricasfinal(funcao,"V","cot");//190
    funcao = substituifuncoestrigonometricasfinal(funcao, "C", "acoth"); //189
    funcao = substituifuncoestrigonometricasfinal(funcao, "&", "atanh"); //188
    funcao = substituifuncoestrigonometricasfinal(funcao, "¨", "sqrt"); //190
    funcao = substituifuncoestrigonometricasfinal(funcao, "K", "log"); //189
    //console.log(funcao);
    return funcao;
}
//calcula a derivada
//                posicao da     |posicao da
//                variavel no    |equacao no
//                array variaveis|array eq  
function derivada(posvariavel, equacaopos) {
    var parametros = {
        B: math.eval("(" + valorvariaveis[posvariavel] + "+0*i)")
    };
    var parametrosb = {
        B: math.eval(("(" + valorvariaveis[posvariavel]) + "+10^-9)")
    };
    //substitui a variavel da derivada por acv.
    //([^abcdefghijklmnopqrstuvwxyz])a(?=[^abcdefghijklmnopqrstuvwxyz])
    var exps = new RegExp("" + variaveis[posvariavel] + "", "g");
    var resultado = eq[equacaopos].replace(exps, "B");
    //substitui todas as variaveis que serão constantes na derivada.
    //aqui não precisamos mais nos preocupar com a variavel da derivada pois ela ja foi substituida por acv.
    var contador = 0;
    while (contador < (variaveis.length)) {
        var expsb = new RegExp("" + variaveis[contador] + "", "g");
        //-----------------
        //aqui 0 deve ser trocado pelo valor da variavel em questao.
        var resultado = resultado.replace(expsb, "(" + valorvariaveis[contador] + ')');
        contador = contador + 1;
    }
    resultado = substituifuncoestrigonometricas(resultado);
    //retorna valor da derivada.
    //alert(math.eval("("+(math.eval(resultado,parametrosb)+"-("+(math.eval(resultado,parametros)+")"))+")/(10^-9)"));
    return math.eval("(" + (math.eval(resultado, parametrosb) + "-(" + (math.eval(resultado, parametros) + ")")) + ")/(10^-9)");
}

function iniciamatrizjacobiana() {
    var a = 0;
    var numeroeq = eq.length;
    while (a < numeroeq) {
        jacobiano[a] = new Array();
        a = a + 1;
    }
}

function calculajacobiano() {
    var x = 0;
    var y = 0;
    var numeroeq = eq.length;
    var numerovar = eq.length;
    iniciamatrizjacobiana();
    while (x < numerovar) {
        while (y < numeroeq) {
            jacobiano[x][y] = math.eval("" + math.round(math.eval("" + derivada(x, y) + "*" + constantearredondamentoderivada)) + "/" + constantearredondamentoderivada);
            //alert(jacobiano[x][y]);
            y = y + 1;
        }
        y = 0;
        x = x + 1;
    }
}

function calculafuncao(equacaopos) {
    //substitui todas as variaveis.
    var contador = 0;
    var resultado = eq[equacaopos];
    while (contador < (variaveis.length)) {
        var expsb = new RegExp("" + variaveis[contador], "g");
        var resultado = resultado.replace(expsb, "(" + valorvariaveis[contador] + ')');
        contador = contador + 1;
    }
    resultado = substituifuncoestrigonometricas(resultado);
    //alert(math.eval(resultado));
    //retorna valor da funcao.
    return math.eval(resultado);
}

function calculamatrizresultados() {
    var numeroeq = eq.length;
    var contador = 0;
    while (contador < numeroeq) {
        matrizresultados[contador] = calculafuncao(contador);
        contador = contador + 1;
    }
}
var limiteiteracoesalcancado = "0";
debugvar = debugvar + "b";

function resolveequacao() {
    var ghdjdghdjgddghf = new Date();
    debugvarb = debugvarb + "Inicio:" + (new Date() - ghdjdghdjgddghf) + "\n";
    achavariaveis();
    var dettotal = 0;
    var dettotalanteriorgfjdhgdu = 0;
    var numeroeq = eq.length;
    var numerovariaveis = eq.length;
    var vetordeterminantes = [];
    var contador = 0;
    var contadorb = 0;
    var contadorc = 0;
    var contadord = 0;
    var menorvalor = 0;
    var matrizsubstituida = [];
    var a = 0;
    var x = 0;
    var y = 0;
    erroatual = erro + 1000;
    var continua = "1";
    var numeroiteracoesatual = 0;
    numeroiteracoesatual = 0;
    debugvarb = debugvarb + "Linha 270:" + (new Date() - ghdjdghdjgddghf) + "\n";
    while (a < numeroeq) {
        matrizsubstituida[a] = new Array();
        a = a + 1;
    }
    debugvarb = debugvarb + "Linha 274:" + (new Date() - ghdjdghdjgddghf) + "\n";
    while (math.abs(erroatual) > math.abs(erro)) {
        numeroiteracoesatual = numeroiteracoesatual + 1;
        debugvar = debugvar + "\n\n\nNumero iterações:" + numeroiteracoesatual + "\nErro-atual:" + math.abs(erroatual) + "\n\nErro:" + math.abs(erro);
        if (numeroiteracoesatual > 500) {
            debugvar = debugvar + ("\nbreak line 272.");
            limiteiteracoesalcancado = "1";
            break;
        }
        menorvalor = 0;
        debugvarb = debugvarb + "Linha 285:" + (new Date() - ghdjdghdjgddghf) + "\n";
        //Primeiro calculamos o primeiro jacobiano e a matriz com os valores da funcao calculados nos valores iniciais fornecidos no array valorvariaveis.
        calculajacobiano();
        calculamatrizresultados();
        dettotal = math.det(jacobiano);
        if (dettotal == 0) {
            debugvar = debugvar + "\n\ncontinua=0 line 285";
            continua = "0";
        } else {
            dettotalanteriorgfjdhgdu = dettotal;
        }
        while (x < numeroeq) {
            while (y < numeroeq) {
                matrizsubstituida[x][y] = jacobiano[x][y];
                //alert(matrizsubstituida[x][y]);
                y = y + 1;
            }
            y = 0;
            x = x + 1;
        }
        x = 0;
        y = 0;
        debugvarb = debugvarb + "Linha 307:" + (new Date() - ghdjdghdjgddghf) + "\n";
        //Agora calculamos os determinantes substituindo matrizresultados nas colunas
        while (contador < numeroeq) {
            while (contadorb < numerovariaveis) {
                matrizsubstituida[contador][contadorb] = math.eval("-(" + matrizresultados[contadorb] + ")");
                //alert(""+matrizresultados[contadorb]);
                debugvar = debugvar + "line 301" + (math.eval("-(" + matrizresultados[contadorb] + ")"));
                contadorb = contadorb + 1;
            }
            vetordeterminantes[contador] = math.det(matrizsubstituida);
            //alert(matrizsubstituida[0]);
            contadorb = 0;
            contador = contador + 1;
            //if(vetordeterminantes[contador]==0){
            //if(continua=="1"){
            //continua="0";
            //}
            //}
            //zerar matrizsubstituida
            debugvarb = debugvarb + "Linha 326:" + (new Date() - ghdjdghdjgddghf) + "\n";
            while (x < numeroeq) {
                while (y < numeroeq) {
                    matrizsubstituida[x][y] = jacobiano[x][y];
                    y = y + 1;
                }
                y = 0;
                x = x + 1;
            }
            x = 0;
            y = 0;
        }
        contador = 0;
        contadorb = 0;
        contadorc = 0;
        debugvarb = debugvarb + "Linha 341:" + (new Date() - ghdjdghdjgddghf) + "\n";
        if (continua == "1") {
            while (contadorc < numeroeq) {
                valorvariaveis[contadorc] = math.eval("((" + vetordeterminantes[contadorc] + ")/(" + dettotal + "))+(" + valorvariaveis[contadorc] + ")");
                debugvar = debugvar + ("\nline 330:" + valorvariaveis[contadorc]);
                //alert(("(("+vetordeterminantes[contadorc]+")/("+dettotal+"))+("+valorvariaveis[contadorc]+")"));
                contadorc = contadorc + 1;
            }
        }

        //A parte abaixo foi adicionada depois. se continua é 0 O determinante é 0 então o resultado é 0. Não devemos dividir para achar o valor de valorvariaveis pois não podemos fazer uma divisão por 0 mais devemos colocar 0 nas variaveis para não gerar erro.
        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------
        debugvar = debugvar + "\n\n\nValor determinante dettotal:" + dettotal;

        debugvar = debugvar + "\n\n\nValor vetordeterminantes--------------------------------:" + vetordeterminantes;


        debugvarb = debugvarb + "Linha 361:" + (new Date() - ghdjdghdjgddghf) + "\n";


        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------
        contadorc = 0;
        //calcular erro.
        if (continua == "1") {
            calculamatrizresultados();
            debugvar = debugvar + matrizresultados;
        }
        menorvalor = (math.abs(math.re(matrizresultados[0])) + math.abs(math.im(matrizresultados[0])));
        contadord = 0;
        var menorvalor = math.abs(matrizresultados[0]);
        while (contadord < numeroeq) {
            menorvalor = menorvalor + (math.abs(math.re(matrizresultados[contadord])) + math.abs(math.im(matrizresultados[contadord])));
            contadord = contadord + 1;
        }
        //alert(menorvalor);
        contadord = 0;
        erroatual = menorvalor;
        valorerroantigo = erroatual;
        debugvar = debugvar + "Erro atual final while line 355:" + erroatual;
        if (continua == "0") {
            debugvar = debugvar + "break line 356";
            metodoconvergiu = "0";
            erroatual = 0;
        }
        debugvar = debugvar + "\nValores variaveis line 358: " + valorvariaveis[0] + "   ,   " + valorvariaveis[1] + "        ,         " + valorvariaveis[2];
        debugvar = debugvar + "\nErro line 359: " + matrizresultados[0] + "  ,  " + matrizresultados[1] + "    menorvalor:" + erroatual;
    }
    var cntscript1 = 0;
    var resultadofinal = "";
    while (cntscript1 < variaveis.length) {
        if (cntscript1 == 0) {
            resultadofinal = resultadofinal + "   {'" + variaveis[cntscript1] + "':'" + math.eval("(" + math.round(math.eval("(" + valorvariaveis[cntscript1] + ")/" + erro)) + ")*(" + erro + ")") + "','Yerror':'" + math.eval("(" + math.round(math.eval("(" + matrizresultados[cntscript1] + ")/" + erro)) + ")*" + (erro)) + "'}";
            if ("" + convergenciafinalissimo != "1") {
                if (matrizresultados[cntscript1] > 0.01) {
                    convergenciafinalissimo = "1";

                }
                if (matrizresultados[cntscript1] < -0.01) {
                    convergenciafinalissimo = "1";

                }
            }

        } else {
            resultadofinal = resultadofinal + ",\n\t   {'" + variaveis[cntscript1] + "':'" + math.eval("(" + math.round(math.eval("(" + valorvariaveis[cntscript1] + ")/" + erro)) + ")*(" + erro + ")") + "','Yerror':'" + math.eval("(" + math.round(math.eval("(" + matrizresultados[cntscript1] + ")/" + erro)) + ")*" + (erro)) + "'}";
            if ("" + convergenciafinalissimo != "1") {
                if (matrizresultados[cntscript1] > 0.01) {
                    convergenciafinalissimo = "1";

                }
                if (matrizresultados[cntscript1] < -0.01) {
                    convergenciafinalissimo = "1";

                }
            }


        }
        cntscript1 = cntscript1 + 1;
    }
    return resultadofinal;
}
//Se retornar 1 a expressão tem codigo não permitido.
//Se retornar 0 a expressão não tem codigo não permitido.


objeqscript = new Object();
objeqscript.acsch = '1';
objeqscript.acsc = '1';
objeqscript.csch = '1';
objeqscript.csc = '1';
objeqscript.atanh = '1';
objeqscript.asec = '1';
objeqscript.asinh = '1';
objeqscript.atan = '1';


objeqscript.acos = '1';
objeqscript.asin = '1';
objeqscript.sin = '1';
objeqscript.cot = '1';
objeqscript.sqrt = '1';
objeqscript.log = '1';
objeqscript.log10 = '1';

objeqscript.asech = '1';
objeqscript.acosh = '1';
objeqscript.acsc = '1';
objeqscript.sinh = '1';
objeqscript.cosh = '1';
objeqscript.tanh = '1';
objeqscript.cos = '1';
objeqscript.tan = '1';
objeqscript.sech = '1';
objeqscript.sec = '1';
objeqscript.acoth = '1';
objeqscript.acot = '1';

function verificaexpressao(exp) {
    exp = exp.replace(new RegExp("\\" + '=', "g"), "+");
    var reg = /(?:[a-z$_][a-z0-9$_]*)|(?:[;={}\[\]"'!&<>^\\?:])/ig,
        valid = true;
    exp = exp.replace(reg, function($0) {
        if (objeqscript.hasOwnProperty($0.toLowerCase()))
            return "math." + $0.toLowerCase();
        else
            valid = false;
    });
    if (!valid)
        return 1;
    else
        return 0;
}

function verificaexpressaofinal(exp) {
    var contadorinternoverificacaoremovevariaveis = 0;
    while (verificaexpressao(exp) > 0) {
        exp = exp.replace(new RegExp("\\" + '(' + '([abcdefghijklmnopqrstuvwxyz])' + '\\+', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '(' + '([abcdefghijklmnopqrstuvwxyz])' + '\\-', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '(' + '([abcdefghijklmnopqrstuvwxyz])' + '\\*', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '(' + '([abcdefghijklmnopqrstuvwxyz])' + '\\/', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '(' + '([abcdefghijklmnopqrstuvwxyz])' + '\\)', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '(' + '([abcdefghijklmnopqrstuvwxyz])' + '\\^', "g"), "+");


        exp = exp.replace(new RegExp("\\" + '^' + '([abcdefghijklmnopqrstuvwxyz])' + '\\+', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '^' + '([abcdefghijklmnopqrstuvwxyz])' + '\\-', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '^' + '([abcdefghijklmnopqrstuvwxyz])' + '\\*', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '^' + '([abcdefghijklmnopqrstuvwxyz])' + '\\/', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '^' + '([abcdefghijklmnopqrstuvwxyz])' + '\\)', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '^' + '([abcdefghijklmnopqrstuvwxyz])' + '\\^', "g"), "+");

        exp = exp.replace(new RegExp("\\" + '+' + '([abcdefghijklmnopqrstuvwxyz])' + '\\+', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '+' + '([abcdefghijklmnopqrstuvwxyz])' + '\\-', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '+' + '([abcdefghijklmnopqrstuvwxyz])' + '\\*', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '+' + '([abcdefghijklmnopqrstuvwxyz])' + '\\/', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '+' + '([abcdefghijklmnopqrstuvwxyz])' + '\\)', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '+' + '([abcdefghijklmnopqrstuvwxyz])' + '\\^', "g"), "+");


        exp = exp.replace(new RegExp("\\" + '-' + '([abcdefghijklmnopqrstuvwxyz])' + '\\+', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '-' + '([abcdefghijklmnopqrstuvwxyz])' + '\\-', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '-' + '([abcdefghijklmnopqrstuvwxyz])' + '\\*', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '-' + '([abcdefghijklmnopqrstuvwxyz])' + '\\/', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '-' + '([abcdefghijklmnopqrstuvwxyz])' + '\\)', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '-' + '([abcdefghijklmnopqrstuvwxyz])' + '\\^', "g"), "+");


        exp = exp.replace(new RegExp("\\" + '*' + '([abcdefghijklmnopqrstuvwxyz])' + '\\+', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '*' + '([abcdefghijklmnopqrstuvwxyz])' + '\\-', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '*' + '([abcdefghijklmnopqrstuvwxyz])' + '\\*', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '*' + '([abcdefghijklmnopqrstuvwxyz])' + '\\/', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '*' + '([abcdefghijklmnopqrstuvwxyz])' + '\\)', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '*' + '([abcdefghijklmnopqrstuvwxyz])' + '\\^', "g"), "+");

        exp = exp.replace(new RegExp("\\" + '/' + '([abcdefghijklmnopqrstuvwxyz])' + '\\+', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '/' + '([abcdefghijklmnopqrstuvwxyz])' + '\\-', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '/' + '([abcdefghijklmnopqrstuvwxyz])' + '\\*', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '/' + '([abcdefghijklmnopqrstuvwxyz])' + '\\/', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '/' + '([abcdefghijklmnopqrstuvwxyz])' + '\\)', "g"), "+");
        exp = exp.replace(new RegExp("\\" + '/' + '([abcdefghijklmnopqrstuvwxyz])' + '\\^', "g"), "+");

        exp = exp.replace(new RegExp('\\^', "g"), "+");

        contadorinternoverificacaoremovevariaveis = contadorinternoverificacaoremovevariaveis + 1;
        if (contadorinternoverificacaoremovevariaveis > 30) {
            break;
        }
    }
    return verificaexpressao(exp);
}

function substituifuncoestrigonometricasinvertido(funcao) {
    funcao = substituifuncoestrigonometricasfinalb(funcao, "acsch", "O"); //188
    funcao = substituifuncoestrigonometricasfinalb(funcao, "asech", "T"); //189

    funcao = substituifuncoestrigonometricasfinalb(funcao, "acsc", "P"); //190
    funcao = substituifuncoestrigonometricasfinalb(funcao, "csch", "R"); //189
    funcao = substituifuncoestrigonometricasfinalb(funcao, "csc", "$"); //188
    funcao = substituifuncoestrigonometricasfinalb(funcao, "atanh", "&"); //188

    funcao = substituifuncoestrigonometricasfinalb(funcao, "asec", "E"); //191

    funcao = substituifuncoestrigonometricasfinalb(funcao, "asinh", "L"); //196
    funcao = substituifuncoestrigonometricasfinalb(funcao, "acosh", "G"); //195
    funcao = substituifuncoestrigonometricasfinalb(funcao, "acsc", "P"); //194
    funcao = substituifuncoestrigonometricasfinalb(funcao, "sinh", "X"); //199
    funcao = substituifuncoestrigonometricasfinalb(funcao, "cosh", "Y"); //198
    funcao = substituifuncoestrigonometricasfinalb(funcao, "tanh", "Z"); //197
    funcao = substituifuncoestrigonometricasfinalb(funcao, "atan", "@");
    funcao = substituifuncoestrigonometricasfinalb(funcao, "acos", "I");
    funcao = substituifuncoestrigonometricasfinalb(funcao, "asin", "M");
    funcao = substituifuncoestrigonometricasfinalb(funcao, "sin", "#");
    funcao = substituifuncoestrigonometricasfinalb(funcao, "cos", "A");
    funcao = substituifuncoestrigonometricasfinalb(funcao, "tan", "!");
    funcao = substituifuncoestrigonometricasfinalb(funcao, "sech", "V"); //190

    funcao = substituifuncoestrigonometricasfinalb(funcao, "sec", "Q"); //192
    funcao = substituifuncoestrigonometricasfinalb(funcao, "log10", "J"); //193
    funcao = substituifuncoestrigonometricasfinalb(funcao, "acoth", "C"); //189
    funcao = substituifuncoestrigonometricasfinalb(funcao, "acot", "F"); //188

    funcao = substituifuncoestrigonometricasfinalb(funcao, "cot", "H"); //189
    //funcao=substituifuncoestrigonometricasfinalb(funcao,"cot","V");//190

    funcao = substituifuncoestrigonometricasfinalb(funcao, "sqrt", "¨"); //190
    funcao = substituifuncoestrigonometricasfinalb(funcao, "log", "K"); //189
    //console.log(funcao);
    return funcao;
}

function isola(equacao) {
    var primeiraparte = equacao.substr(0, equacao.indexOf('='));
    var segundaparte = equacao.substr(equacao.indexOf('=') + 1, equacao.length);
    return primeiraparte + "-(+" + segundaparte + ")";
}
var tempoinicio = 0;

function resolveequacaochamadafuncao() {
    eq = ["x", "y", "z-0"];
    //valorvariaveis=valoresvariaveisentrada;
    valorvariaveis = ["" + math.re(math.eval((valoresvariaveisentrada[0]))), "" + math.re(math.eval((valoresvariaveisentrada[1]))), "" + math.re(math.eval((valoresvariaveisentrada[2]))), "" + math.re(math.eval((valoresvariaveisentrada[3]))), "" + math.re(math.eval((valoresvariaveisentrada[4]))), "" + math.re(math.eval((valoresvariaveisentrada[5]))), "" + math.re(math.eval((valoresvariaveisentrada[6]))), "" + math.re(math.eval((valoresvariaveisentrada[7]))), "" + math.re(math.eval((valoresvariaveisentrada[8]))), "" + math.re(math.eval((valoresvariaveisentrada[9]))), "" + math.re(math.eval((valoresvariaveisentrada[10]))), "" + math.re(math.eval((valoresvariaveisentrada[11]))), "" + math.re(math.eval((valoresvariaveisentrada[12]))), "" + math.re(math.eval((valoresvariaveisentrada[13]))), "" + math.re(math.eval((valoresvariaveisentrada[14]))), "" + math.re(math.eval((valoresvariaveisentrada[15]))), "" + math.re(math.eval((valoresvariaveisentrada[16]))), "" + math.re(math.eval((valoresvariaveisentrada[17]))), "" + math.re(math.eval((valoresvariaveisentrada[18]))), "" + math.re(math.eval((valoresvariaveisentrada[19]))), "" + math.re(math.eval((valoresvariaveisentrada[20]))), "" + math.re(math.eval((valoresvariaveisentrada[21]))), "" + math.re(math.eval((valoresvariaveisentrada[22]))), "" + math.re(math.eval((valoresvariaveisentrada[23]))), "" + math.re(math.eval((valoresvariaveisentrada[24]))), "" + math.re(math.eval((valoresvariaveisentrada[25])))];
    erro = math.eval(erromaximometodonumerico + "");
    metodoconvergiu = 1;
    valorerroantigo = 0;
    //----------------------------------------------------------------------------------------
    variaveis = [];
    jacobiano = [];
    matrizresultados = [];
    convergenciafinalissimo = "0";



    tempoinicio = new Date();
    var equacoesaresolverapi = variavelentrada;
    var arr = equacoesaresolverapi.split(",");
    eq = arr;
    var contadorverificacaoexpressao = 0;
    var resultadofinalverificacaoexpressao = 0;
    while (contadorverificacaoexpressao < eq.length) {
        eq[contadorverificacaoexpressao] = substituifuncoestrigonometricasinvertido("" + isola(eq[contadorverificacaoexpressao]));
        resultadofinalverificacaoexpressao = resultadofinalverificacaoexpressao + verificaexpressaofinal('+' + substituifuncoestrigonometricas(eq[contadorverificacaoexpressao]) + '+0');
        eq[contadorverificacaoexpressao] = eq[contadorverificacaoexpressao] + '+0';
        contadorverificacaoexpressao = contadorverificacaoexpressao + 1;
    }
    if (resultadofinalverificacaoexpressao < 1) {
        var tempofinal = new Date() - tempoinicio;
        try {
            variavelretorna = "{\n\t" + "'Equation-solution':{\n\t" + resolveequacao() + "\n\t}\n\t'Processing-info':{\n\t\t{'Processing-time':'" + (new Date() - tempoinicio) + "ms'},\n\t\t{'Numerical-method':'Newton-Raphson'}\n\t}\n}";
            if (convergenciafinalissimo != "0") {
                resolveequacaochamadafuncaob();

            }

        } catch (err) {
            variavelretorna = "Error!! Check equation for typos. Error code:2";

        }
    }

    if (resultadofinalverificacaoexpressao > 0) {
        variavelretorna = "Error!! Check equation for typos.";
    }



}

function resolveequacaochamadafuncaob() {
    eq = ["x", "y", "z-0"];
    valorvariaveis = valoresvariaveisentrada;
    erro = math.eval(erromaximometodonumerico + "");
    metodoconvergiu = 1;
    valorerroantigo = 0;
    //----------------------------------------------------------------------------------------
    variaveis = [];
    jacobiano = [];
    matrizresultados = [];
    convergenciafinalissimo = "0";
    var equacoesaresolverapi = variavelentrada;
    var arr = equacoesaresolverapi.split(",");
    eq = arr;
    var contadorverificacaoexpressao = 0;
    var resultadofinalverificacaoexpressao = 0;
    while (contadorverificacaoexpressao < eq.length) {
        eq[contadorverificacaoexpressao] = substituifuncoestrigonometricasinvertido("" + isola(eq[contadorverificacaoexpressao]));
        resultadofinalverificacaoexpressao = resultadofinalverificacaoexpressao + verificaexpressaofinal('+' + substituifuncoestrigonometricas(eq[contadorverificacaoexpressao]) + '+0');
        eq[contadorverificacaoexpressao] = eq[contadorverificacaoexpressao] + '+0';
        contadorverificacaoexpressao = contadorverificacaoexpressao + 1;
    }
    if (resultadofinalverificacaoexpressao < 1) {
        var tempofinal = new Date() - tempoinicio;
        try {
            variavelretorna = "{\n\t" + "'Equation-solution':{\n\t" + resolveequacao() + "\n\t}\n\t'Processing-info':{\n\t\t{'Processing-time':'" + (new Date() - tempoinicio) + "ms'},\n\t\t{'Numerical-method':'Newton-Raphson'}\n\t}\n}";
            if (convergenciafinalissimo != "0") {
                valorvariaveis = valoresvariaveisentrada;
                resolveequacaochamadafuncaoc();

            }

        } catch (err) {
            variavelretorna = "Error!! Check equation for typos. Error code:2";

        }
    }

    if (resultadofinalverificacaoexpressao > 0) {
        variavelretorna = "Error!! Check equation for typos.";
    }



}

function resolveequacaochamadafuncaoc() {
    eq = ["x", "y", "z-0"];
    valorvariaveis = ["" + math.im(math.eval((valoimsvariaveisentrada[0]))), "" + math.im(math.eval((valoimsvariaveisentrada[1]))), "" + math.im(math.eval((valoimsvariaveisentrada[2]))), "" + math.im(math.eval((valoimsvariaveisentrada[3]))), "" + math.im(math.eval((valoimsvariaveisentrada[4]))), "" + math.im(math.eval((valoimsvariaveisentrada[5]))), "" + math.im(math.eval((valoimsvariaveisentrada[6]))), "" + math.im(math.eval((valoimsvariaveisentrada[7]))), "" + math.im(math.eval((valoimsvariaveisentrada[8]))), "" + math.im(math.eval((valoimsvariaveisentrada[9]))), "" + math.im(math.eval((valoimsvariaveisentrada[10]))), "" + math.im(math.eval((valoimsvariaveisentrada[11]))), "" + math.im(math.eval((valoimsvariaveisentrada[12]))), "" + math.im(math.eval((valoimsvariaveisentrada[13]))), "" + math.im(math.eval((valoimsvariaveisentrada[14]))), "" + math.im(math.eval((valoimsvariaveisentrada[15]))), "" + math.im(math.eval((valoimsvariaveisentrada[16]))), "" + math.im(math.eval((valoimsvariaveisentrada[17]))), "" + math.im(math.eval((valoimsvariaveisentrada[18]))), "" + math.im(math.eval((valoimsvariaveisentrada[19]))), "" + math.im(math.eval((valoimsvariaveisentrada[20]))), "" + math.im(math.eval((valoimsvariaveisentrada[21]))), "" + math.im(math.eval((valoimsvariaveisentrada[22]))), "" + math.im(math.eval((valoimsvariaveisentrada[23]))), "" + math.im(math.eval((valoimsvariaveisentrada[24]))), "" + math.im(math.eval((valoimsvariaveisentrada[25])))];
    erro = math.eval(erromaximometodonumerico + "");
    metodoconvergiu = 1;
    valorerroantigo = 0;
    //----------------------------------------------------------------------------------------
    variaveis = [];
    jacobiano = [];
    matrizresultados = [];
    convergenciafinalissimo = "0";



    //var tempoinicio=new Date();
    var equacoesaresolverapi = variavelentrada;
    var arr = equacoesaresolverapi.split(",");
    eq = arr;
    var contadorverificacaoexpressao = 0;
    var resultadofinalverificacaoexpressao = 0;
    while (contadorverificacaoexpressao < eq.length) {
        eq[contadorverificacaoexpressao] = substituifuncoestrigonometricasinvertido("" + isola(eq[contadorverificacaoexpressao]));
        resultadofinalverificacaoexpressao = resultadofinalverificacaoexpressao + verificaexpressaofinal('+' + substituifuncoestrigonometricas(eq[contadorverificacaoexpressao]) + '+0');
        eq[contadorverificacaoexpressao] = eq[contadorverificacaoexpressao] + '+0';
        contadorverificacaoexpressao = contadorverificacaoexpressao + 1;
    }
    if (resultadofinalverificacaoexpressao < 1) {
        var tempofinal = new Date() - tempoinicio;
        try {
            variavelretorna = "{\n\t" + "'Equation-solution':{\n\t" + resolveequacao() + "\n\t}\n\t'Processing-info':{\n\t\t{'Processing-time':'" + (new Date() - tempoinicio) + "ms'},\n\t\t{'Numerical-method':'Newton-Raphson'}\n\t}\n}";
            if (convergenciafinalissimo != "0") {
                valorvariaveis = valoresvariaveisentrada;
                // resolveequacaochamadafuncaoc();

            }

        } catch (err) {
            variavelretorna = "Error!! Check equation for typos. Error code:2";

        }
    }

    if (resultadofinalverificacaoexpressao > 0) {
        variavelretorna = "Error!! Check equation for typos.";
    }



}
resolveequacaochamadafuncao();
