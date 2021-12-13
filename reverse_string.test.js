const reverseString = require('./task/task_01');

// test(
//     'Проверяем реверс строки',
//     () => {
//         expect(reverseString('hello www')).toBe('www olleh');
//     }
// );
// test(
//     'Проверяем реверс строки',
//     () => {
//         expect(reverseString('blin ha')).toBe('ah nilb');
//     }
// );

describe(
    "Моя проверка",
    () => {
        const testCases = [
            {
              inString: 'hello',
              expected: 'olleh'
            },
            {
              inString: 'blin ha',
              expected: 'ah nilb'
            },
            {
              inString: 'Привет как дела?',
              expected: '?алед как тевирП'
            }
        ];
        testCases.forEach(test => {
            it (
                `Входящая строка : ${test.inString} ожидаю: ${test.expected}`,
                () => {
                    const res = reverseString(test.inString);
                    expect(res).toBe(test.expected);
                } 
            );
        });
    }
    );
