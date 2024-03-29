import { Link } from 'react-router-dom'

function HeaderItem({ name, Icon, link }) {
  return (
    <Link to={link}>
      <div
        className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline
                    underline-offset-8 mb-2 transition-all duration-500 ease-in-out '
      >
        <Icon />
        <h2>{name}</h2>
      </div>
    </Link>
  )
}

export default HeaderItem
