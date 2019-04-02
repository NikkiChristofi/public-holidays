
import moment from 'moment'
import BankHolidays from '../data/bank-holidays.json'

const validRegions = [
  'england-and-wales',
  'scotland',
  'northern-ireland'
]

export function getPublicHolidays (dateRange = null, region = 'england-and-wales') {
  const isValidRegion = validRegions.filter(validRegion => validRegion === region).length !== 0

  if (!BankHolidays || !isValidRegion || (BankHolidays && !BankHolidays[region].events)) return []

  const today = moment()

  const sortedHolidayArray = BankHolidays[region].events
    .map(holiday => convertToDate(holiday))
    .filter(holiday => holiday.date.isAfter(today))
    .sort(compareDates)

  // if no date range is provided, send the next public holiday back
  if (!dateRange) return [sortedHolidayArray.shift()]

  const { start, end } = dateRange

  if (!start || !end) return []

  return sortedHolidayArray.filter(holiday => holiday.date.isBetween(start, end))
}

function convertToDate (holiday) {
  const date = moment(holiday.date, 'YYYY-MM-DD')
  holiday.date = date
  return holiday
}

function compareDates (firstHoliday, secondHoliday) {
  if (secondHoliday.date.isBefore(firstHoliday.date)) {
    return 1
  }

  if (secondHoliday.date.isBefore(firstHoliday.date) === false) {
    return -1
  }

  return 0
}

export default getPublicHolidays
