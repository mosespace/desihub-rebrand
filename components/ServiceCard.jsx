import React from 'react'
import Link from 'next/link'

export default function ServiceCard({ icon, title, description, path }) {
  return (
    <Link
      href={path}
      className="rounded-md border border-secondary bg-primary p-8 text-center shadow dark:border-neutral-800 dark:bg-neutral-900/50"
    >
      <div
        className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
        style={{
          backgroundImage:
            'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
          borderColor: 'rgb(93, 79, 240)'
        }}
      >
        {icon}
      </div>
      <h3 className="mt-6 text-gray-400">{title}</h3>
      <p className="my-4 mb-0 line-clamp-3 font-normal leading-relaxed tracking-wide text-gray-400">
        {description}
      </p>
    </Link>
  )
}
