import Wrapper from '@/components/Wapper'
import App from '@/pages/App'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'

render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById('root')
)
