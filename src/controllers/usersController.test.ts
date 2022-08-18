
describe('Users Controller', () => {
    it('Deve somar 1 + 1', () => {
        //Arrange - montar o cenario a ser testado
        function soma (a: number, b: number) {
            return a + b
        }
        //Acao - chamar o cenario
        const resultado = soma(1,2)

        //Assert - validar os resultados
        expect(resultado).toBe(3)
    })
})