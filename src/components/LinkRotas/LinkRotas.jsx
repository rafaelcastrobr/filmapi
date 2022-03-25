

import { Link } from "react-router-dom"
import { Div } from './style'


export default () => {
  return (
    <Div>
      <Link to={'/'}><button>Melhores</button></Link>
      <Link to={'/popular/'}><button>Popular</button></Link>
      <Link to={'/recentes/'}><button>No Cinema</button></Link>
    </Div>
  )
}
