const form = document.getElementById('form-pedido')
const erro = document.getElementById('erro')
const resultado = document.getElementById('resultado')
form.addEventListener('submit', function (evento) {
evento.preventDefault()
// 1. Ler e limpar os campos
let cliente = document.getElementById('cliente').value.trim().toUpperCase()
let cpf = document.getElementById('cpf').value.trim()
let produto = document.getElementById('produto').value.trim()
let precoTexto = document.getElementById('preco').value.trim()
let quantidade = Number(document.getElementById('quantidade').value)
// 2. Validar
erro.textContent = ''
resultado.innerHTML = ''
if (cliente === '' || produto === '' || precoTexto === '') {
erro.textContent = 'Preencha todos os campos.'
return
}
if (cpf.length !== 14 || !cpf.includes('-')) {
erro.textContent = 'CPF inválido. Use o formato 000.000.000-00.'
return
}
if (quantidade <= 0) {
erro.textContent = 'A quantidade deve ser maior que zero.'
return
}
// 3. Converter o preço "R$ 34,99" -> 34.99
let partes = precoTexto.split(' ')
let preco = parseFloat(partes[1].replace(',', '.'))
// 4. Calcular
let subtotal = preco * quantidade
let desconto = quantidade >= 10 ? subtotal * 0.10 : 0
let total = subtotal - desconto
let frete = total >= 200 ? 0 : 15
let totalPagar = total + frete
// 5. Datas
let hoje = new Date()
let vencimento = new Date(hoje)
vencimento.setDate(vencimento.getDate() + 30)
// 6. Mostrar
resultado.innerHTML = `
<h2>Pedido gerado</h2>
<p><strong>Cliente:</strong> ${cliente}</p>
<p><strong>CPF:</strong> ${cpf}</p>
<p><strong>Produto:</strong> ${produto} (${quantidade} un.)</p>
<p><strong>Subtotal:</strong> ${formatar(subtotal)}</p>
<p><strong>Desconto:</strong> ${formatar(desconto)}</p>
<p><strong>Frete:</strong> ${frete === 0 ? 'Grátis' : formatar(frete)}</p>
<p><strong>Total a pagar:</strong> ${formatar(totalPagar)}</p>
<p><strong>Emissão:</strong> ${hoje.toLocaleDateString('pt-BR')}</p>
<p><strong>Vencimento:</strong> ${vencimento.toLocaleDateString('pt-BR')}</p>
`
})
function formatar(valor) {
return 'R$ ' + valor.toFixed(2).replace('.', ',')
}