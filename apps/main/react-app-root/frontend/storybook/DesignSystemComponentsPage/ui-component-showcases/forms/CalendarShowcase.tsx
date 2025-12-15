/**
 * Calendar Showcase
 * Calendar: single date selection, date range selection, disabled dates
 */

import { Calendar } from '../../../../ui-components/Calendar'

export function CalendarShowcase() {
  return (
    <div className="w-full flex justify-center">
      <Calendar mode="single" className="rounded-md border" />
    </div>
  )
}

