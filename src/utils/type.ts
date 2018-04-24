const toString = (val: any): string => Object.prototype.toString.call(val);

const isTypeFactory = (type: string): Function => (val: any): boolean =>
    toString(val).replace(/.*\s(.*)]$/, '$1') === type;

const $type = {
    isNumber: (val: any): boolean =>
        toString(val).replace(/.*\s(.*)]$/, '$1') === 'Number' && !isNaN(val),
    isFunction: isTypeFactory('Function'),
    isObject: isTypeFactory('Object'),
    isArray: isTypeFactory('Array'),
    isString: isTypeFactory('String'),
    isRegExp: isTypeFactory('RegExp'),
    isNull: isTypeFactory('Null'),
    isUndefined: isTypeFactory('Undefined'),
    isBoolean: isTypeFactory('Boolean'),
    isSymbol: isTypeFactory('Symbol'),
    isDate: isTypeFactory('Date'),
    getType: (val: any): string => toString(val).replace(/.*\s(.*)]$/, '$1')
};

export default $type;
