const tipoCadastro = document.getElementById('tipoCadastro');
const camposDinamicos = document.getElementById('camposDinamicos');


tipoCadastro.addEventListener('change', () => {
    const tipo = tipoCadastro.value;
    camposDinamicos.innerHTML = ''; 

    if (tipo === 'aluno') {
        camposDinamicos.innerHTML = `
            <div class="form-group">
                <label for="matricula">Número de Matrícula:</label>
                <input type="text" id="matricula" name="matricula" required>
            </div>
            <div class="form-group">
                <label for="curso">Curso:</label>
                <input type="text" id="curso" name="curso" required>
            </div>
        `;
    } else if (tipo === 'professor') {
        camposDinamicos.innerHTML = `
            <div class="form-group">
                <label for="disciplina">Disciplina Ministrada:</label>
                <input type="text" id="disciplina" name="disciplina" required>
            </div>
            <div class="form-group">
                <label for="salario">Salário:</label>
                <input type="number" id="salario" name="salario" required>
            </div>
        `;
    } else if (tipo === 'fornecedor') {
        camposDinamicos.innerHTML = `
            <div class="form-group">
                <label for="cnpj">CNPJ:</label>
                <input type="text" id="cnpj" name="cnpj" required>
            </div>
            <div class="form-group">
                <label for="produto">Produto Fornecido:</label>
                <input type="text" id="produto" name="produto" required>
            </div>
        `;
    } else if (tipo === 'pessoaFisica') {
        camposDinamicos.innerHTML = `
            <div class="form-group">
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required>
            </div>
            <div class="form-group">
                <label for="dataNascimento">Data de Nascimento:</label>
                <input type="date" id="dataNascimento" name="dataNascimento" required>
            </div>
        `;
    } else if (tipo === 'pessoaJuridica') {
        camposDinamicos.innerHTML = `
            <div class="form-group">
                <label for="cnpj">CNPJ:</label>
                <input type="text" id="cnpj" name="cnpj" required>
            </div>
            <div class="form-group">
                <label for="razaoSocial">Razão Social:</label>
                <input type="text" id="razaoSocial" name="razaoSocial" required>
            </div>
        `;
    }
});

const cadastroForm = document.getElementById('cadastroForm');
cadastroForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio tradicional
    const formData = new FormData(cadastroForm); // Coleta os dados do formulário

    try {
        const response = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json(); // Se o backend retornar JSON
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Erro ao cadastrar. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro no envio:', error);
        alert('Ocorreu um erro ao conectar ao servidor.');
    }
});
