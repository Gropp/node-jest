
describe('Users Controller', () => {
    it('Deve somar 1 + 2', () => {
        //Arrange - montar o cenario a ser testado
        function soma (a, b) {
            return a + b
        }
        //Acao - chamar o cenario
        const resultado = soma(1,2)

        //Assert - validar os resultados
        expect(resultado).toBe(3)
    })
})