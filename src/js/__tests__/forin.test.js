import { obj, listSorted, orderByProps } from "../forin";

test("Проверка функции orderByProps", () => {
    const result = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 }
    ]

    expect(orderByProps(obj, listSorted)).toEqual(result);
});