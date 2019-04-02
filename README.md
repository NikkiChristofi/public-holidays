
# holidays-public

Gets public holidays within specified timeframes

  

## How to use

1. install package

       npm install holidays-public

	or

       yarn add holidays-public


2. require in code

       import getPublicHolidays from 'holidays-public'

	or

	   const { getPublicHolidays } = require('holidays-public)

  

3. call getPublicHolidays with the specified params - dateRange and region

  

### Param 1: dateRange (object)

dateRange is an object with the keys 'start' and 'end'. The values should be a string with the format 'YYYY-MM-DD'

i.e. { start: '2019-08-11', end: '2019-08-18' }

If no date range is supplied, the next public holiday from today will be returned.

If the date range object does not contain a start AND end key, an empty array will be returned.

  

### Param 2: region

region is a string. Valid regions are 'england-and-wales', 'scotland' and 'northern-ireland'. If no daterange is supplied it will default to england-and-wales.

If an invalid region is requested an empty array will be returned.

  

## Examples

1. Get next public holiday (england-and-wales)

	   const holidays = getPublicHolidays()

  

2. Get next public holiday for Scotland

       const holidays = getPublicHolidays(null, 'scotland')

  

3. Get public holidays in August 2019

       const holidays = getPublicHolidays({ start: '2019-08-01', end: '2019-08-31' }, 'northern-ireland')

	or without region (defaults to england-and-wales)

       const holidays = getPublicHolidays({ start: '2019-08-01', end: '2019-08-31' })