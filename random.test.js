const randomInt = require('./task/task_03');

describe("Тестируем случайное число", () => {
    const testCases = [
        {
          from : 10,
          to : 100, 
        },
        {
          from : 2000,
          to : 3000, 
        }
      ];

      testCases.forEach(test => {
          it(
            `from : ${test.from} to: ${test.to}`,
            ()=>{
                const res = randomInt(test.from, test.to);
                console.log(res);
                expect(res).toBeGreaterThanOrEqual(test.from);
                expect(res).toBeLessThanOrEqual(test.to);
            }
          );
      });


});