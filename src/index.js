import React from 'react'

export default function useScrolledPast(ref) {
  const [isScrolledPast, setIsScrolledPast] = React.useState(null)

  React.useEffect(() => {
    const checkIfScrolledPast = () => {
      setIsScrolledPast(ref.current.getBoundingClientRect().y <= 0)
    }

    window.addEventListener('scroll', checkIfScrolledPast)
    return () => window.removeEventListener('scroll', checkIfScrolledPast)
  }, [ref])

  return isScrolledPast
}
