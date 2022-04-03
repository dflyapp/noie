import styled from 'styled-components'

const Menu = styled.ul`
  li {
    padding: 0 1rem;
    cursor: pointer;
    font-size: 0.6rem;
    &:hover {
      opacity: 0.5;
    }
  }
`

export default function Header() {
  return (
    <header className="fixed top-0 w-full left-0 py-8 z-10 px-2 flex justify-between items-center bg-primary">
      <div>
        <a className='text-white'>NOIE</a>
      </div>
      <div>
        <Menu className='text-white flex uppercase'>
          <li>giới thiệu</li>
          <li>dịch vụ</li>
          <li>dự án</li>
          <li>câu chuyện</li>
          <li>liên hệ</li>
        </Menu>
      </div>
      <div>
        <a className='uppercase text-white'>+ brief</a>
      </div>
    </header>
  )
}