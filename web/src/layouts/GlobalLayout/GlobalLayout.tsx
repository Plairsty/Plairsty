import { ReactChild, ReactChildren } from 'react'

import Navigation from 'src/components/Navigation/Navigation'
interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
}

const GlobalLayout = ({ children }: AuxProps): JSX.Element => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  )
}

export default GlobalLayout
