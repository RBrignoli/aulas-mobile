export const soma = (number1, number2, setResultado, onChangeNumber1, onChangeNumber2) => {
    setResultado(Number(number1) + Number(number2));
    onChangeNumber1('');
    onChangeNumber2('');
    return true;
};

export const diminui = (number1, number2, setResultado, onChangeNumber1, onChangeNumber2) => {
    setResultado(Number(number1) - Number(number2));
    onChangeNumber1('');
    onChangeNumber2('');
    return true;
};

export const multiplica = (number1, number2, setResultado, onChangeNumber1, onChangeNumber2) => {
    setResultado(Number(number1) * Number(number2));
    onChangeNumber1('');
    onChangeNumber2('');
    return true;
};

export const divide = (number1, number2, setResultado, onChangeNumber1, onChangeNumber2) => {
    setResultado(Number(number1) / Number(number2));
    onChangeNumber1('');
    onChangeNumber2('');
    return true;
};
