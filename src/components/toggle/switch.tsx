import { Switch } from '@headlessui/react'
import { useEffect, useRef, useState } from 'react'

let allTabs = [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "blog",
      name: "Blog",
    },
    {
      id: "projects",
      name: "Projects",
    },
    {
      id: "arts",
      name: "Arts",
    },
  ];


export function BasicSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-stone-600 transition data-[checked]:bg-stone-200"
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      {/* <p>prog</p> */}
    </Switch>
  )
};

