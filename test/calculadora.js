var controller = require('../controllers/calculadora.js')();

describe('Calculadora', function() {
    describe('Testa se as operações-núcleo funcionam corretamente.', function () {
        describe('Somar', function () {
            it('Deveria retornar 5 quando for passado 1 e 4.', function () {
                var numero1 = 1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.somar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(5);
            });

            it('Deveria retornar -3 quando for passado 1 e -4.', function () {
                var numero1 = 1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.somar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-3);
            });

            it('Deveria retornar 3 quando for passado -1 e 4.', function () {
                var numero1 = -1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.somar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(3);
            });

            it('Deveria retornar -5 quando for passado -1 e -4.', function () {
                var numero1 = -1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.somar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-5);
            });
        });

        describe('Subtrair', function () {
            it('Deveria retornar 2 quando for passado 2 e 0.', function () {
                var numero1 = 2;
                var numero2 = 0;

                var resultado = controller.utils.calculos.subtrair(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(2);
            });
            it('Deveria retornar 1 quando for passado 4 e 3.', function () {
                var numero1 = 4;
                var numero2 = 3;

                var resultado = controller.utils.calculos.subtrair(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(1);
            });

        });

        describe('Multiplicar', function () {
            it('Deveria retornar 4 quando for passado 1 e 4.', function () {
                var numero1 = 1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.multiplicar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(4);
            });

            it('Deveria retornar -4 quando for passado -1 e 4.', function () {
                var numero1 = -1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.multiplicar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-4);
            });

            it('Deveria retornar -4 quando for passado 1 e -4.', function () {
                var numero1 = 1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.multiplicar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-4);
            });

            it('Deveria retornar 4 quando for passado -1 e -4.', function () {
                var numero1 = -1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.multiplicar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(4);
            });
        });

        describe('Dividir', function () {
            it('Deveria retornar 0.25 quando for passado 1 e 4.', function () {
                var numero1 = 1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.dividir(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(0.25);
            });

            it('Deveria retornar -0.25 quando for passado -1 e 4.', function () {
                var numero1 = -1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.dividir(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-0.25);
            });

            it('Deveria retornar -0.25 quando for passado 1 e -4.', function () {
                var numero1 = 1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.dividir(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-0.25);
            });

            it('Deveria retornar 0.25 quando for passado -1 e -4.', function () {
                var numero1 = -1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.dividir(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(0.25);
            });
        });
    });

    describe('Testa se a função calcular funciona.', function () {
        describe('Somar', function () {
            it('Deveria retornar 5 quando somar 1 e 4.', function () {
                var parametros = {
                    numero1: 1,
                    numero2: 4,
                    operacao: 'somar'
                };

                var resultado = controller.utils.calculos.calcular(parametros);

                resultado.should.be.a.Number;
                resultado.should.be.equal(5);
            });
        });



        describe('SomarMultaLivro1apos30dias', function() {
            it('Deveria retornar 30 quando for passado 1.', function() {
                var numero1 = 1;

                var resultado = controller.utils.calculos.somarMultaLivro1apos30dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(30);
            });

        });

        describe('SomarMultaLivro2apos30dias', function() {
            it('Deveria retornar 30 quando for passado 1.', function() {
                var numero1 = 1;

                var resultado = controller.utils.calculos.somarMultaLivro2apos30dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(30);
            });

        });

        describe('SomarMultaLivro3apos30dias', function() {
            it('Deveria retornar 30 quando for passado 1.', function() {
                var numero1 = 1;

                var resultado = controller.utils.calculos.somarMultaLivro3apos30dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(30);
            });

        });

        describe('SomarMultaLivro4apos30dias', function() {
            it('Deveria retornar 30 quando for passado 1.', function() {
                var numero1 = 1;

                var resultado = controller.utils.calculos.somarMultaLivro4apos30dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(30);
            });

        });

        describe('SomarMultaLivro5apos30dias', function() {
            it('Deveria retornar 30 quando for passado 1.', function() {
                var numero1 = 1;

                var resultado = controller.utils.calculos.somarMultaLivro5apos30dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(30);
            });

        });

        describe('SomarMultaLivro6apos30dias', function() {
            it('Deveria retornar 30 quando for passado 1.', function() {
                var numero1 = 1;

                var resultado = controller.utils.calculos.somarMultaLivro6apos30dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(30);
            });

        });

        describe('SomarMais10.', function () {
            describe('Somar', function () {
                it('Deveria retornar 12 quando passado 1 e 1.', function () {
                     var numero1 = 1;
                     var numero2 = 1;

                    var resultado = controller.utils.calculos.somarMais10(numero1,numero2);

                    resultado.should.be.a.Number;
                    resultado.should.be.equal(12);
                });
            });



            describe('SomarProdutos.', function () {
                describe('Somar', function () {
                    it('Deveria retornar 5 quando passado 1 e 1 e 1 e 1 e 1.', function () {
                        var numero1 = 1;
                        var numero2 = 1;
                        var numero3 = 1;
                        var numero4 = 1;
                        var numero5 = 1;

                        var resultado = controller.utils.calculos.SomarProdutos(numero1,numero2,numero3,numero4,numero5);

                        resultado.should.be.a.Number;
                        resultado.should.be.equal(5);
                    });
                });
            });



        describe('Subtrair', function () {

        });

        describe('Multiplicar', function () {
            it('Deveria retornar 4 quando multiplicar 1 por 4.', function () {
                var parametros = {
                    numero1: 1,
                    numero2: 4,
                    operacao: 'multiplicar'
                };

                var resultado = controller.utils.calculos.calcular(parametros);

                resultado.should.be.a.Number;
                resultado.should.be.equal(4);
            });
        });

        describe('Dividir', function () {
            it('Deveria retornar 0.25 quando dividir 1 por 4.', function () {
                var parametros = {
                    numero1: 1,
                    numero2: 4,
                    operacao: 'dividir'
                };

                var resultado = controller.utils.calculos.calcular(parametros);

                resultado.should.be.a.Number;
                resultado.should.be.equal(0.25);
            });
        });
    });

    describe('Testa se as funções utilitárias funcionam.', function () {
        describe('Controller.utils.formatarResposta()', function () {
            it('Deveria retornar 1,56 quando passado 1.55555558.', function () {
                var resultado = 1.55555558;
                var formatado = controller.utils.formatarResposta(resultado);

                formatado.should.be.an.Object;
                formatado.should.have.property('resultado');
                formatado.resultado.should.be.equal('1,56');
            });

                it('Deveria retornar 0,00 quando passado undefined.', function () {
                    var resultado = undefined;
                    var formatado = controller.utils.formatarResposta(resultado);

                    formatado.should.be.an.Object;
                    formatado.should.have.property('resultado');
                formatado.resultado.should.be.equal('0,00');
            });
        });
});
    });});



