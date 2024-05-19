import { Switch } from '@headlessui/react'
import { useState } from 'react'

interface BasicSwitchProps {
  onToggle: (value: boolean) => void;
}

export function BasicSwitch({ onToggle }: BasicSwitchProps) {
  const [enabled, setEnabled] = useState(false)

  const handleToggle = (value: boolean) => {
    setEnabled(value);
    onToggle(value);
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-stone-600 transition data-[checked]:bg-stone-200"
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
  )
}
