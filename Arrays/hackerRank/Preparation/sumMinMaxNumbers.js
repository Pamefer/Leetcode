// const sumMinMax=(arr)=>{
//     arr.sort((a,b)=>a-b)
//     console.log(arr.slice(0,4))
//     let size=arr.length;
//     const min=arr.slice(0,4).reduce((partialSum, num)=>{
//         console.log("==",partialSum,"--",num)
//         return partialSum+num;
//     } );
//     const max=arr.slice(size-4,size).reduce((partialSum,num)=>partialSum+num);
//     console.log(min)
//     console.log(max)
//     return [min, max];
// }
// sumMinMax([3,2,5,6,1,7,9,10]);
/**
 * Computes the monthly charge for a given subscription.
 *
 * @returns {number} The total monthly bill for the customer in cents, rounded
 * to the nearest cent. For example, a bill of $20.00 should return 2000.
 * If there are no active users or the subscription is null, returns 0.
 *
 * @param {string} month - Always present
 *   Has the following structure:
 *   "2022-04"  // April 2022 in YYYY-MM format
 *
 * @param {object} subscription - May be null
 *   If present, has the following structure:
 *   {
 *     'id': 763,
 *     'customerId': 328,
 *     'monthlyPriceInCents': 359  // price per active user per month
 *   }
 *
 * @param {array} users - May be empty, but not null
 *   Has the following structure:
 *   [
 *     {
 *       'id': 1,
 *       'name': "Employee #1",
 *       'customerId': 1,
 *   
 *       // when this user started
 *       'activatedOn': new Date("2021-11-04"),
 *   
 *       // last day to bill for user
 *       // should bill up to and including this date
 *       // since user had some access on this date
 *       'deactivatedOn': new Date("2022-04-10")
 *     },
 *     {
 *       'id': 2,
 *       'name': "Employee #2",
 *       'customerId': 1,
 *   
 *       // when this user started
 *       'activatedOn': new Date("2021-12-04"),
 *   
 *       // hasn't been deactivated yet
 *       'deactivatedOn': null
 *     },
 *   ]
 */
const monthlyCharge = (month, subscription, users) => {
    const numUsers = users.length;
    const actualMonthDate = new Date(month);
    if (numUsers === 0) return 0;
    for (let i = 0; i < numUsers; i++) {
        let activatedDate = new Date(users[i].activatedOn);
        let deactivatedOn = new Date(users[i].deactivatedOn);

        if (activatedDate < actualMonthDate) {
            console.log("active")
            if (users[i].customerId === subscription.id) {
                const lastDayOfTheMonth = lastDayOfMonth(actualMonthDate);
                console.log("---", lastDayOfTheMonth)
                const firstDayOfTheMonth = firstDayOfMonth(actualMonthDate);
                const dailyPriceInCents = subscription.monthlyPriceInCents / 30;
                let getLastDayOfBilling = deactivatedOn < lastDayOfTheMonth ? deactivatedOn : lastDayOfTheMonth;
                let restDays = getLastDayOfBilling - firstDayOfTheMonth; // need to conbert in numbers
                let calculateAllPriceForTheMonth = restDays * dailyPriceInCents;
                console.log(restDays)
                return calculateAllPriceForTheMonth;
            }

        } else {
            console.log("no actve")
            return 0;
        }
    }
}

const users = [
    {
        id: 1,
        name: 'Employee #1',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
    },
    {
        id: 2,
        name: 'Employee #2',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
    },
];

const plan = {
    id: 1,
    customerId: 1,
    monthlyPriceInCents: 5000,
};
monthlyCharge('2020-10', plan, users)

// describe('monthlyCharge', function () {
//     it('works when no users are active', function () {
//         assert.equal(monthlyCharge('2018-10', plan, users), 0);
//     });

//     it('works when the active users are active the entire month', function () {
//         const expectedUserCount = 2;
//         assert.closeTo(monthlyCharge('2020-12', plan, users), expectedUserCount * 5000, 1);
//     });
// });

/*******************
* Helper functions *
*******************/

/**
 * Takes a Date instance and returns a Date which is the first day
 * of that month. For example:
 *
 * firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)
 *
 * Input type: Date
 * Output type: Date
**/
function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
 * Takes a Date object and returns a Date which is the last day of that month.
 *
 * lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)
 *
 * Input type: Date
 * Output type: Date
**/
function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/**
 * Takes a Date object and returns a Date which is the next day.
 * For example:
 *
 * nextDay(new Date(2022, 3, 17))  // => new Date(2022, 3, 18)
 * nextDay(new Date(2022, 3, 31))  // => new Date(2022, 4, 1)
 *
 * Input type: Date
 * Output type: Date
**/
function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}