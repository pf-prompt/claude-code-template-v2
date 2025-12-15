import { RouteConfig } from '../infra/router/routeRegistry'
import { state, computed } from 'ccstate'
import { useGet, useSet } from 'ccstate-react'
import { Button } from '../ui-components/Button'

// State management
const display$ = state('0')
const previousValue$ = state<number | null>(null)
const operation$ = state<'+' | '-' | '*' | '/' | null>(null)
const waitingForNewValue$ = state(false)

const currentDisplay$ = computed((get) => {
  return get(calculatorPageState.display$)
})

export const calculatorPageState = {
  display$,
  previousValue$,
  operation$,
  waitingForNewValue$,
  currentDisplay$,
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CalculatorParamsType {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Calculator(_params: CalculatorParamsType) {
  const display = useGet(calculatorPageState.display$)
  const setDisplay = useSet(calculatorPageState.display$)
  const previousValue = useGet(calculatorPageState.previousValue$)
  const setPreviousValue = useSet(calculatorPageState.previousValue$)
  const operation = useGet(calculatorPageState.operation$)
  const setOperation = useSet(calculatorPageState.operation$)
  const waitingForNewValue = useGet(calculatorPageState.waitingForNewValue$)
  const setWaitingForNewValue = useSet(calculatorPageState.waitingForNewValue$)

  // Handle number input
  const handleNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num)
      setWaitingForNewValue(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  // Handle decimal point
  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.')
      setWaitingForNewValue(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  // Handle operation
  const handleOperation = (op: '+' | '-' | '*' | '/') => {
    const currentValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(result)
    }

    setOperation(op)
    setWaitingForNewValue(true)
  }

  // Calculate result
  const calculate = (prev: number, current: number, op: '+' | '-' | '*' | '/') => {
    switch (op) {
      case '+':
        return prev + current
      case '-':
        return prev - current
      case '*':
        return prev * current
      case '/':
        return current !== 0 ? prev / current : 0
      default:
        return current
    }
  }

  // Handle equals
  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display)
      const result = calculate(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  // Handle clear
  const handleClear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  // Handle delete
  const handleDelete = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
    }
  }

  return (
    <div className="font-default bg-background text-foreground min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Calculator container */}
        <div className="bg-card text-card-foreground rounded-2xl shadow-2xl overflow-hidden border border-border">
          {/* Display */}
          <div className="bg-muted/30 p-8 pt-[calc(2rem+var(--safe-area-inset-top))]">
            <div className="text-right">
              <div className="text-5xl font-bold text-foreground break-all min-h-[3.5rem] flex items-center justify-end">
                {display}
              </div>
            </div>
          </div>

          {/* Button grid */}
          <div className="p-6 pb-[calc(1.5rem+var(--safe-area-inset-bottom))]">
            {/* Function buttons row */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <Button
                variant="secondary"
                className="h-16 text-xl font-semibold"
                onClick={handleClear}
              >
                C
              </Button>
              <Button
                variant="secondary"
                className="h-16 text-xl font-semibold"
                onClick={handleDelete}
              >
                DEL
              </Button>
            </div>

            {/* Main button grid */}
            <div className="grid grid-cols-4 gap-3">
              {/* Row 1: 7, 8, 9, ÷ */}
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={() => handleNumber('7')}
              >
                7
              </Button>
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={() => handleNumber('8')}
              >
                8
              </Button>
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={() => handleNumber('9')}
              >
                9
              </Button>
              <Button
                variant="secondary"
                className="h-16 text-xl font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => handleOperation('/')}
              >
                ÷
              </Button>

              {/* Row 2: 4, 5, 6, × */}
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={() => handleNumber('4')}
              >
                4
              </Button>
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={() => handleNumber('5')}
              >
                5
              </Button>
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={() => handleNumber('6')}
              >
                6
              </Button>
              <Button
                variant="secondary"
                className="h-16 text-xl font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => handleOperation('*')}
              >
                ×
              </Button>

              {/* Row 3: 1, 2, 3, - */}
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={() => handleNumber('1')}
              >
                1
              </Button>
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={() => handleNumber('2')}
              >
                2
              </Button>
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={() => handleNumber('3')}
              >
                3
              </Button>
              <Button
                variant="secondary"
                className="h-16 text-xl font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => handleOperation('-')}
              >
                -
              </Button>

              {/* Row 4: 0, ., =, + */}
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={() => handleNumber('0')}
              >
                0
              </Button>
              <Button
                variant="outline"
                className="h-16 text-xl font-semibold"
                onClick={handleDecimal}
              >
                .
              </Button>
              <Button
                variant="default"
                className="h-16 text-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleEquals}
              >
                =
              </Button>
              <Button
                variant="secondary"
                className="h-16 text-xl font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => handleOperation('+')}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const CalculatorRoute: RouteConfig = {
  path: '/',
  viewFactory: (routeParams: Record<string, unknown>) => (
    <Calculator {...(routeParams as unknown as CalculatorParamsType)} />
  ),
}
