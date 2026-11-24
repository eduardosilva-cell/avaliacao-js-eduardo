Respostas do trabalho - Eduardo Machado

**1** - D

**2** - C

**3** - B

**4** - C

**5** - A

**6** - D

**7** - A

**8** - B

**9** - A

**10** - A

**11** - C

**12** - D

**13** - 

Saída no console:

104.97 Frete grátis

81

O resultado da ultima linha será o operador \*\*, que calcula 2 elevado a 3, e o + ao encontrar string "1" concatena o texto em vez de soma numérica, produzindo "81".

**14** - 

let cpf = "123.321.100-54"

let digitos = cpf.replaceAll(".", "").replace("-", "")

let dv = cpf.split("-")\[1]

console.log(digitos) // 12332110054

console.log(dv) // 54

**15** - C

**16** - B

**17** - D

**18** - A

**19** - C

**20** - B

**21** - 

(1) init - Cria o repositório local

(2) add . - Prepara todos os arquivos (staging)

(3) commit -m - Primeiro commit

(4) branch -M main - Renomeia o branch atual para main

(5) remote add origin - Liga o repositório local ao GitHub

(6) push -u origin main - Envia os commits e define o upstream

**22** - 

um commit é um registro é uma “foto” dos arquivos preparados, guardado no histórico do repositório com um hash, autor, data e uma mensagem que descreve a mudança. Permite voltar a outras versões, compreendendo a evolução.

Duas mensagens de commit: 

1 - "Cria página principal com formulário do pedido"

2 - "Adiciona estrutura HTML e campos de entrada do pedido"



