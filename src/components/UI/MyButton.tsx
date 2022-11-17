import React, {ReactNode} from 'react'

interface ByttonProps{
  children: ReactNode,
  onFetch: () => void
}

const MyButton: React.FC<ByttonProps> = ({children, onFetch}) => {
  return (
    <>
      <button onClick={() => onFetch()}>{children}</button>
    </>
)}


export default MyButton;