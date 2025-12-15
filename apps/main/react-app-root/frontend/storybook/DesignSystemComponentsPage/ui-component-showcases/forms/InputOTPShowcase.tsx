/**
 * InputOTP Showcase
 * OTP verification: 4-digit, 6-digit, error state
 */

import { InputOTP, InputOTPGroup, InputOTPSlot } from '../../../../ui-components/InputOtp'

export function InputOTPShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* 4 digits */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">4 digits</div>
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      
      {/* 6 digits */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">6 digits</div>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  )
}

