<?php
// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os valores do formulário
    $NOME = $_POST["NOME"];
    $SENHA = strval($_POST["SENHA"]);


    // Configurações do banco de dados
    $firebirdHost = 'localhost/3050';
    $firebirdDatabase = 'C:\DADOS\ATHENAS.FDB';
    $firebirdUsername = 'SYSDBA';
    $firebirdPassword = 'masterkey';

    // Conexão com o banco de dados Firebird
    try {
        $conn = new PDO("firebird:dbname=$firebirdHost:$firebirdDatabase", $firebirdUsername, $firebirdPassword);
    } catch (PDOException $e) {
        die("Falha na conexão com o banco de dados: " . $e->getMessage());
    }
    // Depuração - Verificar valores obtidos do formulário
    var_dump($NOME);
    var_dump($SENHA);

    // Consulta SQL para verificar as credenciais
    
    $sql = "SELECT * FROM USUARIOS WHERE TRIM(NOME) = :NOME AND TRIM(SENHA) = :SENHA";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':NOME', $NOME);
    $stmt->bindParam(':SENHA', $SENHA); // Remover o parâmetro PDO::PARAM_INT
    $stmt->execute();
    $stmt->execute();
    $resultado = $stmt->fetchAll();
    
    // Verifica se a consulta retornou algum resultado
    if ($stmt->rowCount() > 0) {
        // Credenciais válidas, redireciona para a página desejada
        header("Location: index.html");
        exit();
    } else {
        // Credenciais inválidas, exibe uma mensagem de erro
        echo "Credenciais inválidas. Por favor, tente novamente.";
    }

    $conn = null;
}
?>